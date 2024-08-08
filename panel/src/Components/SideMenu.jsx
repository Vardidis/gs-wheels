import React from "react";
import { Box, Stack } from '@mui/material';
import MenuList from "./MenuList";


const SideMenu = () => {
    return(
        <Box component="section" sx={{ 
            width: {lg: '200px', md: '200px', sm: '70px', xs: '50px', xxs: '50px'},
            height: '100%',
            borderRight: '1px solid #f8f8f8',
            boxShadow: "2px 0px 2px -3px black",
            backgroundColor: '#f8f8f8', 
            flexShrink: 0,
            position: 'fixed',                   
            }}>
            <Stack 
                spacing={1}       
                alignItems="center"
                sx={{
                    height: '100vh'
                }}
            >          
                <MenuList/>      
            </Stack>                                                   
        </Box>
    );
}

export default SideMenu;