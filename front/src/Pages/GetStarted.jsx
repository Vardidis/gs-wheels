import React from "react";
import Infobox from '../Components/Infobox';
import './Pages.css';
import { Stack, Typography } from "@mui/material";
import GsButton from "../Components/GsButton";

const GetStarted = () => {
    return(
        <Stack spacing={6} sx={{paddingTop: 3, textAlign: 'center'}}>
            <Typography variant='h6' fontWeight={600}>
                Καλωσήρθατε στη GS Wheelchairs
            </Typography>
            <Infobox/> 
            <GsButton/>    
        </Stack>
    );
}

export default GetStarted;