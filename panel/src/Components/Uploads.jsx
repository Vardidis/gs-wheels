import React, { useContext, useRef, useState } from "react";
import { Box, Button, Stack, Typography, Paper } from '@mui/material';
import { Context } from "./Context";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import UploadTable from "./UploadTable";
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
                const response = await axios.post(`${process.env.REACT_APP_BACKEND}/upload-image`, formData)
                alert('File uploaded successfully', response.data);
            } catch (error) {
                alert('Error uploading your file');
            }
        }                
    }

    const handleDelete = async() => {
        try {
            const response = await axios.delete(`${process.env.REACT_APP_BACKEND}/delete-image`, {params: {index: allImages[deleteImg]}})
            console.log('File deleted successfully', response.data);
        } catch (error) {
            console.error('Error', error);
        }
    }

    return(
        <Box sx={{  paddingLeft: 10, paddingRight: 10, marginTop: 3, height: '100vh' }}>
            <Stack spacing={5} sx={{ width: '100%' }}>  
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography fontSize={24} fontWeight={600}>
                        Uploads ({count})
                    </Typography>    
                    <Box>
                        <Button
                            component="label"                
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<FileUploadIcon />}
                        >
                            <input ref={fileInputRef} onChange={handleUpload} style={{ display: 'none' }} type="file" accept=".jpg,.jpeg"/>
                            Ανεβαστε αρχειο                        
                        </Button>       
                    </Box>
                </Box>  
                <Paper sx={{ padding: 1, width: 'fit-content'}}>
                    <UploadTable item={deleteImg} setItem={setDeleteImg}/>
                </Paper>  
                {deleteImg !== null &&
                    <Button variant="outlined" onClick={handleDelete} color="error" sx={{ maxWidth: 200 }}>
                        Διαγραφη
                    </Button>     
                }                                                            
            </Stack>
        </Box>
    );
}

export default Uploads;