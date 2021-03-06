import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Aos from "aos";
import "aos/dist/aos.css";
import "./RoadMap.scss";


const useStyles = makeStyles({
  roadMapInit : {
    display:"flex", 
    flexDirection:"column", 
    margin:"18em 0em 16em 0em"
  },
  roadMap: {
    margin:"2em 0em 2em 0em"
  }
});

export default function Edition(props) {
  const classes = useStyles();
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("xs"));

  const [ roadMap, setRoadMap ] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', weMove);

    return () => window.removeEventListener('scroll', weMove);
  },[]);

  const timeToRoll = () => {
    setTimeout(() => { 
        setRoadMap(true);
      }, 5000
    );
  }

  const weMove = () => {
    if (window.scrollY > 2600) {
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
              <h1 className="noRoadMap">There is no roadmap</h1>
            </div>
          }     
        </div>  
      </div> 
    </>
    
  );
}