import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Aos from "aos";
import "aos/dist/aos.css";
import "./News.scss";
import { borderRadius, fontSize } from "@mui/system";

const useStyles = makeStyles({
  updates : {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#2a2a2a",
    backgroundImage: "url(images/diagonaLines.svg)",
    maxWidth:"35em",
    alignSelf:"flex-end",
    marginRight:"6.4em",
    padding:"1em",
    borderRadius:"0.8em"
  },

  phoneUpdates : {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#2a2a2a",
    backgroundImage: "url(images/diagonaLines.svg)",
    maxWidth:"35em",
    alignSelf:"flex-end",
    margin: "0em 4em 2.6em 0em",
    padding:"1em",
    borderRadius:"0.8em",
    fontSize:"0.8em"
  },
});

export default function News(props) {
  const classes = useStyles();
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("xs"));

  const {
  } = props;
  return (    
    <div className={!phone ? classes.updates : classes.phoneUpdates} data-aos= {!phone && "fade-left"} data-aos-delay={!phone && "600"}>
      <div  class="newsTitle"> 
        Edition 2 Mint Date - Jan 31st
      </div>
    </div>     
  );
}