import React, { useContext, useState } from "react";
import bg1 from '../assets/giotis-wheelie.jpg';
import { Stack, Typography } from "@mui/material";
import WheelchairPickupIcon from '@mui/icons-material/WheelchairPickup';
import AlbumIcon from '@mui/icons-material/Album';
import SupportIcon from '@mui/icons-material/Support';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Context } from "../Components/Context";

const Products = () => {
    const {isDesktop} = useContext(Context);
    const [view, setView] = useState('list');

    const handleChange = (event, nextView) => {
        setView(nextView);
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    if(isDesktop){
        return(              
            <Stack spacing={4} sx={{ paddingLeft: {lg: 10, md: 5}, paddingRight: {lg: 10, md: 5}, width: {lg: 715, md: 700}, marginTop: 3 }}>     
                <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between' }}>   
                    <Typography fontSize={26} fontWeight={600}>Κατάστημα</Typography>           
                    <ToggleButtonGroup
                        size="small"
                        value={view}
                        exclusive
                        onChange={handleChange}
                    >
                        <ToggleButton value="list" aria-label="list">
                            <ViewListIcon />
                        </ToggleButton>
                        <ToggleButton value="module" aria-label="module">
                            <ViewModuleIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
                <Stack direction='row' spacing={{lg: 6, md: 4}}>
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
                    <Stack spacing={2}>                
                        <Stack spacing={2} direction='row'>
                            <img className='product-img' src={bg1}/> 
                            <img className='product-img' src={bg1}/> 
                        </Stack>    
                        <Stack spacing={2} direction='row'>
                            <img className='product-img' src={bg1}/> 
                            <img className='product-img' src={bg1}/> 
                        </Stack>    
                        <Stack spacing={2} direction='row'>
                            <img className='product-img' src={bg1}/> 
                            <img className='product-img' src={bg1}/> 
                        </Stack>    
                    </Stack>                                                                  
                </Stack>            
            </Stack>
        );
    }else{
        return(
            <Stack spacing={4} sx={{ paddingLeft: {sm: 7, xs: 2}, paddingRight: {sm: 7, xs: 2}, width: {sm: 625, xs: 600}, marginTop: 3 }}>     
                <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between' }}>   
                    <Typography fontSize={{sm: 26, xs: 22}} fontWeight={600}>Κατάστημα</Typography>           
                    <ToggleButtonGroup
                        size="small"
                        value={view}
                        exclusive
                        onChange={handleChange}
                    >
                        <ToggleButton value="list" aria-label="list">
                            <ViewListIcon />
                        </ToggleButton>
                        <ToggleButton value="module" aria-label="module">
                            <ViewModuleIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
                <Stack spacing={{sm: 3}}>
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
                    <Stack spacing={1}>                
                        <Stack spacing={1} direction='row'>
                            <img className='product-img-mob' src={bg1}/> 
                            <img className='product-img-mob' src={bg1}/> 
                        </Stack>    
                        <Stack spacing={1} direction='row'>
                            <img className='product-img-mob' src={bg1}/> 
                            <img className='product-img-mob' src={bg1}/> 
                        </Stack>    
                        <Stack spacing={1} direction='row'>
                            <img className='product-img-mob' src={bg1}/> 
                            <img className='product-img-mob' src={bg1}/> 
                        </Stack>  
                    </Stack>                                                                  
                </Stack>            
            </Stack>
        );
    }
}

export default Products;