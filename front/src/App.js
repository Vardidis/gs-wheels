import './App.css';
import { useScreenSize } from './Hooks/useScreenSize.js';
import Sidemenu from './Components/Sidemenu';
import { useContext, useEffect } from 'react';
import { Context } from './Components/Context.jsx';
import { createTheme, Box } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GetStarted from './Pages/GetStarted.jsx';
import Products from './Pages/Products.jsx';
import About from './Pages/About.jsx';
import Services from './Pages/Services.jsx';
import Education from './Pages/Education.jsx';
import Product from './Pages/Product.jsx';
import FuncRepair from './Components/Services/FuncRepair.jsx';
import Footer from './Pages/Footer.jsx';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#202020",
        dull: "#DCDCDC",
      },
      highlight: {
        main: "#ff7300f8"
      },
      placeholder: {
        info: "#9BC9FF",
        success: "#97CC8E",
      },
      theme: {
        light: "#f8f8f8",
        dark: "#202020",
      }
    },
    typography: {
      fontFamily: '"Kanit", "Helvetica", "Arial", sans-serif',
      fontSize: 15,
    },
    breakpoints: {
      values: {
        xxs: 0,
        xs: 400,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1600,
      },
    },
  })
  const {setIsDesktop, isDesktop} = useContext(Context);
  const screenSize = useScreenSize();

  useEffect(()=>{
    setIsDesktop(screenSize.width >= 900);
  }, [screenSize])

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box display="flex" height="100vh">                      
          <Sidemenu desktop={isDesktop}/>
          <Box component="main" sx={{
            flexGrow: 1,
            marginLeft: {xl: '200px', lg: '200px', md: '200px', sm: '50px', xs: '50px', xxs: '50px'},
            height: '100vh',
            overflowY: 'auto',
            overflowX: 'hidden',               
          }}>           
            <Routes>
              <Route path="/" element={<GetStarted/>}/>
              <Route path="services" element={<Services/>}/>               
              <Route path='service' element={<Education/>}>
                <Route path=':service' element={<Education/>}/>
              </Route>
              <Route path='products' element={<Products/>}>
                <Route path=':category' element={<Products/>}/>
              </Route>
              <Route path='product' element={<Product/>}>
                <Route path=':productId' element={<Product/>}/>
              </Route>
              <Route path='/about-us' element={<About/>}/>    
              <Route path='customize-your-life' element={<FuncRepair/>}/>         
            </Routes>
            <Footer/>
          </Box>               
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
