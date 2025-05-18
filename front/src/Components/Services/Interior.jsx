import React from "react";
import { Box, Stack, Typography, Grid } from "@mui/material";
import TextWindow from "./TextWindow";
import { useContext } from "react";
import { Context } from "../Context";
import { useState } from "react";
import { useEffect } from "react";
import Header from '../../assets/HEADER-AboutUs_UP.jpg';
import Background from '../../assets/BACKGROUND-Arxiki.jpg';

const Interior = () => {
    const {allTexts, isDesktop} = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{               
        if(allTexts.length > 0){
            setLoading(false);
        }
    }, [allTexts])

    if(loading){
        return(
            <>Loading...</>
        )
    }
    return(
        <Box
            sx={{
                backgroundImage: `url(${Background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',     
                paddingBottom: 12                
            }}
        >
            <img
                src={Header}
                style={{
                    width: '100%',                                       
                }}
            />
            <Stack
                spacing={8}
                alignItems='center'
                sx={{
                    padding: isDesktop ? '16px 16px' : '16px 8px',
                }}
            >  
                <Stack
                    spacing={3}
                    alignItems='center'
                >
                    <Typography
                        variant='h5'
                        fontWeight={'bold'}    
                        sx={{
                            color: '#30343f',
                            textWrap: 'nowrap'
                        }}                    
                    >
                        Διαμόρφωση Χώρου
                    </Typography>                                          
                    <Typography
                        fontSize={20}
                        sx={{
                            color: '#30343f',
                            maxWidth: 1400
                        }}
                    >
                        {allTexts[6].placeText}
                    </Typography>                       
                </Stack>                    
                <Stack spacing={3} alignItems='center'>
                    <Typography variant='h5' sx={{ fontWeight: 'bold', color: '#30343f' }}>
                        Η Σημασία της Προσαρμογής του Χώρου
                    </Typography> 
                    <Grid container
                        justifyContent='center'
                        rowGap={6}
                        columnSpacing={2}
                        sx={{
                            maxWidth: 1400
                        }}
                        >
                        <Grid item
                            size={{
                                xs: 12,
                                md: 6,
                                xl: 3
                            }}                        
                            sx={{
                                borderLeft: '2px solid #d85704',
                                paddingLeft: 1
                            }}
                        >
                            <TextWindow title={allTexts[6].items[0].title} text={allTexts[6].items[0].text}/>
                        </Grid>
                        <Grid item
                            size={{
                                xs: 12,
                                md: 6,
                                xl: 3
                            }}           
                            sx={{
                                borderLeft: '2px solid #d85704',
                                paddingLeft: 1
                            }}
                        >
                            <TextWindow title={allTexts[6].items[1].title} text={allTexts[6].items[1].text}/>
                        </Grid>
                        <Grid item
                            size={{
                                xs: 12,
                                md: 6,
                                xl: 3
                            }}           
                            sx={{
                                borderLeft: '2px solid #d85704',
                                paddingLeft: 1
                            }}
                        >
                            <TextWindow title={allTexts[6].items[2].title} text={allTexts[6].items[2].text}/>                        
                        </Grid>
                        <Grid item
                            size={{
                                xs: 12,
                                md: 6,
                                xl: 3
                            }}           
                            sx={{
                                borderLeft: '2px solid #d85704',
                                paddingLeft: 1
                            }}
                        >
                            <TextWindow title={allTexts[6].items[3].title} text={allTexts[6].items[3].text}/>                            
                        </Grid>            
                    </Grid>
                </Stack>            
                <Stack spacing={4} alignItems='center'>
                    <Typography
                        variant={'h5'}
                        fontWeight={'bold'}                         
                        sx={{
                            color: '#30343f',                          
                        }}                     
                    >
                        Η Υπηρεσία της GS Wheelchairs στη Διαμόρφωση του Χώρου
                    </Typography>                    
                    <Typography
                        fontSize={20}
                        sx={{
                            color: '#30343f',
                            maxWidth: 1400
                        }}
                    >
                        Η GS Wheelchairs δεν ασχολείται μόνο με την κατασκευή εξατομικευμένων
                        αναπηρικών αμαξιδίων και τη λειτουργική αποκατάσταση. Προσφέρει επίσης
                        υπηρεσίες διαμόρφωσης εσωτερικών χώρων, ειδικά σχεδιασμένων για να
                        καλύπτουν τις ανάγκες των ατόμων με αναπηρία. Με στόχο να διευκολύνει τη ζωή
                        των χρηστών, η GS Wheelchairs δημιουργεί προσβάσιμους και εργονομικούς
                        χώρους, βοηθώντας τα άτομα να αποκτήσουν μεγαλύτερη ανεξαρτησία.
                    </Typography>                                                
                    <Grid container justifyContent='center' rowSpacing={2} columnSpacing={2} sx={{ maxWidth: 1400 }}>
                        <Grid item
                            size={{
                                xs: 12,
                                md: 6,
                                lg: 4
                            }}                       
                            sx={{
                                borderLeft: '2px solid #d85704',
                                paddingLeft: 1
                            }}
                        >
                            <TextWindow title={allTexts[6].items2[0].title} text={allTexts[6].items2[0].text}/>
                        </Grid>
                        <Grid item
                            size={{
                                xs: 12,
                                md: 6,
                                lg: 4
                            }}                       
                            sx={{
                                borderLeft: '2px solid #d85704',
                                paddingLeft: 1
                            }}
                        >
                            <TextWindow title={allTexts[6].items2[1].title} text={allTexts[6].items2[1].text}/>
                        </Grid>
                        <Grid item
                            size={{
                                xs: 12,
                                md: 6,
                                lg: 4
                            }}                       
                            sx={{
                                borderLeft: '2px solid #d85704',
                                paddingLeft: 1
                            }}
                        >
                            <TextWindow title={allTexts[6].items2[2].title} text={allTexts[6].items2[2].text}/>
                        </Grid>
                    </Grid>      
                </Stack>    
                <Stack spacing={4} alignItems='center'>
                    <Typography variant='h5' sx={{ fontWeight: 'bold', color: '#30343f'}}>
                        Πώς η Προσαρμογή του Σπιτιού Ενισχύει την Αυτοπεποίθηση
                    </Typography>                    
                    <Typography
                        fontSize={20}
                        sx={{
                            color: '#30343f',
                            maxWidth: 1400
                        }}
                    >
                        Η διαμόρφωση του χώρου δίνει στα άτομα με αναπηρία το αίσθημα ελέγχου στη ζωή
                        τους. Όταν το περιβάλλον του σπιτιού είναι προσβάσιμο και προσαρμοσμένο, το
                        άτομο μπορεί να διαχειρίζεται τις καθημερινές του ανάγκες με αυτονομία. Αυτό
                        οδηγεί σε μείωση του άγχους και της εξάρτησης, ενισχύοντας την αυτοπεποίθηση
                        και την αίσθηση της αξιοπρέπειας​.
                    </Typography>                                                                   
                    <Typography
                        fontSize={20}
                        sx={{
                            color: '#30343f',
                            maxWidth: 1400
                        }}
                    >
                        Η GS Wheelchairs προσφέρει ολοκληρωμένες λύσεις για τη διαμόρφωση του
                        σπιτιού, λαμβάνοντας υπόψη τόσο τη λειτουργικότητα όσο και την ψυχολογική
                        ευεξία του χρήστη. Το αποτέλεσμα είναι ένας χώρος όπου το άτομο μπορεί να ζει με
                        άνεση, ασφάλεια και ανεξαρτησία, βελτιώνοντας την καθημερινότητά του σε κάθε
                        επίπεδο.
                    </Typography>                                            
                </Stack>                               
            </Stack>
        </Box>
    );
}

export default Interior;