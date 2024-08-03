import React, { useContext } from "react";
import aksonas from '../../assets/aksonas.jpg';
import brakes from '../../assets/brakes2.jpg';
import back from '../../assets/back.jpg';
import fc from '../../assets/full-custom.jpg';
import { Stack, Box } from "@mui/material";
import PartBox from "../PartBox";
import WheelcharCanvas from "../WheelchairCanvas";
import { Context } from "../Context";
import RedirectBox from "./RedirectBox";
import TitleComp from "./TitleComp";
import ImageComp from "./ImageComp";

const FullCustom = () => {
    const {isDesktop} = useContext(Context);

    return(
        <Box sx={{ paddingBottom: 5 }}>
            <ImageComp image={fc}/>
            <TitleComp text={'Full Custom Made'}/>
            <Stack spacing={8} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', m: 1 }}>                   
                {isDesktop
                ?
                <Stack direction='row' spacing={2} sx={{ paddingBottom: 2, display: 'flex', justifyContent: 'center' }}>
                    <PartBox height={'110px'} image={aksonas} text={'Κατασκευάζουμε αμαξίδια από υψηλής ποιότητας υλικά με αντοχή στο χρόνο'}/>
                    <PartBox height={'110px'} image={brakes} text={'Σχεδιάζεται και κατασκευάζεται από την αρχή με στόχο να καλύψει τις δικές σου μοναδικές ανάγκες.'}/>
                    <PartBox height={'110px'} image={back} text={'Ένα αμαξίδιο που προσαρμόζεται σε εσένα δίχως να χρειαστεί να προσαρμοστείς εσύ σε αυτό.'}/>
                </Stack>
                :
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>                
                    <Box className='mob-partbox'>
                        <PartBox height={'100px'} image={aksonas} text={'Κατασκευάζουμε αμαξίδια από υψηλής ποιότητας υλικά με αντοχή στο χρόνο'}/>
                        <PartBox height={'100px'} image={brakes} text={'Σχεδιάζεται και κατασκευάζεται από την αρχή με στόχο να καλύψει τις δικές σου μοναδικές ανάγκες.'}/>
                        <PartBox height={'100px'} image={back} text={'Ένα αμαξίδιο που προσαρμόζεται σε εσένα δίχως να χρειαστεί να προσαρμοστείς εσύ σε αυτό.'}/>                                      
                    </Box>
                </Box>
                }
                <Box>
                    <WheelcharCanvas/>
                </Box>                       
            </Stack>
            <RedirectBox back={'/service/life-coaching'} forward={'/service/interior-design'} pd={90}/>
        </Box>
    );
}

export default FullCustom;