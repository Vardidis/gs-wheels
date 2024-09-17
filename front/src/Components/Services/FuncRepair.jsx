import React, { useContext } from "react";
import { Box, Stack, Typography } from "@mui/material";
import FuncCard from "../FuncCard";
import TitleComp from "./TitleComp";
import RedirectBox from "./RedirectBox";
import ImageComp from "./ImageComp";
import fc from '../../assets/full-custom.jpg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshakeAngle, faBook, faWheelchairMove, faLinkSlash } from '@fortawesome/free-solid-svg-icons';
import { Context } from "../Context";
import AccordionComp from "../AccordionComp";

library.add(faHandshakeAngle, faBook, faWheelchairMove, faLinkSlash);

const FuncRepair = () => {
    const {isDesktop} = useContext(Context);
    const iconSize = isDesktop ? 'xl' : '2xl';

    return(
        <Box sx={{ paddingBottom: 5 }}>      
            <ImageComp image={fc}/>   
            <TitleComp text={'Λειτουργική Αποκατάσταση'}/>
            <Stack spacing={6} sx={{ marginLeft: {xl: 70, lg: 15, md: 5, sm: 5, xs: 3, xxs: 2}, marginRight: {xl: 70, lg: 15, md: 5, sm: 5, xs: 3, xxs: 2}}}>
                <Box>
                    <Box sx={{ borderRadius: 3, backgroundColor: 'rgb(232, 232, 240)', padding: {xl: 3, lg: 5, md: 3, sm: 2, xs: 2, xxs: 2}, border: '1px solid rgb(180, 180, 180)' }}>
                        <Stack spacing={7}>
                            <FuncCard icon={<FontAwesomeIcon icon={faLinkSlash} size={iconSize} style={{ color: 'rgb(40, 40, 40)' }}/>} text={'Μετά από έναν τραυματισμό στην σπονδυλική στήλη το σώμα μας γίνεται απίστευτα βαρύ και μη λειτουργικό. Η λέξη αυτονομία και ανεξαρτησία αποκτούν άλλη έννοια.'}/>
                            <FuncCard icon={<FontAwesomeIcon icon={faWheelchairMove} size={iconSize} style={{ color: 'rgb(40, 40, 40)' }}/>} text={'Καλείσαι ξαφνικά να αντιμετωπίσεις προκλήσεις και καταστάσεις που ποτέ δεν είχαν περάσει από το μυαλό σου ενώ προσπαθείς να συμβιβαστείς στον νέο τρόπο ζωής κάνοντας εκπτώσεις στα θέλω σου.'}/>                            
                            <FuncCard icon={<FontAwesomeIcon icon={faBook} size={iconSize} style={{ color: 'rgb(40, 40, 40)' }}/>} text={'Υπάρχουν οι βασικές αρχές λειτουργικής αποκατάστασης  όπου εστιάζουν στην βελτίωση της αυτονομίας σου μέσα από την ομότιμη υποστήριξη με στόχο την βελτίωση της ποιότητας ζωής δίχως περιορισμούς.'}/>
                            <FuncCard icon={<FontAwesomeIcon icon={faHandshakeAngle} size={iconSize} style={{ color: 'rgb(40, 40, 40)' }}/>} text={'Στην GS  Wheelchairs (Get Started)  γνωρίζουμε πολύ καλά τι χρειάζεσαι και μπορούμε να σου δώσουμε όλα εκείνα τα εφόδια που θα χρειαστείς ώστε να γίνεις ξανά αυτόνομος για μια ποιοτική ζωή δίχως περιορισμούς.'}/>                         
                        </Stack>
                    </Box>
                </Box>     
                <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'rgb(255, 250, 240)', padding: 3, borderRadius: 2, border: '1px solid rgb(180, 180, 180)' }}>
                    <Typography sx={{ color: 'rgb(40, 40, 40)' }}>
                        Η αποκατάσταση είναι ένας τομέας που περιλαμβάνει πολλαπλά μοντέλα και
                        προσεγγίσεις, τα οποία επιδιώκουν να βελτιώσουν την ποιότητα ζωής των ατόμων με
                        αναπηρίες. Αυτά τα μοντέλα διαφοροποιούνται ανάλογα με το στόχο και τον τρόπο
                        εφαρμογής τους, από τις πιο παραδοσιακές ιατρικές μεθόδους έως τις πιο σύγχρονες
                        και ολοκληρωμένες προσεγγίσεις, όπως η λειτουργική αποκατάσταση.
                    </Typography>          
                </Box>
                <Stack spacing={4} sx={{ display: 'flex', justifyContent: 'center', padding: 5, borderRadius: 3, border: '1px solid rgb(180, 180, 180)', bgcolor: 'rgb(232, 232, 240)' }}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'rgb(40, 40, 40)' }}>
                            Μοντέλα Αποκατάστασης
                        </Typography> 
                        <Box sx={{ bgcolor: 'transparent', marginLeft: {xl: 20, lg: 0, md: 0, sm: 0, xs: 1, xxs: 1}, marginRight: {xl: 20, lg: 0, md: 0, sm: 0, xs: 1, xxs: 1}, borderRadius: 2, overflow: 'hidden', color: 'rgb(40, 40, 40)' }}>
                            <AccordionComp title={'Ιατρικό Μοντέλο Αποκατάστασης'} text={'Το ιατρικό μοντέλο επικεντρώνεται κυρίως στη θεραπεία και αποκατάσταση της σωματικής λειτουργίας. Στόχος του είναι η αντιμετώπιση της βλάβης μέσω ιατρικών θεραπειών, φαρμάκων και φυσικοθεραπείας. Αν και χρήσιμο για συγκεκριμένες καταστάσεις, συχνά παραβλέπει την καθημερινή λειτουργικότητα και την κοινωνική ενσωμάτωση του ατόμου​.'}/>
                            <AccordionComp title={'Βιοψυχοκοινωνικό Μοντέλο'} text={'Το μοντέλο αυτό αναγνωρίζει τη σημασία της ψυχικής υγείας και της κοινωνικής υποστήριξης. Επικεντρώνεται στη συνολική κατάσταση του ατόμου, λαμβάνοντας υπόψη τους ψυχολογικούς και κοινωνικούς παράγοντες, καθώς και τις φυσικές προκλήσεις. Μέσω συμβουλευτικής και κοινωνικής υποστήριξης, το άτομο ενθαρρύνεται να αναπτύξει δεξιότητες για να επανακτήσει την ανεξαρτησία του και να βελτιώσει την ποιότητα ζωής του​​.'}/>
                            <AccordionComp title={'Λειτουργική Αποκατάσταση'} text={'Το λειτουργικό μοντέλο είναι μια από τις πιο ολοκληρωμένες προσεγγίσεις αποκατάστασης. Στόχος του είναι να βοηθήσει το άτομο να επανενταχθεί πλήρως στην καθημερινότητά του, ανεξάρτητα από το επίπεδο της αναπηρίας. Εστιάζει στην εκπαίδευση και την ανάπτυξη δεξιοτήτων για να γίνει το άτομο όσο το δυνατόν πιο αυτόνομο, είτε πρόκειται για διαχείριση του σώματος, είτε για μετακινήσεις, είτε για χρήση αναπηρικού αμαξιδίου​.'}/>
                            <AccordionComp title={'Κοινοτικό Μοντέλο Αποκατάστασης'} text={'Αυτό το μοντέλο αναγνωρίζει ότι η αποκατάσταση είναι μια διαδικασία που πρέπει να γίνεται σε συνεργασία με την κοινότητα. Η παροχή εκπαίδευσης, υποδομών και πρόσβασης σε κοινωνικές υπηρεσίες, σε συνδυασμό με τη συνεργασία της τοπικής κοινότητας, επιτρέπει στο άτομο να λειτουργεί πιο αποτελεσματικά μέσα στην κοινωνία​.'}/>                       
                            <AccordionComp title={'Ολιστικό Μοντέλο'} text={'Το ολιστικό μοντέλο αντιμετωπίζει την αναπηρία όχι ως μεμονωμένη κατάσταση, αλλά ως ένα σύνολο σωματικών, ψυχικών και κοινωνικών προκλήσεων. Βασίζεται στη συνεργασία μεταξύ πολλών ειδικοτήτων και στόχο έχει την ενίσχυση του ατόμου σε όλους τους τομείς της ζωής του, περιλαμβάνοντας τη σωματική, ψυχική και κοινωνική υποστήριξη​.'}/>
                        </Box>     
                    </Stack>      
                    <Stack spacing={5} sx={{ display: 'flex', justifyContent: 'center', padding: 5, borderRadius: 3, border: '1px solid rgb(180, 180, 180)', bgcolor: 'rgb(232, 232, 240)' }}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'rgb(40, 40, 40)' }}>
                            Η Λειτουργική Αποκατάσταση και η GS Wheelchairs
                        </Typography> 
                        <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'rgb(255, 252, 252)', padding: 3, borderRadius: 2, border: '1px solid rgb(180, 180, 180)' }}>
                            <Typography sx={{ color: 'rgb(40, 40, 40)' }}>
                                Η GS Wheelchairs είναι μια εταιρεία που διαφέρει από τις παραδοσιακές εταιρείες
                                αποκατάστασης. Ειδικεύεται στη λειτουργική αποκατάσταση, παρέχοντας
                                εξατομικευμένα προσαρμοσμένα αναπηρικά αμαξίδια και εκπαίδευση από
                                έμπειρους επαγγελματίες που οι ίδιοι ζουν με αναπηρία. Ο ιδρυτής της GS
                                Wheelchairs, Παναγιώτης Χρυσοβέργης, έχει εκπαιδευτεί στη Σουηδία και έχει
                                περισσότερα από 30 χρόνια εμπειρίας, βοηθώντας εκατοντάδες άτομα να ανακτήσουν
                                την αυτονομία τους μέσω λειτουργικής αποκατάστασης​​.
                            </Typography>          
                        </Box>
                        <Stack spacing={2}>
                            <Typography variant='h7' sx={{ fontWeight: 'bold', color: 'rgb(40, 40, 40)' }}>
                                Η εταιρεία προσφέρει μια ολοκληρωμένη προσέγγιση που συνδυάζει τρεις βασικούς πυλώνες:
                            </Typography> 
                            <Box sx={{ bgcolor: 'transparent', marginLeft: {xl: 20, lg: 0, md: 0, sm: 0, xs: 1, xxs: 1}, marginRight: {xl: 20, lg: 0, md: 0, sm: 0, xs: 1, xxs: 1}, borderRadius: 2, overflow: 'hidden', color: 'rgb(40, 40, 40)' }}>
                                <AccordionComp title={'Εξατομικευμένα Αναπηρικά Αμαξίδια'} text={'Κατασκευασμένα πλήρως προσαρμοσμένα στα μέτρα του κάθε χρήστη, με σκοπό να μεγιστοποιήσουν την άνεση και την ανεξαρτησία. Τα αμαξίδια αυτά προσφέρουν εξαιρετική σταθερότητα και άνεση, προσαρμοσμένα στις ιδιαίτερες ανάγκες κάθε χρήστη​​.'}/>
                                <AccordionComp title={'Εκπαίδευση στη Λειτουργική Αποκατάσταση'} text={'Η GS Wheelchairs παρέχει εκπαίδευση στη διαχείριση του σώματος, τις μεταφορές και τη σωστή χρήση του αμαξιδίου, εξασφαλίζοντας ότι οι χρήστες μπορούν να ζουν ανεξάρτητοι και να αντιμετωπίζουν τις προκλήσεις της καθημερινότητας με ασφάλεια​.'}/>
                                <AccordionComp title={'Ψυχοκοινωνική Στήριξη'} text={'Η GS Wheelchairs προσφέρει υπηρεσίες συμβουλευτικής και ψυχοκοινωνικής στήριξης. Μέσω αυτών των υπηρεσιών, τα άτομα με αναπηρία υποστηρίζονται ψυχολογικά και κοινωνικά, ώστε να αντιμετωπίζουν την αναπηρία τους με αυτοπεποίθηση και αισιοδοξία​​.'}/>                            
                            </Box>    
                        </Stack>
                        <Stack spacing={2}>
                            <Typography variant='h7' sx={{ fontWeight: 'bold', color: 'rgb(40, 40, 40)' }}>
                                Γιατί να Επιλέξετε τη Λειτουργική Αποκατάσταση
                            </Typography>  
                            <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'rgb(255, 252, 252)', padding: 3, borderRadius: 2, border: '1px solid rgb(180, 180, 180)' }}>
                                <Typography sx={{ color: 'rgb(40, 40, 40)' }}>
                                    Η λειτουργική αποκατάσταση προσφέρει μια πιο ολοκληρωμένη και μακροπρόθεσμη
                                    λύση σε σχέση με τα υπόλοιπα μοντέλα αποκατάστασης, καθώς συνδυάζει τη
                                    σωματική και ψυχική υποστήριξη με την ανάπτυξη λειτουργικών δεξιοτήτων. Τα
                                    άτομα μαθαίνουν να ζουν αυτόνομα και να διαχειρίζονται την καθημερινότητά τους
                                    χωρίς περιορισμούς​​.
                                </Typography>          
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'rgb(255, 252, 252)', padding: 3, borderRadius: 2, border: '1px solid rgb(180, 180, 180)' }}>
                                <Typography sx={{ color: 'rgb(40, 40, 40)' }}>
                                    Με την GS Wheelchairs, τα άτομα δεν αποκτούν απλά ένα αμαξίδιο, αλλά μια
                                    ολόκληρη προσέγγιση που τους δίνει τα εργαλεία και τη γνώση να ζήσουν με
                                    μεγαλύτερη ανεξαρτησία και ποιότητα ζωής. Το γεγονός ότι οι εκπαιδευτές και οι
                                    κατασκευαστές της GS Wheelchairs είναι και οι ίδιοι άτομα με αναπηρία, ενισχύει
                                    την αυθεντικότητα και την ποιότητα των υπηρεσιών που προσφέρουν, διότι
                                    γνωρίζουν προσωπικά τις προκλήσεις που αντιμετωπίζουν οι χρήστες​​.
                                </Typography>          
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'rgb(255, 252, 252)', padding: 3, borderRadius: 2, border: '1px solid rgb(180, 180, 180)' }}>
                                <Typography sx={{ color: 'rgb(40, 40, 40)' }}>
                                    Η λειτουργική αποκατάσταση, όταν συνδυάζεται με την εξατομικευμένη προσέγγιση
                                    της GS Wheelchairs, δίνει στα άτομα τη δυνατότητα να ζήσουν μια πλήρη, ενεργή
                                    και αυτόνομη ζωή, ξεπερνώντας τα εμπόδια της αναπηρίας.
                                </Typography>          
                            </Box>
                        </Stack>                                                
                    </Stack>         
            </Stack>                          
            <RedirectBox back={'/service/vasikes-arxes'} forward={'/service/life-coaching'}/> 
        </Box>
    );
}

export default FuncRepair