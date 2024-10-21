import React, { useState } from "react";
import { Alert, Button, TextField, Stack, Box } from '@mui/material';

const Contact = (props) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [subInfo, setSubInfo] = useState({
        name: '',
        email: '',
        tel: '',
        text: ''
    });
    const [fieldError, setFieldError] = useState({
        name: false,
        email: false,
        tel: false,
        text: false
    });    

    function sanitize(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            "/": '&#x2F;',
            "`": '&grave'
        };
        const reg = /[&<>"'/]/ig;
        return text.replace(reg, (match)=>(map[match]));
    }

    function validateEmail(email){
        var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         
        return reg.test(String(email).toLowerCase());
    }

    function validateTel(tel){
        var reg = /^\d{10}$/;

        return reg.test(String(tel));
    }

    const validate = () => {
        let flag = false;

        if(subInfo.name.trim() === '' || subInfo.name === undefined || subInfo.name === null){
            setFieldError((prevData) => ({ ...prevData, name: true}));
            flag = true;
        }else{
            setFieldError((prevData) => ({ ...prevData, name: false}));
        }
        if(subInfo.email.trim() === '' || subInfo.email === undefined && subInfo.email === null || !validateEmail(subInfo.email)){
            setFieldError((prevData) => ({ ...prevData, email: true}));
            flag = true;
        }else{
            setFieldError((prevData) => ({ ...prevData, email: false}));
        }
        if(subInfo.tel.trim() === '' || subInfo.tel === undefined || subInfo.tel === null || !validateTel(subInfo.tel)){
            setFieldError((prevData) => ({ ...prevData, tel: true}));
            flag = true;
        }else{
            setFieldError((prevData) => ({ ...prevData, tel: false}));
        }
        if(subInfo.text.trim() === '' || subInfo.text === undefined || subInfo.text === null){
            setFieldError((prevData) => ({ ...prevData, text: true}));
            flag = true;
        }else{
            setFieldError((prevData) => ({ ...prevData, text: false}));
        }
        
        return !flag;
    }

    const submitMessage = async() => {        
        if(!isSubmitting){            
            setIsSubmitting(true)
            console.log(validate())
            if(validate()){          
                     
                sanitize(subInfo.name);
                sanitize(subInfo.email);
                sanitize(subInfo.tel);
                sanitize(subInfo.text);
                
                try {
                    const response = await fetch(`${process.env.REACT_APP_BACKEND}/submit-message`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(subInfo),
                    })
                    .then(response => {     
                        if(!response.ok){
                            console.log('oops')
                        }                                                                    
                        props.close();
                        props.snack({ vertical: 'top', horizontal: 'right' });           
                    })                                                                            
                } catch (error) {
                    console.log(error)
                }                              
            }
            setIsSubmitting(false);  
        }
    }

    const handleChange = (e) => {        
        setSubInfo({ ...subInfo, [e.target.id]: e.target.value});
    }

    return(
        <Box>                
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: {xl: 750, lg: 550, md: 550, sm: 550, xs: '80%', xxs: '80%'},
                bgcolor: 'theme.light',
                boxShadow: 24,
                padding: {xl: 4, lg: 4, md: 4, sm: 4, xs: 2, xxs: 2},
                border: "none",
                textAlign: "center",
                borderRadius: 2,
                height: {xl: '80vh', lg: '80vh', md: '80vh', sm: '80vh', xs: 'fit-content', xxs: 'fit-content'},
                overflowY: 'auto',
            }}>
                <Box sx={{ overflowY: 'auto' }}>
                    <Stack spacing={2} sx={{ paddingBottom: 20 }}>
                        <Alert severity="info" sx={{ boxShadow: 2 }}>Επικοινωνήστε μαζί μας για οποιαδήποτε διευκρίνηση ή απορία έχετε.</Alert>
                        <Stack spacing={1} sx={{ paddingTop: {lg: 0, md: 0, sm: 5} }}>
                            <TextField id="name" error={fieldError.name} label="Όνομα" variant="outlined" onChange={handleChange}/>
                            <TextField id="tel" error={fieldError.tel} label="Τηλέφωνο επικοινωνίας" variant="outlined" onChange={handleChange}/>
                            <TextField id="email" error={fieldError.email} label="Email" variant="outlined" onChange={handleChange}/>
                            <TextField id="text" error={fieldError.text} label="Πείτε μας λίγα λόγια" variant="outlined" onChange={handleChange} multiline rows={5} sx={{ height: '100px' }}/>
                        </Stack>                    
                    </Stack>     
                    <Button onClick={submitMessage} variant="contained" sx={{ position: 'absolute', bottom: '30px', left: '5%', width: '90%', height: 45, fontSize: {lg: 16, md: 16, sm: 20}, bgcolor: '#30343f', boxShadow: 8}}>Υποβολη</Button>                            
                </Box>                                                             
            </Box>
        </Box>
    )
}

export default Contact;