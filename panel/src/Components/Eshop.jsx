import React, { useContext } from "react";
import { Box, Stack, Typography, Button } from '@mui/material';
import ProductsTable from "./ProductsTable";
import { Context } from "./Context";
import { Link } from 'react-router-dom';

const Eshop = () => {    
    const {allProducts, endpoint} = useContext(Context);
    const count = allProducts.length;

    if(allProducts.length > 0){
        return(
            <Box sx={{  paddingLeft: 10, paddingRight: 10, marginTop: 3 }}>
                <Stack spacing={5}>   
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography fontSize={24} fontWeight={600}>
                            Προϊόντα ({count})
                        </Typography>
                        <Link to={`/edit/${count}`}>
                            <Button variant='contained'>
                                Προσθηκη
                            </Button>
                        </Link>
                    </Box>                 
                    <ProductsTable products={allProducts} endpoint={endpoint}/>                           
                </Stack>
            </Box>
        );
    }
}

export default Eshop;