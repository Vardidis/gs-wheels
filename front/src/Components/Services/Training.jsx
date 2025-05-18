import { Box, Stack, Tabs, Tab, Skeleton, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Basics from "./Basics";
import CustomWheels from "./CustomWheels";
import { styled } from '@mui/material/styles';
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";
import Header from '../../assets/HEADER-AboutUs_UP.jpg';
import Background from '../../assets/BACKGROUND-Arxiki.jpg';

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
        color: '#d85704',
        },       
    }),
);

const Training = () => {
    const [selection, setSelection] = useState(0);    
    const location = useLocation();
    const {anchor} = location.state || {};
    const {allTexts} = useContext(Context);
    const [loading, setLoading] = useState(true);

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
            <Grid container>
                <Grid item>
                    <Skeleton variant="rectangular" sx={{ boxShadow: 12, borderRadius: 4, padding: 4, display: 'flex', alignItems: 'center', minHeight: {lg: 200, md: 200, sm: 100, xs: 50, xxs: 50} }} />
                </Grid>
            </Grid>
        )
    }

    return(
        <Stack
            spacing={1}
            alignItems={'center'}
            sx={{
                backgroundImage: `url(${Background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',    
                paddingBottom: 12            
            }}
        >             
            <img
                src={Header}
                style={{
                    width: '100%'
                }}
            />
            <Stack spacing={3} alignItems='center'>
                <Box>        
                    <SecTabs
                        value={selection}
                        variant="scrollable" 
                        scrollButtons="auto"                                      
                        allowScrollButtonsMobile  
                    >
                        <SecTab label='Βασικές Αρχές' sx={{ fontWeight: 600, fontSize: 16, color: selection === 0 ? '#d85704' : '#30343f' }} onClick={()=>handleSecChange(0)}/>
                        <SecTab label='Προσαρμογή Αμαξιδίου' sx={{ fontWeight: 600, fontSize: 16, color: selection === 1 ? '#d85704' : '#30343f' }} onClick={()=>handleSecChange(1)}/>                            
                    </SecTabs>  
                </Box>                                                                                                                 
            </Stack>              
            {selection === 0 &&    
                <Basics/>           
            }       
            {selection === 1 &&
                <CustomWheels/>
            }          
        </Stack>               
    );
}

export default Training;