import React from "react";
import { Box, Stack } from "@mui/material";
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import AccessibleForwardOutlinedIcon from '@mui/icons-material/AccessibleForwardOutlined';
import FuncCard from "../FuncCard";
import TitleComp from "./TitleComp";
import RedirectBox from "./RedirectBox";
import ImageComp from "./ImageComp";
import fc from '../../assets/full-custom.jpg';

const FuncRepair = () => {
    return(
        <Box sx={{ paddingBottom: 5 }}>      
            <ImageComp image={fc}/>   
            <TitleComp text={'Λειτουργική Αποκατάσταση'}/>
            <Stack spacing={5}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Stack spacing={4}>
                        <FuncCard icon={<AccessibilityIcon fontSize='large' sx={{ paddingTop: 2 }}/>} text={'Μετά από έναν τραυματισμό στην σπονδυλική στήλη το σώμα μας γίνεται απίστευτα βαρύ και μη λειτουργικό. Η λέξη αυτονομία και ανεξαρτησία αποκτούν άλλη έννοια.'}/>
                        <FuncCard icon={<SentimentVeryDissatisfiedIcon fontSize='large' sx={{ paddingTop: 2 }}/>} text={'Καλείσαι ξαφνικά να αντιμετωπίσεις προκλήσεις και καταστάσεις που ποτέ δεν είχαν περάσει από το μυαλό σου ενώ προσπαθείς να συμβιβαστείς στον νέο τρόπο ζωής κάνοντας εκπτώσεις στα θέλω σου.'}/>                            
                        <FuncCard icon={<AccessibleForwardOutlinedIcon fontSize='large' sx={{ paddingTop: 2 }}/>} text={'Υπάρχουν οι βασικές αρχές λειτουργικής αποκατάστασης  όπου εστιάζουν στην βελτίωση της αυτονομίας σου μέσα από την ομότιμη υποστήριξη με στόχο την βελτίωση της ποιότητας ζωής δίχως περιορισμούς.'}/>
                        <FuncCard icon={<HandshakeOutlinedIcon fontSize='large' sx={{ paddingTop: 2 }}/>} text={'Στην GS  Wheelchairs (Get Started)  γνωρίζουμε πολύ καλά τι χρειάζεσαι και μπορούμε να σου δώσουμε όλα εκείνα τα εφόδια που θα χρειαστείς ώστε να γίνεις ξανά αυτόνομος για μια ποιοτική ζωή δίχως περιορισμούς.'}/> 
                        <RedirectBox back={'/service/vasikes-arxes'} forward={'/service/life-coaching'}/>
                    </Stack>
                </Box>                    
            </Stack>                                  
        </Box>
    );
}

export default FuncRepair