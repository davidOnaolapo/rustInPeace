import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Aos from "aos";
import "aos/dist/aos.css";
import "./RoadMap.scss";
import "./Updates.scss";

const useStyles = makeStyles({
  updates : {
    display: "flex",
    flexDirection: "column",
    margin:"15em 0em 10em 0em",
  },
});

export default function Edition(props) {
  const classes = useStyles();
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("xs"));
  
  const {
  } = props;
  return (    
    <div className={classes.updates} id="updates" data-aos= "fade-right" data-aos-delay="600">
      <div  class="title"> 
        Edition 4 Mint
      </div>
      <a href="https://pay.nmkr.io/?p=9ae8097712e94cf0981fd1e3102d7bc2&c=1"><img src="https://studio.nmkr.io/images/buttons/paybutton_1_1.svg"/></a>
    </div>     
  );
}