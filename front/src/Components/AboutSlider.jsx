import React, { useState } from "react";
import suc1 from '../assets/stompis.jpg';
import suc2 from '../assets/kopelia.jpg';
import { Typography, Tabs, Tab, Box, Stack, Paper, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import YouTube from 'react-youtube';
import { useContext } from "react";
import { Context } from "./Context";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PortraitIcon from '@mui/icons-material/Portrait';

const MainTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        padding: 3
    },   
});
  
const MainTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',            
        marginRight: theme.spacing(1),
        color: '#30343f',
        '&.Mui-selected': {
        color: 'white',
        },
        border: '1px solid #30343f',
        borderRadius: 90,
        maxHeight: 30,        
    }),
);

const SecTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
        sx={{ borderBottom: '1px solid rgb(180, 180, 180)' }}
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

const TripleBox = (props) => {
    const boxSets = {
        bgcolor: '#30343f',
        color: 'white',
        padding: 3,
        borderRadius: 5,
        boxShadow: 4,
        minHeight: 50
    }

    return(
        <Grid container columnGap={2} rowGap={3} justifyContent='center' sx={{ display: 'flex', alignItems: 'stretch' }}>  
            <Grid item xs={12} sm={5}>
                <Box sx={boxSets}>                                                    
                    <Typography variant="body2">
                        {props.text1}
                    </Typography>                                                                                           
                </Box>
            </Grid>                   
            <Grid item xs={12} sm={5}>
                <Box sx={boxSets}>                    
                    <Typography variant="body2">
                        {props.text2}
                    </Typography>                                              
                </Box>
            </Grid>
            <Grid item xs={12} sm={10}>
                <Box sx={boxSets}>                   
                    <Typography variant="body2">
                        {props.text3}
                    </Typography>                                                   
                </Box>     
            </Grid>
        </Grid>                    
    );
}

const SideButton = (props) => {
    return(
        <Box onClick={()=>{props.func()}} sx={{ border: '1px solid #30343f', borderRadius: 10, padding: 1, paddingLeft: 2, paddingRight: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>            
                <Typography>
                    {props.text}
                </Typography>
                {props.icon}                    
        </Box>
    );
}

const AboutSlider = () => {
    const {isDesktop} = useContext(Context);
    const [mainValue, setMainValue] = useState(0);
    const [secValue, setSecValue] = useState(0);
    const [vidOpen, setVidOpen] = useState(false);
    const [bioOpen, setBioOpen] = useState(false);

    const handleMainChange = (event, newValue) => {
        setMainValue(newValue);
        const els = document.getElementsByClassName('styled-t');
        for(let el of els){
            el.style.backgroundColor = 'transparent';          
        }
        event.target.style.backgroundColor = '#30343f';
    };

    const handleSecChange = (newValue) => {
        setSecValue(newValue);
    };

    const showVideo = () => {
        if(vidOpen){
            setVidOpen(false);
        }else{
            setBioOpen(false);
            setVidOpen(true);
        }        
    }

    const showBio = () => {
        if(bioOpen){
            setBioOpen(false);
        }else{
            setVidOpen(false);
            setBioOpen(true);
        }      
    }

    const opts = {
        height: '300',
        width: '100%',
        playerVars: {
          autoplay: 0,
        },
        borderRadius: 10,
    };

    const onReady = (event) => {        
        event.target.pauseVideo();
    };

    return(
            <Box sx={{ paddingBottom: 5, display: 'flex', justifyContent: 'center' }}>              
                <Stack>                                                                                            
                    <Box sx={{ display: 'flex', justifyContent: 'center', padding: 3 }}>
                        <MainTabs
                            value={mainValue}
                            onChange={handleMainChange}                                                                                                               
                        >
                            <MainTab className='styled-t' label="Ποιοί είμαστε" sx={{ fontWeight: 600, fontSize: 15, padding: 2, color: '#30343f', backgroundColor: '#30343f', boxShadow: 2 }}/>
                            <MainTab className='styled-t' label="Success Stories" sx={{ fontWeight: 600, fontSize: 15, padding: 2, boxShadow: 2 }}/>
                        </MainTabs>             
                    </Box>                                                                         
                    {mainValue === 0 ? 
                        <Box sx={{ padding: {lg: 5, md: 5, sm: 3, xs: 1, xxs: 1}, maxWidth: 1400 }}>
                            <Box sx={{ marginBottom: 2, display: 'flex', justifyContent: 'end' }}>
                                <Stack direction='row' spacing={1}>
                                    <Box onClick={()=>{showVideo()}} sx={{ border: '1px solid #30343f', bgcolor: vidOpen ? '#30343f' : 'transparent', color: vidOpen ? 'white' : '#30343f', borderRadius: 10, padding: 1, paddingLeft: 2, paddingRight: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>            
                                        <Typography>
                                            Προβολή βίντεο
                                        </Typography>
                                        <PlayArrowIcon/>               
                                    </Box>      
                                    <Box onClick={()=>{showBio()}} sx={{ border: '1px solid #30343f', bgcolor: bioOpen ? '#30343f' : 'transparent', color: bioOpen ? 'white' : '#30343f', borderRadius: 10, padding: 1, paddingLeft: 2, paddingRight: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>            
                                        <Typography>
                                            Προβολή βιογραφικού
                                        </Typography>
                                        <PortraitIcon/>            
                                    </Box>                                                                  
                                </Stack>
                            </Box>             
                            <Box sx={{ display: 'flex', justifyContent: 'center', display: vidOpen ? 'flex' : 'none', marginTop: 5, marginBottom: 5, bgcolor: 'rgb(235, 240, 248)', padding: 1 }}>
                                        <Box sx={{ height: 250, width: 450, borderRadius: 2, overflow: 'hidden' }}>
                                            <YouTube videoId='d0fYQ3sorTE' opts={opts} onReady={onReady}/>
                                        </Box>
                                    </Box>  
                            <Box sx={{ display: bioOpen ? 'flex' : 'none', justifyContent: 'center', width: '100%', marginTop: 5, marginBottom: 5 }}>
                                <Stack spacing={3} sx={{ borderRadius: 2, bgcolor: 'rgb(235, 240, 248)', padding: 5, boxShadow: 4 }}>                                
                                    <Typography variant="body2">
                                        Σε ηλικία 14 χρονών απέκτησα την αναπηρία μου μετά από ένα τροχαίο ατύχημα.
                                        Νοσηλεύτηκα στο Νοσοκομείο Παπανικολάου της Θεσσαλονίκης για σχεδόν δύο μήνες
                                        όπου οι γιατροί διέγνωσαν τραυματισμό στην σπονδυλική μου στήλη στο επιπεδο Α8
                                        Νευροτόμιο.
                                    </Typography>
                                    <Typography variant="body2">
                                        Μετά από μια σύντομη παραμονή στο σπίτι, και δίχως να μου έχουν δώσει
                                        κάποιο βοήθημα μετακίνησης, μεταφέρθηκα στη Χαϊδελβέργη της Γερμανίας σε κέντρο
                                        αποκατάστασης όπου εκεί μου εξήγησαν τι σημαίνει τραυματισμός στη σπονδυλική στήλη.
                                        Μόνιμη παράλυση κάτω άκρων από το επίπεδο του τραυματισμού και κάτω. Νοσηλεύτηκα
                                        για τέσσερις μήνες και τον Δεκέμβριο της ίδιας χρονιάς επέστρεψα στη Θεσσαλονίκη. Τον
                                        Ιανουάριο συνέχισα το σχολείο μου.
                                    </Typography>
                                    <Typography variant="body2">
                                        Τελείωσα το Γυμνάσιο, πήγα στο λύκειο, σπούδασα Εφαρμοσμένη πληροφορική στο
                                        Πανεπιστήμιο Μακεδονίας, και το 1995 ασχολήθηκα με το μπάσκετ με αμαξίδιο όπου από
                                        το 1999 έως το 2009 ήμουν μέλος της Εθνικής ομάδας με πολλές συμμετοχές σε
                                        ευρωπαϊκούς και πανευρωπαϊκούς αγώνες ενώ το 2004 πήρα μέρος στους
                                        Παραολυμπιακούς αγώνες της Αθήνας.
                                    </Typography>
                                    <Typography variant="body2">
                                        Πρόεδρος της ομάδας του Αθλητικού Συλλόγου Αναπήρων Κένταυρος της Θεσσαλονίκης,
                                        πρόεδρος της ομάδας μπάσκετ με αμαξίδιο του Άρη Θεσσαλονίκης. Δοκίμασα διάφορα
                                        αθλήματα σαν Χόμπι ενώ υπήρξα αθλητής της προσαρμοσμένης χιονοδρομίας SEATSKI.
                                    </Typography>
                                    <Typography variant="body2">
                                        Το 2006 έγινα πιστοποιημένος εκπαιδευτής για ανθρώπους με τραυματισμό στην
                                        σπονδυλική στήλη από τον Σουηδικό οργανισμό RG ενεργητική αποκατάσταση.
                                        Ιδρυτικό μέλος και εκπαιδευτής του σωματείου Άλλη Όψη που σαν σκοπό είχε την
                                        δημιουργία εκπαιδευτικών προγραμμάτων για άτομα με τραυματισμό στην σπονδυλική
                                        στήλη με στόχο την βελτίωση της αυτονομίας σε βασικά θέματα καθημερινότητας.
                                    </Typography>
                                    <Typography variant="body2">
                                        Εργάστηκα στην Νομαρχία Θεσσαλονίκης στο τμήμα αθλητισμού και από εκεί για 8 χρόνια
                                        σε ιδιωτικό κέντρο αποκατάστασης στη Θεσσαλονίκη, στο τμήμα εργοθεραπείας σαν
                                        εκπαιδευτής, ενώ από το 2019 ασχολούμαι και με την κατασκευή αναπηρικών αμαξιδίων
                                        Custom Made.
                                    </Typography>
                                    <Typography variant="body2">
                                        Η GS wheelchairs είναι το αποτέλεσμα όλων αυτών των ετών στο χώρο της αναπηρίας. Όλη
                                        μου η εμπειρία στον χώρο την λειτουργικής αποκατάστασης, η φιλοσοφία μου για το τι
                                        είναι αναπηρία, ποιες είναι η δυνατότητες σου και ποιες είναι οι πραγματικές σου ανάγκες
                                        είναι αυτό που κάνει την GS (Get Started) την πρώτη εταιρία με ολιστική προσέγγιση.
                                        Στόχος της είναι έχει να παρέχει ολοκληρωμένες λύσεις σε άτομα με αναπηρία και σε
                                        όσους ζουν την αναπηρία από κοντά, με στόχο την βελτίωση της αυτονομίας και μια
                                        καλύτερη ποιότητα ζωής. Όσο υψηλότερο το επίπεδο αυτονομίας τόσο καλύτερη και η
                                        ποιότητα ζωής.
                                    </Typography>
                                    <Typography variant="body2">
                                        Η αναπηρία είναι μια κατάσταση, εσύ επιλέγεις το πως θα την ζήσεις.
                                    </Typography>                                       
                                </Stack>
                            </Box>
                            <Stack spacing={10}>                                
                                <Box sx={{ padding: 4, bgcolor: '#30343f', borderRadius: 5, boxShadow: 2 }}>                                 
                                    <Typography variant="body2" sx={{ color: 'white' }}>
                                        Η GS Wheelchairs δεν είναι απλώς μια εταιρεία που κατασκευάζει αναπηρικά
                                        αμαξίδια. Μέσα από την πολυετή εμπειρία της, έχει δημιουργήσει ένα ολοκληρωμένο
                                        σύστημα υποστήριξης που εστιάζει όχι μόνο στις φυσικές ανάγκες των ατόμων με
                                        αναπηρία, αλλά και στη ψυχολογική και κοινωνική τους ενδυνάμωση. Ένας από
                                        τους βασικούς πυλώνες της GS Wheelchairs είναι η υπηρεσία συμβουλευτικής, η
                                        οποία απευθύνεται τόσο στα ίδια τα άτομα που ζουν με αναπηρία όσο και στις
                                        οικογένειές τους, βοηθώντας τους να προσαρμοστούν καλύτερα στις προκλήσεις της
                                        καθημερινότητας και να αλληλεπιδρούν πιο αποτελεσματικά με την κοινωνία.
                                    </Typography>                                                                                                        
                                </Box>         
                                <Stack spacing={2} sx={{ paddingTop: 2, paddingBottom: 2 }}>
                                    <Typography variant='h6' sx={{ fontWeight: 'bold', color: '#30343f', display: 'flex', justifyContent: 'center' }}>
                                        Προσφέρουμε Συμβουλευτική
                                    </Typography>      
                                    <SecTabs
                                        value={secValue}                                                                     
                                    >
                                        <SecTab label="για Άτομα με Αναπηρία" sx={{ fontWeight: 600, fontSize: 15, color: secValue === 0 ? 'orangered' : '#30343f' }} onClick={()=>handleSecChange(0)}/>
                                        <SecTab label="για Οικογένειες" sx={{ fontWeight: 600, fontSize: 15, color: secValue === 1 ? 'orangered' : '#30343f' }} onClick={()=>handleSecChange(1)}/>
                                        <SecTab label="για Αλληλεπίδραση με την Κοινωνία" sx={{ fontWeight: 600, fontSize: 15, color: secValue === 2 ? 'orangered' : '#30343f' }} onClick={()=>handleSecChange(2)}/>
                                        <SecTab label="ως Εργαλείο Ενδυνάμωσης" sx={{ fontWeight: 600, fontSize: 15, color: secValue === 3 ? 'orangered' : '#30343f' }} onClick={()=>handleSecChange(3)}/>
                                    </SecTabs>                                                                                                                  
                                    {secValue === 0 &&                           
                                        <Box>
                                            <Stack spacing={10}>
                                                <Typography variant="body2">
                                                    Η συμβουλευτική υπηρεσία της GS Wheelchairs στοχεύει στην ψυχολογική
                                                    υποστήριξη των ατόμων με αναπηρία, βοηθώντας τα να αντιμετωπίσουν τα
                                                    ψυχολογικά εμπόδια και τις προκλήσεις που συνοδεύουν τη σωματική αναπηρία. Οι
                                                    ειδικευμένοι σύμβουλοι, οι οποίοι οι ίδιοι ζουν σε συνθήκες αναπηρίας, προσφέρουν
                                                    μια βαθιά κατανόηση των ζητημάτων που αντιμετωπίζουν οι χρήστες. Μέσα από
                                                    προσωπική εμπειρία και επαγγελματική εκπαίδευση, παρέχουν συμβουλές για να
                                                    βοηθήσουν τα άτομα:
                                                </Typography>
                                                <TripleBox
                                                    text1={'Να αναπτύξουν ψυχική ανθεκτικότητα και να αποδεχτούν την αναπηρία τους ως μια νέα πραγματικότητα, όχι ως περιορισμό, αλλά ως μέρος της ζωής τους.'}
                                                    text2={'Να μάθουν πώς να διαχειρίζονται τις καθημερινές προκλήσεις με αυτοπεποίθηση, εστιάζοντας στην αυτονομία και την ανεξαρτησία τους.'}
                                                    text3={'Να αντιμετωπίσουν τις προκλήσεις που σχετίζονται με τις κοινωνικές προκαταλήψεις και τα στερεότυπα, τα οποία πολλές φορές είναι πιο δύσκολο να ξεπεραστούν από τις ίδιες τις σωματικές δυσκολίες​.'}
                                                />                                                                                                                                                                                         
                                                <Typography variant="body2">
                                                    Η συμβουλευτική αυτή δεν είναι μόνο ψυχολογική, αλλά και πρακτική, βοηθώντας
                                                    τους χρήστες να μάθουν πώς να ενσωματώσουν στη ζωή τους νέες τεχνικές και
                                                    εργαλεία για την καθημερινή τους αυτονομία, όπως είναι η σωστή χρήση του
                                                    αναπηρικού αμαξιδίου και η λειτουργική αποκατάσταση​.
                                                </Typography>          
                                            </Stack>
                                        </Box>                                              
                                    }      
                                    { secValue === 1 &&
                                        <Box>
                                            <Stack spacing={3}>
                                                <Typography variant="body2">
                                                    Η οικογένεια ενός ατόμου με αναπηρία παίζει συχνά καθοριστικό ρόλο στην
                                                    υποστήριξη και την ψυχολογική ενδυνάμωση του ατόμου. Η GS Wheelchairs
                                                    αναγνωρίζει αυτήν τη δυναμική και προσφέρει υπηρεσίες συμβουλευτικής που
                                                    απευθύνονται στις οικογένειες, με στόχο να:
                                                </Typography>
                                                <TripleBox
                                                    text1={'Ενισχύσει την κατανόηση της αναπηρίας, βοηθώντας τα μέλη της οικογένειας να κατανοήσουν βαθύτερα τις ανάγκες του ατόμου και τον τρόπο που μπορούν να το στηρίξουν.'}
                                                    text2={'Παρέχει εκπαίδευση για την πρακτική υποστήριξη, διδάσκοντας τεχνικές μεταφοράς, διαχείρισης και συντήρησης του εξοπλισμού του ατόμου, ώστε να μπορούν να το βοηθήσουν πιο αποτελεσματικά στην καθημερινότητά του​​.'}
                                                    text3={'Προσφέρει ψυχολογική στήριξη για να βοηθήσει τα μέλη της οικογένειας να αντιμετωπίσουν το άγχος, τις ανησυχίες και τις συναισθηματικές προκλήσεις που συνοδεύουν τη φροντίδα ενός ατόμου με αναπηρία. Η στήριξη αυτή στοχεύει να διασφαλίσει ότι τα μέλη της οικογένειας θα παραμείνουν υγιή ψυχολογικά και θα είναι σε θέση να παρέχουν συνεχώς την κατάλληλη βοήθεια​.'}
                                                />                                               
                                            </Stack>  
                                        </Box>
                                    }           
                                    { secValue === 2 &&
                                        <Box sx={{ padding: 4, bgcolor: '#30343f', color: 'white', borderRadius: 5, boxShadow: 8 }}>
                                            <Stack spacing={3}>
                                                <Typography variant="body2">
                                                    Η GS Wheelchairs πιστεύει ότι η αναπηρία δεν είναι μόνο ένα σωματικό ζήτημα,
                                                    αλλά και ένα κοινωνικό. Μέσα από τις υπηρεσίες συμβουλευτικής, οι χρήστες και οι
                                                    οικογένειές τους μαθαίνουν να αλληλεπιδρούν με την κοινωνία με έναν τρόπο που
                                                    προάγει την ενσωμάτωση και όχι τον αποκλεισμό. Η εταιρεία υποστηρίζει ότι το
                                                    μεγαλύτερο πρόβλημα που αντιμετωπίζουν τα άτομα με αναπηρία δεν είναι η ίδια η
                                                    αναπηρία, αλλά οι κοινωνικές προκαταλήψεις και η έλλειψη σχεδιασμού για την
                                                    ενσωμάτωσή τους​.
                                                </Typography>
                                                <Typography variant="body2">
                                                    Οι σύμβουλοι της GS Wheelchairs βοηθούν τους χρήστες να αναπτύξουν δεξιότητες
                                                    για να διαχειρίζονται τα εμπόδια που συναντούν στην καθημερινή τους ζωή, όπως η
                                                    προσβασιμότητα σε δημόσιους χώρους, η εργασία και οι κοινωνικές σχέσεις. Επίσης,
                                                    συνεργάζονται με την οικογένεια και την κοινότητα για να δημιουργήσουν ένα
                                                    περιβάλλον που προωθεί την ισότητα και την κατανόηση​.
                                                </Typography>
                                            </Stack>
                                        </Box>
                                    }                       
                                    { secValue === 3 &&
                                        <Box sx={{ padding: 4, bgcolor: '#30343f', color: 'white', borderRadius: 5, boxShadow: 8 }}>
                                            <Stack spacing={3}>
                                                <Typography variant="body2">
                                                    Η υπηρεσία συμβουλευτικής της GS Wheelchairs δεν περιορίζεται μόνο στην
                                                    ψυχολογική υποστήριξη ή τις πρακτικές οδηγίες. Αποτελεί ένα εργαλείο
                                                    ενδυνάμωσης για τα άτομα με αναπηρία, παρέχοντάς τους τα μέσα και τη γνώση για
                                                    να ζήσουν με αξιοπρέπεια και ανεξαρτησία. Μέσω της συνεργασίας με τις
                                                    οικογένειες και της προώθησης της κοινωνικής αλληλεπίδρασης, η GS Wheelchairs
                                                    δημιουργεί ένα δίκτυο υποστήριξης που προάγει την πλήρη συμμετοχή των ατόμων
                                                    με αναπηρία στην κοινωνία, ενισχύοντας την ποιότητα ζωής τους​​.
                                                </Typography>
                                                <Typography variant="body2">
                                                    Σε αυτή την προσέγγιση, η αναπηρία δεν αποτελεί πλέον ένα εμπόδιο, αλλά μια νέα
                                                    πρόκληση για προσωπική ανάπτυξη και κοινωνική ενσωμάτωση.
                                                </Typography>
                                            </Stack>
                                        </Box>
                                    }
                                </Stack>
                            </Stack>
                            {/* <Stack spacing={3} sx={{ borderRadius: 10, bgcolor: 'rgb(235, 240, 248)', padding: 5, boxShadow: 2 }}>                                
                                <Typography variant="body2">
                                    Σε ηλικία 14 χρονών απέκτησα την αναπηρία μου μετά από ένα τροχαίο ατύχημα.
                                    Νοσηλεύτηκα στο Νοσοκομείο Παπανικολάου της Θεσσαλονίκης για σχεδόν δύο μήνες
                                    όπου οι γιατροί διέγνωσαν τραυματισμό στην σπονδυλική μου στήλη στο επιπεδο Α8
                                    Νευροτόμιο.
                                </Typography>
                                <Typography variant="body2">
                                    Μετά από μια σύντομη παραμονή στο σπίτι, και δίχως να μου έχουν δώσει
                                    κάποιο βοήθημα μετακίνησης, μεταφέρθηκα στη Χαϊδελβέργη της Γερμανίας σε κέντρο
                                    αποκατάστασης όπου εκεί μου εξήγησαν τι σημαίνει τραυματισμός στη σπονδυλική στήλη.
                                    Μόνιμη παράλυση κάτω άκρων από το επίπεδο του τραυματισμού και κάτω. Νοσηλεύτηκα
                                    για τέσσερις μήνες και τον Δεκέμβριο της ίδιας χρονιάς επέστρεψα στη Θεσσαλονίκη. Τον
                                    Ιανουάριο συνέχισα το σχολείο μου.
                                </Typography>
                                <Typography variant="body2">
                                    Τελείωσα το Γυμνάσιο, πήγα στο λύκειο, σπούδασα Εφαρμοσμένη πληροφορική στο
                                    Πανεπιστήμιο Μακεδονίας, και το 1995 ασχολήθηκα με το μπάσκετ με αμαξίδιο όπου από
                                    το 1999 έως το 2009 ήμουν μέλος της Εθνικής ομάδας με πολλές συμμετοχές σε
                                    ευρωπαϊκούς και πανευρωπαϊκούς αγώνες ενώ το 2004 πήρα μέρος στους
                                    Παραολυμπιακούς αγώνες της Αθήνας.
                                </Typography>
                                <Typography variant="body2">
                                    Πρόεδρος της ομάδας του Αθλητικού Συλλόγου Αναπήρων Κένταυρος της Θεσσαλονίκης,
                                    πρόεδρος της ομάδας μπάσκετ με αμαξίδιο του Άρη Θεσσαλονίκης. Δοκίμασα διάφορα
                                    αθλήματα σαν Χόμπι ενώ υπήρξα αθλητής της προσαρμοσμένης χιονοδρομίας SEATSKI.
                                </Typography>
                                <Typography variant="body2">
                                    Το 2006 έγινα πιστοποιημένος εκπαιδευτής για ανθρώπους με τραυματισμό στην
                                    σπονδυλική στήλη από τον Σουηδικό οργανισμό RG ενεργητική αποκατάσταση.
                                    Ιδρυτικό μέλος και εκπαιδευτής του σωματείου Άλλη Όψη που σαν σκοπό είχε την
                                    δημιουργία εκπαιδευτικών προγραμμάτων για άτομα με τραυματισμό στην σπονδυλική
                                    στήλη με στόχο την βελτίωση της αυτονομίας σε βασικά θέματα καθημερινότητας.
                                </Typography>
                                <Typography variant="body2">
                                    Εργάστηκα στην Νομαρχία Θεσσαλονίκης στο τμήμα αθλητισμού και από εκεί για 8 χρόνια
                                    σε ιδιωτικό κέντρο αποκατάστασης στη Θεσσαλονίκη, στο τμήμα εργοθεραπείας σαν
                                    εκπαιδευτής, ενώ από το 2019 ασχολούμαι και με την κατασκευή αναπηρικών αμαξιδίων
                                    Custom Made.
                                </Typography>
                                <Typography variant="body2">
                                    Η GS wheelchairs είναι το αποτέλεσμα όλων αυτών των ετών στο χώρο της αναπηρίας. Όλη
                                    μου η εμπειρία στον χώρο την λειτουργικής αποκατάστασης, η φιλοσοφία μου για το τι
                                    είναι αναπηρία, ποιες είναι η δυνατότητες σου και ποιες είναι οι πραγματικές σου ανάγκες
                                    είναι αυτό που κάνει την GS (Get Started) την πρώτη εταιρία με ολιστική προσέγγιση.
                                    Στόχος της είναι έχει να παρέχει ολοκληρωμένες λύσεις σε άτομα με αναπηρία και σε
                                    όσους ζουν την αναπηρία από κοντά, με στόχο την βελτίωση της αυτονομίας και μια
                                    καλύτερη ποιότητα ζωής. Όσο υψηλότερο το επίπεδο αυτονομίας τόσο καλύτερη και η
                                    ποιότητα ζωής.
                                </Typography>
                                <Typography variant="body2">
                                    Η αναπηρία είναι μια κατάσταση, εσύ επιλέγεις το πως θα την ζήσεις.
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                                    <Box sx={{ height: 250, width: 450, borderRadius: 3, overflow: 'hidden' }}>
                                        <YouTube videoId='d0fYQ3sorTE' opts={opts} onReady={onReady} style={{ borderRadius: '20px' }}/>
                                    </Box>
                                </Box>   
                            </Stack> */}
                        </Box>
                    :
                    <Box sx={{ padding: {lg: 5, md: 5, sm: 3, xs: 1, xxs: 1} }}>                                 
                        <Grid container justifyContent='center' rowSpacing={5} columnSpacing={5} sx={{ display: 'flex', alignItems: 'stretch' }}>
                            <Grid item xs={12} md={8} xl={4} className="suc-stories" sx={{ maxWidth: 700 }}>                                                    
                                <Paper sx={{ padding: 3, bgcolor: 'rgb(235, 240, 248)', borderRadius: 5, boxShadow: 12, minHeight: 200 }}>                          
                                    <Stack spacing={2}>     
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: 2 }}>
                                            <Stack direction='row' spacing={2} sx={{ alignItems: 'center' }}>                    
                                                <img src={suc1} alt=""/>                                                        
                                                <Typography variant="body3" fontWeight={600}>
                                                    Το κουτί με τις έγνοιες
                                                </Typography>                                                                                                                                                                
                                            </Stack>                    
                                            <Typography fontSize={13} fontWeight={600} fontStyle={'italic'} sx={{ color: 'rgb(80, 80, 80)' }}>
                                                Νίκος
                                            </Typography>                        
                                        </Box>                                        
                                        <Typography variant="body2">
                                            Ο Παναγιώτης ή Γιώτης όπως τον φωνάζουν, 
                                            ήταν το άτομο που μου έδειξε τον τρόπο προς την αυτονομία.
                                            Ένα άτομο με κάταγμα στην σπονδυλική στήλη έχει άμεση ανάγκη από
                                            έναν άνθρωπο που θα του ανοίξει τους ορίζοντες προς την αποδοχή
                                            και την άμεση αποκατάσταση. Για μένα αυτό το άτομο ήταν ο Γιώτης.
                                        </Typography>
                                        <Typography variant="body2">
                                            Μαζί του έμαθα να ντύνομαι,
                                            να σηκώνομαι από το κρεβάτι και να κινούμαι με το αμαξίδιο άνετα.
                                            Το σημαντικότερο όμως μάθημα που πήρα από αυτόν ήταν το “κουτί με τις έγνοιες”.
                                            Προσπαθούμε να τακτοποιήσουμε μια έγνοια μέχρι να έρθει η επόμενη και να πάρει
                                            την θέση της στο κουτί. Έτσι έμαθα να ζω με την αναπηρία και σήμερα ζω σχεδόν
                                            αυτόνομος όντας τετραπληγικός στην Ελλάδα.
                                        </Typography>
                                        <Typography variant="body2">
                                            Σε ευχαριστώ για άλλη μια φορά!
                                        </Typography>          
                                    </Stack>
                                </Paper>                             
                            </Grid>
                            <Grid item xs={12} md={8} xl={4} className="suc-stories" sx={{ maxWidth: 700 }}>                                                        
                                <Paper sx={{ padding: 3, bgcolor: 'rgb(235, 240, 248)', borderRadius: 5, boxShadow: 12 }}>                                        
                                    <Stack spacing={2}>     
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: 2 }}>
                                            <img src={suc2} alt=""/>   
                                            <Stack>                                              
                                                <Typography fontSize={13} fontWeight={600} fontStyle={'italic'} sx={{ color: 'rgb(80, 80, 80)' }}>
                                                    Ελπίδα
                                                </Typography>
                                            </Stack>       
                                        </Box>                                                                                                                                 
                                        <Typography variant="body2">
                                            Γνώρισα τον Γιώτη μετά από ένα τροχαίο ατύχημα που είχα. Με τη βοήθειά του,
                                            έμαθα πώς να χρησιμοποιώ το αναπηρικό μου αμαξίδιο και πώς να το εντάξω στην
                                            καθημερινότητά μου με αυτονομία και αυτοπεποίθηση. Μου μετέδωσε το μήνυμα ότι
                                            έχω τη δυνατότητα να επιλέξω τον τρόπο ζωής που επιθυμώ, παρά τις προκλήσεις
                                            που αντιμετωπίζω.
                                        </Typography>
                                        <Typography variant="body2">
                                            Σε ψυχολογικό επίπεδο, ήταν πάντα δίπλα μου, έτοιμος να με
                                            στηρίξει και να μου προσφέρει την άνεση και την ασφάλεια που χρειαζόμουν.
                                            Είχε πάντα κάτι να πει που θα με βοηθούσε να αντιμετωπίσω τις δυσκολίες και
                                            να νιώσω καλύτερα, ανεξάρτητα από το τι μου περνούσε στο μυαλό.
                                        </Typography>
                                        <Typography variant="body2">
                                            Ήταν ένας εξαιρετικός επαγγελματίας, αφοσιωμένος στο έργο του και πρόθυμος να με βοηθήσει σε κάθε βήμα του
                                            ταξιδιού μου προς την αυτονομία. Πέρα από αυτό, όμως, ήταν και ένας θερμός και αγαπητός
                                            άνθρωπος, που φρόντιζε για την ευημερία μου όχι μόνο σωματικά αλλά και ψυχικά.
                                        </Typography>                                        
                                    </Stack>
                                </Paper>                            
                            </Grid>
                        </Grid>
                    </Box>}               
                </Stack>            
            </Box>
    );
}

export default AboutSlider;