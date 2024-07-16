import React, { useState } from "react";
import bg1 from '../assets/giotis-wheelie.jpg';
import { Stack } from "@mui/material";
import WheelchairPickupIcon from '@mui/icons-material/WheelchairPickup';
import AlbumIcon from '@mui/icons-material/Album';
import SupportIcon from '@mui/icons-material/Support';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Chip from '@mui/material/Chip';

const Products = () => {
    const [view, setView] = useState('list');

    const handleChange = (event, nextView) => {
        setView(nextView);
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    return(              
        <Stack spacing={2} sx={{ padding: 5 }}>     
            <Stack direction='row' spacing={8}>
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
                <Stack direction='row' spacing={1}>
                <Chip label="R9" onDelete={handleDelete} />
                <Chip label="S7" onDelete={handleDelete} />
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
                    <ToggleButton value="quilt" aria-label="quilt">
                        <ViewQuiltIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
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
}

export default Products;