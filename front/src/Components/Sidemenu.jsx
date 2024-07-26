import React from "react";
import logo from '../assets/logo.jpg';
import {Box, Stack } from '@mui/material';
import Menulist from "./Menulist";
import MenuFooter from "./MenuFooter";

const Sidemenu = () => {
    return(
        <Box component="section" sx={{ 
            width: {lg: '200px', md: '200px', sm: '70px', xs: '70px'},
            height: '100%',
            borderRight: '1px solid grey',
            boxShadow: "2px 0px 2px -3px black",
            backgroundColor: 'rgb(245,245,245)', 
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
                <div>
                    <img src={logo} style={{ width: 50, padding: 10, cursor: 'pointer', borderRadius: 5 }} alt=""/>
                </div>                    
                <Menulist/>
                <MenuFooter/>
            </Stack>                                                   
        </Box>
    );
}

export default Sidemenu;