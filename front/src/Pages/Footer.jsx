import React, { useContext } from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FooterImage from '../assets/FOOTER-Background.jpg';
import FooterLogo from '../assets/LOGO-Footer_LEFT.png';
import GWatermark from '../assets/LEOUDIS-Signature_WEB.png';
import { Context } from '../Components/Context';

const Footer = () => {
    const {isDesktop} = useContext(Context);
    
    if(isDesktop){ 
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
                        padding: '32px 112px',
                        color: 'white'
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
                        sx={{
                            color: 'white'
                        }}          
                    >
                        <Typography
                            className={'hoverable'}
                            fontWeight={'bold'}
                            sx={{
                                color: 'white!important'
                            }}
                        >
                            Αρχική
                        </Typography>
                        <Typography
                            className={'hoverable'}
                            fontWeight={'bold'}
                            sx={{
                                color: 'white!important'
                            }}
                        >
                            Σχετικά με εμάς
                        </Typography>
                        <Typography
                            className={'hoverable'}
                            fontWeight={'bold'}
                            sx={{
                                color: 'white!important'
                            }}
                        >
                            Υπηρεσίες
                        </Typography>
                        <Typography
                            className={'hoverable'}
                            fontWeight={'bold'}
                            sx={{
                                color: 'white!important'
                            }}
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
                            <Typography
                                sx={{
                                    color: 'white'
                                }}         
                            >
                                ΕΚΠΑΙΔΕΥΣΗ ΑΥΤΟΝΟΜΙΑΣ
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white'
                                }}         
                            >
                                & Λειτουργικής Αποκατάστασης
                            </Typography>
                        </Stack>                
                        <Stack
                            className={'hoverable'}
                            alignItems={'end'}
                            spacing={-1}
                        >
                            <Typography
                                sx={{
                                    color: 'white'
                                }}         
                            >
                                ΚΑΤΑΣΚΕΥΗ ΑΝΑΠΗΡΙΚΩΝ ΑΜΑΞΙΔΙΩΝ                               
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                            >
                                Χειροποίητα, προσαρμοσμένα κατά παραγγελία
                            </Typography>
                        </Stack>                      
                        <Typography                           
                            sx={{
                                color: 'white'
                            }}            
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
                                sx={{
                                    color: 'white!important'
                                }}
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
                                sx={{
                                    color: 'white!important'
                                }}
                            >
                                <LocalPhoneIcon fontSize='small'/>
                                <Typography>
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
                                sx={{
                                    color: 'white!important'
                                }}
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
                        sx={{
                            color: 'white'
                        }}         
                    >
                        @2025 GS Wheelchairs
                    </Typography>
                    <Stack
                        direction={'row'}
                        alignItems={'center'}
                        spacing={3}
                    >
                        <Typography
                            fontSize={13}
                            sx={{
                                color: 'white',
                                opacity: 0.9
                            }}   
                        >
                            Developed by Vardis
                        </Typography>
                        <img
                            src={GWatermark}
                            style={{
                                width: 150
                            }}
                        />                    
                    </Stack>                
                </Stack>
            </Stack>
        );
    }else{
        return(
            <Stack
                sx={{                             
                    backgroundImage: `url(${FooterImage})`,
                    backgroundSize: 'cover',                
                    backgroundRepeat: 'no-repeat',                               
                    overflow: 'hidden',  
                    color: 'white',
                    width: '100%'         
                }}
            >           
                <Stack
                    spacing={3}
                    sx={{
                        color: 'white'
                    }}     
                >
                    <Stack                    
                        direction={'row'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        sx={{
                            padding: '24px 8px',
                            paddingBottom: 0,
                            color: 'white',
                        }}
                    >
                        <Stack
                            spacing={1}
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
                                sx={{
                                    color: 'white'
                                }}         
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
                        <img
                            src={FooterLogo}
                            style={{
                                maxWidth: 56
                            }}
                        />
                        <Stack
                            spacing={2}      
                            alignItems={'end'}   
                            sx={{
                                color: 'white'
                            }}                                       
                        >      
                            <Stack
                                spacing={-0.5}
                                alignItems={'end'}
                                sx={{
                                    color: 'white'
                                }}     
                            >                                     
                                <Typography
                                    fontSize={15}
                                    fontWeight={'bold'}    
                                    sx={{
                                        color: 'white'
                                    }}                                                                                         
                                >
                                    Κρήτης 80, 546
                                </Typography>  
                                <Typography
                                    fontSize={14}
                                    fontWeight={'bold'}    
                                    sx={{
                                        color: 'white',
                                        opacity: 0.9
                                    }}                      
                                >
                                    Θεσσαλονίκη
                                </Typography>                            
                            </Stack>                                                                                   
                            <Typography
                                fontWeight={'bold'}
                                fontSize={15}
                                sx={{
                                    color: 'white'
                                }}         
                            >
                                +30 2310 42 89 49
                            </Typography>                                                                     
                            <Stack
                                alignItems={'end'}
                            >                           
                                <Typography
                                    fontSize={13}
                                    sx={{
                                        color: 'white'
                                    }}         
                                >
                                    gswheelchairs@gmail.com
                                </Typography>                          
                                <Typography
                                    fontSize={14}
                                    sx={{
                                        color: 'white'
                                    }}         
                                >
                                    info@wheelchairs.gr
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>                   
                    <Stack
                        spacing={1}                       
                        sx={{
                            opacity: 0.9,
                            padding: '0px 8px'                         
                        }}
                    >
                        <Stack
                            className={'hoverable'}                            
                            spacing={-1}
                        >
                            <Typography
                                sx={{
                                    color: 'white'
                                }}         
                            >
                                ΕΚΠΑΙΔΕΥΣΗ ΑΥΤΟΝΟΜΙΑΣ
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white'
                                }}         
                            >
                                & Λειτουργικής Αποκατάστασης
                            </Typography>
                        </Stack>                
                        <Stack
                            className={'hoverable'}                            
                            spacing={-1}
                        >
                            <Typography
                                sx={{
                                    color: 'white'
                                }}         
                            >
                                ΚΑΤΑΣΚΕΥΗ ΑΝΑΠΗΡΙΚΩΝ ΑΜΑΞΙΔΙΩΝ                               
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                            >
                                Χειροποίητα, προσαρμοσμένα κατά παραγγελία
                            </Typography>
                        </Stack>                      
                        <Typography                           
                            sx={{
                                color: 'white'
                            }}            
                        >
                            ΔΙΑΜΟΡΦΩΣΗ ΧΩΡΟΥ                           
                        </Typography>   
                    </Stack>                    
                    <Stack
                        direction={'row'}
                        justifyContent={'space-between'}
                        sx={{
                            padding: '0px 8px',                           
                        }}
                    >
                        <Typography
                            fontSize={13}
                            sx={{
                                color: 'white'
                            }}         
                        >
                            @2025 GS Wheelchairs
                        </Typography>
                        <Stack
                            direction={'row'}
                            alignItems={'center'}
                            spacing={3}
                        >
                            <Typography
                                fontSize={13}
                            >
                                Developed by Vardis
                            </Typography>
                            <img
                                src={GWatermark}
                                style={{
                                    width: 150
                                }}
                            />                    
                        </Stack>                
                    </Stack>
                </Stack>
            </Stack>
        )
    }
};

export default Footer;