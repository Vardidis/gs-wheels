import React, { useContext } from "react";
import Servicebox from "../Components/Servicebox";
import { Stack, Box } from "@mui/material";
import bgwheel from '../assets/backg.jfif';
import wheels from '../assets/wheelchairs.png';
import logo from '../assets/logo.png';
import { Context } from "../Components/Context";

const Services = () => {
    const {fullHeight} = useContext(Context);

    return(
        <Box>   
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                alignItems: 'center',  
                paddingTop: 2,        
            }}>
                <Box sx={{ borderRadius: 5, paddingTop: 2 }}>
                    <img src={logo} style={{ width: 80 }} alt=""/>
                </Box>                
                    <img src={wheels}/>                               
            </Box>         
            <Stack sx={{ paddingTop:5, overflow: 'auto', maxHeight: fullHeight, paddingBottom: 20 }}>                
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Servicebox/>
                </Box>                
            </Stack>
        </Box>        
    );
}

export default Services;