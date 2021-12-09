import React, {useState} from "react";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { createTheme , createMuiTheme, ThemeProvider } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';


import "./Application.scss";

import useApplicationData from "../hooks/useApplicationData"
import AppContext from "../hooks/appContext"

import RustInPeace from "./RustInPeace";


//Declare material ui styling here
const useStyles = makeStyles((theme) => ({
  '@global':{
    main:{
      backgroundColor:"#000",
      color:'#f5f5f5',
      backgroundImage: "url(images/bg.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition:"26% 50%"
      // backgroundPosition:"50% 10%"
    }
  },
  toolBar: {
    display: "flex",
    justifyContent:"space-between",
    marginTop:"0.2em"
  },
  toolBarPhone: {
    display: "flex",
    justifyContent:"space-between",
    alignItems:"center",
    marginTop:"0.2em"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    width:"80em",
    marginLeft:"auto",
    marginRight:"auto"
  },
  containerPhone: {
    display: "flex",
    flexDirection: "column",
    margin: "0.5em 2em 2em 2em"
  },
  rip: {
   width: "22em",
   marginTop:"-3.1em"
  },
  ripPhone: {
    width: "24em",
    marginTop:"-2.4em"
   },
  bgImagePhone: {
    backgroundImage: "url(images/bgcrop.jpg)",
  },
  menu: {
    display:"flex", 
    marginRight:"5.4em",
    marginTop:"1.4em", 
    color:"#E0D8E9"
  },
  none: {
    display: "none"
  },
  
}));

export default function Application(props) {
  const classes = useStyles();
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("xs"));
  const ipad = useMediaQuery(theme.breakpoints.down("md"));

  const [ phoneDrawerOpen, setPhoneDrawerOpen ] = useState(false);

  const {
    nftMint,
    editions
  } = useApplicationData();

  const handlePhoneDrawerMenu = () => {
    setPhoneDrawerOpen(!phoneDrawerOpen);
  }

  return (
    <Router>
      <AppContext.Provider >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <main className= "layout">
            <div className={!phone ? classes.container : classes.containerPhone}>
              <div className={!phone ? classes.toolBar : classes.toolBarPhone}>

                { !phoneDrawerOpen && <img className={ phone ? classes.ripPhone : classes.rip} src="images/banner.png"/> } 
                { ( phone && !phoneDrawerOpen ) && <DehazeIcon onClick={handlePhoneDrawerMenu} style={{fontSize: "3em", marginBottom:"0.7em", color:"#E0D8E9"}}/> }
                { phoneDrawerOpen && 
                  <>
                    <div></div>
                    <CloseIcon style={{fontSize: "3.4em", marginTop: "0.7em", color: "#E0D8E9"}} onClick={handlePhoneDrawerMenu}/>
                  </>
                   }
                <div className={!phone? classes.menu : classes.none}>
                  <Link smooth to="#editions" className="tab">NFT Series</Link>
                  <Link smooth to="#roadmap" className="tab">Road Map</Link>
                  <Link smooth to="#about" className="tab">The Artist</Link>
                </div>
              </div> 
              <Switch>
                <Route exact path='/'>
                  <RustInPeace phoneDrawerOpen={phoneDrawerOpen} 
                    setPhoneDrawerOpen={setPhoneDrawerOpen}  
                    editions={editions} />
                </Route>
              </Switch>
            </div>        
          </main>
        </ThemeProvider>
      </AppContext.Provider>
    </Router>
  );
}
