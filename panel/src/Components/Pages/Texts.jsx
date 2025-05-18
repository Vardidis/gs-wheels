import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Stack, Grid, TextField, Typography, Popper, Fade, Divider, Snackbar } from '@mui/material';
import { Context } from '../Context';
import { useNavigate } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faAddressCard, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
library.add(faHouse, faAddressCard, faGraduationCap);

const TitleBox = ({title, text, func, setFunc, index}) => {
  const handleChange = (e, tag) => {
    const val = e.target.value;
    let arr = [...func.items];
     
    if(tag === 'title'){
      arr[index].title = val;
    }else if(tag === 'text'){
      arr[index].text = val;
    }
    setFunc((...prev) => ({...prev.items, items: arr}));  
  };

  return(
    <Stack
      spacing={1}
      sx={{
        bgcolor: '#231F20',
        padding: 2,
        borderRadius: 3,  
      }}
    >
      <TextField
        onChange={(e)=>handleChange(e, 'title')}
        defaultValue={title}
        value={func.items[index].title}
        sx={{
          "& .MuiInputBase-root": {
            color: "white",
            bgcolor: '#231F20'            
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#231F20"
          }
        }}
      />   
      <TextField
        onChange={(e)=>handleChange(e, 'text')}
        defaultValue={text}
        value={func.items[index].text}
        multiline
        sx={{
          "& .MuiInputBase-root": {
            color: "white",
            bgcolor: '#231F20'
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#231F20"
          }   
        }}
      />   
    </Stack>     
  );
}

const PlaceBox = ({text, func, setFunc, tag}) => {
  let [value, setValue] = useState(text);

  const handleChange = (e) => {
    const val = e.target.value;    
    if(val !== ''){
      if(tag === 0){
        setFunc((prev) => ({...prev, placeText: val}));  
      }else if(tag === 1){
        setFunc((prev) => ({...prev, placeText2: val}));  
      }else if(tag === 2){
        setFunc((prev) => ({...prev, placeText3: val}));  
      }      
    }
    setValue(val);
  };

  useEffect(() => {   
    if(tag === 0){
      value = func.placeText;
    }else if(tag === 1){
      value = func.placeText2;
    }else if(tag === 2){
      value = func.placeText3;
    }    
  }, [func])

  return(
    <TextField
      onChange={handleChange}
      defaultValue={text}
      value={value}
      multiline
      fullWidth
      sx={{
        "& .MuiInputBase-root": {
          color: "white",
          bgcolor: '#231F20',
          borderRadius: 3,
          padding: 3
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "white"
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#231F20"
        }, 
        
        borderRadius: 3
      }}
    />
  );
}

const TextBox = ({text, func, index, setFunc}) => {
  const handleChange = (e) => {
    const val = e.target.value;
    let arr = [...func.items];
     
    arr[index].text = val;    
    setFunc((...prev) => ({...prev.items, items: arr}));  
  }  

  return(
    <Stack
      sx={{
        bgcolor: '#231F20',
        padding: 2,
        borderRadius: 3,           
      }}
    >                        
      <TextField
        onChange={handleChange}
        defaultValue={text}
        value={func.items[index].text}
        multiline
        sx={{
          "& .MuiInputBase-root": {
            color: "white",
            bgcolor: '#231F20'
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#231F20"
          }   
        }}
      />   
    </Stack>     
  );
}

const Texts = () => {
  const {allTexts, setAllTexts, submitTexts} = useContext(Context);
  const [stage, setStage] = useState(0);
  const [loading, setLoading] = useState(true);

  const [main, setMain] = useState(null);
  const [about, setAbout] = useState(null);
  const [about2, setAbout2] = useState(null);
  const [about3, setAbout3] = useState(null);
  const [about4, setAbout4] = useState(null);
  const [services, setServices] = useState(null);
  const [services2, setServices2] = useState(null);
  const [services3, setServices3] = useState(null);
  const [training, setTraining] = useState(null);
  const [training2, setTraining2] = useState(null);
  const [inter, setInter] = useState(null);
  const [coach, setCoach] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarText, setSnackbarText] = useState('');
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  useEffect(() => {   
    if(allTexts.length > 0){
      setMain({   
        items: allTexts[0].items
      });
      setAbout({
        placeText: allTexts[8].placeText,
        placeText2: allTexts[8].placeText2,
        placeText3: allTexts[8].placeText3,
        items: allTexts[8].items
      });
      setAbout2({
        placeText: allTexts[9].placeText,
        items: allTexts[9].items
      });
      setAbout3({
        placeText: allTexts[10].placeText
      });
      setAbout4({
        placeText: allTexts[11].placeText
      });
      setServices({
        placeText: allTexts[1].placeText,
        items: allTexts[1].items
      });
      setServices2({    
        items: allTexts[2].items
      });
      setServices3({
        placeText: allTexts[3].placeText,
        items: allTexts[3].items,
        items2: allTexts[3].items2
      });
      setTraining({    
        items: allTexts[4].items
      });
      setTraining2({    
        items: allTexts[5].items,
        items2: allTexts[5].items2,
        items3: allTexts[5].items3
      });
      setInter({    
        placeText: allTexts[6].placeText,
        items: allTexts[6].items,
        items2: allTexts[6].items2
      });
      setCoach({    
        placeText: allTexts[7].placeText,
        items: allTexts[7].items,
      });
      
      setLoading(false);
    }else{
      setLoading(true)
    }
  }, [allTexts])

  const handleSave = () => {    
    setAllTexts((...prev) => [
      {...prev[0], main},
      {...prev[8], about},
      {...prev[9], about2},
      {...prev[10], about3},
      {...prev[11], about4},  
      {...prev[1], services},
      {...prev[2], services2},
      {...prev[3], services3},
      {...prev[4], training},
      {...prev[5], training2},
      {...prev[6], inter},
      {...prev[7], coach}
    ]);
    submitTexts();    
    setSnackbarText('Οι αλλαγές αποθηκεύτηκαν!');
    setSnackbarOpen(true);
  }

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;
  
  if(loading || allTexts.length === 0){
    return(
      <>Loading</>
    );
  }

  return (
    <Box
      sx={{      
        display: 'flex',            
        width: '100%'
      }}
    >
      {console.log(allTexts[0])}
      <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          autoHideDuration={3000}
          open={snackbarOpen}
          onClose={()=>setSnackbarOpen(false)}
          message={snackbarText}        
      />
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={{ borderRadius: 2, p: 2, bgcolor: '#231F20', color: 'white' }}>
              <Stack spacing={1.5}>
                <Typography sx={{ cursor: 'pointer' }} onClick={()=>{setStage(2); setOpen(false)}}>
                  Λειτουργική Αποκατάσταση
                </Typography>
                <Typography sx={{ cursor: 'pointer' }} onClick={()=>{setStage(3); setOpen(false)}}>
                  Εκπαίδευση
                </Typography>
                <Typography sx={{ cursor: 'pointer' }} onClick={()=>{setStage(4); setOpen(false)}}>
                  Διαμόρφωση Χώρου
                </Typography>
                <Typography sx={{ cursor: 'pointer' }} onClick={()=>{setStage(5); setOpen(false)}}>
                  Συμβουλευτική
                </Typography>
              </Stack>
            </Box>
          </Fade>
        )}
      </Popper>
      <Stack
        spacing={5}        
        sx={{
          width: '100%',
          maxWidth: 1200
        }}
      >      
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Grid container
          rowGap={1}          
          alignItems={'center'}
        >      
          <Grid item>               
            <Stack
              onClick={()=>setStage(0)}
              direction={'row'}
              spacing={1}
              alignItems={'center'}
              sx={{
                padding: '6px 32px',
                borderRadius: 5,                
                cursor: 'pointer',                
                bgcolor: stage === 0 ? '#e5e8f3' : 'transparent',      
                color: '#231F20',   
              }}  
            >
              <FontAwesomeIcon
                id='mob-0'
                icon={faHouse}
                size={'sm'}
              />
              <Typography
                fontSize={17}
              >
                  Αρχική
              </Typography>     
            </Stack>                
          </Grid>
          <Divider
            orientation={'vertical'}
            sx={{          
              bgcolor: '#231F20',
              opacity: 0.5,
              maxHeight: 24
            }}
          />
          <Grid item>   
            <Stack
              onClick={()=>setStage(1)}            
              direction={'row'}
              spacing={1}
              alignItems={'center'}
              sx={{
                padding: '6px 32px',
                borderRadius: 5,                
                cursor: 'pointer',                
                bgcolor: stage === 1 ? '#e5e8f3' : 'transparent',      
                color: '#231F20',   
              }}  
            >
              <FontAwesomeIcon id='mob-1' icon={faAddressCard} size={'sm'}/>
              <Typography
                fontSize={17}                          
              >
                  Σχετικά με εμάς
              </Typography>     
            </Stack>  
          </Grid>
          <Divider
            orientation={'vertical'}
            sx={{          
              bgcolor: '#231F20',
              opacity: 0.5,
              maxHeight: 24
            }}
          />
          <Grid item>   
            <Stack
              onClick={handleClick}    
              direction={'row'}
              spacing={1}
              alignItems={'center'}
              sx={{
                padding: '6px 32px',
                borderRadius: 5,                
                cursor: 'pointer',                
                bgcolor: stage === 2 ? '#e5e8f3' : 'transparent',      
                color: '#231F20',   
              }}  
            >
              <FontAwesomeIcon id='mob-2' icon={faGraduationCap} size={'sm'}/>
              <Typography
                fontSize={17}                              
              >
                  Υπηρεσίες
              </Typography>     
            </Stack>  
          </Grid>          
        </Grid>
        <Button
          onClick={handleSave}
          sx={{
            padding: '8px 24px',
            borderRadius: 2,
            bgcolor: '#e5e8f3',
            color: '#231F20'
          }}
        >
          <Typography
            fontSize={13}
            fontWeight={'bold'}
          >
            Αποθηκευση
          </Typography>          
        </Button>
      </Stack>                      
        {stage === 0 && (         
            <Grid container
              columnGap={2}
              rowSpacing={2}                 
            > 
              {allTexts[0].items.map((text, index) => {               
                return(
                  <Grid item>
                    <TitleBox title={text.title} text={text.text} func={main} setFunc={setMain} index={index}/>
                  </Grid>
                );
              })}          
            </Grid>                  
        )}
        {stage === 1 && (
          <Stack spacing={10}>       
              <Stack spacing={2}>
                <Typography fontSize={22} fontWeight={'bold'}>
                  Για άτομα με αναπηρία
                </Typography>
                <PlaceBox text={allTexts[8].placeText} func={about} tag={0} setFunc={setAbout}/>
                <PlaceBox text={allTexts[8].placeText2} func={about} tag={1} setFunc={setAbout}/>            
                <Grid container
                  columnGap={2}
                  rowSpacing={2}               
                >
                  {allTexts[8].items.map((text, index) => {
                    return(
                      <Grid item
                        lg={3.85}                       
                      >
                        <TextBox title={text.title} text={text.text} func={about} index={index} setFunc={setAbout}/>
                      </Grid>
                    );
                  })}          
                </Grid>          
                <PlaceBox text={allTexts[8].placeText3} func={about} tag={2} setFunc={setAbout}/>    
              </Stack>                       
              <Stack spacing={2}>
                <Typography fontSize={22} fontWeight={'bold'}>
                  Για οικογένειες
                </Typography>       
                <PlaceBox text={allTexts[9].placeText} func={about2} tag={0} setFunc={setAbout2}/>    
                <Grid container columnGap={2} rowSpacing={2}>              
                  {allTexts[9].items.map((text, index) => {
                    return(
                      <Grid item
                        lg={3.85}                       
                      >
                        <TextBox text={text.text} setFunc={setAbout2} func={about2} index={index}/>
                      </Grid>
                    );
                  })}          
                </Grid>          
              </Stack>            
            <Box
              sx={{               
                borderRadius: 2
              }}
            >
              <Stack spacing={2}>
                <Typography fontSize={22} fontWeight={'bold'}>
                  Για αλληλεπίδραση με την κοινωνία
                </Typography>
                <PlaceBox text={allTexts[10].placeText} func={about3} tag={0} setFunc={setAbout3}/>               
              </Stack>              
            </Box>
            <Box
              sx={{               
                borderRadius: 2
              }}
            >
              <Stack spacing={2}>
                <Typography fontSize={22} fontWeight={'bold'}>
                  Ως εργαλείο ενδυνάμωσης
                </Typography>
                <PlaceBox text={allTexts[11].placeText} func={about4} tag={0} setFunc={setAbout4}/>               
              </Stack>
            </Box>
          </Stack>
        )}
        {stage === 2 && (
          <Stack spacing={10}>
            <Box
              sx={{               
                borderRadius: 2
              }}
            >
              <Stack spacing={2}>
                <Typography fontSize={22} fontWeight={'bold'}>
                  Βασικές Έννοιες
                </Typography>
                <PlaceBox text={allTexts[1].placeText} func={services} tag={0} setFunc={setServices}/>
                <Grid container columnGap={2} rowSpacing={2}>              
                  {allTexts[1].items.map((text, index) => {
                    return(
                      <Grid item
                        lg={3.85}                       
                      >
                        <TextBox text={text.text} func={services} index={index} setFunc={setServices}/>
                      </Grid>
                    );
                  })}          
                </Grid>          
              </Stack>
            </Box>
            <Box
              sx={{               
                borderRadius: 2
              }}
            >
              <Stack spacing={2}>
                <Typography fontSize={22} fontWeight={'bold'}>
                  Μοντέλα Αποκατάστασης
                </Typography>       
                <Grid container columnGap={2} rowSpacing={2}>              
                  {allTexts[2].items.map((text, index) => {
                    return(
                      <Grid item
                        lg={3.85}                       
                      >
                        <TitleBox title={text.title} text={text.text} func={services2} index={index} setFunc={setServices2}/>
                      </Grid>
                    );
                  })}          
                </Grid>          
              </Stack>
            </Box>
            <Box
              sx={{              
                borderRadius: 2
              }}
            >
              <Stack spacing={2}>
                <Typography fontSize={22} fontWeight={'bold'}>
                  Η GS Wheelchairs και ο ρόλος της
                </Typography>
                <PlaceBox text={allTexts[3].placeText} func={services3} tag={0} setFunc={setServices3}/>
                <Grid container columnGap={2} rowSpacing={2}>              
                  {allTexts[3].items.map((text, index) => {
                    return(
                      <Grid item
                        lg={3.85}                       
                      >
                        <TextBox text={text.text} func={services3} index={index} setFunc={setServices3}/>
                      </Grid>
                    );
                  })}          
                </Grid>  
                <Grid container columnGap={2} rowSpacing={2}>              
                  {allTexts[3].items2.map((text, index) => {
                    return(
                      <Grid item
                        lg={3.85}                       
                      >
                        <TextBox text={text.text} func={services3} index={index} setFunc={setServices3}/>
                      </Grid>
                    );
                  })}          
                </Grid>             
              </Stack>
            </Box>
          </Stack>
        )}
        {stage === 3 && (
          <Stack spacing={5}>
            <Box
              sx={{                
                borderRadius: 2
              }}
            >
              <Stack spacing={2}>
                <Typography fontSize={22} fontWeight={'bold'}>
                  Βασικές Αρχές
                </Typography>               
                <Grid container columnGap={2} rowSpacing={2}>              
                  {allTexts[4].items.map((text, index) => {
                    return(
                      <Grid item
                        lg={3.85}                       
                      >
                        <TitleBox title={text.title} text={text.text} func={training} index={index} setFunc={setTraining}/>
                      </Grid>
                    );
                  })}          
                </Grid>          
              </Stack>
            </Box>
            <Box
              sx={{                     
                borderRadius: 2
              }}
            >
              <Stack spacing={5}>
                <Typography fontSize={22} fontWeight={'bold'}>
                  Προσαρμογή Αμαξιδίου
                </Typography>       
                <Grid container columnGap={2} rowSpacing={2}>              
                  {allTexts[5].items.map((text, index) => {
                    return(
                      <Grid item
                        lg={3.85}                       
                      >
                        <TitleBox title={text.title} text={text.text} func={training2} index={index} setFunc={setTraining2}/>
                      </Grid>
                    );
                  })}          
                </Grid>          
                <Grid container columnGap={2} rowSpacing={2} justifyContent={'center'}>              
                  {allTexts[5].items2.map((text, index) => {
                    return(
                      <Grid item
                        lg={3.85}                       
                      >
                        <TitleBox title={text.title} text={text.text} func={training2} index={index} setFunc={setTraining2}/>
                      </Grid>
                    );
                  })}          
                </Grid>   
                <Grid container columnGap={2} rowSpacing={2} justifyContent={'center'}>              
                  {allTexts[5].items3.map((text, index) => {
                    return(
                      <Grid item
                        lg={3.85}                       
                      >
                        <TitleBox title={text.title} text={text.text} func={training2} index={index} setFunc={setTraining2}/>
                      </Grid>
                    );
                  })}          
                </Grid>                 
              </Stack>
            </Box>
          </Stack>
        )}
        {stage === 4 && (
          <Stack spacing={5}>
            <Box
              sx={{                    
                borderRadius: 2
              }}
            >
              <Stack spacing={5}>                     
                <PlaceBox text={allTexts[6].placeText} func={inter} tag={0} setFunc={setInter}/>
                <Grid container columnGap={2} rowSpacing={2}>              
                  {allTexts[6].items.map((text, index) => {
                    return(
                      <Grid item
                        lg={3.85}                       
                      >
                        <TitleBox title={text.title} text={text.text} func={inter} index={index} setFunc={setInter}/>
                      </Grid>
                    );
                  })}          
                </Grid>
                <Grid container columnGap={2} rowSpacing={2}>              
                  {allTexts[6].items2.map((text, index) => {
                    return(
                      <Grid item
                        lg={3.85}                       
                      >
                        <TitleBox title={text.title} text={text.text} func={inter} index={index} setFunc={setInter}/>
                      </Grid>
                    );
                  })}          
                </Grid>
              </Stack>
            </Box>
          </Stack>
        )}
        {stage === 5 && (
          <Stack spacing={5}>
            <Box
              sx={{                       
                borderRadius: 2
              }}
            >
              <Stack spacing={5}>                     
                <PlaceBox text={allTexts[7].placeText} func={coach} tag={0} setFunc={setCoach}/>
                <Grid container columnGap={2} rowSpacing={2}>              
                  {allTexts[7].items.map((text, index) => {
                    return(
                      <Grid item
                        lg={3.85}                       
                      >
                        <TextBox text={text.text} func={coach} index={index} setFunc={setCoach}/>
                      </Grid>
                    );
                  })}          
                </Grid>          
              </Stack>
            </Box>
          </Stack>
        )}        
      </Stack>
    </Box>
  );
};

export default Texts;