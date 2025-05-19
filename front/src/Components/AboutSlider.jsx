import React, { useState } from "react";
import suc1 from '../assets/stompis.jpg';
import suc2 from '../assets/kopelia.jpg';
import { Typography, Tabs, Tab, Box, Stack, Paper, Grid, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import YouTube from 'react-youtube';
import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "./Context";
import BioImg from '../assets/BIOGRAFIKO-AboutUs_BACKGROUND.jpg';
import Header from '../assets/HEADER-AboutUs_UP.jpg';
import Image1 from '../assets/PHOTO-1-AboutUs_TEXT.jpg';
import Image2 from '../assets/PHOTO-2-AboutUs_TEXT.jpg';
import Image3 from '../assets/PHOTO-3-AboutUs_TEXT.jpg';
import LoadingComp from "./LoadingComp";

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
        color: '#d85704',
        },       
    }),
);

const TripleBox = (props) => {
    const boxSets = {        
        color: '#30343f',
        bgcolor: 'rgb(250, 250, 250)'   ,        
    }

    return(
       <Stack
        direction={props.isDesktop ? 'row' : 'column'}
        justifyContent={'space-between'}
        spacing={2}
       >            
            <Stack
                spacing={1}                
                direction={'row'}
                alignItems={'center'}
                sx={boxSets}
            >
                {props.isDesktop && (
                    <Divider
                        orientation={'vertical'}
                        sx={{
                            bgcolor: '#d85704',
                            border: '1px solid #d85704'
                        }}
                    />                              
                )}                      
                <Typography
                    variant="body2"
                    fontSize={props.isDesktop ? 16 : 17}
                    sx={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 6,
                        overflow: 'hidden',
                        borderLeft: !props.isDesktop && '3px solid #d85704',
                        paddingLeft: !props.isDesktop && 1
                    }}
                >
                    {props.text1}
                </Typography>                                                                                           
            </Stack>
            <Stack
                spacing={1}                
                direction={'row'}
                alignItems={'center'}
                sx={boxSets}
            >
                {props.isDesktop && (
                    <Divider
                        orientation={'vertical'}
                        sx={{
                            bgcolor: '#d85704',
                            border: '1px solid #d85704'
                        }}
                    />                              
                )}                      
                <Typography
                    variant="body2"
                    fontSize={props.isDesktop ? 16 : 17}
                    sx={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 6,
                        overflow: 'hidden',
                        borderLeft: !props.isDesktop && '3px solid #d85704',
                        paddingLeft: !props.isDesktop && 1
                    }}
                >
                    {props.text2}
                </Typography>                                              
            </Stack>
            <Stack
                spacing={1}                
                direction={'row'}
                alignItems={'center'}
                sx={boxSets}
            >
                {props.isDesktop && (
                    <Divider
                        orientation={'vertical'}
                        sx={{
                            bgcolor: '#d85704',
                            border: '1px solid #d85704'
                        }}
                    />                              
                )}                      
                <Typography
                    variant="body2"
                    fontSize={props.isDesktop ? 16 : 17}
                    sx={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 6,
                        overflow: 'hidden',
                        borderLeft: !props.isDesktop && '3px solid #d85704',
                        paddingLeft: !props.isDesktop && 1
                    }}
                >
                    {props.text3}
                </Typography>                                                   
            </Stack>                
        </Stack>                    
    );
}

const TabButton = ({title, index, handleMainChange, mainValue}) => {
    const {isDesktop} = useContext(Context);

    return(
        <Box
            className={'spread-shade'}
            onClick={()=>handleMainChange(index)} 
            sx={{
                color: mainValue === index ? 'white' : '#30343f',
                bgcolor: mainValue === index ? '#d85704' : 'rgb(230, 230, 235)',
                boxShadow: mainValue === index ? 4 : 0,
                padding: {xs: '8px 12px', lg: '12px 32px'},
                borderRadius: 2,                
                cursor: 'pointer'                
            }}
        >
            <Typography
                fontSize={15}
                fontWeight={'bold'}
                textAlign={'center'}
                sx={{
                    whiteSpace: "nowrap"
                }}
            >
                {title}
            </Typography>
        </Box>
    );
}

const AboutSlider = () => {
    const {allTexts, isDesktop} = useContext(Context);
    const [mainValue, setMainValue] = useState(0);
    const [secValue, setSecValue] = useState(0);
    const [loading, setLoading] = useState(true);

    const handleMainChange = (newValue) => {
        if(newValue !== mainValue){
            setMainValue(newValue);
        }               
    };

    const handleSecChange = (newValue) => {
        setSecValue(newValue);
    };

    const opts = {            
        playerVars: {
          autoplay: 0,
        }       
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
            <LoadingComp/>
        )
    }

    return(          
            <Stack
                alignItems={isDesktop && 'center'}
                sx={{                                        
                    paddingBottom: 12
                }}
            >
                <img
                    src={Header}
                    style={{
                        width: '100%'
                    }}
                />
                <Stack
                    spacing={3}                                   
                    sx={{                                                
                        maxWidth: 1400,                          
                        padding: isDesktop ? '0px 16px' : '0px 8px',                                          
                    }}
                >
                    <Stack
                        direction={'row'}
                        spacing={1}
                        justifyContent={'space-between'}
                        sx={{
                            overflowX: 'auto',
                            padding: '16px 0px',                                                  
                        }}
                    >
                        <Stack
                            direction={'row'}
                            spacing={1}
                        >
                            <TabButton
                                title={'Ποιοί είμαστε'}
                                index={0}
                                handleMainChange={handleMainChange}
                                mainValue={mainValue}
                            />
                            <TabButton
                                title={'Success Stories'}
                                index={1}
                                handleMainChange={handleMainChange}
                                mainValue={mainValue}
                            />
                        </Stack>
                        <Stack
                            direction={'row'}
                            spacing={1}
                        >    
                            <TabButton
                                title={'Προβολή βίντεο'}
                                index={2}
                                handleMainChange={handleMainChange}
                                mainValue={mainValue}
                            />
                            <TabButton
                                title={'Προβολή βιογραφικού'}
                                index={3}
                                handleMainChange={handleMainChange}
                                mainValue={mainValue}
                            />
                        </Stack>
                    </Stack>                         
                    {mainValue === 0 && ( 
                        <Box                            
                        >                                                        
                            <Stack spacing={6} sx={{ marginTop: isDesktop ? 3 : 0 }}>                                                                                           
                                <Typography
                                    fontSize={16}
                                    sx={{
                                        color: '#30343f'
                                    }}
                                >
                                    {allTexts[8].placeText}
                                </Typography>   
                                <Stack
                                    direction={isDesktop ? 'row' : 'column'}
                                    justifyContent={'space-between'}
                                    spacing={1}
                                    sx={{                                                                          
                                        width: '100%',
                                        overflow: 'hidden'
                                    }}
                                >                                   
                                    <img
                                        src={Image1}
                                        style={{
                                            width: '100%',
                                            height: 300,
                                            objectFit: 'cover',
                                            borderRadius: 4
                                        }}
                                    />                                    
                                    <img
                                        src={Image2}
                                        style={{
                                            width: '100%',
                                            height: 300,
                                            objectFit: 'cover',
                                            borderRadius: 4
                                        }}
                                    />                                    
                                    <img
                                        src={Image3}
                                        style={{
                                            width: '100%',
                                            height: 300,
                                            objectFit: 'cover',
                                            borderRadius: 4
                                        }}
                                    />
                                </Stack>                                                                                                                                              
                                <Stack spacing={2}>
                                    <Typography variant='h6' sx={{ fontWeight: 'bold', color: '#d85704', display: 'flex', justifyContent: 'center' }}>
                                        Προσφέρουμε Συμβουλευτική
                                    </Typography>      
                                    <SecTabs
                                        value={secValue}  
                                        variant="scrollable"    
                                        scrollButtons="auto"                                  
                                        allowScrollButtonsMobile                                                                    
                                    >
                                        <SecTab label="για Άτομα με Αναπηρία" sx={{ fontWeight: 600, fontSize: 15, color: secValue === 0 ? '#d85704' : '#30343f' }} onClick={()=>handleSecChange(0)}/>
                                        <SecTab label="για Οικογένειες" sx={{ fontWeight: 600, fontSize: 15, color: secValue === 1 ? '#d85704' : '#30343f' }} onClick={()=>handleSecChange(1)}/>
                                        <SecTab label="για Αλληλεπίδραση με την Κοινωνία" sx={{ fontWeight: 600, fontSize: 15, color: secValue === 2 ? '#d85704' : '#30343f' }} onClick={()=>handleSecChange(2)}/>
                                        <SecTab label="ως Εργαλείο Ενδυνάμωσης" sx={{ fontWeight: 600, fontSize: 15, color: secValue === 3 ? '#d85704' : '#30343f' }} onClick={()=>handleSecChange(3)}/>
                                    </SecTabs>                                                                                                                  
                                    {secValue === 0 &&                           
                                        <Box                                         
                                        >
                                            <Stack spacing={4}>
                                                <Typography
                                                    variant="body2"
                                                >
                                                    {allTexts[8].placeText2}
                                                </Typography>
                                                <TripleBox
                                                    text1={allTexts[8].items[0].text}
                                                    text2={allTexts[8].items[1].text}
                                                    text3={allTexts[8].items[2].text}
                                                    isDesktop={isDesktop}
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
                                                    isDesktop={isDesktop}
                                                    text1={allTexts[9].items[0].text}
                                                    text2={allTexts[9].items[1].text}
                                                    text3={allTexts[9].items[2].text}
                                                />                                               
                                            </Stack>  
                                        </Box>
                                    }           
                                    { secValue === 2 &&
                                        <Box sx={{ color: '#30343f'}}>
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
                                        <Box sx={{ color: '#30343f' }}>
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
                    )}
                    {mainValue === 1 && (
                        <Box                                 
                        >                                 
                            <Grid container
                                justifyContent='center'
                                rowSpacing={4}
                                columnSpacing={isDesktop ? 4 : 2}                                                                              
                            >
                                <Grid item
                                    size={{
                                        xs: 12,
                                        sm: 6,
                                        lg: 5,
                                        xl: 4
                                    }}                                    
                                    className="suc-stories"                                     
                                >                                                                                       
                                        <Stack
                                            spacing={2}                                      
                                        >     
                                            <Stack
                                                direction={'row'}
                                                alignItems={'center'}
                                                justifyContent={'space-between'}
                                                sx={{
                                                    bgcolor: 'rgb(245, 245, 245)',
                                                    padding: '8px 12px',
                                                    borderRadius: 2
                                                }}
                                            >                                               
                                                    <img src={suc1} alt=""/>                                                        
                                                    <Typography variant="body3" fontWeight={600}>
                                                        Το κουτί με τις έγνοιες
                                                    </Typography>                                                                                                                                                                
                                                                
                                                <Typography fontSize={13} fontWeight={600} fontStyle={'italic'} sx={{ color: 'rgb(80, 80, 80)' }}>
                                                    Νίκος
                                                </Typography>                        
                                            </Stack>  
                                            <Stack
                                                spacing={2}
                                                sx={{
                                                    padding: '0px 8px'
                                                }}
                                            >                                              
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
                                        </Stack>                                                             
                                </Grid>
                                <Grid item
                                    size={{
                                        xs: 12,
                                        sm: 6,
                                        lg: 5,
                                        xl: 4
                                    }}
                                    className="suc-stories"                                    
                                >                                                                                           
                                    <Stack
                                        spacing={2}                               
                                    >
                                        <Stack
                                            direction={'row'}
                                            alignItems={'center'}
                                            justifyContent={'space-between'}
                                            sx={{
                                                bgcolor: 'rgb(245, 245, 245)',
                                                padding: '8px 12px',
                                                borderRadius: 2
                                            }}
                                        >                                               
                                                <img src={suc2} alt=""/>                                              
                                            <Typography fontSize={13} fontWeight={600} fontStyle={'italic'} sx={{ color: 'rgb(80, 80, 80)' }}>
                                                Ελπίδα
                                            </Typography>                        
                                        </Stack>          
                                        <Stack
                                            spacing={2}
                                            sx={{
                                                padding: '0px 8px'
                                            }}
                                        >                                                                                                                                                                           
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
                                    </Stack>                                                         
                                </Grid>
                            </Grid>
                        </Box>
                    )}  
                    {mainValue === 2 && (
                        <Stack
                            alignItems={'center'}
                            sx={{                           
                                overflow: 'hidden',                                                                                                                                                                                                                                                                                        
                            }}
                        >
                            <Stack>
                                <YouTube className="yt-vid" videoId='d0fYQ3sorTE' opts={opts} onReady={onReady}/>                                                         
                                <Typography
                                    textAlign={'left'}
                                    fontSize={24}
                                    sx={{
                                        width: '100%'
                                    }}
                                >
                                    TEDxThessaloniki - Panagiotis Chrisovergis - The Other View
                                </Typography>
                            </Stack>
                        </Stack>
                    )}          
                    {mainValue === 3 && (
                        <Box
                            sx={{                               
                                justifyContent: 'center',
                                width: '100%'
                            }}
                        >
                            <Stack
                                spacing={3}
                                sx={{
                                    borderRadius: 2,                                   
                                    padding: isDesktop ? 5 : 2,
                                    backgroundImage: `url(${BioImg})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: isDesktop ? 'center' : 'none',
                                    backgroundRepeat: 'no-repeat',                                    
                                    color: 'white'
                                }}
                                >
                                <Typography
                                    variant="body2"
                                    sx={{
                                        paddingLeft: {xs: 0, lg: 35}
                                    }}
                                >
                                    Σε ηλικία 14 χρονών απέκτησα την αναπηρία μου μετά από ένα τροχαίο ατύχημα.
                                    Νοσηλεύτηκα στο Νοσοκομείο Παπανικολάου της Θεσσαλονίκης για σχεδόν δύο μήνες
                                    όπου οι γιατροί διέγνωσαν τραυματισμό στην σπονδυλική μου στήλη στο επιπεδο Α8
                                    Νευροτόμιο.
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        paddingLeft: {xs: 0, lg: 35}
                                    }}
                                >
                                    Μετά από μια σύντομη παραμονή στο σπίτι, και δίχως να μου έχουν δώσει
                                    κάποιο βοήθημα μετακίνησης, μεταφέρθηκα στη Χαϊδελβέργη της Γερμανίας σε κέντρο
                                    αποκατάστασης όπου εκεί μου εξήγησαν τι σημαίνει τραυματισμός στη σπονδυλική στήλη.
                                    Μόνιμη παράλυση κάτω άκρων από το επίπεδο του τραυματισμού και κάτω. Νοσηλεύτηκα
                                    για τέσσερις μήνες και τον Δεκέμβριο της ίδιας χρονιάς επέστρεψα στη Θεσσαλονίκη. Τον
                                    Ιανουάριο συνέχισα το σχολείο μου.                                
                                        Τελείωσα το Γυμνάσιο, πήγα στο λύκειο, σπούδασα Εφαρμοσμένη πληροφορική στο
                                    Πανεπιστήμιο Μακεδονίας, και το 1995 ασχολήθηκα με το μπάσκετ με αμαξίδιο όπου από
                                    το 1999 έως το 2009 ήμουν μέλος της Εθνικής ομάδας με πολλές συμμετοχές σε
                                    ευρωπαϊκούς και πανευρωπαϊκούς αγώνες ενώ το 2004 πήρα μέρος στους
                                    Παραολυμπιακούς αγώνες της Αθήνας.                               
                                    Πρόεδρος της ομάδας του Αθλητικού Συλλόγου Αναπήρων Κένταυρος της Θεσσαλονίκης,
                                    πρόεδρος της ομάδας μπάσκετ με αμαξίδιο του Άρη Θεσσαλονίκης. Δοκίμασα διάφορα
                                    αθλήματα σαν Χόμπι ενώ υπήρξα αθλητής της προσαρμοσμένης χιονοδρομίας SEATSKI.
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        paddingLeft: {xs: 0, lg: 35}
                                    }}
                                >
                                    Το 2006 έγινα πιστοποιημένος εκπαιδευτής για ανθρώπους με τραυματισμό στην
                                    σπονδυλική στήλη από τον Σουηδικό οργανισμό RG ενεργητική αποκατάσταση.
                                    Ιδρυτικό μέλος και εκπαιδευτής του σωματείου Άλλη Όψη που σαν σκοπό είχε την
                                    δημιουργία εκπαιδευτικών προγραμμάτων για άτομα με τραυματισμό στην σπονδυλική
                                    στήλη με στόχο την βελτίωση της αυτονομίας σε βασικά θέματα καθημερινότητας.
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        paddingLeft: {xs: 0, lg: 65}
                                    }}
                                >
                                    Εργάστηκα στην Νομαρχία Θεσσαλονίκης στο τμήμα αθλητισμού και από εκεί για 8 χρόνια
                                    σε ιδιωτικό κέντρο αποκατάστασης στη Θεσσαλονίκη, στο τμήμα εργοθεραπείας σαν
                                    εκπαιδευτής, ενώ από το 2019 ασχολούμαι και με την κατασκευή αναπηρικών αμαξιδίων
                                    Custom Made.
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        paddingLeft: {xs: 0, lg: 65}
                                    }}
                                >
                                    Η GS wheelchairs είναι το αποτέλεσμα όλων αυτών των ετών στο χώρο της αναπηρίας. Όλη
                                    μου η εμπειρία στον χώρο την λειτουργικής αποκατάστασης, η φιλοσοφία μου για το τι
                                    είναι αναπηρία, ποιες είναι η δυνατότητες σου και ποιες είναι οι πραγματικές σου ανάγκες
                                    είναι αυτό που κάνει την GS (Get Started) την πρώτη εταιρία με ολιστική προσέγγιση.
                                    Στόχος της είναι έχει να παρέχει ολοκληρωμένες λύσεις σε άτομα με αναπηρία και σε
                                    όσους ζουν την αναπηρία από κοντά, με στόχο την βελτίωση της αυτονομίας και μια
                                    καλύτερη ποιότητα ζωής. Όσο υψηλότερο το επίπεδο αυτονομίας τόσο καλύτερη και η
                                    ποιότητα ζωής.
                                </Typography>
                                <Typography
                                    variant="body2"
                                    fontSize={17}
                                    fontWeight={'bold'}
                                    sx={{
                                        paddingLeft: {xs: 0, md: 40, lg: 65},
                                        opacity: 0.5
                                    }}
                                >
                                    Η αναπηρία είναι μια κατάσταση, εσύ επιλέγεις το πως θα την ζήσεις.
                                </Typography> 
                                {isDesktop ? (  
                                    <Stack
                                        spacing={-1}
                                        sx={{                                    
                                            position: 'relative',                                        
                                            bottom: 50
                                        }}
                                    >
                                        <Typography
                                            fontSize={32}
                                            fontWeight={'bold'}
                                            sx={{
                                                opacity: 0.5
                                            }}
                                        >
                                            ΠΑΝΑΓΙΩΤΗΣ
                                        </Typography>        
                                        <Typography
                                            fontSize={40}
                                            fontWeight={'bold'}
                                            sx={{
                                                opacity: 0.7
                                            }}
                                        >
                                            ΧΡΥΣΟΒΕΡΓΗΣ
                                        </Typography>      
                                    </Stack>            
                                ) : (
                                    <Stack
                                        spacing={-1}                                    
                                    >
                                        <Typography
                                            fontSize={32}
                                            fontWeight={'bold'}
                                            sx={{
                                                opacity: 0.5
                                            }}
                                        >
                                            ΠΑΝΑΓΙΩΤΗΣ
                                        </Typography>        
                                        <Typography
                                            fontSize={40}
                                            fontWeight={'bold'}
                                            sx={{
                                                opacity: 0.7
                                            }}
                                        >
                                            ΧΡΥΣΟΒΕΡΓΗΣ
                                        </Typography>      
                                    </Stack>            
                                )}                                             
                            </Stack>
                        </Box>
                    )}
                </Stack>    
            </Stack>                        
    )
}

export default AboutSlider;