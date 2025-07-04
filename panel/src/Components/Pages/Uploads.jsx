import React, { useContext, useRef, useState } from "react";
import { Box, Button, Stack, Typography, Paper } from '@mui/material';
import { Context } from "../Context";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import UploadTable from "../UploadTable";
import axios from 'axios';

const Uploads = () => {
    const {allImages} = useContext(Context);
    const count = allImages.length;
    const fileInputRef = useRef(null);
    const [deleteImg, setDeleteImg] = useState(null);

    const handleUpload = async(e) => {
        const file = e.target.files[0];
        const formData = new FormData();

        if(file.type !== 'image/jpeg'){
            alert('Σφάλμα! Ανεβάστε μόνο αρχείο εικόνας jpg ή jpeg!')
        }else{
            formData.append('image', file);
        
            try {
                const response = await axios.post(`${process.env.REACT_APP_BACKEND}/upload-image`, formData);
                alert('File uploaded successfully');
            } catch (error) {
                alert('Error uploading your file');
            }
        }                
    }

    const handleDelete = async() => {
        try {
            await axios.delete(`${process.env.REACT_APP_BACKEND}/delete-image`, {params: {filename: deleteImg}});
            alert('File deleted successfully');
        } catch (error) {
            alert('Error deleting file');
        }
    }

    return(
        <Box           
        >
            <Stack
                spacing={5}                         
            >
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <Typography
                        fontSize={24}
                        sx={{
                            color: '#232323'
                        }}
                    >
                        Συνολικά Πολυμέσα ({count})
                    </Typography>    
                    <Stack
                        direction={'row'}
                        spacing={2}
                    >
                        {deleteImg !== null &&
                            <Button
                                onClick={handleDelete}
                                sx={{
                                    maxWidth: 200,
                                    bgcolor: '#e5e8f3',
                                    padding: '8px 24px',
                                    color: '#232323'
                                }}
                            >
                                Διαγραφη
                            </Button>     
                        }                           
                        <Button
                            className={'hoverable'}
                            component="label"                                       
                            role={undefined}                           
                            tabIndex={-1}
                            startIcon={<FileUploadIcon />}
                            sx={{
                                bgcolor: '#e5e8f3',
                                padding: '8px 24px',
                                color: '#232323'
                            }}
                        >
                            <input ref={fileInputRef} onChange={handleUpload} style={{ display: 'none' }} type="file" accept=".jpg,.jpeg"/>
                            Ανεβαστε αρχειο                        
                        </Button>                                                                                                                                               
                    </Stack>
                </Stack>                  
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Box>
                        <UploadTable item={deleteImg} setItem={setDeleteImg}/>
                    </Box>  
                </Box>                                                                          
            </Stack>
        </Box>
    );
}

export default Uploads;