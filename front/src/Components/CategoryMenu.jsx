import React from "react";
import { Stack } from "@mui/material";
import AlbumIcon from '@mui/icons-material/Album';
import SupportIcon from '@mui/icons-material/Support';
import WheelchairPickupIcon from '@mui/icons-material/WheelchairPickup';
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';
import ProductMenuItem from "./ProductMenuItem";
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import { Link } from "react-router-dom";

const CategoryMenu = (props) => {    
    return(
        <Stack direction='row' spacing={1}>
            <Link to='/products' style={{ textDecoration: 'none' }}>
                <ProductMenuItem text={'Όλα τα προϊόντα'} highlight={props.tag===undefined}/>
            </Link>
            <Link to='wheelchairs' style={{ textDecoration: 'none' }}>
                <ProductMenuItem text={'Αμαξίδια'} icon={<WheelchairPickupIcon fontSize="small"/>} highlight={props.tag==='wheelchairs'}/>
            </Link>
            <Link to='wheels' style={{ textDecoration: 'none' }}>
                <ProductMenuItem text={'Ρόδες'} icon={<AlbumIcon fontSize="small"/>} highlight={props.tag==='wheels'}/>
            </Link>
            <Link to='parts' style={{ textDecoration: 'none' }}>
                <ProductMenuItem text={'Ελαστικά'} icon={<TripOriginIcon fontSize="small"/>} highlight={props.tag==='parts'}/>
            </Link>
            <Link to='helpers' style={{ textDecoration: 'none' }}>
                <ProductMenuItem text={'Βοηθήματα'} icon={<SupportIcon fontSize="small"/>} highlight={props.tag==='helpers'}/>
            </Link>
            <Link to='brakes' style={{ textDecoration: 'none' }}>
                <ProductMenuItem text={'Φρένα'} icon={<FiberSmartRecordIcon fontSize="small"/>} highlight={props.tag==='brakes'}/>
            </Link>
        </Stack>
    );
}

export default CategoryMenu;