import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useScreenSize } from './Hooks/useScreenSize.js';
import { Box, Grid, Stack } from '@mui/material';
import Product from './Components/Product';
import Editor from './Components/Pages/Editor';
import { useContext, useEffect } from 'react';
import { Context } from './Components/Context';
import AuthPopup from './Components/AuthPopup';
import Navigation from './Components/Navigation.jsx';
import Texts from './Components/Pages/Texts.jsx';
import Eshop from './Components/Pages/Eshop.jsx';
import Uploads from './Components/Pages/Uploads.jsx';
import Messages from './Components/Pages/Messages.jsx';
import SucStories from './Components/Pages/SucStories.jsx';

function App() {
  const {setIsDesktop, isDesktop, isAdmin} = useContext(Context);
  const screenSize = useScreenSize();
  
  useEffect(()=>{
    setIsDesktop(screenSize.width >= 900);
  }, [screenSize])

  if(!isAdmin){
    return(
      // <LoadingComp/>
      <AuthPopup/>
    );
  }

  return (
    <BrowserRouter>
      <Grid container
        columnSpacing={2}
        rowSpacing={5}
        sx={{
          padding: isDesktop ? '8px 16px' : '8px 8px'
        }}
      >  
        <Grid item
          size={{
              xxs: 12,
              md: 3
          }}
        >
          <Navigation/>
        </Grid>                            
        <Grid item
          size={{
            xxs: 12,
            md: 9
          }}
        > 
          <Routes>
            <Route path="/" element={<Editor/>}/>        
            <Route path="/success-stories" element={<SucStories/>}/>     
            <Route path="/texts" element={<Texts/>}/>     
            <Route path="/products" element={<Eshop/>}/>     
            <Route path="/media" element={<Uploads/>}/>        
            <Route path="/messages" element={<Messages/>}/>
            <Route path="/edit" element={<Product/>}>
              <Route path='/edit/:productId' element={<Product/>}/>
            </Route>           
          </Routes>            
        </Grid>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
