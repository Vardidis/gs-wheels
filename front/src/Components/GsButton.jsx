import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

const GsButton = () => {
    return(   
        <Link to='customize-your-life' style={{ textDecoration: 'none' }}>             
            <Box
                className={'read-more'}
                sx={{     
                    bgcolor: '#222222',  
                    borderRadius: 10,             
                    cursor: 'pointer',
                    boxShadow: 12,        
                    width: 250,
                    minHeight: 65,
                    display: 'flex',
                    justifyContent: 'center' ,
                    alignItems: 'center',
                    color: 'white'
                }}
            >                
            <Typography fontSize={20} fontWeight={600}>
                Customize Your Life
            </Typography>             
            </Box>
        </Link>  
    );
}

export default GsButton;