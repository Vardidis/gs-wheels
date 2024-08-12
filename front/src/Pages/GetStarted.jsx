import React from "react";
import Infobox from '../Components/Infobox';
import './Pages.css';
import { Stack, Box, Typography } from "@mui/material";
import GsButton from "../Components/GsButton";

const GetStarted = () => {
    return(
        <Box sx={{ textAlign: 'center', paddingTop: 3, paddingBottom: 5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                <Typography fontSize={{xl: 26, lg: 22, md: 20, sm: 20, xs: 20, xxs: 16}}>
                    Καλωσήρθατε στη
                </Typography>
                <Typography fontWeight={600} fontSize={{xl: 26, lg: 22, md: 20, sm: 20, xs: 20, xxs: 16}} sx={{ color: '#f68b24' }}>
                    GS Wheelchairs
                </Typography>
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