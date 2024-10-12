import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { Context } from "./Context";

const GsButton = () => {
    return(   
        <Link to='customize-your-life' style={{ textDecoration: 'none' }}>             
            <Box sx={{     
                bgcolor: '#30343f',  
                borderRadius: 10,             
                cursor: 'pointer',
                boxShadow: 12,        
                width: 250,
                minHeight: 65,
                display: 'flex',
                justifyContent: 'center' ,
                alignItems: 'center',
                color: 'white'
            }}>                
            <Typography fontSize={20} fontWeight={600}>
                Customize Your Life
            </Typography>             
            </Box>
        </Link>  
    );
}

export default GsButton;