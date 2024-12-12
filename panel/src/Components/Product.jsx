import React, { useContext, useEffect, useState } from "react";
import { Box, Paper, Typography, Stack, Grid, Button, TextField, MenuItem, Popper, InputLabel, FormControl, Select   } from '@mui/material';
import { Context } from "./Context";
import { useParams } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import CameraswitchIcon from '@mui/icons-material/Cameraswitch';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import UploadTable from "./UploadTable";
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import axios from 'axios';

const PopupBox = (props) => {
    return(
        <Box
            sx={{
                height: '100%',
                width: '100%',                 
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    transform: 'translate(-50%, -50%)',
                    left: '50%',
                    top: '50%',
                    bgcolor: 'white',
                    borderRadius: 2,
                    boxShadow: 24,
                    padding: 5,
                    zIndex: 2
                }}
            >
                <Stack
                    spacing={3}
                    alignItems={'center'}
                >                    
                    <Typography>
                        Είστε βέβαιοι ότι θέλετε να αποθηκευτούν οι αλλαγές;
                    </Typography>
                    <Stack
                        direction={'row'}
                        spacing={2}
                    >
                        <Button variant='contained' onClick={()=>props.save()}>
                            Ναι
                        </Button>
                        <Button variant="outlined" color="error" onClick={()=>props.close(false)}>
                            Ακυρωση
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}

const Product = () => {
    const {productId} = useParams();
    const isNew = !productId;
    const {allProducts, allImages} = useContext(Context);
    let product = !isNew ? allProducts.filter((prod) => { return prod._id === String(productId) })[0] : null;
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
    const [popupShow, setPopupShow] = useState(false);

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
        allImages.map(img => {            
            if(img.originalName === selectedImg){
                if(main){
                    setMainImg(img.url); 
                    setChanges(prevItems => ({...prevItems, mainImg: img.url}));
                }else{
                    setExtraSubs(prevItems => [...prevItems, img.url]);     
                }      
            }    
        })                               
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
        setPopupShow(true);        
    }

    const commitSave = async() => {
        if(changes.mainImg && changes.subs && changes.title && changes.subtitle && changes.category && changes.dets && changes.desc){           
            let response;
            if(isNew){
                response = await axios.post(`${process.env.REACT_APP_BACKEND}/api/update-item`, {product: changes})
            }else{
                response = await axios.post(`${process.env.REACT_APP_BACKEND}/api/update-item`, {product: changes, id: productId})
            }             

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
        <Box
            sx={{                             
                margin: '64px 16px',
                display: 'flex',
                justifyContent: 'center'
            }}
        >     
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
            <Stack
                spacing={3}
                alignItems={'center'}
                sx={{                  
                    width: '100%',
                    maxWidth: 1200
                }}
            >
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}    
                    sx={{
                        width: '100%'
                    }}                        
                >
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Typography className='edit-icon' fontSize={20} sx={{ color: 'black' }}>
                            Πίσω
                        </Typography>
                    </Link>
                    <Button variant='contained' onClick={handleSaveClick}>
                        Αποθηκευση
                    </Button>
                </Stack>       
                {popupShow && (
                    <PopupBox save={commitSave} close={setPopupShow}/>
                )}       
                <Paper sx={{ padding: 4, width: 'fit-content' }}>
                    {product 
                    ?                                                             
                        <Stack spacing={3}>
                            <Grid container    
                                columnGap={5}
                                rowGap={2}
                            >
                                <Grid item
                                    lg={3} md={3} sm={12} xs={12} xxs={12}
                                >
                                    <Typography
                                        fontSize={18}
                                    >
                                        Βασική εικόνα
                                    </Typography>
                                </Grid>
                                <Grid item lg={8} md={8} sm={12} xs={12} xxs={12}>
                                    <Stack direction='row' spacing={1}>
                                        <Paper sx={{ width: 'fit-content', height: 'fit-content' }}>
                                            <img id='mainImg' src={mainImg ? mainImg : product.thumbnail} alt='' style={{ width: '150px' }}/>
                                        </Paper>  
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 4 }}>                                        
                                            <CameraswitchIcon onClick={(e)=>handleClick(e, true)} className="edit-icon" fontSize="large"/>
                                        </Box>  
                                    </Stack>
                                </Grid>
                            </Grid>
                            <Grid container    
                                columnGap={5}
                                rowGap={2}
                            >
                                <Grid item lg={3} md={3} sm={12} xs={12} xxs={12}>
                                    <Typography
                                        fontSize={18}
                                    >
                                        Πρόσθετες εικόνες
                                    </Typography>  
                                </Grid> 
                                <Grid item lg={8} md={8} sm={12} xs={12} xxs={12}>
                                    <Stack direction='row' spacing={1} id='subs'>
                                        {extraSubs.map((subImg, index) => {
                                            return (
                                                <Paper key={subImg} id={`sub${index}`} sx={{ width: 'fit-content', height: 'fit-content' }}>
                                                    <img onClick={()=>removeSub(index)} src={subImg} alt='' style={{ width: '75px', cursor: 'pointer' }}/>
                                                </Paper>                                        
                                            );                                    
                                        })
                                        }                                    
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 1 }}>                                        
                                            <AddIcon className="edit-icon" fontSize="large" onClick={(e)=>handleClick(e, false)}/>
                                        </Box>
                                    </Stack>              
                                </Grid>                                                                                      
                            </Grid>
                            <Grid container    
                                columnGap={5}
                                rowGap={2}
                            >
                                <Grid item lg={3} md={3} sm={12} xs={12} xxs={12}>
                                    <Typography
                                        id='title'
                                        fontSize={18}
                                    >
                                        Τίτλος
                                    </Typography>  
                                </Grid>
                                <Grid item
                                    lg={8}
                                    md={8}
                                    sm={12}
                                    xs={12}
                                    xxs={12}
                                >
                                    <TextField onBlur={changeTitle} defaultValue={product.title} sx={{width: '100%'}}/>
                                </Grid>
                            </Grid>
                            <Grid container    
                                columnGap={5}
                                rowGap={2}
                            >        
                                <Grid item lg={3} md={3} sm={12} xs={12} xxs={12}>
                                    <Typography
                                        id='subtitle'
                                        fontSize={18}
                                    >
                                        Υπότιτλος
                                    </Typography>  
                                </Grid>
                                <Grid item
                                    lg={8}
                                    md={8}
                                    sm={12}
                                    xs={12}
                                    xxs={12}
                                >
                                    <TextField onBlur={changeSubtitle} defaultValue={product.subtitle} sx={{width: '100%'}}/>
                                </Grid>
                            </Grid>
                            <Grid container    
                                columnGap={5}
                                rowGap={2}
                            >   
                                <Grid item lg={3} md={3} sm={12} xs={12} xxs={12}>
                                    <Typography
                                        id='category'
                                        fontSize={18}
                                    >
                                        Κατηγορία
                                    </Typography>  
                                </Grid>
                                <Grid item
                                    lg={8}
                                    md={8}
                                    sm={12}
                                    xs={12}
                                    xxs={12}
                                >
                                    <FormControl sx={{ width: '100%' }}>
                                        <InputLabel id="demo-simple-select-label">Κατηγορία</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={curCategory}
                                            label="Category"
                                            onChange={categoryChange}
                                        >
                                            {categories.map((cat, index) => {
                                                return <MenuItem value={cat} key={index}>{cat}</MenuItem>
                                            })}                                                                        
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid container    
                                columnGap={5}
                                rowGap={2}
                            >
                                <Grid item
                                    lg={3} md={3} sm={12} xs={12} xxs={12}
                                >
                                    <Typography
                                        id='description'
                                        fontSize={18}
                                    >
                                        Περιγραφή
                                    </Typography>
                                </Grid>
                                <Grid item
                                    lg={8}
                                    md={8}
                                    sm={12}
                                    xs={12}
                                    xxs={12}
                                >
                                    <TextField multiline onBlur={changeDesc} defaultValue={product.desc} sx={{ width: '100%' }}/>                                                                                                        
                                </Grid>
                            </Grid>
                            <Grid container    
                                columnGap={5}
                                rowGap={2}
                            >
                                <Grid item
                                    lg={3} md={3} sm={12} xs={12} xxs={12}
                                >
                                    <Typography sx={{ width: 150 }} id='details'>
                                        Λεπτομέρειες
                                    </Typography>      
                                </Grid>
                                <Grid item
                                    lg={8}
                                    md={8}
                                    sm={12}
                                    xs={12}
                                    xxs={12}
                                >
                                    <Stack spacing={1}>
                                        {extraDets.map((char, index) => {                           
                                            return(
                                                <Stack key={index} id={`det${index}`} direction='row' spacing={2}>
                                                    <TextField className='det-key' defaultValue={char.title}/> 
                                                    <TextField className='det-value' defaultValue={char.value}/>  
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
                                </Grid>                                                                                                                                            
                            </Grid>
                        </Stack>                                                             
                    :                                                                 
                        <Stack spacing={3}>
                            <Grid container    
                                columnGap={5}
                                rowGap={2}
                            >
                                <Grid item
                                    lg={3} md={3} sm={12} xs={12} xxs={12}
                                >
                                    <Typography
                                        fontSize={18}
                                    >
                                        Βασική εικόνα
                                    </Typography>
                                </Grid>
                                <Grid item lg={8} md={8} sm={12} xs={12} xxs={12}>
                                    <Stack direction='row' spacing={1}>
                                        {mainImg
                                        ?
                                        <Paper sx={{ width: 'fit-content', height: 'fit-content' }}>      
                                            <img src={mainImg} alt='' style={{ width: '150px' }}/>                        
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
                                </Grid>                        
                            </Grid>
                            <Grid container    
                                columnGap={5}
                                rowGap={2}
                            >
                                <Grid item lg={3} md={3} sm={12} xs={12} xxs={12}>
                                    <Typography
                                        fontSize={18}
                                    >
                                        Πρόσθετες εικόνες
                                    </Typography>  
                                </Grid> 
                                <Grid item lg={8} md={8} sm={12} xs={12} xxs={12}>
                                    <Stack direction='row' spacing={1}>     
                                        {extraSubs.map((img, index) => {
                                            return (
                                                <Paper key={index} id={`sub${index}`} sx={{ width: 'fit-content', height: 'fit-content' }}>
                                                    <img onClick={()=>removeSub(index)} src={img} alt='' style={{ width: '75px', cursor: 'pointer' }}/>
                                                </Paper>                                        
                                            );        
                                        })}                               
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 1 }}>                                        
                                            <AddIcon className="edit-icon" fontSize="large" onClick={(e)=>handleClick(e, false)}/>
                                        </Box>
                                    </Stack>                             
                                </Grid>                                                                       
                            </Grid>
                            <Grid container    
                                columnGap={5}
                                rowGap={2}
                            >
                                <Grid item lg={3} md={3} sm={12} xs={12} xxs={12}>
                                    <Typography
                                        id='title'
                                        fontSize={18}
                                    >
                                        Τίτλος
                                    </Typography>  
                                </Grid>
                                <Grid item
                                    lg={8}
                                    md={8}
                                    sm={12}
                                    xs={12}
                                    xxs={12}
                                >
                                    <TextField onBlur={changeTitle} sx={{ width: '100%' }}/>
                                </Grid>
                            </Grid>
                            <Grid container    
                                columnGap={5}
                                rowGap={2}
                            >        
                                <Grid item lg={3} md={3} sm={12} xs={12} xxs={12}>
                                    <Typography
                                        id='subtitle'
                                        fontSize={18}
                                    >
                                        Υπότιτλος
                                    </Typography>  
                                </Grid>
                                <Grid item
                                    lg={8}
                                    md={8}
                                    sm={12}
                                    xs={12}
                                    xxs={12}
                                >
                                    <TextField onBlur={changeSubtitle} sx={{width: '100%'}}/>
                                </Grid>
                            </Grid>
                            <Grid container    
                                columnGap={5}
                                rowGap={2}
                            >   
                                <Grid item lg={3} md={3} sm={12} xs={12} xxs={12}>
                                    <Typography
                                        id='category'
                                        fontSize={18}
                                    >
                                        Κατηγορία
                                    </Typography>  
                                </Grid>
                                <Grid item
                                    lg={8}
                                    md={8}
                                    sm={12}
                                    xs={12}
                                    xxs={12}
                                >
                                    <FormControl sx={{ width: '100%' }}>
                                        <InputLabel id="demo-simple-select-label">Κατηγορία</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={curCategory}
                                            label="Category"
                                            onChange={categoryChange}
                                        >
                                            {categories.map((cat, index) => {
                                                return <MenuItem key={index} value={cat}>{cat}</MenuItem>
                                            })}                                                                        
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid container    
                                columnGap={5}
                                rowGap={2}
                            >
                                <Grid item
                                    lg={3} md={3} sm={12} xs={12} xxs={12}
                                >
                                    <Typography
                                        id='description'
                                        fontSize={18}
                                    >
                                        Περιγραφή
                                    </Typography>
                                </Grid>    
                                <Grid item
                                    lg={8}
                                    md={8}
                                    sm={12}
                                    xs={12}
                                    xxs={12}
                                >               
                                    <TextField multiline onBlur={changeDesc} sx={{ width: '100%' }}/>                                                                                                        
                                </Grid>
                            </Grid>
                            <Grid container    
                                columnGap={5}
                                rowGap={2}
                            >
                                <Grid item
                                    lg={3} md={3} sm={12} xs={12} xxs={12}
                                >
                                    <Typography
                                        id='details'
                                        fontSize={18}
                                    >
                                        Λεπτομέρειες
                                    </Typography>      
                                </Grid>
                                <Grid item
                                    lg={8}
                                    md={8}
                                    sm={12}
                                    xs={12}
                                    xxs={12}
                                >
                                    <Stack spacing={1}>                                                                    
                                        <Stack direction='row' spacing={2} id={`det-1`}>
                                            <TextField className='det-key'/>  
                                            <TextField className='det-value'/>  
                                            <Box className='edit-icon'  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 1 }}>                                                                             
                                                <DeleteIcon fontSize="medium" onClick={()=>removeDet(`det-1`)}/>                                                             
                                            </Box>                               
                                        </Stack>                            
                                        {extraDets.map((char, index) => {                           
                                            return(
                                                <Stack key={index} id={`det${index}`} direction='row' spacing={2}>
                                                    <TextField className='det-key' defaultValue={char.title}/> 
                                                    <TextField className='det-value' defaultValue={char.value}/>  
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
                                </Grid>                                                                                                                               
                            </Grid>
                        </Stack>                                                                  
                    }
                </Paper>
            </Stack>
        </Box>
    );
}

export default Product;