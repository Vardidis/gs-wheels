import React, { useContext, useRef } from "react";
import { Box, Button, Stack, Typography, Paper } from '@mui/material';
import { Context } from "./Context";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import UploadTable from "./UploadTable";
import axios from 'axios';

const Uploads = () => {
    const {allImages, endpoint} = useContext(Context);
    const count = allImages.length;
    const fileInputRef = useRef(null);
    
    const handleUpload = async(e) => {
        const formData = new FormData();
        formData.append('image', e.target.files[0]);
        
        try {
            const response = await axios.post('http://192.168.1.13:4300/upload-image', formData)
            console.log('File uploaded successfully', response.data);
        } catch (error) {
            console.error('Error', error);
        }
    }
    // const handleChange = (e) => {
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         setMainImg(reader.result);
    //     };
    //     reader.readAsDataURL(e.target.files[0]);           
    // }

    return(
        <Box sx={{  paddingLeft: 10, paddingRight: 10, marginTop: 3 }}>
            <Stack spacing={5}>  
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
                            <input ref={fileInputRef} onChange={handleUpload} style={{ display: 'none' }} type="file"/>
                            Ανεβαστε αρχειο                        
                        </Button>       
                    </Box>
                </Box>  
                <Paper sx={{ padding: 1, width: 'fit-content'}}>
                    <UploadTable/>
                </Paper>                                                   
            </Stack>
        </Box>
    );
}

export default Uploads;