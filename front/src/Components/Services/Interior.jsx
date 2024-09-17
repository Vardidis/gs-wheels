import React, { useContext } from "react";
import { Box, Stack, Alert, Typography, Paper } from "@mui/material";
import inter from '../../assets/interior5.jpg';
import PartBox from "../PartBox";
import inter2 from '../../assets/interior2.jpg';
import inter4 from '../../assets/interior4.jpg';
import inter1 from '../../assets/interior1.jpg';
import PlaceBox from '../PlaceBox';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import BalconyOutlinedIcon from '@mui/icons-material/BalconyOutlined';
import CountertopsOutlinedIcon from '@mui/icons-material/CountertopsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShowerOutlinedIcon from '@mui/icons-material/ShowerOutlined';
import DeckOutlinedIcon from '@mui/icons-material/DeckOutlined';
import DeskOutlinedIcon from '@mui/icons-material/DeskOutlined';
import { Context } from "../Context";
import TitleComp from "./TitleComp";
import RedirectBox from "./RedirectBox";
import ImageComp from "./ImageComp";
import AccordionComp from "../AccordionComp";

const Interior = () => {
    const {isDesktop} = useContext(Context);

    return(
        <Box sx={{ paddingBottom: 5 }}>  
            <ImageComp image={inter}/>
            <Alert severity="success">
                        Η προσβασιμότητα δεν αφορά μόνο μεγάλες κατασκευές ή υψηλού κόστους τροποποιήσεις. Πολλές φορές, μικρές αλλά στοχευμένες παρεμβάσεις μπορούν να κάνουν τη διαφορά.
                    </Alert>
            <TitleComp text={'Διαμόρφωση Χώρου'}/>        
            <Stack spacing={10}>                      
                {isDesktop
                ?
                <Stack direction='row' spacing={{lg: 2, md: 2, sm: 1, xs: 1, xxs: 1}} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <PartBox image={inter2} height={'180px'} text={'Όταν μιλάμε για αυτονομία και άτομα με αναπηρία, η προσβασιμότητα είναι πολύ περισσότερο από ένα απλό “καλό είναι να έχουμε”. Είναι ένα αναγκαίο στοιχείο που διασφαλίζει την ποιότητα ζωής.'}/>
                    <PartBox image={inter4} height={'180px'} text={'Έχοντας προσωπική εμπειρία με την αναπηρία για πάνω από τριάντα χρόνια γνωρίζουμε από πρώτο χέρι πόσο σημαντικές είναι οι κατάλληλες παρεμβάσεις στον προσωπικό χώρο ενός ατόμου με αναπηρία.'}/>
                    <PartBox image={inter1} height={'180px'} text={'Η προσωπική μας γνώση είναι η δύναμη που μας επιτρέπει να κατανοούμε βαθιά τις ανάγκες των ατόμων με αναπηρία και να προσφέρουμε λύσεις που αποτελούν πραγματικές βελτιώσεις στη ζωή τους.'}/>
                </Stack>
                :
                <Box sx={{ paddingLeft: {sm: 2, xs: 1, xxs: 1}, paddingRight: {sm: 2, xs: 1, xxs: 1} }}>
                    <Box sx={{ overflowX: 'scroll', display: 'flex', paddingTop: 1, paddingBottom: 1 }}>
                        <Stack direction='row' spacing={2} sx={{ justifyContent: "center" }}>
                            <Box sx={{ display: 'flex', gap: 2, }}>
                                <PartBox image={inter2} height={'200px'} text={'Όταν μιλάμε για αυτονομία και άτομα με αναπηρία, η προσβασιμότητα είναι πολύ περισσότερο από ένα απλό “καλό είναι να έχουμε”. Είναι ένα αναγκαίο στοιχείο που διασφαλίζει την ποιότητα ζωής.'}/>
                                <PartBox image={inter4} height={'200px'} text={'Έχοντας προσωπική εμπειρία με την αναπηρία για πάνω από τριάντα χρόνια γνωρίζουμε από πρώτο χέρι πόσο σημαντικές είναι οι κατάλληλες παρεμβάσεις στον προσωπικό χώρο ενός ατόμου με αναπηρία.'}/>
                                <PartBox image={inter1} height={'200px'} text={'Η προσωπική μας γνώση είναι η δύναμη που μας επιτρέπει να κατανοούμε βαθιά τις ανάγκες των ατόμων με αναπηρία και να προσφέρουμε λύσεις που αποτελούν πραγματικές βελτιώσεις στη ζωή τους.'}/>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
                }
                {isDesktop
                ?
                <Stack spacing={1} sx={{ paddingBottom: 3 }}>
                    <Stack direction='row' spacing={1} sx={{ display: 'flex', justifyContent: 'center', paddingLeft: {lg: 0, md: 0, sm: 5, xs: 2, xxs: 1}, paddingRight: {lg: 0, md: 0, sm: 5, xs: 2, xxs: 1} }}>
                        <PlaceBox icon={<HotelOutlinedIcon/>} text={'Υπνοδωμάτιο'}/>
                        <PlaceBox icon={<KitchenOutlinedIcon/>} text={'Κουζίνα'}/>
                        <PlaceBox icon={<BalconyOutlinedIcon/>} text={'Μπαλκόνι'}/>
                        <PlaceBox icon={<CountertopsOutlinedIcon/>} text={'Τουαλέτα'}/>                        
                    </Stack>
                    <Stack direction='row' spacing={1} sx={{ display: 'flex', justifyContent: 'center', paddingLeft: {lg: 0, md: 0, sm: 5, xs: 2, xxs: 1}, paddingRight: {lg: 0, md: 0, sm: 5, xs: 2, xxs: 1} }}>
                        <PlaceBox icon={<HomeOutlinedIcon/>} text={'Πρόσβαση'}/>
                        <PlaceBox icon={<ShowerOutlinedIcon/>} text={'Μπάνιο'}/>
                        <PlaceBox icon={<DeckOutlinedIcon/>} text={'Εξ. χώροι'}/>
                        <PlaceBox icon={<DeskOutlinedIcon/>} text={'Χώρος εργασίας'}/>
                    </Stack>
                </Stack>   
                :
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>  
                    <Stack direction='row' spacing={1} sx={{ paddingBottom: 3 }}>
                        <Stack spacing={1} sx={{ paddingLeft: {lg: 0, md: 0, sm: 5, xs: 2, xxs: 2}}}>
                            <PlaceBox icon={<HotelOutlinedIcon/>} text={'Υπνοδωμάτιο'}/>
                            <PlaceBox icon={<KitchenOutlinedIcon/>} text={'Κουζίνα'}/> 
                            <PlaceBox icon={<BalconyOutlinedIcon/>} text={'Μπαλκόνι'}/>     
                            <PlaceBox icon={<CountertopsOutlinedIcon/>} text={'Τουαλέτα'}/>                                                               
                        </Stack>
                        <Stack spacing={1} sx={{ paddingRight: {lg: 0, md: 0, sm: 5, xs: 2, xxs: 2} }}>
                            <PlaceBox icon={<HomeOutlinedIcon/>} text={'Πρόσβαση'}/>
                            <PlaceBox icon={<ShowerOutlinedIcon/>} text={'Μπάνιο'}/>
                            <PlaceBox icon={<DeckOutlinedIcon/>} text={'Εξ. χώροι'}/>
                            <PlaceBox icon={<DeskOutlinedIcon/>} text={'Χώρος εργασίας'}/>
                        </Stack>
                    </Stack>   
                </Box>
                }                   
            </Stack>
            <Box sx={{ marginTop: 6, marginLeft: 15, marginRight: 15, display: 'flex', justifyContent: 'center', bgcolor: 'rgb(255, 250, 240)', padding: 3, borderRadius: 2, border: '1px solid rgb(180, 180, 180)' }}>
                <Typography sx={{ color: 'rgb(40, 40, 40)' }}>
                    Η διαμόρφωση του χώρου ενός σπιτιού για τα άτομα που ζουν σε συνθήκες
                    αναπηρίας είναι ένα από τα πιο σημαντικά στοιχεία για την καθημερινή τους
                    αυτονομία και την ποιότητα ζωής. Ένας σωστά διαμορφωμένος χώρος μπορεί να
                    μειώσει δραματικά την ανάγκη για βοήθεια, ενισχύοντας παράλληλα την
                    αυτοπεποίθηση του ατόμου. Όταν το περιβάλλον του σπιτιού είναι σχεδιασμένο
                    ώστε να ανταποκρίνεται στις ατομικές ανάγκες και προκλήσεις, το άτομο μπορεί να
                    κινηθεί με μεγαλύτερη άνεση, να εκτελεί βασικές καθημερινές δραστηριότητες χωρίς
                    εμπόδια και να απολαμβάνει την ανεξαρτησία του.
                </Typography>               
            </Box>
            <Box sx={{ marginTop: 6, marginLeft: 15, marginRight: 15 }}>
                <Stack spacing={6}>
                    <Stack spacing={3} sx={{ display: 'flex', justifyContent: 'center', padding: 5, borderRadius: 3, border: '1px solid rgb(180, 180, 180)', bgcolor: 'rgb(232, 232, 240)' }}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'rgb(40, 40, 40)' }}>
                            Η Σημασία της Προσαρμογής του Χώρου
                        </Typography> 
                        <Box sx={{ bgcolor: 'transparent', marginLeft: {xl: 20, lg: 0, md: 0, sm: 0, xs: 1, xxs: 1}, marginRight: {xl: 20, lg: 0, md: 0, sm: 0, xs: 1, xxs: 1}, borderRadius: 2, overflow: 'hidden', color: 'rgb(40, 40, 40)' }}>
                            <AccordionComp title={'Μείωση της Εξάρτησης από Άλλους'} text={'Ένα σπίτι που έχει σχεδιαστεί με γνώμονα την προσβασιμότητα μπορεί να βοηθήσει τα άτομα με αναπηρία να εκτελούν καθημερινές δραστηριότητες με μεγαλύτερη ευκολία, όπως η μετακίνηση από το ένα δωμάτιο στο άλλο, η χρήση της κουζίνας, η τουαλέτα ή το ντους. Με την προσθήκη κατάλληλων υποδομών, όπως ράμπες, ευρύχωρους διαδρόμους, προσαρμοσμένα έπιπλα και συσκευές, το άτομο μπορεί να μειώσει σημαντικά την ανάγκη για βοήθεια από άλλους​. Αυτό έχει ως αποτέλεσμα την αύξηση της αυτονομίας, καθώς το άτομο δεν χρειάζεται να βασίζεται συνεχώς σε φροντιστές ή μέλη της οικογένειας για τις βασικές του ανάγκες.'}/>
                            <AccordionComp title={'Ασφάλεια και Άνεση'} text={'Ένας καλά σχεδιασμένος χώρος προσφέρει ασφάλεια και μειώνει τους κινδύνους ατυχημάτων, όπως πτώσεις ή χτυπήματα. Με ειδικά σχεδιασμένα σημεία στήριξης, αντιολισθητικά υλικά, προσβάσιμα έπιπλα και κατάλληλη διαμόρφωση των χώρων, η μετακίνηση γίνεται πιο ασφαλής και άνετη. Αυτή η ασφάλεια ενισχύει το αίσθημα της σιγουριάς και της αυτοπεποίθησης του ατόμου​.'}/>
                            <AccordionComp title={'Αυτονομία στις Καθημερινές Δραστηριότητες'} text={'Η προσαρμογή του σπιτιού διευκολύνει την εκτέλεση βασικών καθημερινών δραστηριοτήτων, όπως το μαγείρεμα, η φροντίδα του εαυτού, η προσωπική υγιεινή και η μετακίνηση εντός του σπιτιού. Ο σωστός σχεδιασμός εξασφαλίζει ότι το άτομο μπορεί να διαχειρίζεται τις ανάγκες του χωρίς να χρειάζεται συνεχή βοήθεια, αυξάνοντας την ανεξαρτησία του​.'}/>
                            <AccordionComp title={'Αύξηση της Αυτοπεποίθησης'} text={'Όταν ένα άτομο με αναπηρία μπορεί να κινηθεί και να ζήσει στο σπίτι του χωρίς περιορισμούς, αυτό έχει άμεσο αντίκτυπο στην αυτοεκτίμηση και την ψυχολογία του. Το να μπορεί να διαχειρίζεται τις ανάγκες του χωρίς εξωτερική βοήθεια, του δίνει μια αίσθηση αυτοδυναμίας και αξιοπρέπειας. Το περιβάλλον του σπιτιού γίνεται ένας χώρος όπου μπορεί να αισθάνεται ασφαλές και ανεξάρτητο, γεγονός που ενισχύει τη θετική του εικόνα για τον εαυτό του​.'}/>                       
                        </Box>     
                    </Stack>            
                    <Stack spacing={3} sx={{ display: 'flex', justifyContent: 'center', padding: 5, borderRadius: 3, border: '1px solid rgb(180, 180, 180)', bgcolor: 'rgb(232, 232, 240)' }}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'rgb(40, 40, 40)' }}>
                            Η Υπηρεσία της GS Wheelchairs στη Διαμόρφωση του Χώρου
                        </Typography> 
                        <Box sx={{ marginTop: 6, marginLeft: 15, marginRight: 15, display: 'flex', justifyContent: 'center', bgcolor: 'rgb(255, 252, 252)', padding: 2, borderRadius: 2, border: '1px solid rgb(180, 180, 180)' }}>
                            <Typography sx={{ color: 'rgb(40, 40, 40)' }}>
                                Η GS Wheelchairs δεν ασχολείται μόνο με την κατασκευή εξατομικευμένων
                                αναπηρικών αμαξιδίων και τη λειτουργική αποκατάσταση. Προσφέρει επίσης
                                υπηρεσίες διαμόρφωσης εσωτερικών χώρων, ειδικά σχεδιασμένων για να
                                καλύπτουν τις ανάγκες των ατόμων με αναπηρία. Με στόχο να διευκολύνει τη ζωή
                                των χρηστών, η GS Wheelchairs δημιουργεί προσβάσιμους και εργονομικούς
                                χώρους, βοηθώντας τα άτομα να αποκτήσουν μεγαλύτερη ανεξαρτησία.
                            </Typography>                            
                        </Box>
                        <Box sx={{ bgcolor: 'transparent', color: 'rgb(40, 40, 40)', marginLeft: {xl: 20, lg: 0, md: 0, sm: 0, xs: 1, xxs: 1}, marginRight: {xl: 20, lg: 0, md: 0, sm: 0, xs: 1, xxs: 1}, borderRadius: 2, overflow: 'hidden' }}>
                            <AccordionComp title={'Εξατομικευμένες Λύσεις'} text={'Κάθε άτομο έχει διαφορετικές ανάγκες και η GS Wheelchairs αναγνωρίζει αυτή την ποικιλία. Η υπηρεσία διαμόρφωσης χώρου παρέχει πλήρως εξατομικευμένες λύσεις, λαμβάνοντας υπόψη το είδος της αναπηρίας, τις δυνατότητες του χρήστη και τις απαιτήσεις της καθημερινότητάς του. Αυτό μπορεί να περιλαμβάνει την εγκατάσταση ειδικών ραμπών, τη ρύθμιση των εσωτερικών χώρων ώστε να υπάρχει αρκετός χώρος για ελιγμούς με το αμαξίδιο, καθώς και την προσαρμογή των επίπλων και των συσκευών σε προσιτό ύψος​.'}/>
                            <AccordionComp title={'Συνδυασμός Αισθητικής και Λειτουργικότητας'} text={'Η GS Wheelchairs δίνει ιδιαίτερη σημασία στο να διατηρήσει το σπίτι όμορφο και λειτουργικό. Οι προσαρμογές δεν γίνονται εις βάρος της αισθητικής, αλλά ενσωματώνονται με τρόπο που να εξασφαλίζει τόσο την πρακτικότητα όσο και τη φιλικότητα του χώρου προς τον χρήστη. Ένα σπίτι πρέπει να είναι ένας χώρος όπου το άτομο αισθάνεται άνετα, αλλά και ένας χώρος που του επιτρέπει να κινείται ελεύθερα​.'}/>
                            <AccordionComp title={'Συμβουλευτική και Εκπαίδευση'} text={'Μέσω της υπηρεσίας διαμόρφωσης χώρου, η GS Wheelchairs προσφέρει επίσης συμβουλές και εκπαίδευση για τη βέλτιστη χρήση του σπιτιού. Οι ειδικευμένοι σύμβουλοι εργάζονται μαζί με το άτομο και την οικογένειά του για να σχεδιάσουν λύσεις που ταιριάζουν στις ανάγκες τους, διασφαλίζοντας ότι ο χώρος θα καλύπτει κάθε πτυχή της καθημερινότητας. Αυτή η διαδικασία δεν είναι απλώς τεχνική, αλλά εμπλέκει και το χρήστη, ώστε να αισθάνεται πως ο χώρος του είναι ακριβώς όπως τον χρειάζεται​​.'}/>                           
                        </Box>     
                    </Stack>    
                    <Stack spacing={3} sx={{ display: 'flex', justifyContent: 'center', padding: 5, borderRadius: 3, border: '1px solid rgb(180, 180, 180)', bgcolor: 'rgb(232, 232, 240)' }}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'rgb(40, 40, 40)' }}>
                            Πώς η Προσαρμογή του Σπιτιού Ενισχύει την Αυτοπεποίθηση
                        </Typography> 
                        <Box sx={{ marginTop: 6, marginLeft: 15, marginRight: 15, display: 'flex', justifyContent: 'center', bgcolor: 'rgb(255, 252, 252)', padding: 2, borderRadius: 2, border: '1px solid rgb(180, 180, 180)' }}>
                            <Typography sx={{ color: 'rgb(40, 40, 40)' }}>
                                Η διαμόρφωση του χώρου δίνει στα άτομα με αναπηρία το αίσθημα ελέγχου στη ζωή
                                τους. Όταν το περιβάλλον του σπιτιού είναι προσβάσιμο και προσαρμοσμένο, το
                                άτομο μπορεί να διαχειρίζεται τις καθημερινές του ανάγκες με αυτονομία. Αυτό
                                οδηγεί σε μείωση του άγχους και της εξάρτησης, ενισχύοντας την αυτοπεποίθηση
                                και την αίσθηση της αξιοπρέπειας​.
                            </Typography>                            
                        </Box>
                        <Box sx={{ marginTop: 6, marginLeft: 15, marginRight: 15, display: 'flex', justifyContent: 'center', bgcolor: 'rgb(255, 252, 252)', padding: 2, borderRadius: 2, border: '1px solid rgb(180, 180, 180)' }}>
                            <Typography sx={{ color: 'rgb(40, 40, 40)' }}>
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
            <RedirectBox back={'/service/full-custom'} forward={'/service/products'} pd={90} last={true}/>
        </Box>
    );
}

export default Interior;