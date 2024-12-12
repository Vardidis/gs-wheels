import React from "react";
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#30343f',
    color: 'white',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));


const ProductViewDetails = (props) => {
    return(
      <TableContainer component={Paper} sx={{ height: 'fit-content', maxWidth: 1100 }}>
        <Table aria-label="customized table">
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