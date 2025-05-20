import React from 'react';
import { Stack, Grid, Typography, TextField, Box, Snackbar } from '@mui/material';
import { useState } from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useRef } from 'react';
import axios from 'axios';
import Texts from './Texts';
import Eshop from './Eshop';
import Uploads from './Uploads';
import Messages from './Messages';

const Editor = () => {
    const [menuSelection, setMenuSelection] = useState(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarText, setSnackbarText] = useState('');
    const [hasPhoto, setHasPhoto] = useState(false);
   
    const menuOptions = ['Success stories', 'Κείμενα', 'Προϊόντα', 'Media', 'Μηνύματα'];

    const fileInputRef = useRef(null);

    const handleUpload = async(e) => {
        const file = e.target.files[0];
        const formData = new FormData();

        if(file.type !== 'image/jpeg'){
            setSnackbarText('Σφάλμα! Ανεβάστε μόνο αρχείο εικόνας jpg ή jpeg!');
            setSnackbarOpen(true);
        }else{
            formData.append('image', file);        
            try {
                const response = await axios.post(`${process.env.REACT_APP_BACKEND}/upload-image`, formData); 
                if(response.status === 200){
                    setSnackbarText('Το αρχείο ανέβηκε με επιτυχία');
                    setSnackbarOpen(true);
                    setHasPhoto(file.name);
                }else{
                    setSnackbarText('Σφάλμα κατά την αποθήκευση του αρχείου. Δοκιμάστε ξανά');
                    setSnackbarOpen(true);
                }
            } catch (error) {             
                setSnackbarText('Error uploading your file');
                setSnackbarOpen(true);
            }
        }                
    }

    const handleStoreStory = async() => {
        const name = document.getElementById('name').value;        
        const title = document.getElementById('title').value;
        const text = document.getElementById('text').value;
        const icon = hasPhoto !== false ? hasPhoto : null;
        
        if(name !== '' && title !== '' && text !== '' && icon !== null){
            const form = {
                name: name,
                icon: icon,
                title: title,
                text: text
            }
            const response = await axios.post(`${process.env.REACT_APP_BACKEND}/upload-story`, {form: form});
            setSnackbarText(response.data.success ? 'Το success story ανέβηκε με επιτυχία' : 'Σφάλμα κατά το ανέβασμα του success story');
            setSnackbarOpen(true);
            if(response.data.success){
                document.getElementById('name').value = '';
                document.getElementById('title').value = '';
                document.getElementById('text').value = '';
                setHasPhoto(false)
            }
        }else{
            setSnackbarText('Συμπληρώστε όλα τα πεδία');
            setSnackbarOpen(true);
        }     
    }

    return (
        <Stack
            sx={{
                margin: '24px 16px'
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
            >
                <Grid item
                    lg={3}
                >
                    <Stack
                        spacing={1}
                    >
                        {menuOptions.map((option, index) => (
                            <Stack
                                className={'hoverable'}
                                onClick={()=>setMenuSelection(index)}
                                direction={'row'}
                                sx={{
                                    bgcolor: menuSelection === index ? '#e5e8f3' : 'white',
                                    borderRadius: 1,
                                    padding: 2
                                }}                        
                            >
                                <Typography>
                                    {option}
                                </Typography>
                            </Stack>         
                        ))}                                            
                    </Stack>           
                </Grid>
                <Grid item
                    lg={9}
                    sx={{
                        minHeight: 400
                    }}
                >                    
                        <Stack
                            spacing={1}
                            alignItems={'center'}
                            sx={{
                                bgcolor: 'white',
                                padding: 3,
                                borderRadius: 6
                            }}
                        >
                            <Typography 
                                fontSize={22}
                                fontWeight={'bold'}
                                textAlign={'center'}
                            >
                                {menuOptions[menuSelection]}
                            </Typography>
                            {menuSelection === null && (
                                <Typography
                                    fontSize={17}
                                    fontWeight={'bold'}
                                    sx={{
                                        fontStyle: 'italic',
                                        color: '#232323'
                                    }}
                                >
                                    Επιλέξτε ενότητα
                                </Typography>
                            )}
                            {menuSelection === 0 && (
                                <Grid container
                                    columnSpacing={2}
                                    rowSpacing={2}
                                >
                                    <Grid item
                                        lg={3}
                                    >
                                        <Stack
                                            spacing={2}
                                        >
                                            <Stack
                                                className={'hoverable'}                                                
                                                spacing={1}
                                                alignItems={'center'}
                                                sx={{
                                                    bgcolor: '#eeeeee',
                                                    padding: 3,
                                                    borderRadius: 3,
                                                    width: 'fit-content',
                                                    height: 'fit-content'
                                                }}
                                                onClick={() => fileInputRef.current?.click()}
                                            >
                                                <input ref={fileInputRef} onChange={handleUpload} style={{ display: 'none' }} type="file" accept=".jpg,.jpeg"/>
                                                <AddPhotoAlternateIcon
                                                    sx={{
                                                        fontSize: 60
                                                    }}
                                                />
                                                <Typography
                                                    fontSize={18}
                                                >
                                                    Προσθήκη εικόνας
                                                </Typography>
                                            </Stack>
                                            <TextField
                                                id={'name'}
                                                label={'Όνομα'}
                                                sx={{
                                                    width: '100%'
                                                }}
                                            />
                                        </Stack>
                                    </Grid>
                                    <Grid item
                                        lg={9}
                                    >
                                        <Stack
                                            spacing={1}
                                            alignItems={'center'}                                                                      
                                        >
                                            <TextField
                                                id={'title'}
                                                label={'Τίτλος'}
                                                sx={{
                                                    width: '100%'
                                                }}
                                            />
                                            <TextField
                                                id={'text'}
                                                label={'Προσθέστε το κείμενο σας...'}
                                                multiline
                                                rows={10}
                                                sx={{
                                                    width: '100%'
                                                }}
                                            />
                                        </Stack>                                           
                                    </Grid>
                                    <Grid item
                                        lg={12}
                                        justifyContent={'end'}
                                        alignItems={'end'}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'end'
                                            }}
                                        >
                                            <Typography
                                                className={'hoverable'}
                                                onClick={handleStoreStory}
                                                fontSize={14}
                                                sx={{
                                                    bgcolor: '#232323',
                                                    color: 'white',
                                                    padding: '8px 16px',
                                                    borderRadius: 2
                                                }}                                                
                                            >
                                                Αποθηκευση
                                            </Typography>                                            
                                        </Box>
                                    </Grid>
                                </Grid>                                
                            )}                            
                            {menuSelection === 1 && (
                                <Texts/>
                            )}
                            {menuSelection === 2 && (
                                <Eshop/>
                            )}
                            {menuSelection === 3 && (
                                <Uploads/>
                            )}
                            {menuSelection === 4 && (
                                <Messages/>
                            )}
                        </Stack>                    
                </Grid>
            </Grid>
        </Stack>
    );
};

export default Editor;