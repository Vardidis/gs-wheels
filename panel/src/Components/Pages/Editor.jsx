import React from 'react';
import { Stack, Grid, Typography, Snackbar } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SucStories from '../Widgets/SucStories';
import Texts from '../Widgets/Texts';
import Products from '../Widgets/Products';
import Media from '../Widgets/Media';
import Messages from '../Widgets/Messages';

const Editor = () => {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarText, setSnackbarText] = useState('');     

    const menuOptions = ['Success stories', 'Κείμενα', 'Προϊόντα', 'Media', 'Μηνύματα'];
    const navOptions = ['/success-stories', '/texts', '/products', '/media', '/messages'];
    const t = [<SucStories/>, <Texts/>, <Products/>, <Messages/>, <Media/>]

    return (
        <Stack
            sx={{
                margin: '8px 16px',                               
            }}
        >
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                autoHideDuration={3000}
                open={snackbarOpen}
                onClose={()=>setSnackbarOpen(false)}
                message={snackbarText}        
            />
            <Grid container
                columnSpacing={2}
                rowSpacing={2}
            >
                {t.map((option, index) => (                    
                    <Grid item
                        className={'shady'}
                        size={{xxs: 12, md: 6}}
                        sx={{
                            bgcolor: 'white',                                
                            borderRadius: 3,
                            width: '100%',
                            height: 'fit-content'
                        }}
                    >
                        <Link
                            to={navOptions[index]}
                            style={{
                                textDecoration: 'none',
                                color: '#232323'
                            }}
                        >
                            <Stack
                                sx={{
                                    padding: 3
                                }}
                            >
                                {option}
                            </Stack>                     
                        </Link>
                    </Grid>                     
                ))}
            </Grid>
        </Stack>
    );
};

export default Editor;