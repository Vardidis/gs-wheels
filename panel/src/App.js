import './App.css';
import Eshop from './Components/Eshop';
import SideMenu from './Components/SideMenu';
import Messages from './Components/Messages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Product from './Components/Product';
import Uploads from './Components/Uploads';

function App() {
  return (
    <BrowserRouter>
      <Box display="flex" height="100vh">                      
        <SideMenu/>
        <Box component="main" sx={{
          flexGrow: 1,
          marginLeft: {xl: '200px', lg: '200px', md: '200px', sm: '70px', xs: '50px', xxs: '50px'},
          height: '100vh',
          overflowY: 'auto',
          overflowX: 'hidden',
          bgcolor: '#f8f8f8'
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
      </Box>
    </BrowserRouter>
  );
}

export default App;
