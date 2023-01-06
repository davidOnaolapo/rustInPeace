import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { styled } from '@mui/material/styles';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import "./RoadMap.scss";


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

function createData(name, policyid) {
  return { name, policyid};
}

const useStyles = makeStyles((theme) => ({
  phonePolicy: {
    marginTop:"14em",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    width: "110%",
    marginRight: "-10px",
  },
  policy: {
    marginTop:"14em",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
  },
  mt: {
    marginTop:"4em"
  }
}))

const rows = [
  createData('Edition 1', '14d023525df806366792b65705e6eaca3c565e9e1bded9416cf9888a'),
  createData('Edition 2', '6a31a06ead4b655e61b4dba7be84c4af87c6a1008aaf0690bf524caa'),
  createData('Edition 3', 'a3ad13355d78860086f5d8128031345fe15ae1e5e053a41aba2eb5a9'),
  createData('Edition 4', 'a1eaac857acfff5ebf449cabeae4bc15c0defb7bf41a9fc68badb7fc'),
];

export default function PolicyTable() {
  const classes = useStyles();
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <div data-aos= "fade-up" data-aos-delay="600" className={phone ? classes.phonePolicy : classes.policy}>
      <h1 className="title">Policy Table</h1>
      <TableContainer className={classes.mt} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Edition</StyledTableCell>
              <StyledTableCell>Policy ID</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell style={{padding: "10px 0px 10px 16px"}} component="th" scope="row">
                  {row.name}
                </TableCell>
                <StyledTableCell style={phone ? {wordWrap: 'break-word', maxWidth:'300px'} : null}>{row.policyid}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
