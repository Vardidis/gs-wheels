import React, { useContext } from "react";
import { Context } from "./Context";
import logo from '../assets/logo.jpg';
import {Box, Stack } from '@mui/material';
import { Global } from '@emotion/react';
import Menulist from "./Menulist";
import MenuFooter from "./MenuFooter";

const Sidemenu = () => {
    const {isDesktop} = useContext(Context);

    if(isDesktop){
        return(
            <>            
                <Stack 
                    justifyContent="space-between"
                    alignItems="center"
                    height="100vh"
                >
                    <div>
                        <img src={logo} style={{width: 50, padding: 10, cursor: 'pointer'}} alt=""/>
                    </div>                    
                    <Menulist/>
                    <MenuFooter/>
                </Stack>                                                   
            </>
        )
    }else{
        return(
            <>
                <Global
                    styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(20% - ${56}px)`,
                        overflow: 'visible',
                    },
                    }}
                />
                <Box component="section"
                    sx={{           
                        width: 70,
                        height: '100vh',
                        borderRight: '1px solid grey',
                    }}>
                    <Stack 
                        justifyContent="space-between"
                        alignItems="center"
                        height="93vh"
                    >
                        <img src={logo} style={{width: 50, padding: 4}} alt=""/>
                        <Menulist/>
                        <MenuFooter/>
                    </Stack>                    
                </Box>                
            </>            
        );
    }
}

export default Sidemenu;