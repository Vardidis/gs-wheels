import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import Product from './Components/Product';
import Editor from './Components/Pages/Editor';
import { useContext } from 'react';
import { Context } from './Components/Context';
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
        <Box component="main"> 
          <Routes>
            <Route path="/" element={<Editor/>}/>           
            <Route path="/edit" element={<Product/>}>
              <Route path='/edit/:productId' element={<Product/>}/>
            </Route>           
          </Routes>            
        </Box>
      </Stack>
    </BrowserRouter>
  );
}

export default App;
