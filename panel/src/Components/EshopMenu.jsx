import React, { useState } from 'react';
import { Modal, Paper, Stack, Typography, Box, Button, Divider, Snackbar } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useContext } from 'react';
import { Context } from './Context';
import { Link, useNavigate } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from "axios";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const EshopMenu = (props) => {
    const {allProducts, fetchProducts} = useContext(Context);    
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleCloseModal = () => setOpenModal(false);
    const handleOpenModal = () => setOpenModal(true);
    const navigate = useNavigate();

    const handleDelete = async(e) => {                     
        handleOpenModal();                         
    }

    const deleteFunc = async() => {        
        try {
            await axios.delete(`${process.env.REACT_APP_BACKEND}/api/delete-item`, {params: {ids: props.deleteBucket}})
            .then(response => {     
                if(!response.ok){
                    setSnackbarMessage('Προέκυψε κάποιο σφάλμα. Προσπαθήστε ξανά');
                }      
                setOpen(true);
                props.setDeleteBucket([]);
                fetchProducts();
                setSnackbarMessage('Το προϊόν διαγράφηκε με επιτυχία!');
            })                                                                            
        } catch (error) {
            setSnackbarMessage('Προέκυψε κάποιο σφάλμα. Προσπαθήστε ξανά');
        }  
        setSnackbarOpen(true);
        handleCloseModal();          
    }

    return (
        <Stack
            spacing={3}
            alignItems={'end'}
        >
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
                open={snackbarOpen}
                onClose={()=>setSnackbarOpen(false)}
                message={snackbarMessage}
                autoHideDuration={3000}
            />
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
                            {`Είστε σίγουροι ότι θέλετε να διαγράψετε οριστικά ${props.deleteBucket.length} προϊόντα;`}
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
            <Stack
                direction={'row'}
                spacing={1}
                alignItems={'center'}
            >
                <Typography
                    fontSize={18}                    
                    sx={{
                        lineHeight: '100%'
                    }}
                >
                    Όλα τα προϊόντα
                </Typography>                
                <Typography>
                    ({allProducts.length})
                </Typography>                
            </Stack> 
            <Stack
                spacing={1}>                              
                <Stack
                    className={'hoverable'}
                    onClick={()=>navigate('/edit')}
                    direction={'row'}
                    justifyContent={'space-between'}
                    spacing={1}
                    sx={{
                        bgcolor: 'white',
                        borderRadius: 3,
                        padding: 2,
                        color: '#232323',
                    }}
                >                
                    <AddCircleOutlineIcon/>
                    <Typography
                        fontSize={18}
                    >
                        Προσθήκη προϊόντων
                    </Typography>                
                </Stack>              
                <Stack
                    className={props.deleteMode ? 'error-hoverable' : 'hoverable'}  
                    onClick={()=>{props.setDeleteMode(!props.deleteMode); props.setDeleteBucket([])}}
                    direction={'row'}                    
                    spacing={1}
                    sx={{
                        bgcolor: props.deleteMode ? '#ffdcdc' : 'white',
                        borderRadius: 3,
                        padding: 2,
                        color: '#232323',
                    }}
                >             
                    {props.deleteMode ? (
                        <ClearIcon/>
                    ) : (
                        <DeleteOutlineIcon/>
                    )}                       
                    <Typography
                        fontSize={18}
                    >
                        {props.deleteMode ? 'Ακύρωση' : 'Αφαίρεση προϊόντων'}
                    </Typography>                
                </Stack>     
                {(props.deleteMode && props.deleteBucket.length > 0) && (
                    <Stack
                        spacing={1}
                    >
                        <Divider/>
                        <Stack
                            className={'success-hoverable'}  
                            onClick={handleDelete}
                            direction={'row'}                    
                            spacing={1}
                            sx={{
                                bgcolor: '#eeffeb',
                                borderRadius: 3,
                                padding: 2,
                                color: '#232323',
                                border: '1px solid #e2fcdc'
                            }}
                        >                
                            <CheckIcon/>
                            <Typography
                                fontSize={18}
                            >
                                Επιβεβαίωση
                            </Typography>                
                        </Stack>     
                    </Stack>
                )}
            </Stack>            
        </Stack>
    );
};

export default EshopMenu;