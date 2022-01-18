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
    <div className={classes.updates} id="updates" data-aos= "fade-left" data-aos-delay="600">
      <div  class="title"> 
        Updates
      </div>
      <ul class="updateText">
        <li class="mb">
          Edition 1 Mint is complete!
        </li>
        <li>
          Please go to cnft.io and jpg.store for 2nd hand purchases!
        </li>
      </ul>  
    </div>     
  );
}