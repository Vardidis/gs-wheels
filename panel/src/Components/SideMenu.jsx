import React from "react";
import { Box } from '@mui/material';
import MenuList from "./MenuList";


const SideMenu = () => {
    return(
        <Box sx={{ 
            width: '100%',
            height: 50,
            boxShadow: "2px 0px 2px -3px black",
            backgroundColor: '#30343f', 
            position: 'fixed', 
            boxShadow: 8,
            zIndex: 1              
            }}>      
                <MenuList/>                                                            
        </Box>
    );
}

export default SideMenu;