import React, { useContext, useEffect, useRef, useState } from "react";
import { Box, Paper, Typography, Stack, Button, TextField, MenuItem, Popper, InputLabel, FormControl, Select   } from '@mui/material';
import { Context } from "./Context";
import { useParams } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import CameraswitchIcon from '@mui/icons-material/Cameraswitch';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';
import UploadTable from "./UploadTable";

const Product = () => {
    const {productId} = useParams();
    const {endpoint, allProducts, allImages} = useContext(Context);
    const product = allProducts[productId];
    const fileInputRef = useRef(null);
    const subInputRef = useRef(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [mainImg, setMainImg] = useState(null);
    const [extraSubs, setExtraSubs] = useState([]);
    const [extraDets, setExtraDets] = useState([]);
    const [changes, setChanges] = useState({
        mainImg: null,
        subs: [],
        category: null,
        desc: null,
        dets: []
    });
    const [curCategory, setCurCategory] = useState(product ? product.tag : null)

    const categories = [
        'wheelchairs',
        'parts',
        'helpers'
    ]

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const handleChange = (e) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setMainImg(reader.result);
        };
        reader.readAsDataURL(e.target.files[0]);    
        setChanges(prevItems => ({...prevItems, mainImg}));
    }

    const handleSubChange = (e) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setExtraSubs(prevItems => [...prevItems, reader.result]);
        };
        reader.readAsDataURL(e.target.files[0]);    
        setChanges(prevItems => ({...prevItems, subs: extraSubs[-1]}));
    }

    const removeSub = (e) => {
        e.target.parentElement.remove();
    }

    const addDet = () => {
        setExtraDets(prevItems => [...prevItems, 'element']);
    }

    const removeDet = (e) => {
        e.target.parentElement.parentElement.remove();
    }

    const categoryChange = (e) => {
        setCurCategory(e.target.value)
        const cat = e.target.value;
        setChanges(prevItems => ({...prevItems, category: cat}));
    }

    const changeDesc = (e) => {
        const newDesc = e.target.value;
        setChanges(prevItems => ({...prevItems, desc: newDesc}));
    }

    const handleSaveClick = () => {
        console.log(changes)
    }

    useEffect(() => {
        if(product){
            setMainImg(`${endpoint}${product.thumbnail}`);
        }        
    }, [])

    if(product){
        return(
            <Box sx={{ paddingLeft: 10, paddingRight: 10, paddingTop: 3 }}>
                 <Popper id={id} open={open} anchorEl={anchorEl} sx={{ zIndex: 1 }}>    
                    <Paper sx={{ p: 3 }}>
                        <UploadTable/>
                        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                            <Button variant='contained'>
                                Επιλογη
                            </Button>
                        </Box>                        
                    </Paper>
                </Popper>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 3}}>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Typography className='edit-icon' fontSize={20} sx={{ color: 'black' }}>
                            Πίσω
                        </Typography>
                    </Link>
                    <Button variant='contained' onClick={handleSaveClick}>
                        Αποθηκευση
                    </Button>
                </Box>              
                <Paper sx={{ padding: 4 }}>
                    <Stack spacing={10}>                              
                        <Stack spacing={5}>
                            <Stack direction='row' spacing={5}>
                                <Typography sx={{ width: 150 }}>
                                    Βασική εικόνα
                                </Typography>
                                <Stack direction='row' spacing={1}>
                                    <Paper sx={{ width: 'fit-content', height: 'fit-content' }}>
                                        <img src={mainImg ? mainImg : `${endpoint}${product.thumbnail}`} alt='' style={{ width: '150px' }}/>
                                    </Paper>  
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 4 }}>
                                        <input ref={fileInputRef} onChange={handleChange} style={{ display: 'none' }} type="file"/>
                                        <CameraswitchIcon onClick={handleClick} className="edit-icon" fontSize="large"/>
                                    </Box>  
                                </Stack>                            
                            </Stack>
                            <Stack direction='row' spacing={5}>
                                <Typography sx={{ width: 150 }}>
                                    Πρόσθετες εικόνες
                                </Typography>   
                                <Stack direction='row' spacing={1}>
                                    {product.sub.map(subImg => {
                                        return (
                                            <Paper sx={{ width: 'fit-content', height: 'fit-content' }}>
                                                <img onClick={removeSub} src={`${endpoint}${subImg}`} alt='' style={{ width: '75px', cursor: 'pointer' }}/>
                                            </Paper>                                        
                                        );                                    
                                    })}
                                    {extraSubs.map(img => {
                                        return (
                                            <Paper sx={{ width: 'fit-content', height: 'fit-content' }}>
                                                <img onClick={removeSub} src={img} alt='' style={{ width: '75px', cursor: 'pointer' }}/>
                                            </Paper>                                        
                                        );        
                                    })

                                    }  
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 1 }}>
                                        <input ref={subInputRef} onChange={handleSubChange} style={{ display: 'none' }} type="file"/>
                                        <AddIcon className="edit-icon" fontSize="large" onClick={handleClick}/>
                                    </Box>
                                </Stack>                                                                                                    
                            </Stack>
                            <Stack direction='row' spacing={5}>
                                <Typography sx={{ width: 150 }}>
                                    Κατηγορία
                                </Typography>  
                                <FormControl sx={{ width: 500 }}>
                                    <InputLabel id="demo-simple-select-label">Κατηγορία</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={curCategory}
                                        label="Category"
                                        onChange={categoryChange}
                                    >
                                        {categories.map(cat => {
                                            return <MenuItem value={cat}>{cat}</MenuItem>
                                        })}                                                                        
                                    </Select>
                                </FormControl>
                            </Stack>
                            <Stack direction='row' spacing={5}>
                                <Typography sx={{ width: 150 }}>
                                    Περιγραφή
                                </Typography>                               
                                <TextField multiline onBlur={changeDesc} defaultValue={product.desc} sx={{ width: 500 }}/>                                                                                                        
                            </Stack>
                            <Stack direction='row' spacing={5}>
                                <Typography sx={{ width: 150 }}>
                                    Λεπτομέρειες
                                </Typography>      
                                <Stack spacing={1}>
                                    {product.chars.map(char => {
                                        return(
                                            <Stack direction='row' spacing={2}>
                                                <TextField defaultValue={char} sx={{ width: 500 }}/>  
                                                <Box className='edit-icon'  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 1 }}>                                            
                                                    <RemoveIcon fontSize="medium" onClick={removeDet}/>   
                                                </Box>                                  
                                            </Stack>
                                        ); 
                                    })}  
                                    <Stack direction='row' spacing={2}>
                                        <TextField sx={{ width: 500 }}/>  
                                        <Box className='edit-icon'  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 1 }}>                                            
                                            {extraDets.length === 0
                                            ? <AddIcon fontSize="medium" onClick={addDet}/>   
                                            : <RemoveIcon fontSize="medium" onClick={removeDet}/>
                                            }
                                        </Box>                                  
                                    </Stack>
                                    {extraDets.map((_, index) => {
                                        return(
                                            <Stack direction='row' spacing={2}>
                                                <TextField sx={{ width: 500 }}/>  
                                                <Box className='edit-icon'  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 1 }}>                                            
                                                    {extraDets.length === index+1
                                                    ? <AddIcon fontSize="medium" onClick={addDet}/>   
                                                    : <RemoveIcon fontSize="medium" onClick={removeDet}/>
                                                    }  
                                                </Box>                                  
                                            </Stack>
                                        )
                                    })}
                                </Stack>                                                                                                                                                                   
                            </Stack>
                        </Stack>                                           
                    </Stack>
                </Paper>
            </Box>
        );
    }else{
        return(
            <Box sx={{ paddingLeft: 10, paddingRight: 10, paddingTop: 3 }}>
                    
                </Box>
        );
    }
}

export default Product;