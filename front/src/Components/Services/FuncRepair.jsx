import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import AccessibleForwardOutlinedIcon from '@mui/icons-material/AccessibleForwardOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FuncCard from "../FuncCard";
import { Link } from 'react-router-dom';

const FuncRepair = () => {
    return(
        <Box sx={{ paddingTop: 5, paddingBottom: 5 }}>            
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Stack spacing={6}>
                    <Typography variant='h5' sx={{ textAlign: 'center' }}>
                        Λειτουργική Αποκατάσταση
                    </Typography>
                    <div>
                        <Stack spacing={2}>
                            <Stack direction='row' spacing={2}>
                                <FuncCard icon={<AccessibilityIcon fontSize='large' sx={{ paddingLeft: 2, paddingTop: 2 }}/>} text={'Μετά από έναν τραυματισμό στην σπονδυλική στήλη το σώμα μας γίνεται απίστευτα βαρύ και μη λειτουργικό. Η λέξη αυτονομία και ανεξαρτησία αποκτούν άλλη έννοια.'}/>
                                <FuncCard icon={<SentimentVeryDissatisfiedIcon fontSize='large' sx={{ paddingLeft: 2, paddingTop: 2 }}/>} text={'Καλείσαι ξαφνικά να αντιμετωπίσεις προκλήσεις και καταστάσεις που ποτέ δεν είχαν περάσει από το μυαλό σου ενώ προσπαθείς να συμβιβαστείς στον νέο τρόπο ζωής κάνοντας εκπτώσεις στα θέλω σου.'}/>
                            </Stack>
                            <Stack direction='row' spacing={2}>
                                <FuncCard icon={<AccessibleForwardOutlinedIcon fontSize='large' sx={{ paddingLeft: 2, paddingTop: 2 }}/>} text={'Υπάρχουν οι βασικές αρχές λειτουργικής αποκατάστασης  όπου εστιάζουν στην βελτίωση της αυτονομίας σου μέσα από την ομότιμη υποστήριξη με στόχο την βελτίωση της ποιότητας ζωής δίχως περιορισμούς.'}/>
                                <FuncCard icon={<HandshakeOutlinedIcon fontSize='large' sx={{ paddingLeft: 2, paddingTop: 2 }}/>} text={'Στην GS  Wheelchairs (Get Started)  γνωρίζουμε πολύ καλά τι χρειάζεσαι και μπορούμε να σου δώσουμε όλα εκείνα τα εφόδια που θα χρειαστείς ώστε να γίνεις ξανά αυτόνομος για μια ποιοτική ζωή δίχως περιορισμούς.'}/>
                            </Stack>
                        </Stack>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: 30 }}>
                        <Link to='/service/vasikes-arxes'>
                            <Button variant="contained" startIcon={<ArrowBackIcon/>} sx={{ width: 200, fontSize: 14 }}>Βασικες αρχές</Button>
                        </Link>
                        <Link to='/service/life-coaching'>
                            <Button variant="contained" endIcon={<ArrowForwardIcon/>} sx={{ width: 200, fontSize: 14 }}>Life Coaching</Button>
                        </Link>
                    </div>
                </Stack>                
            </div>                  
        </Box>
    );
}

export default FuncRepair