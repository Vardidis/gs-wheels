import './App.css';
import Eshop from './Components/Eshop';
import SideMenu from './Components/SideMenu';
import Messages from './Components/Messages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import Product from './Components/Product';
import Uploads from './Components/Uploads';

function App() {
  return (
    <BrowserRouter>
      <Stack>                      
        <SideMenu/>
        <Box component="main" sx={{                           
          width: '100%',
          overflowY: 'auto',         
          bgcolor: '#f8f8f8',  
          marginTop: 8       
        }}>      
          <Routes>
            <Route path="/" element={<Eshop/>}/>
            <Route path="/messages" element={<Messages/>}/>
            <Route path="/edit" element={<Product/>}>
              <Route path='/edit/:productId' element={<Product/>}/>
            </Route>
            <Route path="/uploads" element={<Uploads/>}/>
          </Routes>            
        </Box>
      </Stack>
    </BrowserRouter>
  );
}

export default App;
