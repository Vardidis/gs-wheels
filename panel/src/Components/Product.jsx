import React, { useContext, useEffect, useState } from "react";
import { Box, Paper, Typography, Stack, Grid, Button, TextField, MenuItem, Popper, InputLabel, FormControl, Select   } from '@mui/material';
import { Context } from "./Context";
import { useNavigate, useParams } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import CameraswitchIcon from '@mui/icons-material/Cameraswitch';
import DeleteIcon from '@mui/icons-material/Delete';
import UploadTable from "./UploadTable";
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import axios from 'axios';

const categories = [
    'Αμαξίδια',
    'Ανταλλακτικά',
    'Βοηθήματα'
];

const subCategories = [
    'Ελαφριού τύπου',
    'Ελαστικά',
    'Φρένα',
    'Ζάντες',
    'Ροδάκια'
];

const categoriesMatch = {
    wheelchairs: 'Αμαξίδια',
    parts: 'Ανταλλακτικά',
    helpers: 'Βοηθήματα'
}

const subCategoriesMatch = {
    lightweight: 'Ελαφριού τύπου',
    rubber: 'Ελαστικά',
    test: 'Σφάλμα',
    brakes: 'Φρένα',
    wheels: 'Ζάντες',
    wheelies: 'Ροδάκια'
}

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
                        <Box 
                            className={'shady'}
                            onClick={()=>props.save()}
                            sx={{
                                bgcolor: '#232323',
                                color: 'white',
                                padding: '6px 24px',
                                borderRadius: 1
                            }}
                        >
                            <Typography
                                fontWeight={'bold'}
                            >
                                Ναι
                            </Typography>                            
                        </Box>
                        <Box
                            className={'hoverable'}
                            onClick={()=>props.close(false)}
                            sx={{
                                color: '#232323',
                                padding: '6px 24px',
                                borderRadius: 1
                            }}
                        >
                            <Typography>
                                Ακυρωση
                            </Typography>                            
                        </Box>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}

const Product = () => {
    const {productId} = useParams();
    const isNew = !productId;
    
    const {allProducts, allImages, fetchProducts} = useContext(Context);

    let product = !isNew ? allProducts.filter((prod) => { return prod._id === String(productId) })[0] : null;
    const [anchorEl, setAnchorEl] = useState(null);
    const [mainImg, setMainImg] = useState(null);
    const [extraSubs, setExtraSubs] = useState(product?.sub || []);
    const [extraDets, setExtraDets] = useState(product?.chars || []);
    const [title, setTitle] = useState([]);
    const [subtitle, setSubtitle] = useState([]);
    const [selectedImg, setSelectedImg] = useState(null);
    const [curDesc, setCurDesc] = useState(product?.desc || null);    
    const [curCategory, setCurCategory] = useState(product?.tag || '')
    const [curSubCategory, setCurSubCategory] = useState(subCategoriesMatch[product?.secTag] || '')
    const [popupShow, setPopupShow] = useState(false);
    const [changes, setChanges] = useState({
        mainImg: null,
        subs: [],
        title: null,
        subtitle: null,
        category: null,
        desc: null,
        dets: []
    });
    
    const navigate = useNavigate();
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
            subCategory: curSubCategory,
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
                fetchProducts();
                navigate('/products');
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

    const subCategoryChange = (e) => {
        setCurSubCategory(e.target.value)
        const sub = e.target.value;
        setChanges(prevItems => ({...prevItems, subCategory: sub}));
    }

    useEffect(() => {        
        if(product){   
            setMainImg(product.thumbnail);
            setCurCategory(product.tag);
            setCurSubCategory(product.secTag)
            setExtraSubs(product.sub);
            setExtraDets(product.chars);
            setCurDesc(product.desc);
            setTitle(product.title);
            setSubtitle(product.subtitle);            
        }        
    }, [product])
    
    return(
        <Stack
            spacing={3}           
        >             
            <Popper
                id={id}
                open={open} 
                anchorEl={anchorEl}
                sx={{
                    zIndex: 1,
                    bgcolor: 'white',
                    maxWidth: 500,
                    maxHeight: 400,                   
                    overflow: 'hidden',
                    padding: 2,
                    borderRadius: 3
                }}
            >        
                <Stack
                    spacing={2}
                >
                    <Stack
                        alignItems={'end'}
                        justifyContent={'center'}
                    >
                        <Typography                            
                            className={'shady'}
                            onClick={()=>handleChange(isMain)}                            
                            fontWeight={'bold'}
                            sx={{                                                              
                                padding: '6px 24px',
                                bgcolor: '#232323',
                                color: 'white',
                                borderRadius: 2
                    }}
                        >
                            Επιλογη
                        </Typography>                     
                    </Stack>
                    <UploadTable item={selectedImg} setItem={setSelectedImg}/>
                </Stack>                                          
            </Popper>
            <Stack
                spacing={3}                
            >
                <Stack
                    direction={'row'}
                    justifyContent={'end'}
                    alignItems={'center'}  
                    spacing={1}  
                    sx={{
                        width: '100%'
                    }}                        
                >          
                    <Stack
                        className={'hoverable'}
                        onClick={()=>navigate('/products')}
                        sx={{
                            padding: '8px 16px',     
                            borderRadius: 2,                                                                           
                            color: '#232323'
                        }}
                    >
                        <Typography
                            fontSize={15}
                            fontWeight={'bold'}
                        >
                            Ακύρωση
                        </Typography>
                    </Stack>                                              
                    <Stack
                        className={'shady'}
                        onClick={handleSaveClick}
                        sx={{
                            padding: '8px 16px',
                            borderRadius: 2,
                            bgcolor: 'black',
                            color: 'white'
                        }}
                    >
                        <Typography
                            fontSize={15}
                            fontWeight={'bold'}
                        >
                            Αποθήκευση
                        </Typography>
                    </Stack>                  
                </Stack>       
                {popupShow && (
                    <PopupBox save={commitSave} close={setPopupShow}/>
                )}       
                <Stack>                                            
                        <Stack
                            spacing={2}
                            sx={{
                                padding: 3
                            }}
                        >
                            <Grid container    
                                columnGap={5}
                                rowGap={2}
                            >
                                <Grid item
                                    size={{
                                        xxs: 12,
                                        md: 3
                                    }}
                                >
                                    <Typography
                                        fontSize={18}
                                    >
                                        Βασική εικόνα
                                    </Typography>
                                </Grid>
                                <Grid item
                                    size={{
                                        xxs: 12,
                                        md: 8
                                    }}
                                >
                                    <Stack direction='row' spacing={1}>
                                        {mainImg
                                        ?
                                        <Box
                                            sx={{
                                                width: 'fit-content',
                                                height: 'fit-content',
                                                bgcolor: 'white',
                                                borderRadius: 3,
                                                overflow: 'hidden'
                                            }}
                                        >      
                                            <img src={mainImg} alt='main-img' style={{ width: '152px' }}/>                        
                                        </Box>                                          
                                        :
                                        <Box
                                            sx={{
                                                width: '96px',
                                                height: '96px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                bgcolor: 'white',
                                                borderRadius: 3,
                                                overflow: 'hidden'
                                            }}
                                        >      
                                            <PhotoSizeSelectActualIcon fontSize='large'/>                         
                                        </Box>  
                                        }                                        
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                padding: 4,
                                                borderRadius: 3,
                                                overflow: 'hidden'
                                            }}
                                        >
                                            <CameraswitchIcon onClick={(e)=>handleClick(e, true)} className="edit-icon" fontSize="large"/>
                                        </Box>  
                                    </Stack>    
                                </Grid>                        
                            </Grid>
                            <Grid container    
                                columnGap={5}
                                rowGap={2}
                            >
                                <Grid item
                                    size={{
                                        xxs: 12,
                                        md: 3
                                    }}
                                >
                                    <Typography
                                        fontSize={18}
                                    >
                                        Πρόσθετες εικόνες
                                    </Typography>  
                                </Grid> 
                                <Grid item
                                    size={{
                                        xxs: 12,
                                        md: 8
                                    }}
                                >
                                    <Stack direction='row' spacing={1}>     
                                        {extraSubs.map((img, index) => {
                                            return (
                                                <Box
                                                    key={index}
                                                    id={`sub${index}`}
                                                    sx={{
                                                        width: 'fit-content',
                                                        height: 'fit-content',
                                                        overflow: 'hidden',
                                                        borderRadius: 3
                                                    }}
                                                >
                                                    <img onClick={()=>removeSub(index)} src={img} alt='' style={{ width: '75px', cursor: 'pointer' }}/>
                                                </Box>                                        
                                            );        
                                        })}                               
                                        <Box    
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                padding: 1
                                            }}
                                            >
                                            <AddIcon
                                                className="edit-icon"
                                                fontSize="large"
                                                onClick={(e)=>handleClick(e, false)}
                                            />
                                        </Box>
                                    </Stack>                             
                                </Grid>                                                                       
                            </Grid>                                                               
                                    <TextField
                                        value={title}
                                        label={'Τίτλος (Το όνομα του προϊόντος)'}
                                        onChange={(e)=>setTitle(e.target.value)}
                                        onBlur={changeTitle}
                                        sx={{
                                            width: '100%',
                                            bgcolor: 'white',
                                            opacity: 0.9
                                        }}
                                    />                                                                                            
                                    <TextField
                                        value={subtitle}
                                        label={'Υπότιτλος (Η σύντομη περιγραφή του προϊόντος)'}
                                        onChange={(e)=>setSubtitle(e.target.value)}
                                        onBlur={changeSubtitle}
                                        sx={{
                                            width: '100%',
                                            bgcolor: 'white',
                                            opacity: 0.9
                                        }}
                                    />                             
                                    <FormControl
                                        sx={{
                                            width: '100%',
                                            bgcolor: 'white',
                                            opacity: 0.9
                                        }}
                                    >
                                        <InputLabel id="demo-simple-select-label">Κατηγορία</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={categoriesMatch[curCategory] || curCategory}
                                            label="Category"
                                            onChange={categoryChange}
                                        >
                                            {categories.map((cat, index) => {
                                                return <MenuItem key={index} value={cat}>{cat}</MenuItem>
                                            })}                                                                        
                                        </Select>
                                    </FormControl>                                                        
                                    <FormControl
                                        sx={{
                                            width: '100%',
                                            bgcolor: 'white',
                                            opacity: 0.9
                                        }}
                                    >
                                        <InputLabel id="sub-cat">Υποκατηγορία</InputLabel>
                                        <Select
                                            labelId="sub-cat"
                                            id="sub"
                                            value={subCategoriesMatch[curSubCategory] || curSubCategory}
                                            label="Category"
                                            onChange={subCategoryChange}
                                        >
                                            {subCategories.map((cat, index) => {
                                                return <MenuItem value={cat} key={index}>{cat}</MenuItem>
                                            })}                                                                        
                                        </Select>
                                    </FormControl>                              
                                    <TextField
                                        multiline
                                        label={'Περιγραφή'}
                                        value={curDesc}
                                        onBlur={changeDesc}
                                        sx={{
                                            width: '100%',
                                            bgcolor: 'white',
                                            opacity: 0.9
                                        }}
                                    />                               
                                    <Stack spacing={1}>      
                                        {extraDets.length === 0 && (                                                              
                                            <Stack direction='row' spacing={2} id={`det-1`}>
                                                <TextField
                                                    className='det-key'
                                                    label={`Λεπτομέρεια 1: είδος`}
                                                    sx={{
                                                        width: '45%',
                                                        bgcolor: 'white',
                                                        opacity: 0.9
                                                    }}
                                                />
                                                <TextField
                                                    className='det-value'
                                                    label={`Λεπτομέρεια 1: τιμή`}
                                                    sx={{
                                                        width: '45%',
                                                        bgcolor: 'white',
                                                        opacity: 0.9
                                                    }}
                                                />
                                                <Box className='edit-icon'  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 1 }}>                                                                             
                                                    <DeleteIcon fontSize="medium" onClick={()=>removeDet(`det-1`)}/>                                                             
                                                </Box>                               
                                            </Stack>                            
                                        )}
                                        {extraDets.map((char, index) => {                           
                                            return(
                                                <Stack key={index} id={`det${index}`} direction='row' spacing={2}>
                                                    <TextField
                                                        className='det-key'
                                                        label={`Λεπτομέρεια ${index+1}: είδος`}
                                                        value={char.title}
                                                        sx={{
                                                            width: '45%',
                                                            bgcolor: 'white',
                                                            opacity: 0.9
                                                        }}
                                                    />
                                                    <TextField
                                                        className='det-value'
                                                        label={`Λεπτομέρεια ${index+1}: τιμή`}
                                                        value={char.value}
                                                        sx={{
                                                            width: '45%',
                                                            bgcolor: 'white',
                                                            opacity: 0.9
                                                        }}
                                                    />
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
        </Stack>
    );
}

export default Product;