import React from "react";
import { Box, Typography } from '@mui/material';
const TitleComp = (props) => {
    return(
        <Box sx={{ paddingTop: 3, paddingBottom: {xl: 10, lg: 10, md: 8, sm: 8, xs: 6, xxs: 4} }}>            
            <Typography fontSize={{xl: 28, lg: 24, md: 24, sm: 24, xs: 22, xxs: 18}} fontWeight={600} sx={{ textAlign: 'center' }}>
                {props.text}
            </Typography>     
        </Box>   
    );
}

export default TitleComp;