import React, { useContext, useEffect, useState } from "react";
import { Box, Paper, Typography, Stack, Button, TextField, MenuItem, Popper, InputLabel, FormControl, Select   } from '@mui/material';
import { Context } from "./Context";
import { useParams } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import CameraswitchIcon from '@mui/icons-material/Cameraswitch';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import UploadTable from "./UploadTable";
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import axios from 'axios';

const Product = () => {
    const {productId} = useParams();
    const {endpoint, allProducts, allImages} = useContext(Context);
    const product = allProducts[productId];
    const [anchorEl, setAnchorEl] = useState(null);
    const [mainImg, setMainImg] = useState(null);
    const [extraSubs, setExtraSubs] = useState([]);
    const [extraDets, setExtraDets] = useState([]);
    const [title, setTitle] = useState([]);
    const [subtitle, setSubtitle] = useState([]);
    const [selectedImg, setSelectedImg] = useState(null);
    const [curDesc, setCurDesc] = useState(null);
    const [changes, setChanges] = useState({
        mainImg: null,
        subs: [],
        title: null,
        subtitle: null,
        category: null,
        desc: null,
        dets: []
    });
    const [curCategory, setCurCategory] = useState(product ? product.tag : '')

    const categories = [
        'wheelchairs',
        'parts',
        'helpers'
    ]
    const [isMain, setIsMain] = useState(true);

    const handleClick = (event, main) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
        setIsMain(main);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const handleChange = (main) => {        
        if(main){
            setMainImg(allImages[selectedImg]); 
            setChanges(prevItems => ({...prevItems, mainImg: allImages[selectedImg]}));
        }else{
            setExtraSubs(prevItems => [...prevItems, allImages[selectedImg]]);           
        }        
        console.log(changes)
        handleClick();
    }

    const removeSub = (index) => {
        setExtraSubs(prevItems =>  prevItems.filter((_, i) => i !== index));
    }

    const addDet = () => {
        setExtraDets(prevItems => [...prevItems, 'element']);
    }

    const removeDet = (index) => {       
        setExtraDets(prevItems =>  prevItems.filter((_, i) => i !== index));
    }

    const categoryChange = (e) => {
        setCurCategory(e.target.value)
        const cat = e.target.value;
        setChanges(prevItems => ({...prevItems, category: cat}));
    }

    const handleSaveClick = async() => {
        const keys = document.getElementsByClassName('det-key');
        const values = document.getElementsByClassName('det-value');
        let details = []
        for(let i=0; i<keys.length; i++){       
            if(keys[i].querySelector('input').value !== '' && values[i].querySelector('input').value !== ''){
                details[i] = {'title': keys[i].querySelector('input').value, 'value': values[i].querySelector('input').value};
            }             
        }

        setChanges(prevItems => ({
            ...prevItems,
            mainImg: mainImg,
            subs: extraSubs,
            title: title,
            subtitle: subtitle,
            category: curCategory,
            dets: details,
            desc: curDesc,
        }));
        if(changes.mainImg && changes.subs && changes.title && changes.subtitle && changes.category && changes.dets && changes.desc){
            const response = await axios.post(`${process.env.REACT_APP_BACKEND}/update-item`, {product: changes, id: productId})

            if(response){
                window.location.href = '/';
            }
        }
    }

    const changeDesc = (e) => {
        const newDesc = e.target.value;
        setCurDesc(newDesc);
        setChanges(prevItems => ({...prevItems, desc: newDesc}));
    }

    const changeTitle = (e) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
        setChanges(prevItems => ({...prevItems, title: newTitle}));
    }

    const changeSubtitle = (e) => {
        const newSubtitle = e.target.value;
        setSubtitle(newSubtitle);
        setChanges(prevItems => ({...prevItems, subtitle: newSubtitle}));
    }

    useEffect(() => {
        if(product){
            console.log(product)
            setMainImg(product.thumbnail);
            setCurCategory(product.tag);
            setExtraSubs(product.sub);
            setExtraDets(product.chars);
            setCurDesc(product.desc);
            setTitle(product.title);
            setSubtitle(product.subtitle);
        }        
    }, [product])
    
    return(
        <Box sx={{ paddingLeft: 10, paddingRight: 10, paddingTop: 3 }}>
            {console.log(changes)}
                <Popper id={id} open={open} anchorEl={anchorEl} sx={{ zIndex: 1 }}>    
                <Paper sx={{ p: 3 }}>
                    <UploadTable item={selectedImg} setItem={setSelectedImg}/>
                    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                        <Button variant='contained' onClick={()=>handleChange(isMain)}>
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
                {product 
                ?
                    <Stack spacing={10}>                                               
                        <Stack spacing={5}>
                            <Stack direction='row' spacing={5}>
                                <Typography sx={{ width: 150 }}>
                                    Βασική εικόνα
                                </Typography>
                                <Stack direction='row' spacing={1}>
                                    <Paper sx={{ width: 'fit-content', height: 'fit-content' }}>
                                        <img id='mainImg' src={mainImg ? `${endpoint}${mainImg}` : `${endpoint}${product.thumbnail}`} alt='' style={{ width: '150px' }}/>
                                    </Paper>  
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 4 }}>                                        
                                        <CameraswitchIcon onClick={(e)=>handleClick(e, true)} className="edit-icon" fontSize="large"/>
                                    </Box>  
                                </Stack>                            
                            </Stack>
                            <Stack direction='row' spacing={5}>
                                <Typography sx={{ width: 150 }}>
                                    Πρόσθετες εικόνες
                                </Typography>   
                                <Stack direction='row' spacing={1} id='subs'>
                                    {extraSubs.map((subImg, index) => {
                                        return (
                                            <Paper key={subImg} id={`sub${index}`} sx={{ width: 'fit-content', height: 'fit-content' }}>
                                                <img onClick={()=>removeSub(index)} src={`${endpoint}${subImg}`} alt='' style={{ width: '75px', cursor: 'pointer' }}/>
                                            </Paper>                                        
                                        );                                    
                                    })
                                    }                                    
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 1 }}>                                        
                                        <AddIcon className="edit-icon" fontSize="large" onClick={(e)=>handleClick(e, false)}/>
                                    </Box>
                                </Stack>                                                                                                    
                            </Stack>
                            <Stack direction='row' spacing={5}>
                                <Typography sx={{ width: 150 }} id='title'>
                                    Τίτλος
                                </Typography>  
                                <TextField onBlur={changeTitle} defaultValue={product.title} sx={{ width: 500 }}/>
                            </Stack>
                            <Stack direction='row' spacing={5}>
                                <Typography sx={{ width: 150 }} id='subtitle'>
                                    Υπότιτλος
                                </Typography>  
                                <TextField onBlur={changeSubtitle} defaultValue={product.subtitle} sx={{ width: 500 }}/>
                            </Stack>
                            <Stack direction='row' spacing={5}>
                                <Typography sx={{ width: 150 }} id='category'>
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
                                <Typography sx={{ width: 150 }} id='description'>
                                    Περιγραφή
                                </Typography>                               
                                <TextField multiline onBlur={changeDesc} defaultValue={product.desc} sx={{ width: 500 }}/>                                                                                                        
                            </Stack>
                            <Stack direction='row' spacing={5}>
                                <Typography sx={{ width: 150 }} id='details'>
                                    Λεπτομέρειες
                                </Typography>      
                                <Stack spacing={1}>
                                    {extraDets.map((char, index) => {                           
                                        return(
                                            <Stack key={index} id={`det${index}`} direction='row' spacing={2}>
                                                <TextField className='det-key' defaultValue={char.title} sx={{ width: 250 }}/> 
                                                <TextField className='det-value' defaultValue={char.value} sx={{ width: 250 }}/>  
                                                <Box className='edit-icon'  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 1 }}>                                            
                                                    <DeleteIcon fontSize="medium" onClick={()=>removeDet(index)}/>   
                                                </Box>                                  
                                            </Stack>
                                        ); 
                                    })}                                           
                                        <Box className='edit-icon' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 1 }}>                                                                             
                                            <AddIcon fontSize="large" onClick={addDet}/>                                                               
                                        </Box>                                                     
                                </Stack>                                                                                                                                                                   
                            </Stack>
                        </Stack>                                           
                    </Stack>
                :
                    <Stack spacing={10}>                                               
                        <Stack spacing={5}>
                            <Stack direction='row' spacing={5}>
                                <Typography sx={{ width: 150 }}>
                                    Βασική εικόνα
                                </Typography>
                                <Stack direction='row' spacing={1}>
                                    {mainImg
                                    ?
                                    <Paper sx={{ width: 'fit-content', height: 'fit-content' }}>      
                                        <img src={`${endpoint}${mainImg}`} alt='' style={{ width: '150px' }}/>                        
                                    </Paper>                                          
                                    :
                                    <Paper sx={{ width: '100px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>      
                                        <PhotoSizeSelectActualIcon fontSize='large'/>                         
                                    </Paper>  
                                    }                                        
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 4 }}>                                        
                                        <CameraswitchIcon onClick={(e)=>handleClick(e, true)} className="edit-icon" fontSize="large"/>
                                    </Box>  
                                </Stack>                            
                            </Stack>
                            <Stack direction='row' spacing={5}>
                                <Typography sx={{ width: 150 }}>
                                    Πρόσθετες εικόνες
                                </Typography>   
                                <Stack direction='row' spacing={1}>     
                                    {extraSubs.map((img, index) => {
                                        return (
                                            <Paper key={index} id={`sub${index}`} sx={{ width: 'fit-content', height: 'fit-content' }}>
                                                <img onClick={()=>removeSub(index)} src={`${endpoint}${img}`} alt='' style={{ width: '75px', cursor: 'pointer' }}/>
                                            </Paper>                                        
                                        );        
                                    })}                               
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 1 }}>                                        
                                        <AddIcon className="edit-icon" fontSize="large" onClick={(e)=>handleClick(e, false)}/>
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
                                <TextField multiline onBlur={changeDesc} sx={{ width: 500 }}/>                                                                                                        
                            </Stack>
                            <Stack direction='row' spacing={5}>
                                <Typography sx={{ width: 150 }}>
                                    Λεπτομέρειες
                                </Typography>      
                                <Stack spacing={1}>                                                                    
                                    <Stack direction='row' spacing={2} id={`det-1`}>
                                        <TextField className='det-key' sx={{ width: 250 }}/>  
                                        <TextField className='det-value' sx={{ width: 250 }}/>  
                                        <Box className='edit-icon'  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 1 }}>                                                                             
                                            <DeleteIcon fontSize="medium" onClick={()=>removeDet(`det-1`)}/>                                                             
                                        </Box>                               
                                    </Stack>                            
                                    {extraDets.map((char, index) => {                           
                                        return(
                                            <Stack key={index} id={`det${index}`} direction='row' spacing={2}>
                                                <TextField className='det-key' defaultValue={char.title} sx={{ width: 250 }}/> 
                                                <TextField className='det-value' defaultValue={char.value} sx={{ width: 250 }}/>  
                                                <Box className='edit-icon'  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 1 }}>                                            
                                                    <DeleteIcon fontSize="medium" onClick={()=>removeDet(index)}/>   
                                                </Box>                                  
                                            </Stack>
                                        ); 
                                    })}                                           
                                        <Box className='edit-icon'  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 1 }}>                                                                             
                                            <AddIcon fontSize="large" onClick={addDet}/>                                                               
                                        </Box>           
                                </Stack>                                                                                                                                                                   
                            </Stack>
                        </Stack>                                           
                    </Stack>
                }
            </Paper>
        </Box>
    );
}

export default Product;