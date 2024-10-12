import React, { useContext } from "react";
import Servicebox from "../Components/Servicebox";
import { Stack, Box } from "@mui/material";
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
                <Box sx={{ paddingTop: 2, width: {lg: 75, md: 75, sm: 65, xs: 55, xxs: 45} }}>
                    <img src={logo} style={{ width: 'inherit' }} alt="gslogo"/>
                </Box>  
                <Box sx={{ width: {lg: 350, md: 350, sm: 300, xs: 250, xxs: 200} }}>
                    <img src={wheels} style={{ width: 'inherit' }} alt="gsfont"/>               
                </Box> 
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