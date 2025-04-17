import React, { useContext } from "react";
import Servicebox from "../Components/Servicebox";
import { Stack, Box } from "@mui/material";
import { Context } from "../Components/Context";
import BackgroundImage from '../assets/YPHRESIES-Background.png';

const Services = () => {
    const {fullHeight, isDesktop} = useContext(Context);

    return(
        <Box
            sx={{
                backgroundImage: `url(${BackgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >               
            <Stack  
                sx={{
                    paddingTop: isDesktop && 5,
                    overflow: 'auto',
                    maxHeight: fullHeight,
                    paddingBottom: 5
                }}
            >                
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Servicebox/>
                </Box>                
            </Stack>
        </Box>        
    );
}

export default Services;