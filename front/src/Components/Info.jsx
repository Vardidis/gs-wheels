import React from "react";
import { Box, Stack, Typography } from '@mui/material';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
library.add(faPhone, faEnvelope, faLocationDot);

const Info = () => {
    return(
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: {xl: 750, lg: 550, md: 550, sm: 550, xs: 350, xxs: 325},
            bgcolor: 'theme.light',
            boxShadow: 24,
            p: {xl: 4, lg: 4, md: 4, sm: 4, xs: 2, xxs: 2},
            border: "none",
            textAlign: "center",
            borderRadius: 2,
            height: 'fit-content',
            overflowY: 'auto',
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'center',}}>
                <Stack spacing={4}>
                    <Stack direction='row' spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ boxShadow: '1px 2px 3px -2px black', backgroundColor: 'black', opacity: 0.8, width: 40, height: 40, borderRadius: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid orangered' }}>
                            <FontAwesomeIcon icon={faPhone} size='lg' style={{ color: 'white' }}/>
                        </Box>                        
                        <Typography fontSize={22} fontWeight={600}>
                            +30 2310 428949
                        </Typography>
                    </Stack>
                    <Stack spacing={2} direction='row' sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ boxShadow: '1px 2px 3px -2px black', backgroundColor: 'black', opacity: 0.8, width: 40, height: 40, borderRadius: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid orangered' }}>
                            <FontAwesomeIcon icon={faEnvelope} size='lg' style={{ color: 'white' }}/>
                        </Box>    
                        <Box>
                            <Typography fontSize={20} fontWeight={600}>
                                gswheelchairs@gmail.com
                            </Typography>
                            <Typography fontSize={20} fontWeight={600}>
                                info@gswheelchairs.gr
                            </Typography>
                        </Box>                                           
                    </Stack>
                    <Stack spacing={2} direction='row' sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ boxShadow: '1px 2px 3px -2px black', backgroundColor: 'black', opacity: 0.8, width: 40, height: 40, borderRadius: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid orangered' }}>
                        <FontAwesomeIcon icon={faLocationDot} size='lg' style={{ color: 'white' }}/>
                    </Box>
                    <Box>
                        <Typography fontWeight={600}>
                            Κρήτης 80, Θεσσαλονίκη
                        </Typography>
                        <Typography variant='body2' fontWeight={600}>
                            Ελλάδα, Τ.Κ. 54646
                        </Typography>                    
                    </Box>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
}

export default Info;