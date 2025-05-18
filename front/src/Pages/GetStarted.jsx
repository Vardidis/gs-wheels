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
import Header from '../assets/HEADER-Arxiki_UP.jpg'
import Box1Image from '../assets/PHOTO-Plaisio_1.png';
import Box2Image from '../assets/PHOTO-Plaisio_2.png';
import Box3Image from '../assets/PHOTO-Plaisio_3.png';
import Box4Image from '../assets/PHOTO-Plaisio_4.png';
import MainImage from '../assets/BACKGROUND-Arxiki.jpg';
import LoadingComp from "../Components/LoadingComp";

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
    const {isDesktop} = useContext(Context);
    return(
        <Grid item
            size={{xs: 12, md: 5, lg: 6}}            
            sx={{
                bgcolor: 'white',
                boxShadow: isDesktop && 12,
                borderRadius: isDesktop ? 4 : 3,
                padding: 2,
                backgroundImage: `url(${props.image})`,                            
                backgroundRepeat: 'no-repeat',        
                backgroundSize: 'cover',                        
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
                    fontSize={isDesktop ? 18 : 17}
                    fontWeight={600}
                    textAlign={'right'}
                    sx={{
                        color: '#d85704',
                        paddingLeft: isDesktop ? 0 : 5,
                        lineHeight: isDesktop ? '150%' : '120%'
                    }}
                >
                    {props.title}
                </Typography>
                <Typography
                    textAlign={'right'}
                    fontSize={isDesktop ? 16 : 13}
                    sx={{
                        paddingLeft: isDesktop ? 18 : 18,
                        lineHeight: isDesktop ? '150%' : '120%'
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
    
    if(loading){
        return(
            <LoadingComp/>
        )
    }
    
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
                    <Grid container
                        columnSpacing={2}
                        rowSpacing={2}
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
                    <GsButton/>                     
                </Stack>
            </Box>                    
        </Stack>
    );
}

export default GetStarted;