import React from "react";
import { Box, Stack } from '@mui/material';
import AccordionComp from "../AccordionComp";
import fc from '../../assets/full-custom.jpg';
import TitleComp from "./TitleComp";
import RedirectBox from "./RedirectBox";
import ImageComp from "./ImageComp";

const Basics = () => {   
    return(
        <Box sx={{ paddingBottom: 5 }}>
            <ImageComp image={fc}/>
            <TitleComp text={'Βασικές Αρχές Λειτουργικής Αποκατάστασης'}/>
            <Stack spacing={6} sx={{ paddingTop: 3, paddingLeft: {lg: 15, md: 15, sm: 10, xs: 5, xxs: 1}, paddingRight: {lg: 15, md: 15, sm: 10, xs: 5, xxs: 1} }}>                                                  
                <Box sx={{ paddingLeft: {xl: 50, lg: 0, md: 0, sm: 0, xs: 1, xxs: 1}, paddingRight: {xl: 50, lg: 0, md: 0, sm: 0, xs: 1, xxs: 1} }}>
                    <AccordionComp title={'Διαχείριση Σώματος'} text={'Μέσω εξειδικευμένων ασκήσεων και υποστήριξης, στοχεύουμε στη βελτίωση της κινητικότητας, της δύναμης και της ευελιξίας, βοηθώντας έτσι στη διαχείριση του σώματος. Το να μάθουμε τον τρόπο που θα διαχειριζόμαστε το σώμα μας σε όλες της καταστάσεις είναι το πιο σημαντικό κομμάτι του παζλ της αυτονομίας μας.'}/>
                    <AccordionComp title={'Τεχνικές Μεταφορών'} text={'Παρέχουμε εκπαίδευση και υποστήριξη σε τεχνικές μεταφορών που επιτρέπουν στους χρήστες να μετακινούνται με άνεση και πάνω από όλα ασφάλεια, είτε μέσω αναπηρικού αμαξιδίου είτε με άλλα μέσα.'}/>
                    <AccordionComp title={'Χειρισμός Αναπηρικού Καθίσματος'} text={'Προσφέρουμε εξειδικευμένη εκπαίδευση στον χειρισμό αναπηρικού καθίσματος, συμπεριλαμβανομένης της προσαρμογής και της σωστής καθιστής θέσης, προκειμένου να επιτευχθεί η μέγιστη λειτουργικότητα και άνεση.'}/>
                    <AccordionComp title={'Καθιστή θέση (Seating position)'} text={'Μέσω εξειδικευμένης αξιολόγησης και ρύθμισης της θέσης καθίσματος, στοχεύουμε στην εξασφάλιση της σωστής στήριξης και ευκολίας κίνησης ενώ παράλληλα προλαμβάνουμε τυχόν τραυματισμούς στα άνω άκρα και την ωμική ζώνη. Πολύ σημαντικό είναι σωστή κατανομή πίεσης στο αμαξίδιο μας για την αποφυγή κατακλίσεων και μείωση της σπαστικότητας.'}/>
                    <AccordionComp title={'Προσωπική Υγιεινή'} text={'Παρέχουμε συμβουλευτική και υποστήριξη σε θέματα προσωπικής υγιεινής, βοηθώντας τους ανθρώπους με αναπηρία να διατηρήσουν την αξιοπρέπειά τους και να διασφαλίσουν τη φροντίδα του εαυτού τους με ασφάλεια και άνεση. Η σωστή εκκένωση της ουροδόχου κύστης και του εντέρου συμβάλει στην μακροζωία και την ποιότητα ζωής.'}/>
                </Box>                    
            </Stack>
            <RedirectBox back={'/services'} forward={'/service/apokatastasi'} pd={50}/>
        </Box>
    );
}

export default Basics;