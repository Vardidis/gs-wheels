import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import { Box, Button } from '@mui/material';

const RedirectBox = (props) => {
    return(
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: {xl: props.pd, lg: 0, md: 0, sm: 0, xs: 1, xxs: 1}, paddingRight: {xl: props.pd, lg: 0, md: 0, sm: 0, xs: 1, xxs: 1}, paddingTop: 3, paddingBottom: 4}}>
            <Link to={props.back}>
                <Button variant="contained" startIcon={<ArrowBackIcon/>} sx={{ width: {sm: 150, xs: 100, xxs: 125}, fontSize: {xl: 16, lg: 14, md: 14, sm: 12, xs: 12, xxs: 10} }}>Πισω</Button>
            </Link>   
            {!props.last &&   
                <Link to={props.forward}>
                    <Button variant="contained" endIcon={<ArrowForwardIcon/>} sx={{ width: {sm: 150, xs: 100, xxs: 100}, fontSize: {xl: 16, lg: 14, md: 14, sm: 12, xs: 12, xxs: 10} }}>Επομενο</Button>
                </Link>
            }
        </Box>
    );
}

export default RedirectBox;