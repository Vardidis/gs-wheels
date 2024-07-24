import React from "react";
import rotsi from '../assets/r745.jpg';
import { Box } from "@mui/material";
import brakes from '../assets/brakes.jpg';
import back from '../assets/back.jpg';
import brakes2 from '../assets/brakes2.jpg';
import CanvasImage from "./CanvasImage";

const WheelcharCanvas = () => {
    return(
        <Box>
            <img src={rotsi} alt='' style={{
                maxWidth: '500px',
                borderRadius: 5,
            }}/>
            <CanvasImage index={'0'} image={brakes} rotate={'120deg'} left={'58%'} top={'40%'}/>
            <CanvasImage index={'1'} image={brakes2} rotate={'0deg'} left={'67%'} top={'69%'}/>
            <CanvasImage index={'2'} image={back} rotate={'0deg'} left={'50%'} top={'36%'}/>
        </Box>        
    );
}

export default WheelcharCanvas;