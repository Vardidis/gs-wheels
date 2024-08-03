import React from "react";
import Infobox from '../Components/Infobox';
import './Pages.css';
import { Stack, Box } from "@mui/material";
import GsButton from "../Components/GsButton";
import TitleComp from "../Components/Services/TitleComp";

const GetStarted = () => {
    return(
        <Box sx={{ height: '100vh', textAlign: 'center', paddingTop: 3, paddingBottom: 5 }}>
            <TitleComp text={'Καλωσήρθατε στη GS Wheelchairs'}/>
            <Stack spacing={{xl: 18, lg: 12, md: 14, sm: 18, xs: 10, xxs: 8}} sx={{ paddingTop: 5, textAlign: 'center' }}>                
                <Infobox/>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <GsButton/>          
                </Box>                       
            </Stack>            
        </Box>
    );
}

export default GetStarted;