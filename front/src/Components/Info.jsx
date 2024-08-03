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
            width: 550,
            bgcolor: 'theme.light',
            boxShadow: 24,
            p: 4,
            border: "none",
            textAlign: "center",
            borderRadius: 1,
            height: {lg: '40vh', md: '54vh', sm: '45vh', xs: '40vh', xxs: '30vh'},
            overflowY: 'auto',
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'center',}}>
            <Stack spacing={4}>
                <Stack spacing={1}>
                    <FontAwesomeIcon icon={faPhone} size='xl'/>
                    <Typography>
                        +30 2310 428949
                    </Typography>
                </Stack>
                <Stack spacing={1}>
                    <FontAwesomeIcon icon={faEnvelope} size='xl'/>
                    <Box>
                        <Typography>
                            gswheelchairs@gmail.com
                        </Typography>
                        <Typography>
                            info@gswheelchairs.gr
                        </Typography>
                    </Box>
                </Stack>
                <Stack spacing={1}>
                    <FontAwesomeIcon icon={faLocationDot} size='xl'/>
                    <Box>
                        <Typography>
                            Κρήτης 80, Θεσσαλονίκη
                        </Typography>
                        <Typography variant='body2'>
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