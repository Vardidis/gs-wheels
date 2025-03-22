import React from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FooterImage from '../assets/FOOTER-Background.jpg';
import FooterLogo from '../assets/LOGO-Footer_LEFT.png';

const Footer = () => {
    return (
        <Stack
            sx={{                             
                backgroundImage: `url(${FooterImage})`,
                backgroundSize: 'cover',                
                backgroundRepeat: 'no-repeat',                               
                overflow: 'hidden',  
                color: 'white'              
            }}
        >
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                sx={{
                    padding: '32px 112px'
                }}
            >
                <img
                    src={FooterLogo}
                    style={{
                        maxWidth: 192
                    }}
                />
                <Stack
                    spacing={1.5}
                    justifyContent={'space-between'}                
                >
                    <Typography
                        className={'hoverable'}
                        fontWeight={'bold'}
                        sx={{
                            color: 'white'
                        }}
                    >
                        Αρχική
                    </Typography>
                    <Typography
                        className={'hoverable'}
                        fontWeight={'bold'}
                    >
                        Σχετικά με εμάς
                    </Typography>
                    <Typography
                        className={'hoverable'}
                        fontWeight={'bold'}
                    >
                        Υπηρεσίες
                    </Typography>
                    <Typography
                        className={'hoverable'}
                        fontWeight={'bold'}
                    >
                        Προϊόντα
                    </Typography>
                </Stack>
                <Stack
                    spacing={1.5}
                    justifyContent={'space-between'}
                    alignItems={'end'}
                    sx={{
                        opacity: 0.9
                    }}
                >
                    <Stack
                        className={'hoverable'}
                        alignItems={'end'}
                        spacing={-1}
                    >
                        <Typography>
                            ΕΚΠΑΙΔΕΥΣΗ ΑΥΤΟΝΟΜΙΑΣ
                        </Typography>
                        <Typography>
                            & Λειτουργικής Αποκατάστασης
                        </Typography>
                    </Stack>                
                    <Stack
                    className={'hoverable'}
                        alignItems={'end'}
                        spacing={-1}
                    >
                        <Typography>
                            ΚΑΤΑΣΚΕΥΗ ΑΝΑΠΗΡΙΚΩΝ ΑΜΑΞΙΔΙΩΝ                               
                        </Typography>
                        <Typography>
                            Χειροποίητα, προσαρμοσμένα κατά παραγγελία
                        </Typography>
                    </Stack>                      
                    <Typography
                        className={'hoverable'}
                    >
                        ΔΙΑΜΟΡΦΩΣΗ ΧΩΡΟΥ                           
                    </Typography>   
                </Stack>
                <Stack
                    spacing={2.5}
                    justifyContent={'space-between'}
                    alignItems={'end'}
                >
                    <Stack>
                        <Stack
                            className={'hoverable'}
                            direction={'row'}
                            alignItems={'center'}
                            spacing={0.5}
                        >
                            <RoomIcon fontSize='small'/>
                            <Typography
                                fontSize={15}
                                fontWeight={'bold'}
                            >
                                Κρήτης 80, 546 Θεσσαλονίκη
                            </Typography>
                        </Stack>                        
                    </Stack>
                    <Stack>
                        <Stack
                            className={'hoverable'}
                            direction={'row'}
                            alignItems={'center'}
                            spacing={0.5}
                        >
                            <LocalPhoneIcon fontSize='small'/>
                            <Typography
                                fontWeight={'bold'}
                            >
                                +30 2310 42 89 49
                            </Typography>
                        </Stack>                        
                    </Stack>
                    <Stack
                        alignItems={'end'}
                    >
                        <Stack
                            className={'hoverable'}
                            direction={'row'}
                            alignItems={'center'}
                            spacing={0.5}
                        >                            
                            <EmailIcon fontSize='small'/>
                            <Typography
                                fontSize={13}
                            >
                                gswheelchairs@gmail.com
                            </Typography>
                        </Stack>
                        <Typography
                            fontSize={14}
                        >
                            info@wheelchairs.gr
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Divider
                sx={{
                    color: 'white'
                }}
            />
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
                sx={{
                    padding: '16px 112px',
                }}
            >
                <Typography
                    fontSize={13}
                >
                    @2025 GS Wheelchairs
                </Typography>
                <Typography
                    fontSize={13}
                >
                    Developed by Vardis
                </Typography>
            </Stack>
        </Stack>
    );
};

export default Footer;