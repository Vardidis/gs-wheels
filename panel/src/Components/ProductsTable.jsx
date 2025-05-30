import React, { useLayoutEffect, useState } from "react";
import { Box, Stack, Snackbar, Typography, Grid, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const categoryMatch = {
    wheelchairs: 'Αμαξίδια',
    parts: 'Ανταλλακτικά',
    helpers: 'Βοηθήματα'
}

const subCategoryMatch = {
    lightweight: 'Ελαφριού τύπου',
    rubber: 'Ελαστικά',
    test: '',
    brakes: 'Φρένα',
    wheels: 'Ζάντες',
    wheelies: 'Ροδάκια'
}

const chips = [
    'Αμαξίδια',
    'Ανταλλακτικά',
    'Βοηθήματα'
]

const chipsMatch = {
    wheelchairs: 'Αμαξίδια',
    parts: 'Ανταλλακτικά',
    helpers: 'Βοηθήματα',    
    rubber: 'Ελαστικά',    
    brakes: 'Φρένα',
    wheels: 'Ζάντες',
    wheelies: 'Ροδάκια'
}

const ProductsTable = (props) => {
    const [open, setOpen] = useState(false);
    const [allChips, setAllChips] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const navigate = useNavigate();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };

    const handleClick = (id) => {
        if(props.deleteBucket.includes(id)){
            props.setDeleteBucket(prevItems => prevItems.filter(item => item !== id));
        }else{
            props.setDeleteBucket(prevItems => [...prevItems, id]);
        }
    }

    const handleChipClick = () => {        
        const reset = props.products;

        if (allChips.length === 0 || allChips.includes(0)) {
            setFilteredProducts(reset);
            return;
        }

        const selectedTags = allChips.map(index => {
            const chipLabel = chips[index - 1];
            // Reverse match: Greek => English tag
            return Object.keys(chipsMatch).find(
              key => chipsMatch[key] === chipLabel
            );
        });

        const filtered = reset.filter(product => {
            
            const primaryTagMatch = selectedTags.includes(product.tag);

            const secondaryTagMatch = selectedTags.includes(product.secTag)              

            return primaryTagMatch || secondaryTagMatch;
                                   
        });

        setFilteredProducts(filtered);
    }

    useLayoutEffect(() => {
        handleChipClick()
    }, [allChips, props.products])

    return(
        <Box>            
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Επιτυχής διαγραφή"
            />   
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                sx={{
                    overflowX: 'auto',
                    padding: '4px 0px'
                }}
            >
                <Stack
                    direction={'row'}
                    spacing={0.5}
                    alignItems={'center'}
                    sx={{
                        padding: '0px 16px'
                    }}
                >
                    <Chip
                        
                        label="Όλα"
                        variant={(allChips.length === 0 || (allChips.length === 1 && allChips[0] === 0)) ? '' : 'outlined'}
                        onClick={()=>setAllChips([0])}
                        onDelete={()=>setAllChips([])}
                    />
                    {chips.map((chip, index) => (
                        <Chip                        
                            label={chip}
                            variant={allChips.includes(index+1) ? '' : 'outlined'}
                            onClick={() => setAllChips(prevItems => [...prevItems, index+1])}
                            onDelete={()=>{
                                setAllChips(prevItems => prevItems.filter(item => item !== index+1 && item !== 0));                                
                            }}
                        />
                    ))} 
                </Stack>                   
            </Stack>
            <Stack
                spacing={1}
                sx={{
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    padding: '8px 16px'
                }}
            >
                {filteredProducts.map((product) => (   
                    <Stack
                        className={'shady'}
                        onClick={props.deleteMode ? ()=>handleClick(product._id) : ()=>navigate(`/edit/${product._id}`)}
                        direction={'row'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        spacing={2}
                        sx={{
                            border: (props.deleteMode && props.deleteBucket.includes(product._id)) ? '1px solid orangered' : '1px solid #eeeeee',
                            bgcolor: '#fafafa',
                            padding: 2,
                            borderRadius: 3
                        }}
                    >
                        <Stack>                            
                            <img
                                src={product.thumbnail}
                                style={{
                                    maxWidth: '80px',
                                    maxHeight: '72px',
                                    objectFit: 'cover',
                                    borderRadius: '5px',
                                    border: '1px solid rgb(242, 242, 242)'
                                }}
                            />
                            <Typography>
                                {product.title}
                            </Typography>
                            <Typography
                                fontSize={14}
                                sx={{
                                    color: '#999999'
                                }}
                            >
                                {categoryMatch[product.tag]} {product.secTag ? `/ ${subCategoryMatch[product.secTag]}` : ''}
                            </Typography>
                        </Stack>
                        <Grid container
                            columnSpacing={1}                                                  
                            sx={{
                                width: 'fit-content'                                
                            }}                         
                        >   
                            {product.sub.map(subImg => (          
                                <Grid item>                     
                                    <img
                                        src={subImg}
                                        key={subImg}
                                        alt=''
                                        style={{                                            
                                            maxWidth: '100%',  
                                            maxHeight: 40,                                                                                  
                                            objectFit: 'cover',
                                            border: '1px solid #eeeeee',
                                            borderRadius: 3
                                        }}
                                    /> 
                                </Grid>                               
                            ))}
                        </Grid>                                                                                                                                         
                    </Stack>
                ))}
            </Stack>                
        </Box>    
    );
}

export default ProductsTable;