import React from "react";
import { Box, Typography } from '@mui/material';
const TitleComp = (props) => {
    return(
        <Box sx={{ paddingTop: 3, paddingBottom: 10 }}>            
            <Typography fontSize={{xl: 28, lg: 24, md: 24, sm: 24, xs: 22, xxs: 20}} fontWeight={600} sx={{ textAlign: 'center' }}>
                {props.text}
            </Typography>     
        </Box>   
    );
}

export default TitleComp;