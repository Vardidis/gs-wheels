import React, { useState } from "react";
import suc1 from '../assets/stompis.jpg';
import suc2 from '../assets/kopelia.jpg';
import { Typography, Tabs, Tab, Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import YouTube from 'react-youtube';

const StyledTabs = styled((props) => (
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
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: 'orangered',
    },
});
  
const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        color: 'grey',
        '&.Mui-selected': {
        color: 'black',
        },
    }),
);

const AboutSlider = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
        <>
            <Box sx={{ paddingBottom: 3 }}>
                <StyledTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="styled tabs example"
                >
                    <StyledTab label="Ποιοί είμαστε" />
                    <StyledTab label="Success Stories" />
                </StyledTabs>
                <Box sx={{ p: 2 }} />                             
                {value === 0 ?
                    <Stack spacing={3} sx={{marginLeft: 3, marginRight: 3, padding: 3, bgcolor: "rgb(242, 242, 242)", borderRadius: 2  }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                            <Box sx={{ height: '300px', width: '100%', borderRadius: 2, overflow: 'hidden' }}>
                                <YouTube videoId='d0fYQ3sorTE' opts={opts} onReady={onReady} style={{ borderRadius: '10px' }}/>
                            </Box>
                        </Box>   
                        <Typography variant="body2">
                            Σε ηλικία 14 χρονών απέκτησα την αναπηρία μου μετά από ένα τροχαίο ατύχημα.
                            Νοσηλευτικά στο Νοσοκομείο Παπανικολάου της Θεσσαλονίκης για σχεδόν δύο μήνες
                            όπου οι γιατροί διέγνωσαν τραυματισμό στην σπονδυλική μου στήλη στο επιπεδο Α8
                            Νευροτόμιο.
                        </Typography>
                        <Typography variant="body2">
                            Μετά από μια σύντομη παραμονή στο σπίτι, και δίχως να μου έχουν δώσει
                            κάποιο βοήθημα μετακίνησης, μεταφέρθηκα στη Χαϊδελβέργη της Γερμανίας σε κέντρο
                            αποκατάστασης όπου εκεί μου εξήγησαν τι σημαίνει τραυματισμός στη σπονδυλική στήλη.
                            Μόνιμη παράλυση κάτω άκρων από το επίπεδο του τραυματισμού και κάτω. Νοσηλεύτηκα
                            για τέσσερις μήνες και τον Δεκέμβριο της ίδιας χρονιάς επέστρεψα στη Θεσσαλονίκη. Το
                            Ιανουάριο συνέχισα το σχολείο μου.
                        </Typography>
                        <Typography variant="body2">
                            Τελείωσα το Γυμνάσιο, πήγα στο λύκειο, σπούδασα Εφαρμοσμένη πληροφορική στο
                            Πανεπιστήμιο Μακεδονίας, και το 1995 ασχολήθηκα με το μπάσκετ με αμαξίδιο άπου από
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
                            Ιδρυτικό μέλος και εκπαιδευτής του σωματείου Άλλη ¨Όψη που σαν σκοπό είχε την
                            δημιουργία εκπαιδευτικών προγραμμάτων για άτομα με τραυματισμό στην σπονδυλική
                            στήλη με στόχο την βελτίωση της αυτονομίας σε βασικά θέματα καθημερινότητας.
                        </Typography>
                        <Typography variant="body2">
                            Εργάστηκα στην Νομαρχία Θεσσαλονίκης στο τμήμα αθλητισμού και από εκεί για 8 χρόνια
                            σε ιδιωτικό κέντρο αποκατάστασης στη Θεσσαλονίκης Στο τμήμα εργοθεραπείας σαν
                            εκπαιδευτής ενώ από το 2019 ασχολούμε και με την κατασκευή αναπηρικών αμαξίδιων
                            Custom Made.
                        </Typography>
                        <Typography variant="body2">
                            Η GS wheelchairs είναι το αποτέλεσμα όλων αυτών των ετών στο χώρο της αναπηρίας. Όλη
                            μου η εμπειρία στον χώρο την λειτουργικής αποκατάστασης, η φιλοσοφία μου για το τι
                            είναι αναπηρία, ποιες είναι η δυνατότητες σου και ποιες είναι η πραγματικές σου ανάγκες
                            είναι αυτό που κάνει την GS (Get Started) την πρώτη εταιρία με ολιστική προσέγγιση.
                            Στόχος της είναι έχει να παρέχει ολοκληρωμένες λύσεις σε άτομα με αναπηρία και σε
                            όσους ζουν την αναπηρία από κοντα, με στόχο την βελτίωση της αυτονομίας και μια
                            καλύτερη ποιότητα ζωής. Όσο υψηλότερο το επίπεδο αυτονομίας τόσο καλύτερη και η
                            ποιότητα ζωής.
                        </Typography>
                        <Typography variant="body2">
                            Η αναπηρία είναι μια κατάσταση, εσύ επιλέγεις το πως θα την ζήσεις.
                        </Typography>
                    </Stack>
                : <>
                    <Stack spacing={5} sx={{marginLeft: 3, marginRight: 3 }}>
                        <Box className="suc-stories">
                            <img src={suc1} alt=""/>
                            <Stack spacing={2} sx={{ padding: 3, bgcolor: "rgb(242, 242, 242)", borderRadius: 2, boxShadow: '2px 3px 3px -2px black' }}>                            
                                <Typography variant="body2" fontWeight={600}>
                                    Το κουτί με τις έγνοιες
                                </Typography>
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
                                <Typography variant="body2" fontWeight={600}>
                                    Ν.Τ.
                                </Typography>
                            </Stack>
                        </Box>
                        <Box className="suc-stories">
                            <img src={suc2} alt=""/>
                            <Stack spacing={2} sx={{ padding: 3, bgcolor: "rgb(242, 242, 242)", borderRadius: 2, boxShadow: '2px 3px 3px -2px black' }}>
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
                                <Typography variant="body2" fontWeight={600}>
                                    Ε.Π.
                                </Typography>
                            </Stack>
                        </Box>
                    </Stack>
                </>}
            </Box>
        </> 
    );
}

export default AboutSlider;