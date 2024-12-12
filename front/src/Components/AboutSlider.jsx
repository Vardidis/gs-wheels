import React, { useState } from "react";
import suc1 from '../assets/stompis.jpg';
import suc2 from '../assets/kopelia.jpg';
import { Typography, Tabs, Tab, Box, Stack, Paper, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import YouTube from 'react-youtube';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PortraitIcon from '@mui/icons-material/Portrait';
import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "./Context";

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
        borderRadius: 2,
        boxShadow: 4,
        minHeight: 50
    }

    return(
        <Grid container columnGap={2} rowGap={3} justifyContent='center' sx={{ display: 'flex', alignItems: 'stretch' }}>  
            <Grid item xxs={12} sm={5}>
                <Box sx={boxSets}>                                                    
                    <Typography variant="body2">
                        {props.text1}
                    </Typography>                                                                                           
                </Box>
            </Grid>                   
            <Grid item xxs={12} sm={5}>
                <Box sx={boxSets}>                    
                    <Typography variant="body2">
                        {props.text2}
                    </Typography>                                              
                </Box>
            </Grid>
            <Grid item xxs={12} sm={10}>
                <Box sx={boxSets}>                   
                    <Typography variant="body2">
                        {props.text3}
                    </Typography>                                                   
                </Box>     
            </Grid>
        </Grid>                    
    );
}

const AboutSlider = () => {
    const {allTexts} = useContext(Context);
    const [mainValue, setMainValue] = useState(0);
    const [secValue, setSecValue] = useState(0);
    const [vidOpen, setVidOpen] = useState(false);
    const [bioOpen, setBioOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleMainChange = (newValue) => {
        if(newValue !== mainValue){
            setMainValue(newValue);
        }               
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

    useEffect(() => {
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
            <Box sx={{ marginTop: 3, width: '100%', display: 'flex', justifyContent: 'center' }}>              
                <Stack
                    spacing={3}
                    alignItems={'stretch'}
                    sx={{                        
                        width: '100%',
                        maxWidth: 1400,
                        padding: '0px 32px'
                    }}
                >
                    <Grid container
                        columnGap={2}
                        rowGap={1}
                        justifyContent={'center'}
                        sx={{
                            paddingBottom: 3
                        }}
                    >
                        <Grid item>
                            <Box
                                onClick={()=>handleMainChange(0)} 
                                sx={{
                                    color: mainValue === 0 ? 'white' : '#30343f',
                                    bgcolor: mainValue === 0 ? '#30343f' : 'transparent',
                                    boxShadow: mainValue === 0 ? 8 : 4,
                                    padding: '12px 32px',
                                    borderRadius: 20,
                                    maxWidth: 125,
                                    cursor: 'pointer'
                                }}
                            >
                                <Typography
                                    fontSize={15}
                                    fontWeight={'bold'}
                                    textAlign={'center'}
                                >
                                    Ποιοί είμαστε
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box
                                onClick={()=>handleMainChange(1)} 
                                sx={{
                                    color: mainValue === 1 ? 'white' : '#30343f',
                                    bgcolor: mainValue === 1 ? '#30343f' : 'transparent',
                                    boxShadow: mainValue === 1 ? 8 : 4,                                  
                                    padding: '12px 32px',
                                    borderRadius: 20,
                                    maxWidth: 125,
                                    cursor: 'pointer'
                                }}
                            >
                                <Typography
                                    fontSize={15}
                                    fontWeight={'bold'}
                                    textAlign={'center'}
                                >
                                    Success Stories
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>                                                                              
                    {mainValue === 0 ? 
                        <Box sx={{ padding: '0px 8px' }}>
                            <Box sx={{ marginBottom: 2, display: 'flex', justifyContent: 'end' }}>
                                <Grid container
                                    rowGap={1}
                                    columnGap={2}
                                    justifyContent={'end'}
                                >
                                    <Grid item>
                                        <Box onClick={()=>{showVideo()}} sx={{ border: '1px solid #30343f', bgcolor: vidOpen ? '#30343f' : 'transparent', color: vidOpen ? 'white' : '#30343f', borderRadius: 10, padding: 1, paddingLeft: 2, paddingRight: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', boxShadow: 4 }}>            
                                            <Typography>
                                                Προβολή βίντεο
                                            </Typography>
                                            <PlayArrowIcon/>               
                                        </Box>      
                                    </Grid>
                                    <Grid item>
                                        <Box onClick={()=>{showBio()}} sx={{ border: '1px solid #30343f', bgcolor: bioOpen ? '#30343f' : 'transparent', color: bioOpen ? 'white' : '#30343f', borderRadius: 10, padding: 1, paddingLeft: 2, paddingRight: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', boxShadow: 4 }}>            
                                            <Typography>
                                                Προβολή βιογραφικού
                                            </Typography>
                                            <PortraitIcon/>            
                                        </Box>      
                                    </Grid>                                                            
                                </Grid>
                            </Box>             
                            <Box sx={{ display: 'flex', justifyContent: 'center', display: vidOpen ? 'flex' : 'none', marginTop: 5, marginBottom: 5, bgcolor: 'rgb(235, 240, 248)', padding: 1, borderRadius: 2, boxShadow: 4 }}>
                                        <Box sx={{ height: 250, width: 450, borderRadius: 3, overflow: 'hidden' }}>
                                            <YouTube videoId='d0fYQ3sorTE' opts={opts} onReady={onReady}/>
                                        </Box>
                                    </Box>  
                            <Box sx={{ display: bioOpen ? 'flex' : 'none', justifyContent: 'center', width: '100%', marginTop: 5, marginBottom: 5 }}>
                                <Stack spacing={3} sx={{ borderRadius: 2, bgcolor: 'rgb(235, 240, 248)', padding: 5, boxShadow: 8 }}>                                
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
                            <Stack spacing={3}>                                
                                <Box sx={{ padding: 4, bgcolor: '#30343f', borderRadius: 2, boxShadow: 2 }}>                                 
                                    <Typography variant="body2" sx={{ color: 'white' }}>
                                        {allTexts[8].placeText}
                                    </Typography>                                                                                                        
                                </Box>         
                                <Stack spacing={2} sx={{ paddingTop: 2, paddingBottom: 2 }}>
                                    <Typography variant='h6' sx={{ fontWeight: 'bold', color: '#30343f', display: 'flex', justifyContent: 'center' }}>
                                        Προσφέρουμε Συμβουλευτική
                                    </Typography>      
                                    <SecTabs
                                        value={secValue}  
                                        variant="scrollable"    
                                        scrollButtons="auto"                                  
                                        allowScrollButtonsMobile                                                                    
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
                                                    {allTexts[8].placeText2}
                                                </Typography>
                                                <TripleBox
                                                    text1={allTexts[8].items[0].text}
                                                    text2={allTexts[8].items[1].text}
                                                    text3={allTexts[8].items[2].text}
                                                />                                                                                                                                                                                         
                                                <Typography variant="body2">
                                                    {allTexts[8].placeText3}
                                                </Typography>          
                                            </Stack>
                                        </Box>                                              
                                    }      
                                    { secValue === 1 &&
                                        <Box>
                                            <Stack spacing={3}>
                                                <Typography variant="body2">
                                                    {allTexts[9].placeText}
                                                </Typography>
                                                <TripleBox
                                                    text1={allTexts[9].items[0].text}
                                                    text2={allTexts[9].items[1].text}
                                                    text3={allTexts[9].items[2].text}
                                                />                                               
                                            </Stack>  
                                        </Box>
                                    }           
                                    { secValue === 2 &&
                                        <Box sx={{ padding: 4, bgcolor: '#30343f', color: 'white', borderRadius: 2, boxShadow: 8 }}>
                                            <Stack spacing={3}>
                                                <Typography variant="body2">
                                                    {allTexts[10].placeText}
                                                </Typography>
                                                <Typography variant="body2">
                                                    {allTexts[11].placeText}
                                                </Typography>
                                            </Stack>
                                        </Box>
                                    }                       
                                    { secValue === 3 &&
                                        <Box sx={{ padding: 4, bgcolor: '#30343f', color: 'white', borderRadius: 2, boxShadow: 8 }}>
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