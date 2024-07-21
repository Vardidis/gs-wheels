import React, { useContext } from "react";
import { Stack } from "@mui/material";
import AlbumIcon from '@mui/icons-material/Album';
import SupportIcon from '@mui/icons-material/Support';
import WheelchairPickupIcon from '@mui/icons-material/WheelchairPickup';
import { Context } from "./Context";

const CategoryMenu = () => {
    const {isDesktop} = useContext(Context);

    if(isDesktop){
        return(
            <Stack spacing={1}>
                <div className='product-menu'>
                    Όλα τα προϊόντα
                </div>
                <div className='product-menu'>
                    <WheelchairPickupIcon fontSize="small"/>
                    Αμαξίδια
                </div>
                <div className='product-menu'>
                    <AlbumIcon fontSize="small"/>
                    Εξαρτήματα
                </div>
                <div className='product-menu'>
                    <SupportIcon fontSize="small"/>
                    Βοηθήματα
                </div>
            </Stack>
        );
    }else{
        return(
            <Stack direction='row' spacing={1}>
                <div className='product-menu'>
                    Όλα τα προϊόντα
                </div>
                <div className='product-menu'>
                    <WheelchairPickupIcon fontSize="small"/>
                    Αμαξίδια
                </div>
                <div className='product-menu'>
                    <AlbumIcon fontSize="small"/>
                    Εξαρτήματα
                </div>
                <div className='product-menu'>
                    <SupportIcon fontSize="small"/>
                    Βοηθήματα
                </div>
            </Stack>
        );
    }
}

export default CategoryMenu;