import React, { useContext } from "react";
import bg1 from '../assets/giotis-wheelie.jpg';
import { Stack } from "@mui/material";
import { Context } from "./Context";

const ProductMenu = () => {
    const {isDesktop} = useContext(Context);

    if(isDesktop){
        return(
            <Stack spacing={2}>                
                <Stack spacing={2} direction='row'>
                    <img className='product-img' src={bg1} alt=""/> 
                    <img className='product-img' src={bg1} alt=""/> 
                </Stack>    
                <Stack spacing={2} direction='row'>
                    <img className='product-img' src={bg1} alt=""/> 
                    <img className='product-img' src={bg1} alt=""/> 
                </Stack>    
                <Stack spacing={2} direction='row'>
                    <img className='product-img' src={bg1} alt=""/> 
                    <img className='product-img' src={bg1} alt=""/> 
                </Stack>    
            </Stack>                     
        );
    }else{
        return(
            <Stack spacing={1}>                
                <Stack spacing={1} direction='row'>
                    <img className='product-img-mob' src={bg1} alt=""/> 
                    <img className='product-img-mob' src={bg1} alt=""/> 
                </Stack>    
                <Stack spacing={1} direction='row'>
                    <img className='product-img-mob' src={bg1} alt=""/> 
                    <img className='product-img-mob' src={bg1} alt=""/> 
                </Stack>    
                <Stack spacing={1} direction='row'>
                    <img className='product-img-mob' src={bg1} alt=""/> 
                    <img className='product-img-mob' src={bg1} alt=""/> 
                </Stack>  
            </Stack>   
        )
    }
}

export default ProductMenu;