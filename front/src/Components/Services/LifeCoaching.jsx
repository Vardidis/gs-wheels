import React from "react";
import { Box, Stack, Typography, Alert, Button } from "@mui/material";
import PartBox from "../PartBox";
import gw from '../../assets/giotis-wheelie.jpg';
import inter2 from '../../assets/interior2.jpg';
import inter4 from '../../assets/interior4.jpg';
import inter1 from '../../assets/interior1.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

const LifeCoaching = () => {
    return(
        <Box sx={{ paddingBottom: 5 }}>
            <img src={gw} alt='' style={{ width: '100%', height: '170px', objectFit: 'cover' }}/>
            <Stack spacing={2} sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2 }}>
                <Typography variant='h5' fontWeight={600} sx={{ textAlign: 'center' }}>
                    Life Coaching
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Alert severity="success" sx={{ width: {lg: 900, md: 800, sm: '100%', xs: '100%', xxs: '100%'} }}>
                        Το Life Coaching δεν απευθύνεται μόνο σε άτομα με αναπηρία, αλλά επίσης στον οικογενειακό και φιλικό περίγυρο τους.
                    </Alert>
                </div>                
                <Stack direction='row' spacing={2} sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 3 }}>
                    <PartBox image={inter2} height={'170px'} font={14} text={'Στην εταιρία μας, κατανοούμε πλήρως ότι η ζωή με αναπηρία μπορεί να συνοδεύεται από μοναδικές προκλήσεις και δυσκολίες. Ωστόσο, πιστεύουμε ότι η αναπηρία δεν πρέπει να ορίζει τα πεπραγμένα ή τα όνειρα κανενός.'}/>
                    <PartBox image={inter4} height={'170px'} font={14} text={'Έχοντας προσωπική εμπειρία με την αναπηρία για πάνω από τριάντα χρόνια γνωρίζουμε από πρώτο χέρι πόσο σημαντικές μπορούν να είναι οι κατάλληλες παρεμβάσεις στον προσωπικό χώρο ενός ατόμου με αναπηρία.'}/>
                    <PartBox image={inter1} height={'170px'} font={14} text={'Η προσωπική μας γνώση είναι η δύναμη που μας επιτρέπει να κατανοούμε βαθιά τις ανάγκες των ατόμων με αναπηρία και να προσφέρουμε λύσεις που αποτελούν πραγματικές βελτιώσεις στη ζωή τους.'}/>
                </Stack>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 30 }}>
                    <Link to='/service/apokatastasi'>
                        <Button variant="contained" startIcon={<ArrowBackIcon/>} sx={{ width: 300, fontSize: 14 }}>Λειτουργικη Αποκατασταση</Button>
                    </Link>
                    <Link to='/service/full-custom'>
                        <Button variant="contained" endIcon={<ArrowForwardIcon/>} sx={{ width: 300, fontSize: 14 }}>Full Custom Made</Button>
                    </Link>
                </div>  
            </Stack>
        </Box>
    );
}

export default LifeCoaching;