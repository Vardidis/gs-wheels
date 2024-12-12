import React from "react";
import './Pages.css';
import { Stack, Box, Typography, keyframes, Grid, Skeleton } from "@mui/material";
import logo from '../assets/logo.png';
import GsButton from "../Components/GsButton";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import wheels from '../assets/wheelchairs.png';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "../Components/Context";
import { useState } from "react";
import { useEffect } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

library.add(faPhone, faEnvelope, faLocationDot);

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

const ColorBox = (props) => {
    return(
        <Box
            sx={{
                boxShadow: 12,
                borderRadius: 4,
                padding: 4,
                bgcolor: props.color,
                display: 'flex',
                alignItems: 'center',
                minHeight: {
                    lg: 200,
                    md: 200,
                    sm: 100,
                    xs: 50,
                    xxs: 50
                }
            }}
        >
            <Stack spacing={3}>
                <Typography fontSize={18} fontWeight={600}>
                    {props.title}
                </Typography>
                <Typography>
                    {props.text}
                </Typography>   
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Link to={props.link} state={{ anchor: props.anchor }} style={{ textDecoration: 'none' }}>
                        <Typography className="hoverable-btn" sx={{ borderRadius: 20, bgcolor: '#30343f', color: 'white', padding: 1, paddingLeft: 2, paddingRight: 2, cursor: 'pointer', boxShadow: 4 }}>
                            Δες περισσότερα
                        </Typography>
                    </Link>                
                </Box>      
            </Stack>       
        </Box>
    )
}

const GetStarted = () => {
    const {allTexts} = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        if(allTexts.length > 0){
            setLoading(false);
        }
    }, [allTexts]);

    return(
        <Box sx={{
            textAlign: 'center',            
            paddingBottom: 5    
        }}>            
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                alignItems: 'center',  
                paddingTop: 2,                             
            }}>
                <Box sx={{ paddingTop: 2, width: {lg: 75, md: 75, sm: 65, xs: 55, xxs: 45} }}>
                    <img src={logo} style={{ width: 'inherit' }} alt="gslogo"/>
                </Box>  
                <Box sx={{ width: {lg: 350, md: 350, sm: 300, xs: 250, xxs: 200} }}>
                    <img src={wheels} style={{ width: 'inherit' }} alt="gsfont"/>               
                </Box>              
                                    
            </Box>               
            <Box sx={{ paddingTop: 7, display: 'flex', justifyContent: 'center' }}>
                <Stack spacing={2} alignItems='center'>
                    {loading ? 
                        (
                            <Grid2 container rowGap={2} columnGap={2} sx={{ justifyContent: 'center' }}>
                                <Grid2 item size={6}>
                                    <Skeleton variant="rectangular" animation="wave" width={400} sx={{ boxShadow: 12, borderRadius: 4, padding: 4, display: 'flex', alignItems: 'center', minHeight: {lg: 200, md: 200, sm: 100, xs: 50, xxs: 50} }} />
                                </Grid2>
                                <Grid2 item size={6}>
                                    <Skeleton variant="rectangular" animation="wave" width={400} sx={{ boxShadow: 12, borderRadius: 4, padding: 4, display: 'flex', alignItems: 'center', minHeight: {lg: 200, md: 200, sm: 100, xs: 50, xxs: 50} }} />
                                </Grid2>
                                <Grid2 item size={6}>
                                    <Skeleton variant="rectangular" animation="wave" width={400} sx={{ boxShadow: 12, borderRadius: 4, padding: 4, display: 'flex', alignItems: 'center', minHeight: {lg: 200, md: 200, sm: 100, xs: 50, xxs: 50} }} />
                                </Grid2>
                                <Grid2 item size={6}>
                                    <Skeleton variant="rectangular" animation="wave" width={400} sx={{ boxShadow: 12, borderRadius: 4, padding: 4, display: 'flex', alignItems: 'center', minHeight: {lg: 200, md: 200, sm: 100, xs: 50, xxs: 50} }} />
                                </Grid2>
                            </Grid2>
                        )
                    : (
                        <Grid container
                            spacing={2} rowSpacing={2} justifyContent='center'
                            sx={{
                                animation: `${fadeIn} 1s ease-in-out`,
                                padding: {lg: 5, md: 5, sm: 3, xs: 1, xxs: 1},
                                maxWidth: 1400,
                                display: 'flex',
                               
                            }}
                        >
                            <Grid item xs={12} md={5}>
                                <ColorBox
                                    color={'rgb(240, 235, 240)'}
                                    title={allTexts[0].items[0].title}
                                    text={allTexts[0].items[0].text}
                                    link={'/service/education'}
                                    anchor={1}
                                />                        
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <ColorBox
                                    color={'rgb(240, 230, 245)'}
                                    title={allTexts[0].items[1].title}
                                    text={allTexts[0].items[1].text}
                                    link={'/service/life-coaching'}
                                />                             
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <ColorBox
                                    color={'rgb(240, 225, 230)'}
                                    title={allTexts[0].items[2].title}
                                    text={allTexts[0].items[2].text}
                                    link={'/service/interior-design'}
                                />                            
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <ColorBox
                                    color={'rgb(240, 225, 250)'}
                                    title={allTexts[0].items[3].title}
                                    text={allTexts[0].items[3].text}
                                    link={'/service/apokatastasi'}
                                    anchor={0}
                                />                           
                            </Grid>                                                                            
                        </Grid>     
                    )}
                    <GsButton/>
                </Stack>
            </Box>
        </Box>
    );
}

export default GetStarted;