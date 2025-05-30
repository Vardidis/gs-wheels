import React, { useContext, useState } from "react";
import { Stack, Grid } from '@mui/material';
import ProductsTable from "../ProductsTable";
import { Context } from "../Context";
import EshopMenu from "../EshopMenu";

const Eshop = () => {    
    const {allProducts, endpoint} = useContext(Context);    
    const [deleteMode, setDeleteMode] = useState(false);
    const [deleteBucket, setDeleteBucket] = useState([]);

    if(allProducts.length > 0){
        return(
            <Stack               
            >
                <Grid container
                    columnSpacing={1}                                     
                >
                    <Grid item
                        size={{
                            xxs: 12,
                            md: 9
                        }}
                    >                                     
                        <ProductsTable
                            deleteBucket={deleteBucket}
                            setDeleteBucket={setDeleteBucket}
                            deleteMode={deleteMode}
                            products={allProducts}
                            endpoint={endpoint}
                        />
                    </Grid>
                    <Grid item
                        size={3}                        
                    >
                        <EshopMenu
                            deleteMode={deleteMode}
                            setDeleteMode={setDeleteMode}
                            deleteBucket={deleteBucket}
                            setDeleteBucket={setDeleteBucket}
                        />
                    </Grid>
                </Grid>
            </Stack>
        );
    }
}

export default Eshop;