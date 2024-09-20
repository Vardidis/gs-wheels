import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import bg2 from '../assets/bgimg2.jpg';

const GsButton = () => {
    return(   
        <Link to='/service/apokatastasi' style={{ textDecoration: 'none' }}>             
            <Box sx={{
                backgroundColor: 'black',
                borderRadius: 2,
                height: {xl: 100, lg: 100, md: 100, sm: 100, xs: 80, xxs: 80},
                width: '100%',
                border: '1px solid #f68b24',
                cursor: 'pointer',
                boxShadow: '2px 3px 3px -2px black',
                overflow: 'hidden'
            }}>
                <img src={bg2} className='partbox-img' alt='' style={{ height: 100, width: 'inherit' }}/>
                <Typography 
                    fontSize={{lg: 34, md: 28, sm: 28, xs: 24, xxs: 22}}
                    fontWeight={600}
                    sx={{
                        color: 'white',
                        position: 'relative',
                        transform: 'translate(-50%, -50%)',
                        left: '50%',
                        top: {xl: '-55%', lg: '-55%', md: '-55%', sm: '-55%', xs: '-80%', xxs: '-80%'},
                        padding: 1,
                        paddingLeft: 3,
                        paddingRight: 3
                    }}
                    className='title'
                >
                    Customize Your Life
                </Typography>
            </Box>
        </Link>  
    );
}

export default GsButton;