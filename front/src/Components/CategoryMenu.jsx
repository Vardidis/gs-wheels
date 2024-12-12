import React from "react";
import { Stack, Grid } from "@mui/material";
import SupportIcon from '@mui/icons-material/Support';
import WheelchairPickupIcon from '@mui/icons-material/WheelchairPickup';
import ProductMenuItem from "./ProductMenuItem";
import { Link } from "react-router-dom";

const CategoryMenu = (props) => {   
    return(
        <Grid container
            className='no-scrollbar'
            justifyContent={'center'}
            rowGap={1}
            columnGap={1}
            sx={{
                width: '100%',
                margin: '0px 8px',                            
            }}
        >
            <Grid item xxs={12} xs={12} sm={4} md={2.5}>
                <Link to='/products' style={{ textDecoration: 'none' }}>
                    <ProductMenuItem text={'Όλα τα προϊόντα'} highlight={props.tag===undefined}/>
                </Link>
            </Grid>
            <Grid item xxs={12} xs={12} sm={4} md={2.5}>
                <Link to='wheelchairs' style={{ textDecoration: 'none' }}>
                    <ProductMenuItem text={'Αμαξίδια'} icon={<WheelchairPickupIcon fontSize="small"/>} highlight={props.tag==='wheelchairs'}/>
                </Link>
            </Grid>
            <Grid item xxs={12} xs={12} sm={4} md={2.5}>
                <Link to='parts' style={{ textDecoration: 'none' }}>
                    <ProductMenuItem text={'Ανταλλακτικά'} icon={<WheelchairPickupIcon fontSize="small"/>} highlight={props.tag==='parts'}/>
                </Link>
            </Grid>
            <Grid item xxs={12} xs={12} sm={4} md={2.5}>
                <Link to='helpers' style={{ textDecoration: 'none' }}>
                    <ProductMenuItem text={'Βοηθήματα'} icon={<SupportIcon fontSize="small"/>} highlight={props.tag==='helpers'}/>
                </Link>    
            </Grid>      
        </Grid>
    );
}

export default CategoryMenu;