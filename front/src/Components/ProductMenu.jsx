import React, { useContext } from "react";
import bg1 from '../assets/giotis-wheelie.jpg';
import { Stack } from "@mui/material";
import { Context } from "./Context";
import { Link } from "react-router-dom";

const ProductMenu = () => {
    const {isDesktop} = useContext(Context);

    if(isDesktop){
        return(
            <Stack spacing={2}>                
                <Stack spacing={2} direction='row'>
                    <Link to='1' style={{textDecoration: 'none'}}>
                        <img className='product-img' src={bg1} alt=""/> 
                    </Link>  
                    <Link to='2' style={{textDecoration: 'none'}}>          
                        <img className='product-img' src={bg1} alt=""/> 
                    </Link>        
                </Stack>    
                <Stack spacing={2} direction='row'>
                    <Link to='3' style={{textDecoration: 'none'}}>     
                        <img className='product-img' src={bg1} alt=""/> 
                    </Link>
                    <Link to='4' style={{textDecoration: 'none'}}>     
                        <img className='product-img' src={bg1} alt=""/> 
                    </Link>
                </Stack>    
                <Stack spacing={2} direction='row'>
                    <Link to='5' style={{textDecoration: 'none'}}>     
                        <img className='product-img' src={bg1} alt=""/> 
                    </Link>
                    <Link to='6' style={{textDecoration: 'none'}}>                     
                        <img className='product-img' src={bg1} alt=""/> 
                    </Link>
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