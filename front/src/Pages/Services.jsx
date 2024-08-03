import React from "react";
import Servicebox from "../Components/Servicebox";
import { Stack, Box, Alert } from "@mui/material";

const Services = () => {
    return(
        <Box sx={{ paddingBottom: 5 }}>
            <Alert severity="success" sx={{ width: '100%', fontSize: {xl: 20, lg: 16, md: 16, sm: 16, xs: 12, xxs: 12} }}>
                Στην GS  Wheelchairs (Get Started)  γνωρίζουμε πολύ καλά τι χρειάζεσαι και μπορούμε να σου δώσουμε όλα εκείνα τα εφόδια που θα χρειάστείς ώστε να γίνεις ξανά αυτόνομος για μια ποιοτική ζωή δίχως περιορισμούς
            </Alert>
            <Stack spacing={{xl: 16, lg: 6}} sx={{ paddingTop: 5 }}>                
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Servicebox/>
                </Box>
                
            </Stack>
        </Box>        
    );
}

export default Services;