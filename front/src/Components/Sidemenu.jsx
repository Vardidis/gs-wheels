import React from "react";
import logo from '../assets/logo.png';
import {Box, Stack } from '@mui/material';
import Menulist from "./Menulist";
import MenuFooter from "./MenuFooter";
import { Link } from 'react-router-dom';

const Sidemenu = (props) => {
    const iconSize = props.desktop ? 180 : 40;
    return(
        <Box component="section" sx={{ 
            width: {lg: '200px', md: '200px', sm: '50px', xs: '50px', xxs: '50px'},
            height: '100%',
            boxShadow: 4,
            backgroundColor: 'rgb(235, 235, 240)', 
            flexShrink: 0,
            position: 'fixed',     
            overflow: 'hidden'
            }}>
            <Stack 
                justifyContent="space-between"
                alignItems="center"
                sx={{
                    height: '100vh'
                }}
            >   
                <Stack spacing={5}>
                    <Link to='/'>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={logo} style={{ width: iconSize, padding: 10, cursor: 'pointer', borderRadius: 5 }} alt=""/>
                        </Box>    
                    </Link>        
                </Stack>                                                                                                     
                <Menulist/>
                <MenuFooter/>
            </Stack>                                                   
        </Box>
    );
}

export default Sidemenu;