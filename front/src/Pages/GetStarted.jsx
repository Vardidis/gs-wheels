import React from "react";
import Infobox from '../Components/Infobox';
import './Pages.css';
import { Stack, Box, Typography } from "@mui/material";
import GsButton from "../Components/GsButton";
import logo from '../assets/logo.png';
import bgImg from '../assets/bgWheel2.png';

const GetStarted = () => {
    return(
        <Box sx={{
            textAlign: 'center',
            paddingTop: 3,
            paddingBottom: 5,
            height: '100%',
            backgroundImage: `url(${bgImg})`,
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat',
            justifyContent: 'flex-end',
            backgroundSize: '200%, 200%'
        }}>            
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                alignItems: 'center',
                paddingLeft: 55,                
            }}>
                <Box sx={{ borderRadius: 5, paddingTop: 2 }}>
                    <img src={logo} style={{ width: 75 }} alt=""/>
                </Box>                
                <Stack sx={{ textAlign: 'left' }}>
                    <Typography fontWeight={600} fontSize={{xl: 40, lg: 36, md: 30, sm: 28, xs: 26, xxs: 22}} sx={{ color: '#ff7300f8' }}>
                        GS Wheelchairs
                    </Typography>
                    <Typography fontSize={{xl: 20, lg: 18, md: 16, sm: 16, xs: 16, xxs: 14}}>
                        Καλωσήρθατε
                    </Typography>
                </Stack>                                
            </Box>            
            <Stack spacing={{xl: 18, lg: 8, md: 14, sm: 12, xs: 10, xxs: 6}} sx={{ paddingTop: {xl: 15, lg: 15, md: 12, sm: 10, xs: 8, xxs: 4}, textAlign: 'center' }}>                
                <Infobox/>              
                <Box sx={{ paddingLeft: {xl: 40, lg: 25, md: 14, sm: 5, xs: 3, xxs: 1}, paddingRight: {xl: 40, lg: 25, md: 14, sm: 5, xs: 3, xxs: 1} }}>
                    <GsButton/>          
                </Box>                       
            </Stack>            
        </Box>
    );
}

export default GetStarted;