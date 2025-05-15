import React, { useContext } from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FooterImage from '../assets/FOOTER-Background.jpg';
import FooterLogo from '../assets/LOGO-Footer_LEFT.png';
import GWatermark from '../assets/LEOUDIS-Signature_WEB.png';
import { Context } from '../Components/Context';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const {isDesktop} = useContext(Context);
    const navigate = useNavigate();

    if(isDesktop){ 
        return (
            <Stack
                sx={{                             
                    backgroundImage: `url(${FooterImage})`,
                    backgroundSize: 'cover',                
                    backgroundRepeat: 'no-repeat',                               
                    overflow: 'hidden',  
                    color: 'white!important'              
                }}
            >           
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    sx={{
                        padding: '32px 112px',
                        color: 'white!important'
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
                            color: 'white!important'
                        }}          
                    >
                        <Typography
                            className={'hoverable'}
                            onClick={()=>navigate('/')}
                            fontWeight={'bold'}
                            sx={{
                                color: 'white!important'
                            }}
                        >
                            Αρχική
                        </Typography>
                        <Typography
                            className={'hoverable'}
                            onClick={()=>navigate('/about-us')}
                            fontWeight={'bold'}
                            sx={{
                                color: 'white!important'
                            }}
                        >
                            Σχετικά με εμάς
                        </Typography>
                        <Typography
                            className={'hoverable'}
                            onClick={()=>navigate('/services')}
                            fontWeight={'bold'}
                            sx={{
                                color: 'white!important'
                            }}
                        >
                            Υπηρεσίες
                        </Typography>
                        <Typography
                            className={'hoverable'}
                            onClick={()=>navigate('/products')}
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
                            onClick={()=>navigate('/service/apokatastasi')}
                            alignItems={'end'}
                            spacing={-1}
                        >
                            <Typography                                
                                sx={{
                                    color: 'white!important'
                                }}         
                            >
                                ΕΚΠΑΙΔΕΥΣΗ ΑΥΤΟΝΟΜΙΑΣ
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white!important'
                                }}         
                            >
                                & Λειτουργικής Αποκατάστασης
                            </Typography>
                        </Stack>                
                        <Stack
                            className={'hoverable'}
                            onClick={()=>navigate('/products/wheelchairs')}
                            alignItems={'end'}
                            spacing={-1}
                        >
                            <Typography                               
                                sx={{
                                    color: 'white!important'
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
                            className={'hoverable'}
                            onClick={()=>navigate('/service/interior-design')}                      
                            sx={{
                                color: 'white!important'
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
                                    className={'hoverable'}
                                    onClick={()=>window.open('https://www.google.com/maps/place/Difros+Custom+Made+Wheelchairs/@40.5966063,22.9584522,17z/data=!4m7!3m6!1s0x14a838d41353a295:0x8d5082922a20e2e3!4b1!8m2!3d40.5966063!4d22.9584522!16s%2Fg%2F1hc5dmtxm?entry=ttu&g_ep=EgoyMDI1MDQyNy4xIKXMDSoASAFQAw%3D%3D', '_blank')}
                                    fontSize={15}
                                    fontWeight={'bold'}
                                    sx={{
                                        color: 'white!important'
                                    }}
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
                        color: 'white!important'
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
                            color: 'white!important'
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
                    color: 'white!important',
                    width: '100%'         
                }}
            >           
                <Stack
                    spacing={3}
                    sx={{
                        color: 'white!important'
                    }}     
                >
                    <Stack                    
                        direction={'row'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        sx={{
                            padding: '24px 8px',
                            paddingBottom: 0,
                            color: 'white!important',
                        }}
                    >
                        <Stack
                            spacing={1}
                            justifyContent={'space-between'}                
                        >
                            <Typography
                                className={'hoverable'}
                                onClick={()=>navigate('/')}
                                fontWeight={'bold'}
                                sx={{
                                    color: 'white!important'
                                }}
                            >
                                Αρχική
                            </Typography>
                            <Typography
                                className={'hoverable'}
                                onClick={()=>navigate('/about-us')}
                                fontWeight={'bold'}
                                sx={{
                                    color: 'white!important'
                                }}         
                            >
                                Σχετικά με εμάς
                            </Typography>
                            <Typography
                                className={'hoverable'}
                                onClick={()=>navigate('/services')}
                                fontWeight={'bold'}
                                sx={{
                                    color: 'white!important'
                                }}
                            >
                                Υπηρεσίες
                            </Typography>
                            <Typography
                                className={'hoverable'}
                                onClick={()=>navigate('/products/wheelchairs')}
                                fontWeight={'bold'}
                                sx={{
                                    color: 'white!important'
                                }}
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
                                color: 'white!important'
                            }}                                       
                        >      
                            <Stack
                                onClick={()=>window.open('https://www.google.com/maps/place/Difros+Custom+Made+Wheelchairs/@40.5966063,22.9584522,17z/data=!4m7!3m6!1s0x14a838d41353a295:0x8d5082922a20e2e3!4b1!8m2!3d40.5966063!4d22.9584522!16s%2Fg%2F1hc5dmtxm?entry=ttu&g_ep=EgoyMDI1MDQyNy4xIKXMDSoASAFQAw%3D%3D', '_blank')}
                                spacing={-0.5}
                                alignItems={'end'}
                                sx={{
                                    color: 'white!important'
                                }}     
                            >                                     
                                <Typography
                                    fontSize={15}
                                    fontWeight={'bold'}    
                                    sx={{
                                        color: 'white!important'
                                    }}                                                                                         
                                >
                                    Κρήτης 80, 546
                                </Typography>  
                                <Typography
                                    fontSize={14}
                                    fontWeight={'bold'}    
                                    sx={{
                                        color: 'white!important',
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
                                    color: 'white!important'
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
                                        color: 'white!important'
                                    }}         
                                >
                                    gswheelchairs@gmail.com
                                </Typography>                          
                                <Typography
                                    fontSize={14}
                                    sx={{
                                        color: 'white!important'
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
                            onClick={()=>navigate('/service/apokatastasi')}                      
                            spacing={-1}
                        >
                            <Typography
                                sx={{
                                    color: 'white!important'
                                }}         
                            >
                                ΕΚΠΑΙΔΕΥΣΗ ΑΥΤΟΝΟΜΙΑΣ
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white!important'
                                }}         
                            >
                                & Λειτουργικής Αποκατάστασης
                            </Typography>
                        </Stack>                
                        <Stack
                            className={'hoverable'}      
                            onClick={()=>navigate('/products/wheelchairs')}                      
                            spacing={-1}
                        >
                            <Typography
                                sx={{
                                    color: 'white!important'
                                }}         
                            >
                                ΚΑΤΑΣΚΕΥΗ ΑΝΑΠΗΡΙΚΩΝ ΑΜΑΞΙΔΙΩΝ                               
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white!important'
                                }}
                            >
                                Χειροποίητα, προσαρμοσμένα κατά παραγγελία
                            </Typography>
                        </Stack>                      
                        <Typography    
                            className={'hoverable'}          
                            onClick={()=>navigate('/service/interior-design')}                   
                            sx={{
                                color: 'white!important'
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
                                sx={{
                                    color: 'white!important'
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
            </Stack>
        )
    }
};

export default Footer;