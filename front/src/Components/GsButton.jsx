import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import bg2 from '../assets/bgimg2.jpg';

const GsButton = () => {
    return(          
        <Box sx={{
            backgroundColor: 'black',
            borderRadius: 2,
            height: 100,
            width: {xl: 1200, lg: 820, md: 635, sm: 650, xs: 290, xxs: 170},
            border: '1px solid orangered',
            cursor: 'pointer',
            boxShadow: '2px 3px 3px -2px black',
            overflow: 'hidden'
        }}>
            <img src={bg2} className='partbox-img' alt='' style={{ height: 100, width: 'inherit' }}/>
            <Typography fontSize={{lg: 34, md: 28, sm: 28, xs: 24, xxs: 16}} fontWeight={600} sx={{ color: 'white', position: 'relative', transform: 'translate(-50%, -50%)', left: '50%', top: '-55%', padding: 1, paddingLeft: 3, paddingRight: 3 }}>
                Customize Your Life
            </Typography>
        </Box>
    );
}

export default GsButton;

// position: 'relative', transform: 'translate(-50%, -50%)', left: '50%', top: '-55%'