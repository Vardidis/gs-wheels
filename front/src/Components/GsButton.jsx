import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

const GsButton = () => {
    return(   
        <Link to='customize-your-life' style={{ textDecoration: 'none' }}>             
            <Box                
                className={'shady'}
                sx={{                        
                    background: 'linear-gradient(90deg,rgba(216, 87, 4, 1) 0%, rgb(241, 157, 119) 50%, rgba(216, 87, 4, 1) 100%)',  
                    marginTop: 6,
                    borderRadius: 90,             
                    cursor: 'pointer',
                    boxShadow: 12,        
                    width: 200,
                    padding: '12px 32px',
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