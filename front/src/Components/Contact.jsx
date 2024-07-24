import React from "react";
import { Alert, Button, TextField, Stack, Box } from '@mui/material';

const Contact = () => {

    const style = {
        
    };

    return(
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 550,
            bgcolor: 'theme.light',
            boxShadow: 24,
            p: 4,
            border: "none",
            textAlign: "center",
            borderRadius: 1,
            height: {lg: '85vh', md: '84vh', sm: '75vh', xs: '70vh', xxs: '30vh'},
            overflowY: 'auto',
        }}>
            <Stack spacing={{lg: 1, md: 2, sm: 2}}>
                <Alert severity="info">Επικοινωνήστε μαζί μας για οποιαδήποτε διευκρίνηση ή απορία έχετε.</Alert>
                <Stack spacing={{lg: 1, md: 1, sm: 2}} sx={{ paddingTop: {lg: 0, md: 0, sm: 10} }}>
                    <TextField id="outlined-basic" label="Όνομα" variant="outlined"/>
                    <TextField id="outlined-basic" label="Τηλέφωνο επικοινωνίας" variant="outlined"/>
                    <TextField id="outlined-basic" label="Email" variant="outlined"/>
                    <TextField id="outlined-basic" label="Πείτε μας λίγα λόγια" variant="outlined" multiline rows={5} sx={{ height: '100px' }}/>
                </Stack>
                <Button variant="contained" sx={{ position: 'absolute', bottom: '30px', width: '90%', height: {lg: 45, md: 45, sm: 80}, fontSize: {lg: 16, md: 16, sm: 20} }}>Υποβολη</Button>                            
            </Stack>                                                                  
        </Box>
    )
}

export default Contact;