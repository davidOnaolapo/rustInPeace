import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Aos from "aos";
import "aos/dist/aos.css";
import clsx from 'clsx';
import "./RoadMap.scss";


const useStyles = makeStyles({
  roadMapInit : {
    display:"flex", 
    flexDirection:"column", 
    margin:"18em 0em 16em 0em"
  },
  roadMap: {
    margin:"4em 0em 4em 0em"
  }
});

export default function Edition(props) {
  const classes = useStyles();
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("xs"));

  const [ roadMap, setRoadMap ] = useState(false);
  console.log(window.scrollY)
  useEffect(() => {
    window.addEventListener('scroll', pop);

    return () => window.removeEventListener('scroll', pop);
  },[]);

  const timeToRoll = () => {
    setTimeout(() => { 
        setRoadMap(true);
      }, 6000
    );
  }

  const pop = () => {
    if (window.scrollY > 2000) {
      timeToRoll()
    }     
  }

  const {
  } = props;
  return (
    <>
      <div class={classes.roadMapInit} id="roadmap">
        <div  class="title"> 
          Road Map
        </div>
        <div class={classes.roadMap}>
          { !roadMap &&
            <div class="loading">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          }
          { roadMap &&
            <div  data-aos= { "zoom-in" }>
              <h1>There is no road map</h1>
            </div>
          }     
        </div>  
      </div> 
    </>
    
  );
}