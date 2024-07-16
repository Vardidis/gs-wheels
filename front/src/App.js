import logo from './logo.svg';
import './App.css';
import { useScreenSize } from './Hooks/useScreenSize.js';
import Sidemenu from './Components/Sidemenu';
import { useContext, useEffect } from 'react';
import { Context } from './Components/Context.jsx';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GetStarted from './Pages/GetStarted.jsx';
import { Stack } from "@mui/material";
import Products from './Pages/Products.jsx';

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
        light: "white",
        dark: "#202020",
      }
    },
    typography: {
      fontSize: 16,
    }
  })
  const {setIsDesktop} = useContext(Context);
  const screenSize = useScreenSize();

  useEffect(()=>{
    setIsDesktop(screenSize.width > 900);
  }, [screenSize])

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Stack direction='row'>
          <Sidemenu/>
          <Routes>
            <Route path="/" element={<GetStarted/>}/>
            <Route path="/services"/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/about-us'/>
          </Routes>
        </Stack>
      </BrowserRouter>
      
    </ThemeProvider>
  );
}

export default App;
