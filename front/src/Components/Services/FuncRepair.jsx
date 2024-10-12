import React from "react";
import { Box,Stack, Typography, Grid } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from 'react-router-dom';

const CButton = (props) => {
    return(
        <Link to={props.link} state={{ anchor: props.anchor }} style={{ textDecoration: 'none' }}>
            <Box sx={{ padding: 2, borderRadius: 2, bgcolor: 'white', color: '#30343f', boxShadow: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>                                                  
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
                <Typography variant='h4'>
                    Customize Your Life
                </Typography>               
                <Grid container rowSpacing={3} columnSpacing={3} justifyContent='center' sx={{ maxWidth: 1400 }}>     
                    <Grid item xxs={12} md={6} lg={5}>
                        <Stack spacing={4} sx={{ padding: 5, borderRadius: 2, boxShadow: 12, bgcolor: '#30343f' }}>                            
                            <Typography fontSize={20} fontWeight={600} textAlign='center' sx={{ color: 'white' }}>
                                Λειτουργική Αποκατάσταση
                            </Typography>   
                            <Stack spacing={1}>
                                <CButton text={'Βασικές Έννοιες'} link={'/service/apokatastasi'} anchor={0}/> 
                                <CButton text={'Μοντέλα Αποκατάστασης'} link={'/service/apokatastasi'} anchor={1}/>  
                                <CButton text={'η GS και ο ρόλος της'} link={'/service/apokatastasi'} anchor={2}/>  
                            </Stack>                                             
                        </Stack>
                    </Grid>        
                    <Grid item xxs={12} md={6} lg={5}>
                        <Stack spacing={4} sx={{ padding: 5, borderRadius: 2, boxShadow: 12, bgcolor: '#30343f' }}>
                            <Typography fontSize={20} fontWeight={600} textAlign='center' sx={{ color: 'white' }}>
                                Εκπαίδευση
                            </Typography>   
                            <Stack spacing={1}>
                                <CButton text={'Βασικές Αρχές'} link={'/service/education'} anchor={0}/> 
                                <CButton text={'Προσαρμογή Αμαξιδίου'} link={'/service/education'} anchor={1}/>   
                            </Stack>                                                                  
                        </Stack>
                    </Grid>
                    <Grid item xxs={12} md={6} lg={5}>
                        <Stack spacing={4} sx={{ padding: 5, borderRadius: 2, boxShadow: 12, bgcolor: '#30343f' }}>
                            <Typography fontSize={20} fontWeight={600} textAlign='center' sx={{ color: 'white' }}>
                                Διαμόρφωση Χώρου
                            </Typography>    
                            <CButton text={'Η Σημασία της Προσαρμογής του Χώρου'} link={'/service/interior-design'}/>                                             
                        </Stack>
                    </Grid>
                    <Grid item xxs={12} md={6} lg={5}>
                        <Stack spacing={4} sx={{ padding: 5, borderRadius: 2, boxShadow: 12, bgcolor: '#30343f' }}>
                            <Typography fontSize={20} fontWeight={600} textAlign='center' sx={{ color: 'white' }}>
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