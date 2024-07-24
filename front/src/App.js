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

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#202020",
        dull: "#DCDCDC",
      },
      highlight: {
        main: "orangered"
      },
      placeholder: {
        info: "#9BC9FF",
        success: "#97CC8E",
      },
      theme: {
        light: "rgb(255, 252, 253)",
        dark: "#202020",
      }
    },
    typography: {
      fontSize: 16,
    },
    breakpoints: {
      values: {
        xxs: 0,
        xs: 400,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  })
  const {setIsDesktop} = useContext(Context);
  const screenSize = useScreenSize();

  useEffect(()=>{
    setIsDesktop(screenSize.width >= 900);
  }, [screenSize])

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box display="flex" height="100vh">            
          <Box component="section" sx={{ 
            width: {lg: '200px', md: '200px', sm: '70px', xs: '70px'},
            height: '100%',
            borderRight: '1px solid grey',
            boxShadow: "2px 0px 2px -3px black",
            backgroundColor: "theme.light", 
            flexShrink: 0,
            position: 'fixed',                   
          }}>
            <Sidemenu/>
          </Box>
          <Box component="main" sx={{
            flexGrow: 1,
            marginLeft: {lg: '200px', md: '200px', sm: '70px', xs: '70px', xxs: '70px'},
            height: '100vh',
            overflowY: 'auto',
            overflowX: 'hidden'
          }}>
            <Routes>
              <Route path="/" element={<GetStarted/>}/>
              <Route path="services" element={<Services/>}/>               
              <Route path='service' element={<Education/>}>
                <Route path=':service' element={<Education/>}/>
              </Route>
              <Route path='products' element={<Products/>}>
                <Route path=':productsId' element={<Products/>}/>
              </Route>
              <Route path='/about-us' element={<About/>}/>              
            </Routes>
          </Box>     
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
