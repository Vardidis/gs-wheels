import React, { useContext } from "react";
import './Components.css';
import Servicecard from "./Servicecard";
import img from '../assets/interior3.jpg';
import bgimg from '../assets/bgimg2.jpg';
import gw from '../assets/giotis-wheelie.jpg';
import fc from '../assets/full-custom.jpg';
import id from '../assets/interior3.jpg';
import { Stack } from "@mui/material";
import { Context } from "./Context";

const Servicebox = () => {
    const {isDesktop} = useContext(Context);
    if(isDesktop){
        return(
            <Stack spacing={2}>
                <Stack direction='row' spacing={2}>
                    <Servicecard image={img} text={'1. Βασικές Αρχές'}/>
                    <Servicecard image={bgimg} text={'2. Λειτουργική Αποκατάσταση'}/>
                </Stack>
                <Stack direction='row' spacing={2}>
                    <Servicecard image={gw} text={'3. Life Coaching'}/>
                    <Servicecard image={fc} text={'4. Προσαρμογή Αμαξιδίου'}/>
                </Stack>
                <Stack direction='row' spacing={2}>
                    <Servicecard image={id} text={'5. Interior Design'}/>
                </Stack>            
            </Stack>
        );
    }else{
        return(
            <Stack spacing={5} sx={{ paddingLeft: {sm: 5, xs: 3, xxs: 1}, paddingRight: {sm: 5, xs: 3, xxs: 1}, paddingTop: 3, paddingBottom: 10 }}>
                <Servicecard image={img} text={'1. Βασικές Αρχές'}/>
                <Servicecard image={bgimg} text={'2. Λειτουργική Αποκατάσταση'}/>
                <Servicecard image={gw} text={'3. Life Coaching'}/>
                <Servicecard image={fc} text={'4. Προσαρμογή Αμαξιδίου'}/>
                <Servicecard image={id} text={'5. Interior Design'}/>          
            </Stack>
        );
    }
}

export default Servicebox;