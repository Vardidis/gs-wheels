import React, { useContext } from "react";
import { Box, Stack, Alert } from "@mui/material";
import inter from '../../assets/interior5.jpg';
import PartBox from "../PartBox";
import inter2 from '../../assets/interior2.jpg';
import inter4 from '../../assets/interior4.jpg';
import inter1 from '../../assets/interior1.jpg';
import PlaceBox from '../PlaceBox';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import BalconyOutlinedIcon from '@mui/icons-material/BalconyOutlined';
import CountertopsOutlinedIcon from '@mui/icons-material/CountertopsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShowerOutlinedIcon from '@mui/icons-material/ShowerOutlined';
import DeckOutlinedIcon from '@mui/icons-material/DeckOutlined';
import DeskOutlinedIcon from '@mui/icons-material/DeskOutlined';
import { Context } from "../Context";
import TitleComp from "./TitleComp";
import RedirectBox from "./RedirectBox";
import ImageComp from "./ImageComp";

const Interior = () => {
    const {isDesktop} = useContext(Context);

    return(
        <Box sx={{ paddingBottom: 5 }}>  
            <ImageComp image={inter}/>
            <Alert severity="success">
                        Η προσβασιμότητα δεν αφορά μόνο μεγάλες κατασκευές ή υψηλού κόστους τροποποιήσεις. Πολλές φορές, μικρές αλλά στοχευμένες παρεμβάσεις μπορούν να κάνουν τη διαφορά.
                    </Alert>
            <TitleComp text={'Διαμόρφωση Χώρου'}/>        
            <Stack spacing={10}>                      
                {isDesktop
                ?
                <Stack direction='row' spacing={{lg: 2, md: 2, sm: 1, xs: 1, xxs: 1}} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <PartBox image={inter2} height={'180px'} text={'Όταν μιλάμε για αυτονομία και άτομα με αναπηρία, η προσβασιμότητα είναι πολύ περισσότερο από ένα απλό “καλό είναι να έχουμε”. Είναι ένα αναγκαίο στοιχείο που διασφαλίζει την ποιότητα ζωής.'}/>
                    <PartBox image={inter4} height={'180px'} text={'Έχοντας προσωπική εμπειρία με την αναπηρία για πάνω από τριάντα χρόνια γνωρίζουμε από πρώτο χέρι πόσο σημαντικές είναι οι κατάλληλες παρεμβάσεις στον προσωπικό χώρο ενός ατόμου με αναπηρία.'}/>
                    <PartBox image={inter1} height={'180px'} text={'Η προσωπική μας γνώση είναι η δύναμη που μας επιτρέπει να κατανοούμε βαθιά τις ανάγκες των ατόμων με αναπηρία και να προσφέρουμε λύσεις που αποτελούν πραγματικές βελτιώσεις στη ζωή τους.'}/>
                </Stack>
                :
                <Box sx={{ paddingLeft: {sm: 2, xs: 1, xxs: 1}, paddingRight: {sm: 2, xs: 1, xxs: 1} }}>
                    <Box sx={{ overflowX: 'scroll', display: 'flex', paddingTop: 1, paddingBottom: 1 }}>
                        <Stack direction='row' spacing={2} sx={{ justifyContent: "center" }}>
                            <Box sx={{ display: 'flex', gap: 2, }}>
                                <PartBox image={inter2} height={'200px'} text={'Όταν μιλάμε για αυτονομία και άτομα με αναπηρία, η προσβασιμότητα είναι πολύ περισσότερο από ένα απλό “καλό είναι να έχουμε”. Είναι ένα αναγκαίο στοιχείο που διασφαλίζει την ποιότητα ζωής.'}/>
                                <PartBox image={inter4} height={'200px'} text={'Έχοντας προσωπική εμπειρία με την αναπηρία για πάνω από τριάντα χρόνια γνωρίζουμε από πρώτο χέρι πόσο σημαντικές είναι οι κατάλληλες παρεμβάσεις στον προσωπικό χώρο ενός ατόμου με αναπηρία.'}/>
                                <PartBox image={inter1} height={'200px'} text={'Η προσωπική μας γνώση είναι η δύναμη που μας επιτρέπει να κατανοούμε βαθιά τις ανάγκες των ατόμων με αναπηρία και να προσφέρουμε λύσεις που αποτελούν πραγματικές βελτιώσεις στη ζωή τους.'}/>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
                }
                {isDesktop
                ?
                <Stack spacing={1} sx={{ paddingBottom: 3 }}>
                    <Stack direction='row' spacing={1} sx={{ display: 'flex', justifyContent: 'center', paddingLeft: {lg: 0, md: 0, sm: 5, xs: 2, xxs: 1}, paddingRight: {lg: 0, md: 0, sm: 5, xs: 2, xxs: 1} }}>
                        <PlaceBox icon={<HotelOutlinedIcon/>} text={'Υπνοδωμάτιο'}/>
                        <PlaceBox icon={<KitchenOutlinedIcon/>} text={'Κουζίνα'}/>
                        <PlaceBox icon={<BalconyOutlinedIcon/>} text={'Μπαλκόνι'}/>
                        <PlaceBox icon={<CountertopsOutlinedIcon/>} text={'Τουαλέτα'}/>                        
                    </Stack>
                    <Stack direction='row' spacing={1} sx={{ display: 'flex', justifyContent: 'center', paddingLeft: {lg: 0, md: 0, sm: 5, xs: 2, xxs: 1}, paddingRight: {lg: 0, md: 0, sm: 5, xs: 2, xxs: 1} }}>
                        <PlaceBox icon={<HomeOutlinedIcon/>} text={'Πρόσβαση'}/>
                        <PlaceBox icon={<ShowerOutlinedIcon/>} text={'Μπάνιο'}/>
                        <PlaceBox icon={<DeckOutlinedIcon/>} text={'Εξ. χώροι'}/>
                        <PlaceBox icon={<DeskOutlinedIcon/>} text={'Χώρος εργασίας'}/>
                    </Stack>
                </Stack>   
                :
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>  
                    <Stack direction='row' spacing={1} sx={{ paddingBottom: 3 }}>
                        <Stack spacing={1} sx={{ paddingLeft: {lg: 0, md: 0, sm: 5, xs: 2, xxs: 2}}}>
                            <PlaceBox icon={<HotelOutlinedIcon/>} text={'Υπνοδωμάτιο'}/>
                            <PlaceBox icon={<KitchenOutlinedIcon/>} text={'Κουζίνα'}/> 
                            <PlaceBox icon={<BalconyOutlinedIcon/>} text={'Μπαλκόνι'}/>     
                            <PlaceBox icon={<CountertopsOutlinedIcon/>} text={'Τουαλέτα'}/>                                                               
                        </Stack>
                        <Stack spacing={1} sx={{ paddingRight: {lg: 0, md: 0, sm: 5, xs: 2, xxs: 2} }}>
                            <PlaceBox icon={<HomeOutlinedIcon/>} text={'Πρόσβαση'}/>
                            <PlaceBox icon={<ShowerOutlinedIcon/>} text={'Μπάνιο'}/>
                            <PlaceBox icon={<DeckOutlinedIcon/>} text={'Εξ. χώροι'}/>
                            <PlaceBox icon={<DeskOutlinedIcon/>} text={'Χώρος εργασίας'}/>
                        </Stack>
                    </Stack>   
                </Box>
                }                   
            </Stack>
            <RedirectBox back={'/service/full-custom'} forward={'/service/products'} pd={90} last={true}/>
        </Box>
    );
}

export default Interior;