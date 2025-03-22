import React from "react";
import './Pages.css';
import { Stack, Box, Typography, keyframes, Grid, Skeleton } from "@mui/material";
import GsButton from "../Components/GsButton";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "../Components/Context";
import { useState } from "react";
import { useEffect } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Header from '../assets/HEADER-Arxiki_UP.jpg'
import Box1Image from '../assets/PHOTO-Plaisio_1.png';
import Box2Image from '../assets/PHOTO-Plaisio_2.png';
import Box3Image from '../assets/PHOTO-Plaisio_3.png';
import Box4Image from '../assets/PHOTO-Plaisio_4.png';
import MainImage from '../assets/BACKGROUND-Arxiki.jpg';

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
        <Grid item
            xs={12}
            md={5}
            sx={{
                bgcolor: 'white',
                boxShadow: 12,
                borderRadius: 4,
                padding: 2,
                backgroundImage: `url(${props.image})`,
                backgroundSize: 'cover',                
                backgroundRepeat: 'no-repeat',                               
                overflow: 'hidden'
            }}
        >       
            <Stack
                spacing={2}
                alignItems={'end'}
                justifyContent={'space-between'}
                sx={{
                    height: '100%'
                }}
            >
                <Typography
                    fontSize={18}
                    fontWeight={600}
                    sx={{
                        color: '#d85704'
                    }}
                >
                    {props.title}
                </Typography>
                <Typography
                    textAlign={'right'}
                    sx={{
                        paddingLeft: 18
                    }}
                >
                    {props.text}
                </Typography>   
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Link to={props.link} state={{ anchor: props.anchor }} style={{ textDecoration: 'none' }}>
                        <Typography className="hoverable-btn" sx={{ borderRadius: 1, bgcolor: '#7e7e7e', color: 'white', padding: 1, paddingLeft: 2, paddingRight: 2, cursor: 'pointer', boxShadow: 4 }}>
                            Δες περισσότερα
                        </Typography>
                    </Link>                
                </Box>      
            </Stack>                  
        </Grid>
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
        <Stack
            spacing={8}
            alignItems={'center'}
            sx={{
                textAlign: 'center',            
                paddingBottom: 5,
                backgroundImage: `url(${MainImage})`,
                backgroundSize: 'cover',                
                backgroundRepeat: 'no-repeat',  
                backgroundPosition: 'center',       
            }}
        >            
            <img
                src={Header}
                style={{
                    width: '100%'
                }}
            />           
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
                            columnGap={2}
                            rowGap={2}
                            justifyContent='center'
                            sx={{
                                animation: `${fadeIn} 1s ease-in-out`,
                                padding: 1,
                                maxWidth: 1800,
                                display: 'flex',
                               
                            }}
                        >
                                <ColorBox                                   
                                    title={allTexts[0].items[0].title}
                                    text={allTexts[0].items[0].text}
                                    link={'/service/education'}
                                    anchor={1}
                                    image={Box1Image}
                                />                                                                               
                                <ColorBox                                    
                                    title={allTexts[0].items[1].title}
                                    text={allTexts[0].items[1].text}
                                    link={'/service/life-coaching'}
                                    image={Box2Image}
                                />                                                                                    
                                <ColorBox                                    
                                    title={allTexts[0].items[2].title}
                                    text={allTexts[0].items[2].text}
                                    link={'/service/interior-design'}
                                    image={Box3Image}
                                />                                                                                
                                <ColorBox                                    
                                    title={allTexts[0].items[3].title}
                                    text={allTexts[0].items[3].text}
                                    link={'/service/apokatastasi'}
                                    anchor={0}
                                    image={Box4Image}
                                />    
                            </Grid>                       
                    )}                    
                </Stack>
            </Box>
            <GsButton/>
        </Stack>
    );
}

export default GetStarted;