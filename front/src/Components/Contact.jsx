import React, { useState } from "react";
import { Alert, Button, TextField, Stack, Box, Typography } from '@mui/material';
import axios from 'axios';
import SendIcon from '@mui/icons-material/Send';

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
            if(validate()){          
                     
                sanitize(subInfo.name);
                sanitize(subInfo.email);
                sanitize(subInfo.tel);
                sanitize(subInfo.text);
                
                try {
                    await axios.post(`${process.env.REACT_APP_BACKEND}/api/submit-message`, subInfo)
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
                transform: 'translate(-50%, -50%)',
                top: '50%',
                left: '50%',                
                bgcolor: 'theme.light',
                boxShadow: 24,
                padding: 4,
                border: 'none',               
                borderRadius: 2,
                height: 'fit-content',
                overflowY: 'auto',
            }}>
                <Stack
                    spacing={5}
                >
                    <Alert severity="info">Επικοινωνήστε μαζί μας για οποιαδήποτε διευκρίνηση ή απορία έχετε.</Alert>                                            
                        <Stack spacing={1}>
                            <TextField id="name" error={fieldError.name} label="Όνομα" variant="outlined" onChange={handleChange}/>
                            <TextField id="tel" error={fieldError.tel} label="Τηλέφωνο επικοινωνίας" variant="outlined" onChange={handleChange}/>
                            <TextField id="email" error={fieldError.email} label="Email" variant="outlined" onChange={handleChange}/>
                            <TextField id="text" error={fieldError.text} label="Πείτε μας λίγα λόγια" variant="outlined" onChange={handleChange} multiline rows={5}/>
                        </Stack>                                      
                    <Stack
                        className={'clickable'}
                        onClick={submitMessage}
                        direction={'row'}
                        spacing={1.5}
                        justifyContent={'center'}
                        alignItems={'center'}
                        sx={{                           
                            bgcolor: '#30343f',
                            padding: '12px 24px',
                            borderRadius: 2,
                            color: 'white'
                        }}
                    >
                        <Typography
                            fontSize={20}
                            sx={{
                                lineHeight: '100%'
                            }}
                        >

                            Αποστολή
                        </Typography>
                        <SendIcon
                            fontSize={'small'}
                        />
                    </Stack>                       
                </Stack>                                                             
            </Box>
        </Box>
    )
}

export default Contact;