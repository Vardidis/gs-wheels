import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

const GsButton = () => {
    return(        
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Link to='/services' style={{ textDecoration: 'none' }}>
                <Typography className="customlife" padding={2} fontSize={{lg: 30, md: 28, sm: 26, xs: 24, xxs: 16}} fontWeight={600} color='white' sx={{ border: '1px solid green', borderRadius: 3, width: {lg: 785, md: 635, sm: 420, xs: 290, xxs: 170}, cursor: 'pointer', bgcolor: "orangered", boxShadow: '1px 2px 3px -2px black' }}>
                    Customize Your Life
                </Typography>
            </Link>
        </Box>        
    );
}

export default GsButton;