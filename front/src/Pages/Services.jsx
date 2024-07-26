import React from "react";
import Servicebox from "../Components/Servicebox";
import { Stack, Box, Alert } from "@mui/material";

const Services = () => {
    return(
        <Box sx={{display: 'flex', justifyContent: 'center', paddingBottom: 5 }}>
            <Stack spacing={3}>
                <Alert severity="success" sx={{ width: {lg: 750, md: 585, sm: '100%', xs: '100%', xxs: '100%'}, fontSize: {lg: 16, md: 16, sm: 14, xs: 12, xxs: 12} }}>
                    Στην GS  Wheelchairs (Get Started)  γνωρίζουμε πολύ καλά τι χρειάζεσαι και μπορούμε να σου δώσουμε όλα εκείνα τα εφόδια που θα χρειάστείς ώστε να γίνεις ξανά αυτόνομος για μια ποιοτική ζωή δίχως περιορισμούς
                </Alert>
                <Servicebox/>
            </Stack>
        </Box>        
    );
}

export default Services;