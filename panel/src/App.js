import './App.css';
import Eshop from './Components/Pages/Eshop';
import SideMenu from './Components/SideMenu';
import Messages from './Components/Pages/Messages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import Product from './Components/Product';
import Uploads from './Components/Pages/Uploads';
import Texts from './Components/Pages/Texts';
import Editor from './Components/Pages/Editor';
import { useContext } from 'react';
import { Context } from './Components/Context';
import LoadingComp from './Components/LoadingComp';
import AuthPopup from './Components/AuthPopup';

function App() {
  const {isAdmin} = useContext(Context);
  
  if(!isAdmin){
    return(
      // <LoadingComp/>
      <AuthPopup/>
    );
  }

  return (
    <BrowserRouter>
      <Stack>                      
        <SideMenu/>
        <Box component="main"> 
          <Routes>
            <Route path="/" element={<Eshop/>}/>
            <Route path="/messages" element={<Messages/>}/>
            <Route path="/edit" element={<Product/>}>
              <Route path='/edit/:productId' element={<Product/>}/>
            </Route>
            <Route path="/uploads" element={<Uploads/>}/>    
            <Route path="/success-stories" element={<Editor/>}/>
          </Routes>            
        </Box>
      </Stack>
    </BrowserRouter>
  );
}

export default App;
