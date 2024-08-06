import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const ProductViewDetails = (props) => {
    return(
        <Box sx={{ padding: 2, bgcolor: '#f1f1f1', borderRadius: 2, boxShadow: '1px 2px 3px -2px black', height: 'fit-content' }}>
            <Stack spacing={{xl: 2, lg: 2, md: 2, sm: 2, xs: 1, xxs: 1}}>
                <Typography fontSize={{xl: 18, lg: 18, md: 18, sm: 18, xs: 16, xxs: 14}} fontWeight={600} sx={{ textAlign: 'center' }}>
                    Λεπτομέρειες
                </Typography>
                <Stack spacing={{xl: 1, lg: 1, md: 1, sm: 0.5, xs: 0.5, xxs: 0.5}} sx={{ padding: {xl: 3, lg: 3, md: 2, sm: 2, xs: 2, xxs: 1} }}>
                    {props.chars.map(char => {
                        return(
                            <Typography fontSize={{xl: 16, lg: 16, md: 14, sm: 16, xs: 14, xxs: 14}}>
                                {char}
                            </Typography>
                        );
                    })}        
                </Stack>                        
            </Stack>
        </Box>   
    );
}

export default ProductViewDetails;