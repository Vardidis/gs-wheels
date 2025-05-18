import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import { Grid, keyframes } from "@mui/material";
import { Context } from "./Context";

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
    const {isDesktop} = useContext(Context);
    
    return(
        <Grid container
            columnSpacing={1}
            rowGap={2}             
            sx={{
                padding: isDesktop ? '32px 16px' : '32px 8px',           
            }}
        >
            {props.items.map((item, index) => {                                
                return(
                    <Grid item   
                        className={'scalable'}                     
                        key={item._id}
                        size={{
                            xs: 12,
                            sm: 6,
                            md: 4,
                            lg: 3,
                            xl: 3
                        }}                        
                        sx={{
                            marginBottom: 3,
                            bgcolor: 'white',
                            boxShadow: isDesktop ? 6 : 1,
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