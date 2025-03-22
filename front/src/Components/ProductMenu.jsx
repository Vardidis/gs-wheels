import React from "react";
import ProductItem from "./ProductItem";
import { Grid, keyframes } from "@mui/material";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ProductMenu = (props) => {
    return(
        <Grid container columnGap={2} rowGap={2} justifyContent={'center'} sx={{ padding: '32px 8px'}}>
            {props.items.map((item, index) => {                                
                return(
                    <Grid item   
                        className={'scalable'}                     
                        key={item._id}
                        xs={12}
                        sm={1.8}
                        md={3.5}
                        lg={2.6}
                        xl={2.93}
                        sx={{
                            marginBottom: 3,
                            bgcolor: 'white',
                            boxShadow: 6,
                            cursor: 'pointer',
                            borderRadius: 6,                                            
                            animation: `${fadeIn} 1s ease-in-out`,
                            overflow: 'hidden',
                            paddingBottom: 4,                                                   
                        }}
                    >                            
                        <ProductItem
                            item={item}
                            index={item._id}
                            key={index}
                        />                             
                    </Grid>
                );
            })}
        </Grid>       
    )
}

export default ProductMenu;