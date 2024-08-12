import React, { useContext } from "react";
import { Box, Stack } from "@mui/material";
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
    const iconSize = isDesktop ? '2xl' : '2xl';

    return(
        <Box sx={{ paddingBottom: 5 }}>      
            <ImageComp image={fc}/>   
            <TitleComp text={'Λειτουργική Αποκατάσταση'}/>
            <Stack spacing={5}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Stack spacing={2}>
                        <FuncCard icon={<FontAwesomeIcon icon={faLinkSlash} size={iconSize} style={{ color: 'rgb(242, 242, 242)' }}/>} text={'Μετά από έναν τραυματισμό στην σπονδυλική στήλη το σώμα μας γίνεται απίστευτα βαρύ και μη λειτουργικό. Η λέξη αυτονομία και ανεξαρτησία αποκτούν άλλη έννοια.'}/>
                        <FuncCard icon={<FontAwesomeIcon icon={faWheelchairMove} size={iconSize} style={{ color: 'rgb(242, 242, 242)' }}/>} text={'Καλείσαι ξαφνικά να αντιμετωπίσεις προκλήσεις και καταστάσεις που ποτέ δεν είχαν περάσει από το μυαλό σου ενώ προσπαθείς να συμβιβαστείς στον νέο τρόπο ζωής κάνοντας εκπτώσεις στα θέλω σου.'}/>                            
                        <FuncCard icon={<FontAwesomeIcon icon={faBook} size={iconSize} style={{ color: 'rgb(242, 242, 242)' }}/>} text={'Υπάρχουν οι βασικές αρχές λειτουργικής αποκατάστασης  όπου εστιάζουν στην βελτίωση της αυτονομίας σου μέσα από την ομότιμη υποστήριξη με στόχο την βελτίωση της ποιότητας ζωής δίχως περιορισμούς.'}/>
                        <FuncCard icon={<FontAwesomeIcon icon={faHandshakeAngle} size={iconSize} style={{ color: 'rgb(242, 242, 242)' }}/>} text={'Στην GS  Wheelchairs (Get Started)  γνωρίζουμε πολύ καλά τι χρειάζεσαι και μπορούμε να σου δώσουμε όλα εκείνα τα εφόδια που θα χρειαστείς ώστε να γίνεις ξανά αυτόνομος για μια ποιοτική ζωή δίχως περιορισμούς.'}/>                         
                    </Stack>
                </Box>                                        
            </Stack>        
            <RedirectBox back={'/service/vasikes-arxes'} forward={'/service/life-coaching'}/> 
        </Box>
    );
}

export default FuncRepair