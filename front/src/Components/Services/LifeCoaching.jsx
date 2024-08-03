import React, { useContext } from "react";
import { Box, Stack, Alert } from "@mui/material";
import PartBox from "../PartBox";
import gw from '../../assets/giotis-wheelie.jpg';
import inter2 from '../../assets/interior2.jpg';
import inter4 from '../../assets/interior4.jpg';
import inter1 from '../../assets/interior1.jpg';
import { Context } from "../Context";
import TitleComp from "./TitleComp";
import RedirectBox from "./RedirectBox";
import ImageComp from "./ImageComp";

const LifeCoaching = () => {
    const {isDesktop} = useContext(Context);

    return(
        <Box sx={{ paddingBottom: 5 }}>
            <ImageComp image={gw}/>     
            <Alert severity="success">
                Το Life Coaching δεν απευθύνεται μόνο σε άτομα με αναπηρία, αλλά επίσης στον οικογενειακό και φιλικό περίγυρο τους.
            </Alert>
            <TitleComp text={'Life Coaching'}/>
            <Stack spacing={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                {isDesktop 
                ?
                    <Stack direction='row' spacing={2} sx={{ display: 'flex', justifyContent: 'center', paddingBottom: 3 }}>
                        <PartBox image={inter2} height={'200px'} text={'Στην εταιρία μας, κατανοούμε πλήρως ότι η ζωή με αναπηρία μπορεί να συνοδεύεται από μοναδικές προκλήσεις και δυσκολίες. Ωστόσο, πιστεύουμε ότι η αναπηρία δεν πρέπει να ορίζει τα πεπραγμένα ή τα όνειρα κανενός.'}/>
                        <PartBox image={inter4} height={'200px'} text={'Έχοντας προσωπική εμπειρία με την αναπηρία για πάνω από τριάντα χρόνια γνωρίζουμε από πρώτο χέρι πόσο σημαντικές μπορούν να είναι οι κατάλληλες παρεμβάσεις στον προσωπικό χώρο ενός ατόμου με αναπηρία.'}/>
                        <PartBox image={inter1} height={'200px'} text={'Η προσωπική μας γνώση είναι η δύναμη που μας επιτρέπει να κατανοούμε βαθιά τις ανάγκες των ατόμων με αναπηρία και να προσφέρουμε λύσεις που αποτελούν πραγματικές βελτιώσεις στη ζωή τους.'}/>
                    </Stack>
                :
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>                
                    <Box className='mob-partbox'>
                        <PartBox image={inter2} height={'200px'} text={'Στην εταιρία μας, κατανοούμε πλήρως ότι η ζωή με αναπηρία μπορεί να συνοδεύεται από μοναδικές προκλήσεις και δυσκολίες. Ωστόσο, πιστεύουμε ότι η αναπηρία δεν πρέπει να ορίζει τα πεπραγμένα ή τα όνειρα κανενός.'}/>
                        <PartBox image={inter4} height={'200px'} text={'Έχοντας προσωπική εμπειρία με την αναπηρία για πάνω από τριάντα χρόνια γνωρίζουμε από πρώτο χέρι πόσο σημαντικές μπορούν να είναι οι κατάλληλες παρεμβάσεις στον προσωπικό χώρο ενός ατόμου με αναπηρία.'}/>
                        <PartBox image={inter1} height={'200px'} text={'Η προσωπική μας γνώση είναι η δύναμη που μας επιτρέπει να κατανοούμε βαθιά τις ανάγκες των ατόμων με αναπηρία και να προσφέρουμε λύσεις που αποτελούν πραγματικές βελτιώσεις στη ζωή τους.'}/>
                    </Box>
                </Box>
                }                             
            </Stack>
            <RedirectBox back={'/service/apokatastasi'} forward={'/service/full-custom'} pd={80}/>
        </Box>
    );
}

export default LifeCoaching;