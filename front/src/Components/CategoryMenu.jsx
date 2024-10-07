import React, { useContext } from "react";
import { Stack, Box } from "@mui/material";
import AlbumIcon from '@mui/icons-material/Album';
import SupportIcon from '@mui/icons-material/Support';
import WheelchairPickupIcon from '@mui/icons-material/WheelchairPickup';
import { Context } from "./Context";
import ProductMenuItem from "./ProductMenuItem";
import { Link } from "react-router-dom";

const CategoryMenu = (props) => {
    const {isDesktop} = useContext(Context);    

    if(isDesktop){
        return(
            <Stack direction='row' spacing={1}>
                <Link to='/products' style={{ textDecoration: 'none' }}>
                    <ProductMenuItem text={'Όλα τα προϊόντα'} highlight={props.tag===undefined}/>
                </Link>
                <Link to='wheelchairs' style={{ textDecoration: 'none' }}>
                    <ProductMenuItem text={'Αμαξίδια'} icon={<WheelchairPickupIcon fontSize="small"/>} highlight={props.tag==='wheelchairs'}/>
                </Link>
                <Link to='parts' style={{ textDecoration: 'none' }}>
                    <ProductMenuItem text={'Εξαρτήματα'} icon={<AlbumIcon fontSize="small"/>} highlight={props.tag==='parts'}/>
                </Link>
                <Link to='helpers' style={{ textDecoration: 'none' }}>
                    <ProductMenuItem text={'Βοηθήματα'} icon={<SupportIcon fontSize="small"/>} highlight={props.tag==='helpers'}/>
                </Link>
            </Stack>
        );
    }else{
        return(
            <Box className='scroller-box' sx={{ overflowX: 'scroll', display: 'flex', paddingTop: 1, paddingBottom: 1 }}>
                <Stack direction='row' spacing={1} sx={{ justifyContent: "center" }}>                    
                    <Link to='/products' style={{ textDecoration: 'none' }}>
                        <ProductMenuItem text={'Όλα τα προϊόντα'} highlight={props.tag===undefined}/>
                    </Link>
                    <Link to='wheelchairs' style={{ textDecoration: 'none' }}>
                        <ProductMenuItem text={'Αμαξίδια'} icon={<WheelchairPickupIcon fontSize="small"/>} highlight={props.tag==='wheelchairs'}/>
                    </Link>
                    <Link to='parts' style={{ textDecoration: 'none' }}>
                        <ProductMenuItem text={'Εξαρτήματα'} icon={<AlbumIcon fontSize="small"/>} highlight={props.tag==='parts'}/>
                    </Link>
                    <Link to='helpers' style={{ textDecoration: 'none' }}>
                        <ProductMenuItem text={'Βοηθήματα'} icon={<SupportIcon fontSize="small"/>} highlight={props.tag==='helpers'}/>
                    </Link>
                </Stack>
            </Box>
        );
    }
}

export default CategoryMenu;