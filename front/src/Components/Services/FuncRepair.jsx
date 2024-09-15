import React, { useContext } from "react";
import { Box, Stack, Paper } from "@mui/material";
import FuncCard from "../FuncCard";
import TitleComp from "./TitleComp";
import RedirectBox from "./RedirectBox";
import ImageComp from "./ImageComp";
import fc from '../../assets/full-custom.jpg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshakeAngle, faBook, faWheelchairMove, faLinkSlash } from '@fortawesome/free-solid-svg-icons';
import { Context } from "../Context";
library.add(faHandshakeAngle, faBook, faWheelchairMove, faLinkSlash);

const FuncRepair = () => {
    const {isDesktop} = useContext(Context);
    const iconSize = isDesktop ? 'xl' : '2xl';

    return(
        <Box sx={{ paddingBottom: 5 }}>      
            <ImageComp image={fc}/>   
            <TitleComp text={'Λειτουργική Αποκατάσταση'}/>
            <Box sx={{
                paddingLeft: {xl: 70, lg: 15, md: 5, sm: 5, xs: 3, xxs: 2},
                paddingRight: {xl: 70, lg: 15, md: 5, sm: 5, xs: 3, xxs: 2}
            }}>
                <Paper sx={{ borderRadius: 3, backgroundColor: 'rgb(40, 40, 40)', padding: {xl: 3, lg: 5, md: 3, sm: 2, xs: 2, xxs: 2}, border: '1px solid orangered' }}>
                    <Stack spacing={7}>
                        <FuncCard icon={<FontAwesomeIcon icon={faLinkSlash} size={iconSize} style={{ color: 'rgb(242, 242, 242)' }}/>} text={'Μετά από έναν τραυματισμό στην σπονδυλική στήλη το σώμα μας γίνεται απίστευτα βαρύ και μη λειτουργικό. Η λέξη αυτονομία και ανεξαρτησία αποκτούν άλλη έννοια.'}/>
                        <FuncCard icon={<FontAwesomeIcon icon={faWheelchairMove} size={iconSize} style={{ color: 'rgb(242, 242, 242)' }}/>} text={'Καλείσαι ξαφνικά να αντιμετωπίσεις προκλήσεις και καταστάσεις που ποτέ δεν είχαν περάσει από το μυαλό σου ενώ προσπαθείς να συμβιβαστείς στον νέο τρόπο ζωής κάνοντας εκπτώσεις στα θέλω σου.'}/>                            
                        <FuncCard icon={<FontAwesomeIcon icon={faBook} size={iconSize} style={{ color: 'rgb(242, 242, 242)' }}/>} text={'Υπάρχουν οι βασικές αρχές λειτουργικής αποκατάστασης  όπου εστιάζουν στην βελτίωση της αυτονομίας σου μέσα από την ομότιμη υποστήριξη με στόχο την βελτίωση της ποιότητας ζωής δίχως περιορισμούς.'}/>
                        <FuncCard icon={<FontAwesomeIcon icon={faHandshakeAngle} size={iconSize} style={{ color: 'rgb(242, 242, 242)' }}/>} text={'Στην GS  Wheelchairs (Get Started)  γνωρίζουμε πολύ καλά τι χρειάζεσαι και μπορούμε να σου δώσουμε όλα εκείνα τα εφόδια που θα χρειαστείς ώστε να γίνεις ξανά αυτόνομος για μια ποιοτική ζωή δίχως περιορισμούς.'}/>                         
                    </Stack>
                </Paper>
            </Box>                       
            <RedirectBox back={'/service/vasikes-arxes'} forward={'/service/life-coaching'}/> 
        </Box>
    );
}

export default FuncRepair