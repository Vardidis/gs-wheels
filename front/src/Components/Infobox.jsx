import React, { useContext } from "react";
import './Components.css';
import { Stack } from '@mui/material';
import { Context } from "./Context";
import Infocard from "./Infocard";
import bg1 from '../assets/interior3.jpg';
import bg2 from '../assets/bgimg2.jpg';

const Infobox = () => {
    const {isDesktop} = useContext(Context);
    if(isDesktop){
        return(
            <Stack direction='row' spacing={2} sx={{ justifyContent: "center" }}>
                <Infocard image={bg1} text={'Στη GS Wheelchairs γνωρίζουμε ότι κάθε άτομο είναι διαφορετικό, και οι ανάγκες του ξεχωριστές. Για τον λόγο αυτό ειδικευόμαστε στην κατασκευή προσαρμοσμένων αναπηρικών αμαξιδίων, σχεδιασμένων αποκλειστικά για τις ανάγκες του κάθε ατόμου.'}/>
                <Infocard image={bg2} text={'Προσφέρουμε υπηρεσίες Life Coaching και Εκπαίδευσης σε θέματα αυτονομίας, από πιστοποιημένο εκπαιδευτή στη Σουηδία για άτομα με αναπηρία, και ειδικά για τραυματισμούς στην σπονδυλική στήλη.'}/>
            </Stack>
        );
    }else{
        return(
            <Stack direction='row' spacing={2} sx={{ justifyContent: "center" }}>
                <Infocard image={bg1} text={'Στη GS Wheelchairs γνωρίζουμε ότι κάθε άτομο είναι διαφορετικό, και οι ανάγκες του ξεχωριστές. Για τον λόγο αυτό ειδικευόμαστε στην κατασκευή προσαρμοσμένων αναπηρικών αμαξιδίων, σχεδιασμένων αποκλειστικά για τις ανάγκες του κάθε ατόμου.'}/>
            </Stack>
        )
    }
}

export default Infobox;