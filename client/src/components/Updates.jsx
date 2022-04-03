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
        Edition 3 Mint
      </div>
      {/* <ul class="updateText">
        <li class="mb">
          Edition 1 Mint is complete!
        </li>
        <li>
          Visit         
          <span>
            <a href="https://cnft.io/marketplace?project=Rust%20In%20Peace%20-%20Edition%201" target="_blank" style={{margin:"0em 0.5em 0em 0.5em", color:"#DDA0DD"}}>
             cnft.io
            </a>
             and 
            <a href="https://www.jpg.store/collection/rustinpeaceedition1" target="_blank" style={{margin:"0em 0.5em 0em 0.5em", color:"#DDA0DD"}}>
              jpg.store
            </a>
             for getting your own!
          </span>
        </li>      
      </ul>   */}
      Total Supply: 150
      <br/>
      Mint Address: addr1v8w2rp8kwtq5wdds7rhfkyr0us9l3lxx39ns5wvv07ruh7sq306gu
      <br/>
      Price Table: 1 = 80 ADA, 2 = 160 ADA, 3 = 240 ADA
      <br/>
      Any other amount will be refunded. Available while supplies last.
    </div>     
  );
}