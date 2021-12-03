import React from "react";
import { BrowserRouter as Router, Switch,Route, Link} from "react-router-dom";

import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
    margin: "2em"
  },
  rip: {
   width: "22em",
   marginTop:"-3.1em"
  },
  ripPhone: {
    width: "14em",
    marginTop:"-2.4em"
   },
  bgImagePhone: {
    backgroundImage: "url(images/bgcrop.jpg)",
  }
}));

export default function Application(props) {
  const classes = useStyles();
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("xs"));
  const ipad = useMediaQuery(theme.breakpoints.down("md"));

  const {
    nftMint,
    editions
  } = useApplicationData();

  return (
    <Router>
      <AppContext.Provider >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <main className= {!phone ? "layout": classes.image}>
            <div className={!phone ? classes.container : classes.containerPhone}>
              <div className={classes.toolBar}>
                <img className={phone ? classes.ripPhone : classes.rip} src="images/banner.png"/>
                <div style={{display:"flex", marginRight:"5.4em", marginTop:"1.4em", color:"#E0D8E9"}}>
                  <h2 className="tab" >NFT Series</h2>
                  <h2 className="tab">Road Map</h2>
                  <h2 className="tab">The Artist</h2>
                </div>
              </div> 
              <Switch>
                <Route exact path='/'>
                  <RustInPeace editions={editions} />
                </Route>
              </Switch>
            </div>        
          </main>
        </ThemeProvider>
      </AppContext.Provider>
    </Router>
  );
}
