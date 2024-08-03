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
            width: {xl: 750, lg: 550, md: 550, sm: 550, xs: 350, xxs: 325},
            bgcolor: 'theme.light',
            boxShadow: 24,
            p: {xl: 4, lg: 4, md: 4, sm: 4, xs: 2, xxs: 2},
            border: "none",
            textAlign: "center",
            borderRadius: 1,
            height: {xl: '80vh', lg: '80vh', md: '80vh', sm: '80vh', xs: '85vh', xxs: '85vh'},
            overflowY: 'auto',
        }}>
            <Stack spacing={{lg: 1, md: 2, sm: 2, xs: 2, xxs: 2}}>
                <Alert severity="info">Επικοινωνήστε μαζί μας για οποιαδήποτε διευκρίνηση ή απορία έχετε.</Alert>
                <Stack spacing={{lg: 1, md: 1, sm: 2, xs: 1, xxs: 1}} sx={{ paddingTop: {lg: 0, md: 0, sm: 5} }}>
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