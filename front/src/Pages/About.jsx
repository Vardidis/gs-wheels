import React from "react";
import AboutSlider from '../Components/AboutSlider';
import { Box } from "@mui/material";

const About = () => {
    return(
        <Box
            sx={{
                width: '100%',
                margin: '48px 0px'
            }}
        >
            <AboutSlider/>
        </Box>
    )
}

export default About;