import React , { useState } from "react";
import '../Components.css';
import { Box, Stack, Typography, Paper, Table, TableBody, TableCell, Grid, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { useContext } from "react";
import { Context } from "../Context";
import axios from 'axios';

const columns = [
    { id: 'name', label: 'Όνομα', minWidth: 100 },
    { id: 'tel', label: 'Τηλέφωνο', minWidth: 100 },
    { id: 'email', label: 'Email', minWidth: 100 },
    { id: 'date', label: 'Ημ/νία αποστολής', minWidth: 100, align: 'right' },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    }
}));

const Messages = () => {
    const {allMessages} = useContext(Context);    
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [selectedMessage, setSelectedMessage] = useState(null);

    const countUnread = () => {
        let count = 0;
        allMessages.map(msg => {
            if(!msg.read){
                count++;
            }
        });             
        
        return count;
    }
    const unread = countUnread();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleClick = (e, mes) => {     
        if(selectedMessage !== mes.text){
            setSelectedMessage(mes);         
            e.target.parentElement.parentElement.childNodes.forEach(row => {
                row.classList.remove('selected');
                row.classList.add('table-row');
            });
            e.target.parentElement.classList.remove('table-row');
            e.target.parentElement.classList.add('selected');         
            
            axios.put(`${process.env.REACT_APP_BACKEND}/api/read-message`, {id: mes._id})
        }
    }

    return(
        <Box      
            sx={{
                padding: '0px 24px'                
            }}      
        >
            <Stack
                spacing={3} 
                alignItems={'start'}                                                  
            >
                <Box sx={{ display: 'flex'}}>
                    <Typography fontSize={18} fontWeight={600}>
                        Εισερχόμενα ( {unread}/{allMessages.length} )              
                    </Typography>
                </Box>
                <Stack
                    spacing={1}
                    sx={{                       
                        width: '100%'
                    }}          
                >
                    <Stack
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        direction={'row'}
                        sx={{                                
                            color: '#232323',                                           
                        }}
                    >
                        {columns.map((column, index) => (
                            <Typography
                                fontWeight={'bold'}
                            >
                                {column.label}
                            </Typography>
                        ))}                            
                    </Stack>          
                    <Stack                        
                    >
                        {allMessages.length > 0
                            ? <Stack
                                spacing={0.5}
                                justifyContent={'space-between'}
                                alignItems={'center'}                                                                                                  
                            >                            
                                {allMessages
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .reverse()
                                .map((message) => {                                                             
                                    return (                                        
                                        <Stack                                            
                                            direction={'row'}
                                            alignItems={'center'}
                                            justifyContent={'space-between'}
                                            onClick={(e)=>handleClick(e, message)}
                                            className='table-row'                                                                                       
                                            key={message._id}
                                            sx={{
                                                bgcolor: message.read ? 'rgb(247, 247, 247)' : 'white',
                                                cursor: 'pointer',
                                                width: '100%',
                                                padding: 2                                                
                                            }}
                                        >                               
                                            {columns.map((column) => {
                                                const value = message[column.id];                                    
                                                return (
                                                    <Typography>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                    </Typography>
                                                );
                                            })}
                                        </Stack>
                                    );
                                })}
                            </Stack>
                            : <TableBody>  
                                <Box sx={{  }}>
                                    Δεν υπάρχουν διαθέσιμα μηνύματα
                                </Box>                            
                            </TableBody>
                            }
                    </Stack>        
                </Stack>                                          
                {selectedMessage &&                    
                    <Stack
                        sx={{
                            width: '100%',
                            border: '1px solid #aaaaaa',    
                            borderRadius: 3,
                            overflow: 'hidden'                                     
                        }}
                    >
                        <Stack
                            direction='row'
                            justifyContent='space-between'
                            sx={{                                                            
                                color: '#30343f', 
                                alignItems: 'center',                                
                                bgcolor: '#f5f5f5',
                                padding: 1
                            }}
                        >
                            <Typography fontSize={16} fontWeight={600}>
                                {selectedMessage.name}
                            </Typography>
                            <Stack
                                spacing={-0.5}
                                alignItems={'end'}
                            >
                                <Typography
                                    fontSize={14}
                                    fontWeight={'bold'}
                                >
                                    {selectedMessage.date.split(' ')[0]}
                                </Typography>
                                <Typography fontSize={12}>
                                    {selectedMessage.date.split(' ')[1]}
                                </Typography>
                            </Stack>                            
                            <Stack
                                spacing={0}
                                alignItems={'end'}
                            >
                                <Typography fontSize={12}>
                                    {selectedMessage.email}
                                </Typography> 
                                <Typography fontSize={12}>
                                    {selectedMessage.tel}
                                </Typography> 
                            </Stack>                                                                    
                        </Stack>            
                        <Typography sx={{ padding: 2 }}>
                            {selectedMessage.text}
                        </Typography>
                    </Stack>                                                       
                }                   
            </Stack>
        </Box>
    );
}

export default Messages;