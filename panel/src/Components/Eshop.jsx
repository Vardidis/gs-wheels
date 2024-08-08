import React from "react";
import { Box, Stack, Typography } from '@mui/material';
import ProductItem from "./ProductItem";
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from "react";
import { useEffect } from "react";
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));
  

const Eshop = () => {    
    const [isGrid, setIsGrid] = useState(false);
    const [allProducts, setAllProducts] = useState([]);
    const endpoint = 'http://192.168.1.13:4300/images/';
    const [view, setView] = useState('list');

    const handleChange = (event, nextView) => {
        setIsGrid(!isGrid);
        setView(nextView);
    };
     
    useEffect(()=>{
        fetch("http://192.168.1.13:4300/products")
        .then(((response) => response.json()))
        .then((data) => {
            setAllProducts(data);
        });
    }, []);

    return(
        <Box sx={{  paddingLeft: 10, paddingRight: 10, marginTop: 3 }}>
            <Stack spacing={5}>   
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography fontSize={24} fontWeight={600}>
                        Προϊόντα
                    </Typography>
                    <ToggleButtonGroup
                        orientation="horizontal"    
                        value={view}      
                        exclusive
                        onChange={handleChange}
                    >
                        <ToggleButton value="list" aria-label="list">
                            <ViewListIcon />
                        </ToggleButton>
                        <ToggleButton value="module" aria-label="module">
                            <ViewModuleIcon />
                        </ToggleButton>                       
                    </ToggleButtonGroup>
                </Box>                 
                <Stack direction='row' spacing={10}> 
                    {isGrid
                    ?
                    <Box className='product-grid'>
                        {allProducts.map(product => {
                            return <ProductItem image={`${endpoint}${product.thumbnail}`} title={product.name}/>
                        })}                                                
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box sx={{ padding: 1, bgcolor: '#f1f1f1', borderRadius: 2, boxShadow: '1px 2px 3px -2px black', height: 50, width: 50, cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <AddIcon fontSize="large" sx={{ color: 'rgb(127, 247, 197)' }}/>
                            </Box>                            
                        </Box>
                    </Box>
                    :
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>Βασική εικόνα</StyledTableCell>
                                <StyledTableCell>Όνομα προϊόντος</StyledTableCell>
                                <StyledTableCell>Περιγραφή</StyledTableCell>
                                <StyledTableCell>Λεπτομέρειες</StyledTableCell>
                                <StyledTableCell>Πρόσθετες εικόνες</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {allProducts.map((product) => (
                                <StyledTableRow key={product.id}>
                                <StyledTableCell component="th" scope="row">
                                    <img src={`${endpoint}${product.thumbnail}`} style={{ width: '75px', height: '55px', borderRadius: '5px', border: '1px solid rgb(242, 242, 242)' }}/>
                                </StyledTableCell>
                                <StyledTableCell>{product.title}</StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                                <StyledTableCell>
                                    {/* {product.chars.map(char => {
                                        return char + '\n'
                                    })} */}
                                    </StyledTableCell>
                                <StyledTableCell>
                                    {product.sub.map(subImg => {
                                        return <img src={`${endpoint}${subImg}`} alt='' style={{ width: '50px' }}/>
                                    })}
                                </StyledTableCell>
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    }
                </Stack>                       
            </Stack>


        </Box>
    );
}

export default Eshop;