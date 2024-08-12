import React from "react";
import logo from '../assets/logo.jpg';
import {Box, Stack } from '@mui/material';
import Menulist from "./Menulist";
import MenuFooter from "./MenuFooter";

const Sidemenu = (props) => {
    const iconSize = props.desktop ? 50 : 40;
    return(
        <Box component="section" sx={{ 
            width: {lg: '200px', md: '200px', sm: '50px', xs: '50px', xxs: '50px'},
            height: '100%',
            borderRight: '1px solid #f8f8f8',
            boxShadow: "2px 0px 2px -3px black",
            backgroundColor: '#f8f8f8', 
            flexShrink: 0,
            position: 'fixed',                   
            }}>
            <Stack 
                justifyContent="space-between"
                alignItems="center"
                sx={{
                    height: '100vh'
                }}
            >
                <Box>
                    <img src={logo} style={{ width: iconSize, padding: 10, cursor: 'pointer', borderRadius: 5 }} alt=""/>
                </Box>                    
                <Menulist/>
                <MenuFooter/>
            </Stack>                                                   
        </Box>
    );
}

export default Sidemenu;