import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

const GsButton = () => {
    return(   
        <Link to='customize-your-life' style={{ textDecoration: 'none' }}>             
            <Box                
                className={'shady'}
                sx={{                        
                    bgcolor: '#d85704',  
                    marginTop: 6,
                    borderRadius: 3,             
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
            <Typography fontSize={18} fontWeight={600}>
                Customize Your Life
            </Typography>             
            </Box>
        </Link>  
    );
}

export default GsButton;