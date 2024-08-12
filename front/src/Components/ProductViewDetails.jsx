import React from "react";
import { Box, Typography, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

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


const ProductViewDetails = (props) => {
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];
    return(
        <TableContainer component={Paper} sx={{ height: 'fit-content' }}>
      <Table sx={{ maxWidth: {xl: 960, lg: 500, md: 450, sm: 920, xs: 880, xxs: 850} }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Χαρακτηριστικά</StyledTableCell>
            <StyledTableCell align='right'>Λεπτομέρειες</StyledTableCell>            
          </TableRow>
        </TableHead>
        <TableBody>
          {props.chars.map((char, index) => {
            return(
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  <Typography fontSize={{xl: 16, lg: 14, md: 14, sm: 14, xs: 14, xxs: 12}}>
                    {char.title}
                  </Typography>                  
                </StyledTableCell>
                <StyledTableCell align='right'>
                  <Typography fontWeight={600} fontSize={{xl: 16, lg: 14, md: 14, sm: 12, xs: 12, xxs: 12}}>
                    {char.value}
                  </Typography>
                </StyledTableCell>            
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
    );
}

export default ProductViewDetails;