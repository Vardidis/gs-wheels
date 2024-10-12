import React, { useState } from "react";
import { Box, Tabs, Tab, Stack, Typography, Grid, Button } from "@mui/material";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHandshakeAngle, faBook, faWheelchairMove, faLinkSlash } from '@fortawesome/free-solid-svg-icons';
import { styled } from '@mui/material/styles';
import FuncBasic from "./FuncBasic";
import LifeCoaching from "./LifeCoaching";
import Interior from './Interior';
import Training from "./Training";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from 'react-router-dom';

const CButton = (props) => {
    return(
        <Link to={props.link} style={{ textDecoration: 'none' }}>
            <Box sx={{ padding: 2, borderRadius: 2, bgcolor: '#30343f', color: 'white', boxShadow: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>                                                  
                <Typography>
                    {props.text}
                </Typography>
                <PlayArrowIcon/>                                              
            </Box>
        </Link>
    );
}

const FuncRepair = () => {
    return(        
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: 5 }}>
            <Stack spacing={4} alignItems='center'>
                <Typography variant='h5'>
                    Customize Your Life
                </Typography>               
                <Grid container rowSpacing={3} columnSpacing={3} justifyContent='center' sx={{ maxWidth: 1400 }}>     
                    <Grid item xxs={12} md={6} lg={5}>
                        <Stack spacing={4} sx={{ padding: 5, borderRadius: 2, boxShadow: 8, bgcolor: 'rgb(240, 235, 240)' }}>                            
                            <Typography fontSize={18} fontWeight={600} textAlign='center'>
                                Λειτουργική Αποκατάσταση
                            </Typography>   
                            <Stack spacing={1}>
                                <CButton text={'Βασικές Έννοιες'} link={'/service/apokatastasi'}/> 
                                <CButton text={'Μοντέλα Αποκατάστασης'} link={'/service/apokatastasi'}/>  
                            </Stack>                                             
                        </Stack>
                    </Grid>        
                    <Grid item xxs={12} md={6} lg={5}>
                        <Stack spacing={4} sx={{ padding: 5, borderRadius: 2, boxShadow: 8, bgcolor: 'rgb(240, 230, 245)' }}>
                            <Typography fontSize={18} fontWeight={600} textAlign='center'>
                                Εκπαίδευση
                            </Typography>   
                            <Stack spacing={1}>
                                <CButton text={'Βασικές Αρχές'} link={'/service/education'}/> 
                                <CButton text={'Προσαρμογή Αμαξιδίου'} link={'/service/education'}/>   
                            </Stack>                                                                  
                        </Stack>
                    </Grid>
                    <Grid item xxs={12} md={6} lg={5}>
                        <Stack spacing={4} sx={{ padding: 5, borderRadius: 2, boxShadow: 8, bgcolor: 'rgb(240, 225, 230)' }}>
                            <Typography fontSize={18} fontWeight={600} textAlign='center'>
                                Διαμόρφωση Χώρου
                            </Typography>    
                            <CButton text={'Η Σημασία της Προσαρμογής του Χώρου'} link={'/service/interior-design'}/>                                             
                        </Stack>
                    </Grid>
                    <Grid item xxs={12} md={6} lg={5}>
                        <Stack spacing={4} sx={{ padding: 5, borderRadius: 2, boxShadow: 8, bgcolor: 'rgb(240, 225, 250)' }}>
                            <Typography fontSize={18} fontWeight={600} textAlign='center'>
                                Συμβουλευτική
                            </Typography>    
                            <CButton text={'Ψυχοκοινωνική Στήριξη'} link={'/service/life-coaching'}/>                                                   
                        </Stack>
                    </Grid>                                                 
                </Grid>
            </Stack>                        
        </Box>
    );
}

export default FuncRepair;