import React, { useState, useEffect, useContext } from "react";
import { Grid, Chip, Stack } from "@mui/material";
import { Context } from "../Context";
import { useParams } from "react-router-dom";
import ProductMenu from "../ProductMenu";

const Wheelchairs = () => {
    const {allProducts, isDesktop} = useContext(Context);
    const [items, setItems] = useState([]);    
    const [lightW, setLightW] = useState('');
    const [athl, setAthl] = useState('');
    const [gallerian, setGallerian] = useState('');
    const [portfolio, setPortfolio] = useState('');

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

    const handleClickGal = () => {
        if(gallerian === 'outlined'){
            setGallerian('');
        }        
    };

    const handleDeleteGal = () => {
        if(gallerian === ''){
            setGallerian('outlined');
        }  
    };

    const handleClickPort = () => {
        if(portfolio === 'outlined'){
            setPortfolio('');
        }        
    };

    const handleDeletePort = () => {
        if(portfolio === ''){
            setPortfolio('outlined');
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

        if(gallerian === ''){
            const toPush = allProducts.filter(product => product.secTag === 'gallerian');
            if(toPush){
                toPush.map(item => {
                    sortedData.push(item);
                })
            }
            
        }else{
            sortedData = sortedData.filter(product => product.secTag !== 'gallerian');                
        }

        if(portfolio === ''){
            const toPush = allProducts.filter(product => product.secTag === 'portfolio');
            if(toPush){
                toPush.map(item => {
                    sortedData.push(item);
                })
            }
            
        }else{
            sortedData = sortedData.filter(product => product.secTag !== 'portfolio');                
        }

        sortedData.map(product => {
            setItems((prevItems) => [...prevItems, product]);                
        });
    }, [lightW, athl, gallerian, portfolio, allProducts]);    

    return(
        <Stack
            sx={{
                width: '100%',                
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
                        label="Ελαφριού Τύπου"
                        variant={lightW}
                        onClick={handleClickLight}
                        onDelete={handleDeleteLight}
                    />
                </Grid>  
                <Grid item>
                    <Chip
                        label="Αθλητικό"
                        variant={athl}
                        onClick={handleClickAthl}
                        onDelete={handleDeleteAthl}
                    />
                </Grid>
                <Grid item>
                    <Chip
                        label="Εκθεσιακά"
                        variant={gallerian}
                        onClick={handleClickGal}
                        onDelete={handleDeleteGal}
                    />
                </Grid>
                <Grid item>
                    <Chip
                        label="Πορτφόλιο"
                        variant={portfolio}
                        onClick={handleClickPort}
                        onDelete={handleDeletePort}
                    />
                </Grid>
            </Grid>
            <ProductMenu items={items}/>
        </Stack>
        
    );
}

export default Wheelchairs;