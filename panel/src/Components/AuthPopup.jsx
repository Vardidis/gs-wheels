import React from 'react';
import { Stack, Box, TextField, Typography } from '@mui/material';
import { useContext } from 'react';
import { Context } from './Context';
import { useState } from 'react';

const AuthPopup = () => {
    const {login} = useContext(Context);
    const [error, setError] = useState(false);

    const submitLogin = async() => {
        const user = document.getElementById('user').value;
        const pwd = document.getElementById('pwd').value;

        const {success} = await login(user, pwd);     
        setError(!success);
    }

    return (
        <Box
            sx={{
                position: 'absolute',
                transform: 'translate(-50%, -50%)',
                left: '50%',
                top: '40%',
                width: 'fit-content'
            }}
        >
            <Stack
                spacing={2}
                sx={{
                    bgcolor: 'white',
                    padding: 5,
                    borderRadius: 3,
                    minWidth: 280
                }}
            >
                    <Typography
                        fontSize={24}
                        textAlign={'center'}
                    >
                        Σύνδεση
                    </Typography>
                    <Stack
                        spacing={1}
                    >
                        <TextField          
                            id={'user'}                 
                            label="Όνομα χρήστη"
                            sx={{                                
                                '& label.Mui-focused': {
                                    color: '#d85704', // when focused
                                },
                                '& .MuiOutlinedInput-root': {                                  
                                  '&:hover fieldset': {
                                    borderColor: '#d85704', // on hover
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: '#d85704', // on focus
                                  },
                                },
                                bgcolor: '#eeeeee',                                
                            }}
                        />
                        <TextField       
                            id={'pwd'}                  
                            type="password"
                            autoComplete="current-password"
                            label="Κωδικός πρόσβασης"
                            sx={{
                                '& label.Mui-focused': {
                                    color: '#d85704', // when focused
                                },
                                '& .MuiOutlinedInput-root': {                                 
                                  '&:hover fieldset': {
                                    borderColor: '#d85704', // on hover
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: '#d85704', // on focus
                                  },
                                },
                                bgcolor: '#eeeeee',                                
                            }}
                        />
                    </Stack>
                    {error && (
                        <Typography                        
                            sx={{
                                color: '#d85704'
                            }}
                        >
                            Λάθος όνομα/κωδικός. Δοκιμάστε πάλι.
                        </Typography>
                    )}
                    <Stack
                        className={'shady'}
                        onClick={submitLogin}
                        direction={'row'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        sx={{
                            bgcolor: '#232323',
                            color: 'white',
                            borderRadius: 3,
                            padding: '8px 24px'
                        }}
                    >
                        <Typography>
                            Επιβεβαίωση
                        </Typography>
                    </Stack>
            </Stack>
        </Box>
    );
};

export default AuthPopup;