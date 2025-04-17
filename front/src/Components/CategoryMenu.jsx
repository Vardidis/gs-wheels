import React from "react";
import { Grid } from "@mui/material";
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
                paddingTop: 2
            }}
        >
            <Grid item xxs={12} xs={12} sm={4} md={2.5}>
                <Link to='/products' style={{ textDecoration: 'none' }}>
                    <ProductMenuItem text={'Όλα τα προϊόντα'} highlight={props.tag===undefined}/>
                </Link>
            </Grid>
            <Grid item xxs={12} xs={12} sm={4} md={2.5}>
                <Link to='wheelchairs' style={{ textDecoration: 'none' }}>
                    <ProductMenuItem text={'Αμαξίδια'} highlight={props.tag==='wheelchairs'}/>
                </Link>
            </Grid>
            <Grid item xxs={12} xs={12} sm={4} md={2.5}>
                <Link to='parts' style={{ textDecoration: 'none' }}>
                    <ProductMenuItem text={'Ανταλλακτικά'} highlight={props.tag==='parts'}/>
                </Link>
            </Grid>
            <Grid item xxs={12} xs={12} sm={4} md={2.5}>
                <Link to='helpers' style={{ textDecoration: 'none' }}>
                    <ProductMenuItem text={'Βοηθήματα'} highlight={props.tag==='helpers'}/>
                </Link>    
            </Grid>      
        </Grid>
    );
}

export default CategoryMenu;