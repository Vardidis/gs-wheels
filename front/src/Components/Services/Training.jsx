import { Box, Stack, Tabs, Tab } from "@mui/material";
import React, { useEffect, useState } from "react";
import Basics from "./Basics";
import CustomWheels from "./CustomWheels";
import { styled } from '@mui/material/styles';
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";

const SecTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',        
    },   
});
  
const SecTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',                
        color: '#30343f',
        '&.Mui-selected': {
        color: 'orangered',
        },       
    }),
);

const Training = () => {
    const {allTexts} = useContext(Context);
    const [selection, setSelection] = useState(0);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const {anchor} = location.state || {};

    const handleSecChange = (newValue) => {
        setSelection(newValue);
    };

    useEffect(()=>{        
        if(anchor){
            setSelection(anchor);
        }

        if(allTexts.length > 0){
            setLoading(false);
        }
    }, [allTexts])

    if(loading){
        return(
            <>Loading...</>
        )
    }

    return(
        <Box>             
            <Stack spacing={3} alignItems='center' sx={{padding: 2 }}>
                <Box>        
                    <SecTabs
                        value={selection}
                        variant="scrollable" 
                        scrollButtons="auto"                                      
                        allowScrollButtonsMobile  
                    >
                        <SecTab label='Βασικές Αρχές' sx={{ fontWeight: 600, fontSize: 16, color: selection === 0 ? 'orangered' : '#30343f' }} onClick={()=>handleSecChange(0)}/>
                        <SecTab label='Προσαρμογή Αμαξιδίου' sx={{ fontWeight: 600, fontSize: 16, color: selection === 1 ? 'orangered' : '#30343f' }} onClick={()=>handleSecChange(1)}/>                            
                    </SecTabs>  
                </Box>                                                                                                                 
            </Stack>              
            {selection === 0 &&    
                <Basics/>           
            }       
            {selection === 1 &&
                <CustomWheels/>
            }          
        </Box>               
    );
}

export default Training;