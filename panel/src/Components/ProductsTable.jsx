import React, { useState } from "react";
import { Box, Table, Stack, Button, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Snackbar, Modal, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { Link, useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();

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
            <Stack
                spacing={1}
                sx={{
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    padding: '8px 16px'
                }}
            >
                {props.products.map((product) => (   
                    <Stack
                        className={'shady'}
                        onClick={()=>navigate(`/edit/${product._id}`)}
                        direction={'row'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        sx={{
                            border: '1px solid #eeeeee',
                            bgcolor: '#fafafa',
                            padding: 2,
                            borderRadius: 3
                        }}
                    >
                        <Stack
                        >                            
                            <img
                                src={product.thumbnail}
                                style={{
                                    maxWidth: '80px',
                                    maxHeight: '72px',
                                    objectFit: 'cover',
                                    borderRadius: '5px',
                                    border: '1px solid rgb(242, 242, 242)'
                                }}
                            />
                            <Typography fontSize={16}>
                                {product.title}
                            </Typography>
                        </Stack>
                        <Stack
                            direction={'row'}
                            spacing={1}
                        >   
                            {product.sub.map(subImg => {
                                return (
                                    <img
                                        src={subImg}
                                        key={subImg}
                                        alt=''
                                        style={{
                                            maxWidth: '64px',
                                            maxHeight: '64px',
                                            objectFit: 'cover'
                                        }}
                                    />
                                )
                            })}
                        </Stack>  
                        <Box                            
                            sx={{
                                display: 'flex',
                                gap: 2

                            }}
                        >
                            <EditIcon className='edit-icon' sx={{ color: 'black' }}/>                            
                            <DeleteIcon className='edit-icon' onClick={(e)=>handleDelete(e, product._id)}/>
                        </Box>                                          
                    </Stack>
                ))}
            </Stack>                
        </Box>
    );
}

export default ProductsTable;