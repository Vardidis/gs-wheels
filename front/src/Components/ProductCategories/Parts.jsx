import React, { useState, useEffect, useContext } from "react";
import ProductMenu from "../ProductMenu";
import { Stack, Chip, Grid } from "@mui/material";
import { Context } from "../Context";

const Parts = () => {
    const {allProducts} = useContext(Context);
    const [items, setItems] = useState([]);    
    const [wheels, setWheels] = useState('');
    const [rubber, setRubber] = useState('');
    const [wheelies, setWheelies] = useState('');
    const [brakes, setBrakes] = useState('');

    const handleClickWheels = () => {
        if(wheels === 'outlined'){
            setWheels('');
        }        
    };

    const handleDeleteWheels = () => {
        if(wheels === ''){
            setWheels('outlined');
        }  
    };

    const handleClickRubber = () => {
        if(rubber === 'outlined'){
            setRubber('');
        }        
    };

    const handleDeleteRubber = () => {
        if(rubber === ''){
            setRubber('outlined');
        }  
    };

    const handleClickWheelies = () => {
        if(wheelies === 'outlined'){
            setWheelies('');
        }        
    };

    const handleDeleteWheelies = () => {
        if(wheelies === ''){
            setWheelies('outlined');
        }  
    };

    const handleClickBrakes = () => {
        if(brakes === 'outlined'){
            setBrakes('');
        }        
    };

    const handleDeleteBrakes = () => {
        if(brakes === ''){
            setBrakes('outlined');
        }  
    };

    useEffect(()=>{
        setItems([]);

        let sortedData = [];
   
        if(wheels === ''){
            const toPush = allProducts.filter(product => product.secTag === 'wheels');
            if(toPush){
                toPush.map(item => {
                    sortedData.push(item);
                })
            }            
        }else{
            sortedData = sortedData.filter(product => product.secTag !== 'wheels');                
        }

        if(rubber === ''){
            const toPush = allProducts.filter(product => product.secTag === 'rubber');
            if(toPush){
                toPush.map(item => {
                    sortedData.push(item);
                })
            }
            
        }else{
            sortedData = sortedData.filter(product => product.secTag !== 'rubber');                
        }

        if(wheelies === ''){
            const toPush = allProducts.filter(product => product.secTag === 'wheelies');
            if(toPush){
                toPush.map(item => {
                    sortedData.push(item);
                })
            }
            
        }else{
            sortedData = sortedData.filter(product => product.secTag !== 'wheelies');                
        }

        if(brakes === ''){
            const toPush = allProducts.filter(product => product.secTag === 'brakes');
            if(toPush){
                toPush.map(item => {
                    sortedData.push(item);
                })
            }
            
        }else{
            sortedData = sortedData.filter(product => product.secTag !== 'brakes');                
        }

        sortedData.map(product => {
            setItems((prevItems) => [...prevItems, product]);                
        });
    }, [wheels, rubber, wheelies, brakes, allProducts]);    

    return(
        <Stack
            sx={{
                width: '100%'
            }}
        >
            <Grid container    
                columnGap={1}   
                rowGap={1}        
                sx={{                  
                    padding: {lg: '0px 88px', md: '0px 72px', sm: '0px 40px'}            
                }}
            >      
                <Grid item>      
                    <Chip
                        label="Ζάντες"
                        variant={wheels}
                        onClick={handleClickWheels}
                        onDelete={handleDeleteWheels}
                    />
                </Grid>
                <Grid item>      
                    <Chip
                        label="Ελαστικά"
                        variant={rubber}
                        onClick={handleClickRubber}
                        onDelete={handleDeleteRubber}
                    />
                </Grid>
                <Grid item>      
                    <Chip
                        label="Ροδάκια"
                        variant={wheelies}
                        onClick={handleClickWheelies}
                        onDelete={handleDeleteWheelies}
                    />
                </Grid>
                <Grid item>      
                    <Chip
                        label="Φρένα"
                        variant={brakes}
                        onClick={handleClickBrakes}
                        onDelete={handleDeleteBrakes}
                    />
                </Grid>
            </Grid>
            <ProductMenu items={items}/>
        </Stack>
    );
}

export default Parts;