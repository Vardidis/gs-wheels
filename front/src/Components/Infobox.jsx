import React, { useContext, useRef} from "react";
import './Components.css';
import { Stack, Box } from '@mui/material';
import { Context } from "./Context";
import Infocard from "./Infocard";
import bg1 from '../assets/interior3.jpg';
import bg2 from '../assets/bgimg2.jpg';
import inter1 from '../assets/interior1.jpg';
import inter4 from '../assets/interior4.jpg';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Infobox = () => {
    const {isDesktop} = useContext(Context);
    const scrollDiv = useRef(null);

    const scrollRight = () => {
        if(scrollDiv.current){
            scrollDiv.current.scrollBy({left: -410, behavior: "smooth"});
        }
    }

    const scrollLeft = () => {
        if(scrollDiv.current){
            scrollDiv.current.scrollBy({left: 410, behavior: "smooth"});
        }
    }

    if(isDesktop){
        return(
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, paddingLeft: {xl: 35, lg: 20, md: 10, sm: 5, xs: 3, xxs: 1}, paddingRight: {xl: 35, lg: 20, md: 10, sm: 5, xs: 3, xxs: 1} }}>
                <ArrowBackIosIcon className='clickable' onClick={scrollRight}/>      
                <Box ref={scrollDiv} className='infobox-box' sx={{ overflowX: 'scroll', display: 'flex', alignItems: 'center', paddingTop: 1, paddingBottom: 1 }}>                                   
                    <Box sx={{ display: 'flex', gap: 2}}>
                        <Infocard image={bg1} text={'Στη GS Wheelchairs γνωρίζουμε ότι κάθε άτομο είναι διαφορετικό, και οι ανάγκες του ξεχωριστές. Για τον λόγο αυτό ειδικευόμαστε στην κατασκευή προσαρμοσμένων αναπηρικών αμαξιδίων, σχεδιασμένων αποκλειστικά για τις ανάγκες του κάθε ατόμου.'}/>
                        <Infocard image={bg2} text={'Προσφέρουμε υπηρεσίες Life Coaching και Εκπαίδευσης σε θέματα αυτονομίας, από πιστοποιημένο εκπαιδευτή στη Σουηδία για άτομα με αναπηρία, και ειδικά για τραυματισμούς στην σπονδυλική στήλη.'}/>
                        <Infocard image={inter4} text={'Επιπλέον, προσφέρουμε λύσεις για την προσαρμογή του εσωτερικού και εξωτερικού χώρου σας, παρέχοντας ιδέες και προτάσεις που θα βελτιώσουν το περιβάλλον σας. Αντιμετωπίζουμε τις προκλήσεις που συνοδεύουν την αναπηρία με εξειδικευμένες υπηρεσίες.'}/>
                        <Infocard image={inter1} text={'Η εμπειρία μας ως άνθρωποι που ζουν σε συνθήκες αναπηρίας μας επιτρέπει να κατανοούμε πλήρως τις ανάγκες σας. Το Customize Your Life αποτελεί τη δέσμευσή μας για μια καλύτερη ποιότητα ζωής, πλήρως προσαρμοσμένη στις δικές σας ανάγκες.'}/>                            
                    </Box>                        
                </Box>
                <ArrowForwardIosIcon className='clickable' onClick={scrollLeft}/>
            </Box>
        );
    }else{
        return(
            <Box sx={{ paddingLeft: {xl: 5, lg: 5, md: 5, sm: 5, xs: 3, xxs: 1}, paddingRight: {xl: 5, lg: 5, md: 5, sm: 5, xs: 3, xxs: 1} }}>
                <Box sx={{ overflowX: 'scroll', display: 'flex', paddingTop: 1, paddingBottom: 1 }}>
                    <Stack direction='row' spacing={2} sx={{ justifyContent: "center" }}>
                        <Box sx={{ display: 'flex', gap: 2, }}>
                            <Infocard image={bg1} step={0} text={'Στη GS Wheelchairs γνωρίζουμε ότι κάθε άτομο είναι διαφορετικό, και οι ανάγκες του ξεχωριστές. Για τον λόγο αυτό ειδικευόμαστε στην κατασκευή προσαρμοσμένων αναπηρικών αμαξιδίων, σχεδιασμένων αποκλειστικά για τις ανάγκες του κάθε ατόμου.'}/>
                            <Infocard image={bg2} step={1} text={'Προσφέρουμε υπηρεσίες Life Coaching και Εκπαίδευσης σε θέματα αυτονομίας, από πιστοποιημένο εκπαιδευτή στη Σουηδία για άτομα με αναπηρία, και ειδικά για τραυματισμούς στην σπονδυλική στήλη.'}/>
                            <Infocard image={inter4} step={2} text={'Επιπλέον, προσφέρουμε λύσεις για την προσαρμογή του εσωτερικού και εξωτερικού χώρου σας, παρέχοντας ιδέες και προτάσεις που θα βελτιώσουν το περιβάλλον σας. Αντιμετωπίζουμε τις προκλήσεις που συνοδεύουν την αναπηρία με εξειδικευμένες υπηρεσίες.'}/>
                            <Infocard image={inter1} step={3} text={'Η εμπειρία μας ως άνθρωποι που ζουν σε συνθήκες αναπηρίας μας επιτρέπει να κατανοούμε πλήρως τις ανάγκες σας. Το Customize Your Life αποτελεί τη δέσμευσή μας για μια καλύτερη ποιότητα ζωής, πλήρως προσαρμοσμένη στις δικές σας ανάγκες.'}/>
                        </Box>
                    </Stack>
                </Box>            
            </Box>
        )
    }
}

export default Infobox;