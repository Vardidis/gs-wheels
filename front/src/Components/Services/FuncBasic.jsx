import React, {useContext, useEffect, useState} from "react";
import { Box, Grid, Stack, Typography, keyframes, Tabs, Tab } from "@mui/material";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshakeAngle, faBook, faWheelchairMove, faLinkSlash } from '@fortawesome/free-solid-svg-icons';
import { Context } from "../Context";
import TextWindow from "./TextWindow";
import { styled } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';

library.add(faHandshakeAngle, faBook, faWheelchairMove, faLinkSlash);

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const SecTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',        
    },   
});
  
const SecTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',                
        color: '#30343f',
        '&.Mui-selected': {
        color: 'orangered',
        },       
    }),
);

const ColorBox = (props) => {
    return(
        <Box sx={{ boxShadow: 12, borderRadius: 5, padding: 4, bgcolor: props.color, display: 'flex', alignItems: 'center' }}>
            <Stack spacing={2}>
                {props.icon}                
                <Typography>
                    {props.text}
                </Typography> 
            </Stack>                        
        </Box>
    );
}

const ModelBox = (props) => {
    return(
        <Box sx={{ padding: 5, borderRadius: 2, bgcolor: '#30343f', color: 'white', maxWidth: 1400, boxShadow: 12 }}>
            <Stack spacing={3}>
                <Typography fontWeight={600} fontSize={16}>
                    {props.title}
                </Typography>
                <Typography fontSize={15}>
                    {props.text}
                </Typography>
            </Stack>                                
        </Box>
    );
}

const FuncBasic = () => {
    const {isDesktop} = useContext(Context);
    const location = useLocation();
    const {anchor} = location.state || {};
    const iconSize = isDesktop ? 'xl' : '2xl'; 
    const [secValue, setSecValue] = useState(0);

    const boxSets = {
        display: 'flex',
        justifyContent: 'center',
        bgcolor: '#30343f',
        color: 'white',
        padding: 5,
        borderRadius: 3,
        border: '1px solid rgb(180, 180, 180)',
        boxShadow: 12,      
    }

    const handleChange = (newValue) => {
        setSecValue(newValue);
    };

    useEffect(()=>{        
        if(anchor){
            setSecValue(anchor);
        }
    }, [])

    return(
        <Box sx={{
            height: '100vh',                   
        }}>
            <Stack spacing={6} sx={{ padding: {lg: 5, md: 5, sm: 3, xs: 1, xxs: 1}, borderRadius: 5 }}>           
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <SecTabs
                        value={secValue}
                    >
                        <SecTab label="Βασικές έννοιες" sx={{ fontWeight: 600, fontSize: 16, color: secValue === 0 ? 'orangered' : '#30343f' }} onClick={()=>handleChange(0)}/>
                        <SecTab label="Μοντέλα Αποκατάστασης" sx={{ fontWeight: 600, fontSize: 16, color: secValue === 1 ? 'orangered' : '#30343f' }} onClick={()=>handleChange(1)}/>
                        <SecTab label="Η GS Wheelchairs και ο ρόλος της" sx={{ fontWeight: 600, fontSize: 16, color: secValue === 2 ? 'orangered' : '#30343f' }} onClick={()=>handleChange(2)}/>
                    </SecTabs> 
                </Box>
                {secValue === 0 &&                                        
                    <Stack spacing={6} alignItems='center'>
                        <Box sx={{ bgcolor: '#30343f', padding: 3, borderRadius: 5, boxShadow: 4, maxWidth: 1400 }}>
                            <Typography sx={{ color: 'white' }}>
                                Η αποκατάσταση είναι ένας τομέας που περιλαμβάνει πολλαπλά μοντέλα και
                                προσεγγίσεις, τα οποία επιδιώκουν να βελτιώσουν την ποιότητα ζωής των ατόμων με
                                αναπηρίες. Αυτά τα μοντέλα διαφοροποιούνται ανάλογα με το στόχο και τον τρόπο
                                εφαρμογής τους, από τις πιο παραδοσιακές ιατρικές μεθόδους έως τις πιο σύγχρονες
                                και ολοκληρωμένες προσεγγίσεις, όπως η λειτουργική αποκατάσταση.
                            </Typography>          
                        </Box>                                       
                        <Grid container spacing={2} justifyContent='center' sx={{ animation: `${fadeIn} 1s ease-in-out`, maxWidth: 1400 }}>                                                         
                            <Grid item xs={12} sm={6} md={5}>
                                <ColorBox
                                    color={'rgb(240, 235, 240)'}
                                    icon={<FontAwesomeIcon icon={faLinkSlash} size={iconSize} style={{ color: 'rgb(40, 40, 40)' }}/>}
                                    text={'Μετά από έναν τραυματισμό στην σπονδυλική στήλη το σώμα μας γίνεται απίστευτα βαρύ και μη λειτουργικό. Η λέξη αυτονομία και ανεξαρτησία αποκτούν άλλη έννοια.'}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={5}>
                                <ColorBox
                                    color={'rgb(240, 230, 245)'}
                                    icon={<FontAwesomeIcon icon={faWheelchairMove} size={iconSize} style={{ color: 'rgb(40, 40, 40)' }}/>}
                                    text={'Καλείσαι ξαφνικά να αντιμετωπίσεις προκλήσεις και καταστάσεις που ποτέ δεν είχαν περάσει από το μυαλό σου ενώ προσπαθείς να συμβιβαστείς στον νέο τρόπο ζωής κάνοντας εκπτώσεις στα θέλω σου.'}
                                />            
                            </Grid>
                            <Grid item xs={12} sm={6} md={5}>
                                <ColorBox
                                    color={'rgb(240, 225, 230)'}
                                    icon={<FontAwesomeIcon icon={faBook} size={iconSize} style={{ color: 'rgb(40, 40, 40)' }}/>}
                                    text={'Υπάρχουν οι βασικές αρχές λειτουργικής αποκατάστασης  όπου εστιάζουν στην βελτίωση της αυτονομίας σου μέσα από την ομότιμη υποστήριξη με στόχο την βελτίωση της ποιότητας ζωής δίχως περιορισμούς.'}
                                />   
                            </Grid>   
                            <Grid item xs={12} sm={6} md={5}>
                                <ColorBox
                                    color={'rgb(240, 225, 250)'}
                                    icon={<FontAwesomeIcon icon={faHandshakeAngle} size={iconSize} style={{ color: 'rgb(40, 40, 40)' }}/>}
                                    text={'Στην GS  Wheelchairs (Get Started)  γνωρίζουμε πολύ καλά τι χρειάζεσαι και μπορούμε να σου δώσουμε όλα εκείνα τα εφόδια που θα χρειαστείς ώστε να γίνεις ξανά αυτόνομος για μια ποιοτική ζωή δίχως περιορισμούς.'}
                                />   
                            </Grid>                                                                           
                        </Grid>                                                                                                          
                    </Stack>                 
                }
                {secValue === 1 &&
                    <Box>                                                         
                        <Grid container justifyContent='center' rowSpacing={3} columnSpacing={3}>
                            <Grid item xs={12} sm={6} lg={5}>
                                <ModelBox
                                    title={'Ιατρικό Μοντέλο'}
                                    text={'Το ιατρικό μοντέλο επικεντρώνεται κυρίως στη θεραπεία και αποκατάσταση της σωματικής λειτουργίας. Στόχος του είναι η αντιμετώπιση της βλάβης μέσω ιατρικών θεραπειών, φαρμάκων και φυσικοθεραπείας. Αν και χρήσιμο για συγκεκριμένες καταστάσεις, συχνά παραβλέπει την καθημερινή λειτουργικότητα και την κοινωνική ενσωμάτωση του ατόμου​.'}
                                />                                      
                            </Grid>
                            <Grid item xs={12} sm={6} lg={5}>
                                <ModelBox
                                    title={'Κοινοτικό Μοντέλο'}
                                    text={'Αυτό το μοντέλο αναγνωρίζει ότι η αποκατάσταση είναι μια διαδικασία που πρέπει να γίνεται σε συνεργασία με την κοινότητα. Η παροχή εκπαίδευσης, υποδομών και πρόσβασης σε κοινωνικές υπηρεσίες, σε συνδυασμό με τη συνεργασία της τοπικής κοινότητας, επιτρέπει στο άτομο να λειτουργεί πιο αποτελεσματικά μέσα στην κοινωνία​.'}
                                />  
                            </Grid>   
                            <Grid item xs={12} sm={6} lg={5}> 
                                <ModelBox
                                    title={'Βιοψυχοκοινωνικό Μοντέλο'}
                                    text={'Το μοντέλο αυτό αναγνωρίζει τη σημασία της ψυχικής υγείας και της κοινωνικής υποστήριξης. Επικεντρώνεται στη συνολική κατάσταση του ατόμου, λαμβάνοντας υπόψη τους ψυχολογικούς και κοινωνικούς παράγοντες, καθώς και τις φυσικές προκλήσεις. Μέσω συμβουλευτικής και κοινωνικής υποστήριξης, το άτομο ενθαρρύνεται να αναπτύξει δεξιότητες για να επανακτήσει την ανεξαρτησία του και να βελτιώσει την ποιότητα ζωής του​​.'}
                                />                                         
                            </Grid>
                            <Grid item xs={12} sm={6} lg={5}>   
                                <ModelBox
                                    title={'Λειτουργική Αποκατάσταση'}
                                    text={'Το λειτουργικό μοντέλο είναι μια από τις πιο ολοκληρωμένες προσεγγίσεις αποκατάστασης. Στόχος του είναι να βοηθήσει το άτομο να επανενταχθεί πλήρως στην καθημερινότητά του, ανεξάρτητα από το επίπεδο της αναπηρίας. Εστιάζει στην εκπαίδευση και την ανάπτυξη δεξιοτήτων για να γίνει το άτομο όσο το δυνατόν πιο αυτόνομο, είτε πρόκειται για διαχείριση του σώματος, είτε για μετακινήσεις, είτε για χρήση αναπηρικού αμαξιδίου​.'}
                                />                                         
                            </Grid>
                            <Grid item xs={12} sm={6} lg={5}>     
                                <ModelBox
                                    title={'Ολιστικό Μοντέλο'}
                                    text={'Το ολιστικό μοντέλο αντιμετωπίζει την αναπηρία όχι ως μεμονωμένη κατάσταση, αλλά ως ένα σύνολο σωματικών, ψυχικών και κοινωνικών προκλήσεων. Βασίζεται στη συνεργασία μεταξύ πολλών ειδικοτήτων και στόχο έχει την ενίσχυση του ατόμου σε όλους τους τομείς της ζωής του, περιλαμβάνοντας τη σωματική, ψυχική και κοινωνική υποστήριξη​.'}
                                />                                        
                            </Grid>                                                           
                        </Grid>                        
                    </Box>  
                }
                {secValue === 2 &&
                    <Stack spacing={5}>                                                   
                        <Stack spacing={15} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: '#30343f', padding: 5, borderRadius: 3, boxShadow: 4 }}>
                                <Typography sx={{ color: 'white' }}>
                                    Η GS Wheelchairs είναι μια εταιρεία που διαφέρει από τις παραδοσιακές εταιρείες
                                    αποκατάστασης. Ειδικεύεται στη λειτουργική αποκατάσταση, παρέχοντας
                                    εξατομικευμένα προσαρμοσμένα αναπηρικά αμαξίδια και εκπαίδευση από
                                    έμπειρους επαγγελματίες που οι ίδιοι ζουν με αναπηρία. Ο ιδρυτής της GS
                                    Wheelchairs, Παναγιώτης Χρυσοβέργης, έχει εκπαιδευτεί στη Σουηδία και έχει
                                    περισσότερα από 30 χρόνια εμπειρίας, βοηθώντας εκατοντάδες άτομα να ανακτήσουν
                                    την αυτονομία τους μέσω λειτουργικής αποκατάστασης​​.
                                </Typography>          
                            </Box>
                            <Stack spacing={5}>
                                <Typography variant='h6' sx={{ fontWeight: 'bold', color: '#30343f', display: 'flex', justifyContent: 'center' }}>
                                    Η εταιρεία προσφέρει μια ολοκληρωμένη προσέγγιση που συνδυάζει τρεις βασικούς πυλώνες
                                </Typography>                              
                                <Grid container justifyContent='center' rowSpacing={2} columnSpacing={2}>  
                                    <Grid item xs={12} sm={6} lg={4}>                            
                                        <TextWindow title={'Εξατομικευμένα Αναπηρικά Αμαξίδια'} text={'Κατασκευασμένα πλήρως προσαρμοσμένα στα μέτρα του κάθε χρήστη, με σκοπό να μεγιστοποιήσουν την άνεση και την ανεξαρτησία. Τα αμαξίδια αυτά προσφέρουν εξαιρετική σταθερότητα και άνεση, προσαρμοσμένα στις ιδιαίτερες ανάγκες κάθε χρήστη​​.'}/>                                                                  
                                    </Grid>  
                                    <Grid item xs={12} sm={6} lg={4}>     
                                        <TextWindow title={'Εκπαίδευση στη Λειτουργική Αποκατάσταση'} text={'Η GS Wheelchairs παρέχει εκπαίδευση στη διαχείριση του σώματος, τις μεταφορές και τη σωστή χρήση του αμαξιδίου, εξασφαλίζοντας ότι οι χρήστες μπορούν να ζουν ανεξάρτητοι και να αντιμετωπίζουν τις προκλήσεις της καθημερινότητας με ασφάλεια​.'}/>                                                                                        
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4}>   
                                        <TextWindow title={'Ψυχοκοινωνική Στήριξη'} text={'Η GS Wheelchairs προσφέρει υπηρεσίες συμβουλευτικής και ψυχοκοινωνικής στήριξης. Μέσω αυτών των υπηρεσιών, τα άτομα με αναπηρία υποστηρίζονται ψυχολογικά και κοινωνικά, ώστε να αντιμετωπίζουν την αναπηρία τους με αυτοπεποίθηση και αισιοδοξία​​.'}/>                                                                                
                                    </Grid>
                                </Grid>                                                                                                                       
                            </Stack>
                            <Stack spacing={5}>
                                <Typography variant='h6' sx={{ fontWeight: 'bold', color: '#30343f', display: 'flex', justifyContent: 'center' }}>
                                    Γιατί να Επιλέξετε τη Λειτουργική Αποκατάσταση
                                </Typography>                                    
                                    <Box sx={{ width: '100%' }}>
                                        <Grid container justifyContent='center' rowSpacing={2} columnSpacing={2}>
                                            <Grid item xs={12} sm={6} lg={4}>                
                                                <Box sx={boxSets}>
                                                    <Typography sx={{ color: 'white' }}>
                                                        Η λειτουργική αποκατάσταση προσφέρει μια πιο ολοκληρωμένη και μακροπρόθεσμη
                                                        λύση σε σχέση με τα υπόλοιπα μοντέλα αποκατάστασης, καθώς συνδυάζει τη
                                                        σωματική και ψυχική υποστήριξη με την ανάπτυξη λειτουργικών δεξιοτήτων. Τα
                                                        άτομα μαθαίνουν να ζουν αυτόνομα και να διαχειρίζονται την καθημερινότητά τους
                                                        χωρίς περιορισμούς​​.
                                                    </Typography>          
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={6} lg={4}>           
                                            <Box sx={boxSets}>
                                                <Typography sx={{ color: 'white' }}>
                                                    Με την GS Wheelchairs, τα άτομα δεν αποκτούν απλά ένα αμαξίδιο, αλλά μια
                                                    ολόκληρη προσέγγιση που τους δίνει τα εργαλεία και τη γνώση να ζήσουν με
                                                    μεγαλύτερη ανεξαρτησία και ποιότητα ζωής. Το γεγονός ότι οι εκπαιδευτές και οι
                                                    κατασκευαστές της GS Wheelchairs είναι και οι ίδιοι άτομα με αναπηρία, ενισχύει
                                                    την αυθεντικότητα και την ποιότητα των υπηρεσιών που προσφέρουν, διότι
                                                    γνωρίζουν προσωπικά τις προκλήσεις που αντιμετωπίζουν οι χρήστες​​.
                                                </Typography>          
                                            </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={6} lg={4}>         
                                                <Box sx={boxSets}>
                                                    <Typography sx={{ color: 'white' }}>
                                                        Η λειτουργική αποκατάσταση, όταν συνδυάζεται με την εξατομικευμένη προσέγγιση
                                                        της GS Wheelchairs, δίνει στα άτομα τη δυνατότητα να ζήσουν μια πλήρη, ενεργή
                                                        και αυτόνομη ζωή, ξεπερνώντας τα εμπόδια της αναπηρίας.
                                                    </Typography>          
                                                </Box>   
                                            </Grid>
                                        </Grid>
                                    </Box>                                                                                                                   
                            </Stack>                                                
                        </Stack>                                 
                    </Stack>                                      
                }
            </Stack>                   
        </Box>                      
    );
}

export default FuncBasic;