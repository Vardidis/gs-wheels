import React from "react";
import { Box, Stack, Typography, Grid } from "@mui/material";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHandshakeAngle, faBook, faWheelchairMove, faLinkSlash } from '@fortawesome/free-solid-svg-icons';
import TextWindow from "./TextWindow";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../Context";
import { useEffect } from "react";

library.add(faHandshakeAngle, faBook, faWheelchairMove, faLinkSlash);

const CustomWheels = () => {
    const {allTexts, isDesktop} = useContext(Context);
    const [loading, setLoading] = useState(true);

    const boxSets = {    
        color: '#30343f',  
        maxWidth: 1400,
    }

    const titleSets = {
        fontWeight: 'bold',
        color: '#30343f'
    }

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
        <Stack  
            spacing={8}
            alignItems='center'
            sx={{
                padding: '16px 16px',
                maxWidth: 1400                
            }}
        >
            <Typography
                sx={{
                    color: '#30343f'
                }}
            >
                {allTexts[5].placeText}
            </Typography>                                                  
            <Stack spacing={4} alignItems='center' sx={boxSets}>
                <Typography variant='h6' sx={titleSets}>
                    Γιατί είναι τόσο σημαντικό το αμαξίδιο να είναι προσαρμοσμένο στις ανάγκες του χρήστη;
                </Typography>                     
                <Typography>
                    Η GS Wheelchairs δεν ασχολείται μόνο με την κατασκευή εξατομικευμένων
                    αναπηρικών αμαξιδίων και τη λειτουργική αποκατάσταση. Προσφέρει επίσης
                    υπηρεσίες διαμόρφωσης εσωτερικών χώρων, ειδικά σχεδιασμένων για να
                    καλύπτουν τις ανάγκες των ατόμων με αναπηρία. Με στόχο να διευκολύνει τη ζωή
                    των χρηστών, η GS Wheelchairs δημιουργεί προσβάσιμους και εργονομικούς
                    χώρους, βοηθώντας τα άτομα να αποκτήσουν μεγαλύτερη ανεξαρτησία.
                </Typography>                                   
                <Grid container rowGap={4} columnSpacing={2} sx={{ maxWidth: 1400 }}>
                    <Grid item xs={12} sm={6}
                        sx={{
                            borderLeft: '2px solid #d85704',
                            paddingLeft: 1
                        }}
                    >  
                        <TextWindow title={allTexts[5].items[0].title} text={allTexts[5].items[0].text}/>                        
                    </Grid>
                    <Grid item xs={12} sm={6}
                        sx={{
                            borderLeft: '2px solid #d85704',
                            paddingLeft: 1
                        }}
                    >
                        <TextWindow title={allTexts[5].items[1].title} text={allTexts[5].items[1].text}/>                        
                    </Grid>
                    <Grid item xs={12} sm={6}
                        sx={{
                            borderLeft: '2px solid #d85704',
                            paddingLeft: 1
                        }}
                    >
                        <TextWindow title={allTexts[5].items[2].title} text={allTexts[5].items[2].text}/>                                                
                    </Grid>
                    <Grid item xs={12} sm={6}
                        sx={{
                            borderLeft: '2px solid #d85704',
                            paddingLeft: 1
                        }}
                    >
                        <TextWindow title={allTexts[5].items[3].title} text={allTexts[5].items[3].text}/>                                                
                    </Grid>                      
                </Grid>                                
            </Stack>    
            <Stack spacing={4} sx={boxSets}>
                <Typography variant='h6' textAlign={isDesktop && 'center'} sx={titleSets}>
                    Το Αμαξίδιο ως Κομμάτι των Τριών Πυλώνων της GS Wheelchairs
                </Typography>                     
                <Typography
                    fontSize={17}                    
                    sx={{                                           
                        color: '#30343f'
                    }}
                >
                    Η GS Wheelchairs βασίζει τη φιλοσοφία της σε τρεις βασικούς πυλώνες, οι οποίοι
                    συνδέονται άμεσα με τη σημασία ενός πλήρως προσαρμοσμένου αμαξιδίου.
                </Typography>                                       
                <Grid container rowSpacing={4} columnSpacing={2} sx={{ maxWidth: 1400 }}>
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
                        <TextWindow title={allTexts[5].items2[0].title} text={allTexts[5].items2[0].text}/>                        
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
                        <TextWindow title={allTexts[5].items2[1].title} text={allTexts[5].items2[1].text}/>                        
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
                        <TextWindow title={allTexts[5].items2[2].title} text={allTexts[5].items2[2].text}/>                                               
                    </Grid>
                </Grid>              
            </Stack>    
            <Stack spacing={6} sx={boxSets}>
                <Typography variant='h6' textAlign={isDesktop && 'center'} sx={titleSets}>
                    Τι Προσφέρει ένα Προσαρμοσμένο Αμαξίδιο στον Χρήστη
                </Typography> 
                <Grid container rowSpacing={4} columnSpacing={2} sx={{ maxWidth: 1400 }}>
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
                        <TextWindow title={allTexts[5].items3[0].title} text={allTexts[5].items3[0].text}/>                        
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
                        <TextWindow title={allTexts[5].items3[1].title} text={allTexts[5].items3[1].text}/>                        
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
                        <TextWindow title={allTexts[5].items3[2].title} text={allTexts[5].items3[2].text}/>                                              
                    </Grid>                        
                </Grid>                            
                <Typography>
                    Το προσαρμοσμένο αμαξίδιο δεν είναι απλώς ένα εργαλείο. Είναι ένα αναπόσπαστο
                    κομμάτι της ζωής του ατόμου, το οποίο επηρεάζει την υγεία του, την ανεξαρτησία
                    του και την κοινωνική του ενσωμάτωση. Μέσα από τους τρεις πυλώνες της
                    φιλοσοφίας της GS Wheelchairs, το αμαξίδιο γίνεται ο καταλύτης για μια καλύτερη,
                    πιο ενεργή και ανεξάρτητη ζωή.
                </Typography>                                    
            </Stack>    
        </Stack>                             
    );
}

export default CustomWheels;