import React from "react";
import { Box, Stack, Alert, Typography } from "@mui/material";
import gw from '../../assets/giotis-wheelie.jpg';
import TitleComp from "./TitleComp";
import RedirectBox from "./RedirectBox";
import ImageComp from "./ImageComp";

const LifeCoaching = () => {
    return(
        <Box sx={{ paddingBottom: 5 }}>
            <ImageComp image={gw}/>     
            <Alert severity="success">
                Το Life Coaching δεν απευθύνεται μόνο σε άτομα με αναπηρία, αλλά επίσης στον οικογενειακό και φιλικό περίγυρο τους.
            </Alert>
            <TitleComp text={'Συμβουλευτική'}/>
            <Stack spacing={6} sx={{ marginLeft: {xl: 70, lg: 15, md: 5, sm: 5, xs: 3, xxs: 2}, marginRight: {xl: 70, lg: 15, md: 5, sm: 5, xs: 3, xxs: 2}}}>           
                <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'rgb(255, 250, 240)', padding: 3, borderRadius: 2, border: '1px solid rgb(180, 180, 180)' }}>
                    <Typography sx={{ color: 'rgb(40, 40, 40)' }}>
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
                <Stack spacing={4} sx={{ display: 'flex', justifyContent: 'center', padding: 5, borderRadius: 3, border: '1px solid rgb(180, 180, 180)', bgcolor: 'rgb(232, 226, 232)' }}>
                    <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'rgb(40, 40, 40)' }}>
                        Συμβουλευτική για Άτομα με Αναπηρία
                    </Typography> 
                    <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'rgb(255, 252, 252)', padding: 3, borderRadius: 2, border: '1px solid rgb(180, 180, 180)' }}>
                        <Typography sx={{ color: 'rgb(40, 40, 40)' }}>
                            Η συμβουλευτική υπηρεσία της GS Wheelchairs στοχεύει στην ψυχολογική
                            υποστήριξη των ατόμων με αναπηρία, βοηθώντας τα να αντιμετωπίσουν τα
                            ψυχολογικά εμπόδια και τις προκλήσεις που συνοδεύουν τη σωματική αναπηρία. Οι
                            ειδικευμένοι σύμβουλοι, οι οποίοι οι ίδιοι ζουν σε συνθήκες αναπηρίας, προσφέρουν
                            μια βαθιά κατανόηση των ζητημάτων που αντιμετωπίζουν οι χρήστες. Μέσα από
                            προσωπική εμπειρία και επαγγελματική εκπαίδευση, παρέχουν συμβουλές για να
                            βοηθήσουν τα άτομα.
                        </Typography>          
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'rgb(255, 252, 252)', padding: 3, borderRadius: 2, border: '1px solid rgb(180, 180, 180)' }}>
                        <Typography sx={{ color: 'rgb(40, 40, 40)' }}>
                            Η συμβουλευτική αυτή δεν είναι μόνο ψυχολογική, αλλά και πρακτική, βοηθώντας
                            τους χρήστες να μάθουν πώς να ενσωματώσουν στη ζωή τους νέες τεχνικές και
                            εργαλεία για την καθημερινή τους αυτονομία, όπως είναι η σωστή χρήση του
                            αναπηρικού αμαξιδίου και η λειτουργική αποκατάσταση​.
                        </Typography>          
                    </Box>
                </Stack>   
                <Stack spacing={4} sx={{ display: 'flex', justifyContent: 'center', padding: 5, borderRadius: 3, border: '1px solid rgb(180, 180, 180)', bgcolor: 'rgb(232, 226, 232)' }}>
                    <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'rgb(40, 40, 40)' }}>
                        Συμβουλευτική για Οικογένειες
                    </Typography> 
                    <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'rgb(255, 252, 252)', padding: 3, borderRadius: 2, border: '1px solid rgb(180, 180, 180)' }}>
                        <Typography sx={{ color: 'rgb(40, 40, 40)' }}>
                            Η οικογένεια ενός ατόμου με αναπηρία παίζει συχνά καθοριστικό ρόλο στην
                            υποστήριξη και την ψυχολογική ενδυνάμωση του ατόμου. Η GS Wheelchairs
                            αναγνωρίζει αυτήν τη δυναμική και προσφέρει υπηρεσίες συμβουλευτικής που
                            απευθύνονται στις οικογένειες, με στόχο να:
                        </Typography>          
                    </Box>                  
                </Stack>   
                <Stack spacing={4} sx={{ display: 'flex', justifyContent: 'center', padding: 5, borderRadius: 3, border: '1px solid rgb(180, 180, 180)', bgcolor: 'rgb(232, 226, 232)' }}>
                    <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'rgb(40, 40, 40)' }}>
                        Αλληλεπίδραση με την Κοινωνία
                    </Typography> 
                    <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'rgb(255, 252, 252)', padding: 3, borderRadius: 2, border: '1px solid rgb(180, 180, 180)' }}>
                        <Typography sx={{ color: 'rgb(40, 40, 40)' }}>
                            Η GS Wheelchairs πιστεύει ότι η αναπηρία δεν είναι μόνο ένα σωματικό ζήτημα,
                            αλλά και ένα κοινωνικό. Μέσα από τις υπηρεσίες συμβουλευτικής, οι χρήστες και οι
                            οικογένειές τους μαθαίνουν να αλληλεπιδρούν με την κοινωνία με έναν τρόπο που
                            προάγει την ενσωμάτωση και όχι τον αποκλεισμό. Η εταιρεία υποστηρίζει ότι το
                            μεγαλύτερο πρόβλημα που αντιμετωπίζουν τα άτομα με αναπηρία δεν είναι η ίδια η
                            αναπηρία, αλλά οι κοινωνικές προκαταλήψεις και η έλλειψη σχεδιασμού για την
                            ενσωμάτωσή τους​.
                        </Typography>          
                    </Box>                  
                    <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'rgb(255, 252, 252)', padding: 3, borderRadius: 2, border: '1px solid rgb(180, 180, 180)' }}>
                        <Typography sx={{ color: 'rgb(40, 40, 40)' }}>
                            Οι σύμβουλοι της GS Wheelchairs βοηθούν τους χρήστες να αναπτύξουν δεξιότητες
                            για να διαχειρίζονται τα εμπόδια που συναντούν στην καθημερινή τους ζωή, όπως η
                            προσβασιμότητα σε δημόσιους χώρους, η εργασία και οι κοινωνικές σχέσεις. Επίσης,
                            συνεργάζονται με την οικογένεια και την κοινότητα για να δημιουργήσουν ένα
                            περιβάλλον που προωθεί την ισότητα και την κατανόηση​.
                        </Typography>          
                    </Box>                  
                </Stack>   
                <Stack spacing={4} sx={{ display: 'flex', justifyContent: 'center', padding: 5, borderRadius: 3, border: '1px solid rgb(180, 180, 180)', bgcolor: 'rgb(232, 226, 232)' }}>
                    <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'rgb(40, 40, 40)' }}>
                        Η Συμβουλευτική ως Εργαλείο Ενδυνάμωσης
                    </Typography> 
                    <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'rgb(255, 252, 252)', padding: 3, borderRadius: 2, border: '1px solid rgb(180, 180, 180)' }}>
                        <Typography sx={{ color: 'rgb(40, 40, 40)' }}>
                            Η υπηρεσία συμβουλευτικής της GS Wheelchairs δεν περιορίζεται μόνο στην
                            ψυχολογική υποστήριξη ή τις πρακτικές οδηγίες. Αποτελεί ένα εργαλείο
                            ενδυνάμωσης για τα άτομα με αναπηρία, παρέχοντάς τους τα μέσα και τη γνώση για
                            να ζήσουν με αξιοπρέπεια και ανεξαρτησία. Μέσω της συνεργασίας με τις
                            οικογένειες και της προώθησης της κοινωνικής αλληλεπίδρασης, η GS Wheelchairs
                            δημιουργεί ένα δίκτυο υποστήριξης που προάγει την πλήρη συμμετοχή των ατόμων
                            με αναπηρία στην κοινωνία, ενισχύοντας την ποιότητα ζωής τους​​.
                        </Typography>          
                    </Box>                  
                    <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'rgb(255, 252, 252)', padding: 3, borderRadius: 2, border: '1px solid rgb(180, 180, 180)' }}>
                        <Typography sx={{ color: 'rgb(40, 40, 40)' }}>
                            Σε αυτή την προσέγγιση, η αναπηρία δεν αποτελεί πλέον ένα εμπόδιο, αλλά μια νέα
                            πρόκληση για προσωπική ανάπτυξη και κοινωνική ενσωμάτωση.
                        </Typography>          
                    </Box>                  
                </Stack>   
            </Stack>   
            <RedirectBox back={'/service/apokatastasi'} forward={'/service/interior-design'} pd={80}/>
        </Box>
    );
}

export default LifeCoaching;