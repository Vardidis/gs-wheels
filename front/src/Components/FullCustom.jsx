import React from "react";
import aksonas from '../assets/aksonas.jpg';
import brakes from '../assets/brakes2.jpg';
import back from '../assets/back.jpg';
import fc from '../assets/full-custom.jpg';
import { Stack, Typography, Box, Button } from "@mui/material";
import PartBox from "./PartBox";
import WheelcharCanvas from "./WheelchairCanvas";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";

const FullCustom = () => {
    return(
        <Box sx={{ paddingBottom: 3 }}>
            <img src={fc} alt='' style={{ width: '100%', height: '170px', objectFit: 'cover' }}/>
            <Stack spacing={4} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', paddingTop: 3 }}>
                <Typography variant='h5' fontWeight={600}>
                    Full Custom Made
                </Typography>
                <Stack direction='row' spacing={2} sx={{ paddingBottom: 2, display: 'flex', justifyContent: 'center' }}>
                    <PartBox font={16} height={'100px'} image={aksonas} text={'Κατασκευάζουμε αμαξίδια από υψηλής ποιότητας υλικά με αντοχή στο χρόνο'}/>
                    <PartBox font={16} height={'100px'} image={brakes} text={'Σχεδιάζεται και κατασκευάζεται από την αρχή με στόχο να καλύψει τις δικές σου μοναδικές ανάγκες.'}/>
                    <PartBox font={16} height={'100px'} image={back} text={'Ένα αμαξίδιο που προσαρμόζεται σε εσένα δίχως να χρειαστεί να προσαρμοστείς εσύ σε αυτό.'}/>
                </Stack>
                <Box>
                    <WheelcharCanvas/>
                </Box>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link to='/service/interior-design'>
                        <Button variant="contained" endIcon={<ArrowForwardIcon/>} sx={{ width: 300, fontSize: 14 }}>Interior Design</Button>
                    </Link>
                </div>  
            </Stack>
        </Box>
    );
}

export default FullCustom;