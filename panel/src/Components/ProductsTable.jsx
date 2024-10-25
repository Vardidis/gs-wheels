import React, { useState } from "react";
import { Box, Table, Stack, Button, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Snackbar, Modal, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));

const ProductsTable = (props) => {
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const handleCloseModal = () => setOpenModal(false);
    const handleOpenModal = () => setOpenModal(true);
    const [toDelete, setToDelete] = useState(null);

    const deleteFunc = async() => {
        const id = toDelete[0];

        try {
            await axios.delete(`${process.env.REACT_APP_BACKEND}/api/delete-item`, {params: {id: id}})
            .then(response => {     
                if(!response.ok){
                    console.log('oops')
                }      
                setOpen(true);
                toDelete[1].remove();
            })                                                                            
        } catch (error) {
            console.log(error)
        }     
        handleCloseModal();          
    }

    const handleDelete = async(e, id) => {             
        setToDelete([id, e.target.parentElement.parentElement.parentElement.parentElement]);
        handleOpenModal();                         
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };

    return(
        <Box>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Paper sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: {xl: 750, lg: 550, md: 550, sm: 550, xs: 350, xxs: 325},
                    bgcolor: 'theme.light',
                    boxShadow: 24,
                    p: {xl: 4, lg: 4, md: 4, sm: 4, xs: 2, xxs: 2},
                    border: "none",
                    textAlign: "center",
                    borderRadius: 2,
                    height: 'fit-content',                
                    overflowY: 'auto' }}
                >
                    <Stack spacing={2}>
                        <Typography>
                            Είστε σίγουροι ότι θέλετε να διαγράψετε οριστικά αυτό το προϊόν;
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Stack spacing={5} direction='row'>
                                <Button variant='contained' color='error' onClick={deleteFunc}>
                                    Διαγραφη
                                </Button>
                                <Button variant='outlined' onClick={handleCloseModal}>
                                    Ακυρωση
                                </Button>
                            </Stack>
                        </Box>                        
                    </Stack>                    
                </Paper>
            </Modal>   
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Επιτυχής διαγραφή"
            />           
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Βασική εικόνα</StyledTableCell>
                        <StyledTableCell>Όνομα προϊόντος</StyledTableCell>
                        <StyledTableCell>Πρόσθετες εικόνες</StyledTableCell>
                        <StyledTableCell>Επεξεργασία</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>                    
                    {props.products.map((product) => (                    
                        <StyledTableRow key={product.id} hover sx={{ cursor: 'pointer' }}>
                            <StyledTableCell component="th" scope="row">
                                <img src={`${props.endpoint}${product.thumbnail}`} style={{ width: '75px', height: '55px', borderRadius: '5px', border: '1px solid rgb(242, 242, 242)' }}/>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Typography fontSize={16}>
                                    {product.title}
                                </Typography>
                            </StyledTableCell>                 
                            <StyledTableCell> 
                                {product.sub.map(subImg => {
                                    return <img src={`${props.endpoint}${subImg}`} key={subImg} alt='' style={{ width: '50px' }}/>
                                })}
                            </StyledTableCell>
                            <StyledTableCell>
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <Link to={`/edit/${product.id}`} style={{ textDecoration: 'none' }}>
                                        <EditIcon className='edit-icon' sx={{ color: 'black' }}/>
                                    </Link>
                                    <DeleteIcon className='edit-icon' onClick={(e)=>handleDelete(e, product.id)}/>
                                </Box>                            
                            </StyledTableCell>
                        </StyledTableRow>            
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default ProductsTable;