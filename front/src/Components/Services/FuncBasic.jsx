import React, {useContext, useEffect, useState} from "react";
import { Box, Grid, Stack, Typography, keyframes, Tabs, Tab, Divider } from "@mui/material";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshakeAngle, faBook, faWheelchairMove, faLinkSlash } from '@fortawesome/free-solid-svg-icons';
import { Context } from "../Context";
import TextWindow from "./TextWindow";
import { styled } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import Background from  '../../assets/BACKGROUND-Arxiki.jpg';
import Header from '../../assets/HEADER-Arxiki_UP.jpg';

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
        color: '#d85704',
        },       
    }),
);

const ColorBox = (props) => {
    return(
        <Grid item
            xs={12}
            sm={5.5}
            sx={{
                boxShadow: 12,
                borderRadius: 5,
                padding: 4,
                bgcolor: props.color,
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <Stack spacing={2}>
                {props.icon}                
                <Typography>
                    {props.text}
                </Typography> 
            </Stack>                        
        </Grid>
    );
}

const ModelBox = (props) => {
    return(
        <Stack  
            direction={'row'}
            spacing={1}
            sx={{
                color: '#30343f',
                maxWidth: 1200
            }}
        >
            <Divider
                orientation={'vertical'}
                sx={{
                    border: '1px solid #d85704',                          
                }}
            />
            <Stack
                spacing={2}
                justifyContent={'space-between'}
            >
                <Typography
                    fontWeight={600}
                    fontSize={20}
                    sx={{
                        color: '#d85704'
                    }}
                >
                    {props.title}
                </Typography>
                <Typography fontSize={15}>
                    {props.text}
                </Typography>
            </Stack>                                
        </Stack>
    );
}

const FuncBasic = () => {
    const {isDesktop, allTexts} = useContext(Context);
    const location = useLocation();
    const {anchor} = location.state || {};
    const iconSize = isDesktop ? '2xl' : '2xl'; 
    const [secValue, setSecValue] = useState(0);
    const [loading, setLoading] = useState(true);

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
        <Box
            sx={{
                backgroundImage: `url(${Background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <img
                src={Header}
                style={{
                    width: '100%'
                }}
            />
            <Stack spacing={4} sx={{ padding: {lg: 5, md: 5, sm: 3, xs: 1, xxs: 1} }}>           
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <SecTabs
                        value={secValue}
                        variant="scrollable"      
                        scrollButtons="auto"                                 
                        allowScrollButtonsMobile  
                    >
                        <SecTab label="Βασικές έννοιες" sx={{ fontWeight: 600, fontSize: 16, color: secValue === 0 ? '#d85704' : '#30343f' }} onClick={()=>handleChange(0)}/>
                        <SecTab label="Μοντέλα Αποκατάστασης" sx={{ fontWeight: 600, fontSize: 16, color: secValue === 1 ? '#d85704' : '#30343f' }} onClick={()=>handleChange(1)}/>
                        <SecTab label="Η GS Wheelchairs και ο ρόλος της" sx={{ fontWeight: 600, fontSize: 16, color: secValue === 2 ? '#d85704' : '#30343f' }} onClick={()=>handleChange(2)}/>
                    </SecTabs> 
                </Box>
                {secValue === 0 &&                                        
                    <Stack
                        spacing={6}                                            
                    >
                        <Box sx={{ color: '#30343f', maxWidth: 1200 }}>
                            <Typography>
                                {allTexts[1].placeText}
                            </Typography>          
                        </Box>                                       
                        <Grid container
                            rowGap={3}
                            columnGap={3}
                            justifyContent={'center'}
                            sx={{
                                animation: `${fadeIn} 1s ease-in-out`,
                                maxWidth: 1200
                            }}
                        >                                                                                    
                            <ColorBox
                                color={'rgb(255, 255, 255)'}
                                icon={<FontAwesomeIcon icon={faLinkSlash} size={iconSize} style={{ color: '#d85704' }}/>}
                                text={allTexts[1].items[0].text}
                            />                           
                            <ColorBox
                                color={'rgb(255, 255, 255)'}
                                icon={<FontAwesomeIcon icon={faWheelchairMove} size={iconSize} style={{ color: '#d85704' }}/>}
                                text={allTexts[1].items[1].text}
                            />                                      
                            <ColorBox
                                color={'rgb(255, 255, 255)'}
                                icon={<FontAwesomeIcon icon={faBook} size={iconSize} style={{ color: '#d85704' }}/>}
                                text={allTexts[1].items[2].text}
                            />                              
                            <ColorBox
                                color={'rgb(255, 255, 255)'}
                                icon={<FontAwesomeIcon icon={faHandshakeAngle} size={iconSize} style={{ color: '#d85704' }}/>}
                                text={allTexts[1].items[3].text}
                            />                                                                                                      
                        </Grid>                                                                                                          
                    </Stack>                 
                }
                {secValue === 1 &&                                                                      
                    <Grid container
                        rowSpacing={8}
                        columnSpacing={6}
                        sx={{
                            width: '100%'                           
                        }}
                    >
                        <Grid item
                            xs={12}
                            sm={6}                                    
                        >
                            <ModelBox
                                title={allTexts[2].items[0].title}
                                text={allTexts[2].items[0].text}
                            />                                      
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <ModelBox
                                title={allTexts[2].items[1].title}
                                text={allTexts[2].items[1].text}
                            />  
                        </Grid>   
                        <Grid item xs={12} sm={6}> 
                            <ModelBox
                                title={allTexts[2].items[2].title}
                                text={allTexts[2].items[2].text}
                            />                                         
                        </Grid>
                        <Grid item xs={12} sm={6}>   
                            <ModelBox
                                title={allTexts[2].items[3].title}
                                text={allTexts[2].items[3].text}
                            />                                         
                        </Grid>
                        <Grid item xs={12} sm={6}>     
                            <ModelBox
                                title={allTexts[2].items[4].title}
                                text={allTexts[2].items[4].text}
                            />                                        
                        </Grid>                                                           
                    </Grid>                                          
                }
                {secValue === 2 &&
                    <Stack>                                                   
                        <Stack spacing={6} sx={{ display: 'flex', justifyContent: 'center' }}>                            
                            <Typography sx={{ color: '#30343f' }}>
                                {allTexts[3].placeText}
                            </Typography>                                      
                            <Stack spacing={3}>
                                <Typography
                                    variant='h6'
                                    textAlign={'center'}
                                    sx={{
                                        fontWeight: 'bold',
                                        color: '#30343f'                                    
                                    }}
                                >
                                    Η εταιρεία προσφέρει μια ολοκληρωμένη προσέγγιση που συνδυάζει τρεις βασικούς πυλώνες
                                </Typography>                              
                                <Grid container
                                    justifyContent='center'
                                    rowSpacing={2}
                                    columnSpacing={2}
                                >  
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
                            <Stack spacing={3}>
                                <Typography
                                    variant='h6'
                                    textAlign={'center'}
                                    sx={{
                                        fontWeight: 'bold',
                                        color: '#30343f'
                                    }}
                                >
                                    Γιατί να Επιλέξετε τη Λειτουργική Αποκατάσταση
                                </Typography>                                                                        
                                <Grid container
                                    justifyContent='center'
                                    rowSpacing={2}
                                    columnSpacing={2}
                                >
                                    <Grid item xs={12} sm={6} lg={4}>                                                                                   
                                        <Typography sx={{ color: '30343f' }}>
                                            {allTexts[3].items2[0].text}
                                        </Typography>                                                                                                                                                     
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4}>                                              
                                        <Typography sx={{ color: '30343f' }}>
                                            {allTexts[3].items2[1].text}
                                        </Typography>                                            
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4}>                                                 
                                        <Typography sx={{ color: '30343f' }}>
                                            {allTexts[3].items2[2].text}
                                        </Typography>                                                 
                                    </Grid>
                                </Grid>                                                                                                                                                      
                            </Stack>                                                
                        </Stack>                                 
                    </Stack>                                      
                }
            </Stack>                   
        </Box>                      
    );
}

export default FuncBasic;