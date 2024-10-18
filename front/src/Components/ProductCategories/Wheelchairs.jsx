import React, { useState, useEffect, useContext } from "react";
import { Grid, Chip, Stack } from "@mui/material";
import { Context } from "../Context";
import { useParams } from "react-router-dom";
import ProductMenu from "../ProductMenu";

const Wheelchairs = () => {
    const {allProducts} = useContext(Context);
    const [items, setItems] = useState([]);    
    const [lightW, setLightW] = useState('');
    const [athl, setAthl] = useState('');

    const handleClickLight = () => {
        if(lightW === 'outlined'){
            setLightW('');
        }        
    };

    const handleDeleteLight = () => {
        if(lightW === ''){
            setLightW('outlined');
        }  
    };

    const handleClickAthl = () => {
        if(athl === 'outlined'){
            setAthl('');
        }        
    };

    const handleDeleteAthl = () => {
        if(athl === ''){
            setAthl('outlined');
        }  
    };

    useEffect(()=>{
        setItems([]);

        let sortedData = [];
   
        if(lightW === ''){
            const toPush = allProducts.filter(product => product.secTag === 'lightweight');
            if(toPush){
                toPush.map(item => {
                    sortedData.push(item);
                })
            }            
        }else{
            sortedData = sortedData.filter(product => product.secTag !== 'lightweight');                
        }

        if(athl === ''){
            const toPush = allProducts.filter(product => product.secTag === 'athletic');
            if(toPush){
                toPush.map(item => {
                    sortedData.push(item);
                })
            }
            
        }else{
            sortedData = sortedData.filter(product => product.secTag !== 'athletic');                
        }

        sortedData.map(product => {
            setItems((prevItems) => [...prevItems, product]);                
        });
    }, [lightW, athl, allProducts]);    

    return(
        <Stack sx={{ width: '100%', marginTop: 5}}>
            <Stack direction="row" spacing={1}>
                <Chip
                    label="Ελαφριού Τύπου"
                    variant={lightW}
                    onClick={handleClickLight}
                    onDelete={handleDeleteLight}
                />
                <Chip
                    label="Αθλητικό"
                    variant={athl}
                    onClick={handleClickAthl}
                    onDelete={handleDeleteAthl}
                />
            </Stack>
            <ProductMenu items={items}/>
        </Stack>
        
    );
}

export default Wheelchairs;