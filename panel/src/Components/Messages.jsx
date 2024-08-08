import React , { useState } from "react";
import { Box, Stack, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useEffect } from "react";

const columns = [
    { id: 'name', label: 'Όνομα', minWidth: 100 },
    { id: 'tel', label: 'Τηλέφωνο', minWidth: 100 },
    { id: 'email', label: 'Email', minWidth: 100 },
    { id: 'date', label: 'Ημ/νία αποστολής', minWidth: 100, align: 'right' },
  ];
  

const Messages = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [allMessages, setAllMessages] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [unread, setUnread] = useState(0);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleClick = (text) => {
        if(selectedMessage !== text){
            setSelectedMessage(text);
        }        
    }

    const incUnread = () => {
        if(unread <= allMessages.length){            
            setUnread(unread+1);
        }
    }

    useEffect(()=>{
        fetch("http://192.168.1.13:4300/messages")
        .then(((response) => response.json()))
        .then((data) => {
            setAllMessages(data.messages);            
        });
    }, []);

    return(
        <Box sx={{  paddingLeft: 10, paddingRight: 10, marginTop: 3 }}>
            <Stack spacing={5}>     
                <Typography fontSize={24} fontWeight={600}>
                    Μηνύματα ({unread})              
                </Typography>
                <Paper>
                    {selectedMessage &&
                        <Box sx={{ padding: 3 }}>
                            {selectedMessage}
                        </Box>
                    }
                </Paper>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                            {columns.map((column, index) => (
                                <TableCell
                                key={index}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                                >
                                {column.label}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        {allMessages.length > 0
                        ? <TableBody>                            
                            {allMessages
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .reverse()
                            .map((message) => {                                
                                if(!message.read){                                    
                                    incUnread();
                                }
                                return (
                                <TableRow onClick={()=>handleClick(message.text)} hover role="checkbox" tabIndex={-1} key={message.code} sx={{ bgcolor: message.read ? 'rgb(247, 247, 247)' : 'white' }}>
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
            </Stack>
        </Box>
    );
}

export default Messages;