import React from "react";
import './Pages.css';
import { Stack, Box, Typography, keyframes, Grid } from "@mui/material";
import logo from '../assets/logo.png';
import GsButton from "../Components/GsButton";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import wheels from '../assets/wheelchairs.png';
library.add(faPhone, faEnvelope, faLocationDot);

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ColorBox = (props) => {
    return(
        <Box sx={{ boxShadow: 12, borderRadius: 4, padding: 4, bgcolor: props.color, display: 'flex', alignItems: 'center', minHeight: {lg: 200, md: 200, sm: 100, xs: 50, xxs: 50} }}>
            <Stack spacing={3}>
                <Typography fontSize={18} fontWeight={600}>
                    {props.title}
                </Typography>
                <Typography>
                    {props.text}
                </Typography>         
            </Stack>       
        </Box>
    )
}

const GetStarted = () => {
    return(
        <Box sx={{
            textAlign: 'center',            
            paddingBottom: 5    
        }}>            
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                alignItems: 'center',  
                paddingTop: 2,                             
            }}>
                <Box sx={{ paddingTop: 2, width: {lg: 75, md: 75, sm: 65, xs: 55, xxs: 45} }}>
                    <img src={logo} style={{ width: 'inherit' }} alt="gslogo"/>
                </Box>  
                <Box sx={{ width: {lg: 350, md: 350, sm: 300, xs: 250, xxs: 200} }}>
                    <img src={wheels} style={{ width: 'inherit' }} alt="gsfont"/>               
                </Box>              
                                    
            </Box>               
            <Box sx={{ paddingTop: 7, display: 'flex', justifyContent: 'center' }}>
                <Stack spacing={2} alignItems='center'>
                    <Grid container spacing={2} rowSpacing={2} justifyContent='center' sx={{ animation: `${fadeIn} 1s ease-in-out`, padding: {lg: 5, md: 5, sm: 3, xs: 1, xxs: 1}, maxWidth: 1400, display: 'flex', alignItems: 'stretch' }}>                                                         
                        <Grid item xs={12} md={5}>
                            <ColorBox
                                color={'rgb(240, 235, 240)'}
                                title={'Εξατομικευμένα Αναπηρικά Αμαξίδια'}
                                text={'Στη GS Wheelchairs γνωρίζουμε ότι κάθε άτομο είναι διαφορετικό, και οι ανάγκες του ξεχωριστές. Για τον λόγο αυτό ειδικευόμαστε στην κατασκευή προσαρμοσμένων αναπηρικών αμαξιδίων, σχεδιασμένων αποκλειστικά για τις ανάγκες του κάθε ατόμου.'}
                            />                        
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <ColorBox
                                color={'rgb(240, 230, 245)'}
                                title={'Ψυχοκοινωνική Στήριξη'}
                                text={'Προσφέρουμε υπηρεσίες Life Coaching και Εκπαίδευσης σε θέματα αυτονομίας, από πιστοποιημένο εκπαιδευτή στη Σουηδία για άτομα με αναπηρία, και ειδικά για τραυματισμούς στην σπονδυλική στήλη.'}
                            />                             
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <ColorBox
                                color={'rgb(240, 225, 230)'}
                                title={'Προσαρμογή Χώρου'}
                                text={'Επιπλέον, προσφέρουμε λύσεις για την προσαρμογή του εσωτερικού και εξωτερικού χώρου σας, παρέχοντας ιδέες και προτάσεις που θα βελτιώσουν το περιβάλλον σας. Αντιμετωπίζουμε τις προκλήσεις που συνοδεύουν την αναπηρία με εξειδικευμένες υπηρεσίες.'}
                            />                            
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <ColorBox
                                color={'rgb(240, 225, 250)'}
                                title={'Εκπαίδευση στη Λειτουργική Αποκατάσταση'}
                                text={'Η εμπειρία μας ως άνθρωποι που ζουν σε συνθήκες αναπηρίας μας επιτρέπει να κατανοούμε πλήρως τις ανάγκες σας. Το Customize Your Life αποτελεί τη δέσμευσή μας για μια καλύτερη ποιότητα ζωής, πλήρως προσαρμοσμένη στις δικές σας ανάγκες.'}
                            />                           
                        </Grid>                                                                            
                    </Grid>     
                    <GsButton/>
                </Stack>
            </Box>
        </Box>
    );
}

export default GetStarted;