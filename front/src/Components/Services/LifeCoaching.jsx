import React from "react";
import { Box, Stack, Alert, Typography } from "@mui/material";
import gw from '../../assets/giotis-wheelie.jpg';
import TitleComp from "./TitleComp";
import RedirectBox from "./RedirectBox";
import ImageComp from "./ImageComp";
import lc from "../../assets/lifeCoaching.jpg";

const LifeCoaching = () => {
    return(
        <Box sx={{ paddingBottom: 5 }}>
            <ImageComp image={gw}/>     
            <Alert severity="success">
                Το Life Coaching δεν απευθύνεται μόνο σε άτομα με αναπηρία, αλλά επίσης στον οικογενειακό και φιλικό περίγυρο τους.
            </Alert>
            <TitleComp text={'Συμβουλευτική'}/>
            {/* <Stack spacing={6} sx={{ marginLeft: {xl: 70, lg: 15, md: 5, sm: 5, xs: 3, xxs: 2}, marginRight: {xl: 70, lg: 15, md: 5, sm: 5, xs: 3, xxs: 2}}}>                
                <Stack direction='row' spacing={3} sx={{ display: 'flex', justifyContent: 'center', padding: 5, borderRadius: 3 }}>
                    <img src={lc} style={{ height: '300px', borderRadius: '8px' }} alt=''/>
                    <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'rgb(255, 252, 252)', padding: 3, borderRadius: 2, border: '1px solid rgb(180, 180, 180)' }}>
                        <Typography sx={{ color: 'rgb(40, 40, 40)' }}>
                            Στην εταιρία μας, κατανοούμε πλήρως ότι η ζωή με αναπηρία μπορεί να συνοδεύεται από μοναδικές προκλήσεις και δυσκολίες. Ωστόσο, πιστεύουμε ότι η αναπηρία δεν πρέπει να ορίζει τα πεπραγμένα ή τα όνειρα κανενός.  Έχοντας προσωπική εμπειρία με την αναπηρία για πάνω από τριάντα χρόνια γνωρίζουμε από πρώτο χέρι πόσο σημαντικές μπορούν να είναι οι κατάλληλες παρεμβάσεις στον προσωπικό χώρο ενός ατόμου με αναπηρία. Η προσωπική μας γνώση είναι η δύναμη που μας επιτρέπει να κατανοούμε βαθιά τις ανάγκες των ατόμων με αναπηρία και να προσφέρουμε λύσεις που αποτελούν πραγματικές βελτιώσεις στη ζωή τους.
                        </Typography>          
                    </Box>
                </Stack>                          
            </Stack> */}
            <RedirectBox back={'/service/apokatastasi'} forward={'/service/interior-design'} pd={80}/>
        </Box>
    );
}

export default LifeCoaching;