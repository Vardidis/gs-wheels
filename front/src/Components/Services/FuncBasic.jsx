import React, {useContext, useEffect, useState} from "react";
import { Box, Grid, Stack, Typography, keyframes, Tabs, Tab } from "@mui/material";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshakeAngle, faBook, faWheelchairMove, faLinkSlash } from '@fortawesome/free-solid-svg-icons';
import { Context } from "../Context";
import TextWindow from "./TextWindow";
import { styled } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';

library.add(faHandshakeAngle, faBook, faWheelchairMove, faLinkSlash);

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

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

const ColorBox = (props) => {
    return(
        <Box sx={{ boxShadow: 12, borderRadius: 5, padding: 4, bgcolor: props.color, display: 'flex', alignItems: 'center' }}>
            <Stack spacing={2}>
                {props.icon}                
                <Typography>
                    {props.text}
                </Typography> 
            </Stack>                        
        </Box>
    );
}

const ModelBox = (props) => {
    return(
        <Box sx={{ padding: 5, borderRadius: 2, bgcolor: '#30343f', color: 'white', maxWidth: 1400, boxShadow: 12 }}>
            <Stack spacing={3}>
                <Typography fontWeight={600} fontSize={16}>
                    {props.title}
                </Typography>
                <Typography fontSize={15}>
                    {props.text}
                </Typography>
            </Stack>                                
        </Box>
    );
}

const FuncBasic = () => {
    const {isDesktop, allTexts} = useContext(Context);
    const location = useLocation();
    const {anchor} = location.state || {};
    const iconSize = isDesktop ? 'xl' : '2xl'; 
    const [secValue, setSecValue] = useState(0);
    const [loading, setLoading] = useState(true);

    const boxSets = {
        display: 'flex',
        justifyContent: 'center',
        bgcolor: '#30343f',
        color: 'white',
        padding: 5,
        borderRadius: 3,
        border: '1px solid rgb(180, 180, 180)',
        boxShadow: 12,      
    }

    const handleChange = (newValue) => {
        setSecValue(newValue);
    };

    useEffect(()=>{        
        if(anchor){
            setSecValue(anchor);
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
        <Box sx={{
            height: '100vh',                   
        }}>
            <Stack spacing={6} sx={{ padding: {lg: 5, md: 5, sm: 3, xs: 1, xxs: 1}, borderRadius: 5 }}>           
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <SecTabs
                        value={secValue}
                        variant="scrollable"      
                        scrollButtons="auto"                                 
                        allowScrollButtonsMobile  
                    >
                        <SecTab label="Βασικές έννοιες" sx={{ fontWeight: 600, fontSize: 16, color: secValue === 0 ? 'orangered' : '#30343f' }} onClick={()=>handleChange(0)}/>
                        <SecTab label="Μοντέλα Αποκατάστασης" sx={{ fontWeight: 600, fontSize: 16, color: secValue === 1 ? 'orangered' : '#30343f' }} onClick={()=>handleChange(1)}/>
                        <SecTab label="Η GS Wheelchairs και ο ρόλος της" sx={{ fontWeight: 600, fontSize: 16, color: secValue === 2 ? 'orangered' : '#30343f' }} onClick={()=>handleChange(2)}/>
                    </SecTabs> 
                </Box>
                {secValue === 0 &&                                        
                    <Stack spacing={6} alignItems='center'>
                        <Box sx={{ bgcolor: '#30343f', padding: 3, borderRadius: 2, boxShadow: 4, maxWidth: 1400 }}>
                            <Typography sx={{ color: 'white' }}>
                                {allTexts[1].placeText}
                            </Typography>          
                        </Box>                                       
                        <Grid container spacing={2} justifyContent='center' sx={{ animation: `${fadeIn} 1s ease-in-out`, maxWidth: 1400 }}>                                                         
                            <Grid item xs={12} sm={6} md={5}>
                                <ColorBox
                                    color={'rgb(240, 235, 240)'}
                                    icon={<FontAwesomeIcon icon={faLinkSlash} size={iconSize} style={{ color: 'rgb(40, 40, 40)' }}/>}
                                    text={allTexts[1].items[0].text}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={5}>
                                <ColorBox
                                    color={'rgb(240, 230, 245)'}
                                    icon={<FontAwesomeIcon icon={faWheelchairMove} size={iconSize} style={{ color: 'rgb(40, 40, 40)' }}/>}
                                    text={allTexts[1].items[1].text}
                                />            
                            </Grid>
                            <Grid item xs={12} sm={6} md={5}>
                                <ColorBox
                                    color={'rgb(240, 225, 230)'}
                                    icon={<FontAwesomeIcon icon={faBook} size={iconSize} style={{ color: 'rgb(40, 40, 40)' }}/>}
                                    text={allTexts[1].items[2].text}
                                />   
                            </Grid>   
                            <Grid item xs={12} sm={6} md={5}>
                                <ColorBox
                                    color={'rgb(240, 225, 250)'}
                                    icon={<FontAwesomeIcon icon={faHandshakeAngle} size={iconSize} style={{ color: 'rgb(40, 40, 40)' }}/>}
                                    text={allTexts[1].items[3].text}
                                />   
                            </Grid>                                                                           
                        </Grid>                                                                                                          
                    </Stack>                 
                }
                {secValue === 1 &&
                    <Box>                                                         
                        <Grid container justifyContent='center' rowSpacing={3} columnSpacing={3}>
                            <Grid item xs={12} sm={6} lg={5}>
                                <ModelBox
                                    title={allTexts[2].items[0].title}
                                    text={allTexts[2].items[0].text}
                                />                                      
                            </Grid>
                            <Grid item xs={12} sm={6} lg={5}>
                                <ModelBox
                                    title={allTexts[2].items[1].title}
                                    text={allTexts[2].items[1].text}
                                />  
                            </Grid>   
                            <Grid item xs={12} sm={6} lg={5}> 
                                <ModelBox
                                    title={allTexts[2].items[2].title}
                                    text={allTexts[2].items[2].text}
                                />                                         
                            </Grid>
                            <Grid item xs={12} sm={6} lg={5}>   
                                <ModelBox
                                    title={allTexts[2].items[3].title}
                                    text={allTexts[2].items[3].text}
                                />                                         
                            </Grid>
                            <Grid item xs={12} sm={6} lg={5}>     
                                <ModelBox
                                    title={allTexts[2].items[4].title}
                                    text={allTexts[2].items[4].text}
                                />                                        
                            </Grid>                                                           
                        </Grid>                        
                    </Box>  
                }
                {secValue === 2 &&
                    <Stack spacing={5}>                                                   
                        <Stack spacing={15} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: '#30343f', padding: 5, borderRadius: 2, boxShadow: 4 }}>
                                <Typography sx={{ color: 'white' }}>
                                    {allTexts[3].placeText}
                                </Typography>          
                            </Box>
                            <Stack spacing={5}>
                                <Typography variant='h6' sx={{ fontWeight: 'bold', color: '#30343f', display: 'flex', justifyContent: 'center' }}>
                                    Η εταιρεία προσφέρει μια ολοκληρωμένη προσέγγιση που συνδυάζει τρεις βασικούς πυλώνες
                                </Typography>                              
                                <Grid container justifyContent='center' rowSpacing={2} columnSpacing={2}>  
                                    <Grid item xs={12} sm={6} lg={4}>                            
                                        <TextWindow title={allTexts[3].items[0].title} text={allTexts[3].items[0].text}/>
                                    </Grid>  
                                    <Grid item xs={12} sm={6} lg={4}>     
                                        <TextWindow title={allTexts[3].items[1].title} text={allTexts[3].items[1].text}/>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4}>   
                                        <TextWindow title={allTexts[3].items[2].title} text={allTexts[3].items[2].text}/>
                                    </Grid>
                                </Grid>                                                                                                                       
                            </Stack>
                            <Stack spacing={5}>
                                <Typography variant='h6' sx={{ fontWeight: 'bold', color: '#30343f', display: 'flex', justifyContent: 'center' }}>
                                    Γιατί να Επιλέξετε τη Λειτουργική Αποκατάσταση
                                </Typography>                                    
                                    <Box sx={{ width: '100%' }}>
                                        <Grid container justifyContent='center' rowSpacing={2} columnSpacing={2}>
                                            <Grid item xs={12} sm={6} lg={4}>                
                                                <Box sx={boxSets}>
                                                    <Typography sx={{ color: 'white' }}>
                                                        {allTexts[3].items2[0].text}
                                                    </Typography>          
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={6} lg={4}>           
                                            <Box sx={boxSets}>
                                                <Typography sx={{ color: 'white' }}>
                                                    {allTexts[3].items2[1].text}
                                                </Typography>          
                                            </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={6} lg={4}>         
                                                <Box sx={boxSets}>
                                                    <Typography sx={{ color: 'white' }}>
                                                        {allTexts[3].items2[2].text}
                                                    </Typography>          
                                                </Box>   
                                            </Grid>
                                        </Grid>
                                    </Box>                                                                                                                   
                            </Stack>                                                
                        </Stack>                                 
                    </Stack>                                      
                }
            </Stack>                   
        </Box>                      
    );
}

export default FuncBasic;