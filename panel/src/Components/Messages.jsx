import React , { useState } from "react";
import './Components.css';
import { Box, Stack, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { useContext } from "react";
import { Context } from "./Context";
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
        <Box sx={{  paddingLeft: 10, paddingRight: 10, marginTop: 3, height: '100vh' }}>
            <Stack spacing={5}>     
                <Typography fontSize={24} fontWeight={600}>
                    Μηνύματα ( {unread}/{allMessages.length} )              
                </Typography>
                <Stack direction='row' spacing={3}>                       
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                {columns.map((column, index) => (
                                    <StyledTableCell
                                        key={index}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </StyledTableCell>
                                ))}
                                </TableRow>
                            </TableHead>
                            {allMessages.length > 0
                            ? <TableBody>                            
                                {allMessages
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .reverse()
                                .map((message) => {                                                             
                                    return (                                        
                                        <TableRow onClick={(e)=>handleClick(e, message)} className='table-row' role="checkbox" tabIndex={-1} key={message._id} sx={{ bgcolor: message.read ? 'rgb(247, 247, 247)' : 'white', cursor: 'pointer' }}>                               
                                            {columns.map((column) => {
                                            const value = message[column.id];                                    
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number'
                                                    ? column.format(value)
                                                    : value}
                                                </TableCell>
                                            );
                                            })}
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                            : <TableBody>  
                                <Box sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
                                    Δεν υπάρχουν διαθέσιμα μηνύματα
                                </Box>                            
                            </TableBody>
                            }
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={allMessages.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>       
                    <Paper sx={{ width: 900, overflowY: 'auto' }}>
                        {selectedMessage &&
                            <Box>
                                <Stack>
                                    <Stack direction='row' justifyContent='space-between' sx={{ boxShadow: 2, padding: 2, bgcolor: '#30343f', color: 'white',  alignItems: 'center' }}>
                                        <Typography fontSize={14} fontWeight={600}>
                                            {selectedMessage.name}
                                        </Typography>
                                        <Typography fontSize={12}>
                                            {selectedMessage.date}
                                        </Typography>
                                        <Stack spacing={0}>
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
                            </Box>
                        }
                    </Paper>         
                </Stack>            
            </Stack>
        </Box>
    );
}

export default Messages;