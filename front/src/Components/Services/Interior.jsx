import React from "react";
import { Box, Stack, Typography, Grid } from "@mui/material";
import TextWindow from "./TextWindow";
import { useContext } from "react";
import { Context } from "../Context";
import { useState } from "react";
import { useEffect } from "react";

const Interior = () => {
    const {allTexts} = useContext(Context);
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
        <Box sx={{
            height: '100vh',
            padding: {lg: 5, md: 5, sm: 3, xs: 1, xxs: 1}            
        }}>
            <Stack spacing={10} alignItems='center'>  
                <Typography variant='h5' fontWeight={600}>
                    Διαμόρφωση Χώρου
                </Typography>                           
                <Box sx={{ bgcolor: '#30343f', padding: 4, borderRadius: 2, boxShadow: 8, maxWidth: 1400}}>
                    <Typography sx={{ color: 'white' }}>
                        {allTexts[6].placeText}
                    </Typography>               
                </Box>              
                <Stack spacing={4} alignItems='center'>
                    <Typography variant='h6' sx={{ fontWeight: 'bold', color: '#30343f' }}>
                        Η Σημασία της Προσαρμογής του Χώρου
                    </Typography> 
                    <Grid container justifyContent='center' rowSpacing={2} columnSpacing={2} sx={{ maxWidth: 1400 }}>
                        <Grid item xs={12} md={6} xl={3}>
                            <TextWindow title={allTexts[6].items[0].title} text={allTexts[6].items[0].text}/>
                        </Grid>
                        <Grid item xs={12} md={6} xl={3}>
                            <TextWindow title={allTexts[6].items[1].title} text={allTexts[6].items[1].text}/>
                        </Grid>
                        <Grid item xs={12} md={6} xl={3}>
                            <TextWindow title={allTexts[6].items[2].title} text={allTexts[6].items[2].text}/>                        
                        </Grid>
                        <Grid item xs={12} md={6} xl={3}>
                            <TextWindow title={allTexts[6].items[3].title} text={allTexts[6].items[3].text}/>                            
                        </Grid>            
                    </Grid>
                </Stack>            
                <Stack spacing={2} alignItems='center'>
                    <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'white' }}>
                        Η Υπηρεσία της GS Wheelchairs στη Διαμόρφωση του Χώρου
                    </Typography> 
                    <Box sx={{ bgcolor: 'white', padding: 2, borderRadius: 2, maxWidth: 1400 }}>
                        <Typography sx={{ color: '#30343f' }}>
                            Η GS Wheelchairs δεν ασχολείται μόνο με την κατασκευή εξατομικευμένων
                            αναπηρικών αμαξιδίων και τη λειτουργική αποκατάσταση. Προσφέρει επίσης
                            υπηρεσίες διαμόρφωσης εσωτερικών χώρων, ειδικά σχεδιασμένων για να
                            καλύπτουν τις ανάγκες των ατόμων με αναπηρία. Με στόχο να διευκολύνει τη ζωή
                            των χρηστών, η GS Wheelchairs δημιουργεί προσβάσιμους και εργονομικούς
                            χώρους, βοηθώντας τα άτομα να αποκτήσουν μεγαλύτερη ανεξαρτησία.
                        </Typography>                            
                    </Box>
                    <Grid container justifyContent='center' rowSpacing={2} columnSpacing={2} sx={{ maxWidth: 1400 }}>
                        <Grid item xs={12} md={6} lg={4}>
                            <TextWindow title={allTexts[6].items2[0].title} text={allTexts[6].items2[0].text}/>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <TextWindow title={allTexts[6].items2[1].title} text={allTexts[6].items2[1].text}/>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <TextWindow title={allTexts[6].items2[2].title} text={allTexts[6].items2[2].text}/>
                        </Grid>
                    </Grid>      
                </Stack>    
                <Stack spacing={2} alignItems='center'>
                    <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'white' }}>
                        Πώς η Προσαρμογή του Σπιτιού Ενισχύει την Αυτοπεποίθηση
                    </Typography> 
                    <Box sx={{ bgcolor: 'white', padding: 2, borderRadius: 2, maxWidth: 1400 }}>
                        <Typography sx={{ color: '#30343f' }}>
                            Η διαμόρφωση του χώρου δίνει στα άτομα με αναπηρία το αίσθημα ελέγχου στη ζωή
                            τους. Όταν το περιβάλλον του σπιτιού είναι προσβάσιμο και προσαρμοσμένο, το
                            άτομο μπορεί να διαχειρίζεται τις καθημερινές του ανάγκες με αυτονομία. Αυτό
                            οδηγεί σε μείωση του άγχους και της εξάρτησης, ενισχύοντας την αυτοπεποίθηση
                            και την αίσθηση της αξιοπρέπειας​.
                        </Typography>                            
                    </Box>
                    <Box sx={{ bgcolor: 'white', padding: 2, borderRadius: 2, maxWidth: 1400 }}>
                        <Typography sx={{ color: '#30343f' }}>
                            Η GS Wheelchairs προσφέρει ολοκληρωμένες λύσεις για τη διαμόρφωση του
                            σπιτιού, λαμβάνοντας υπόψη τόσο τη λειτουργικότητα όσο και την ψυχολογική
                            ευεξία του χρήστη. Το αποτέλεσμα είναι ένας χώρος όπου το άτομο μπορεί να ζει με
                            άνεση, ασφάλεια και ανεξαρτησία, βελτιώνοντας την καθημερινότητά του σε κάθε
                            επίπεδο.
                        </Typography>                            
                    </Box>
                </Stack>                               
            </Stack>
        </Box>
    );
}

export default Interior;