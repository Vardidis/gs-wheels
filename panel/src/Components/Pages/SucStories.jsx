import React, { useRef, useState } from 'react';
import { Box, Grid, Snackbar, Stack, TextField, Typography } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import axios from 'axios';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const SucStories = () => {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarText, setSnackbarText] = useState('');
    const [hasPhoto, setHasPhoto] = useState(false);
    const [parCount, setParCount] = useState(0);

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
        <Grid container
            columnSpacing={2}
            rowSpacing={2}
            sx={{
                bgcolor: 'white',
                padding: 3,
                borderRadius: 6
            }}
        >        
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                autoHideDuration={3000}
                open={snackbarOpen}
                onClose={()=>setSnackbarOpen(false)}
                message={snackbarText}        
            />                            
            <Grid item
                size={3}                                        
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
                size={9}
            >
                <Stack
                    spacing={1}
                    alignItems={'start'}                                                                      
                >
                    <TextField
                        id={'title'}
                        label={'Τίτλος'}
                        sx={{
                            width: '100%'
                        }}
                    />
                    <TextField
                        id={'text-0'}
                        label={'Προσθέστε το κείμενο σας...'}
                        multiline
                        rows={6}
                        sx={{
                            width: '100%'
                        }}
                    />
                    {[...Array(parCount)].map((_, i) => (
                        <TextField
                            id={`text-${i+1}`}
                            label={'Προσθέστε το κείμενο σας...'}
                            multiline
                            rows={6}
                            sx={{
                                width: '100%'
                            }}
                        />
                    ))}
                    <Stack
                        direction={'row'}
                        spacing={2}
                        alignItems={'center'}
                    >
                        <Stack
                            className={'hoverable'}
                            onClick={()=>setParCount(parCount+1)}
                            direction={'row'}
                            spacing={0.5}
                            alignItems={'center'}
                            sx={{
                                padding: '4px 8px',
                                borderRadius: 2
                            }}
                        >
                            <AddCircleOutlineIcon
                                sx={{
                                    fontSize: 16
                                }}
                            />
                            <Typography
                                fontSize={15}
                            >
                                Προσθέστε παράγραφο
                            </Typography>
                        </Stack>
                        {parCount > 0 && (
                            <Stack
                                className={'hoverable'}
                                onClick={()=>setParCount(parCount-1)}
                                direction={'row'}
                                spacing={0.5}
                                alignItems={'center'}
                                sx={{
                                    padding: '4px 8px',
                                    borderRadius: 2
                                }}
                            >
                                <RemoveCircleOutlineIcon
                                    sx={{
                                        fontSize: 16
                                    }}
                                />
                                <Typography
                                    fontSize={15}
                                >
                                    Αφαιρέστε παράγραφο
                                </Typography>
                            </Stack>
                        )}
                    </Stack>
                </Stack>                                           
            </Grid>
            <Grid item
                size={12}
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
    );
};

export default SucStories;