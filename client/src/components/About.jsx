import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Aos from "aos";
import "aos/dist/aos.css";
import clsx from 'clsx';

import "./About.scss";


const useStyles = makeStyles({
  image: {
    height:"50em", 
    width:"44em", 
    margin:"2em 0em 6em 0em",
    borderRadius:"2px"
  }, 
  
  imagePhone: {
    height:"30em", 
    width:"30em", 
    margin:"2em 2em 6em 2em",
    borderRadius: "2px",
  },
});

export default function About(props) {
  const classes = useStyles();
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("xs"));

  const {
  } = props; 

  return (
    <div style={{display:"flex", color:"red", flexDirection:"column", marginTop:"10em", alignItems:"center"}} id="about">
      <div data-aos= "fade-up" data-aos-delay="90">
        <div className="this"> The Artist</div>
      </div>
      <img data-aos= "fade-up" data-aos-delay="800" className={ phone ? classes.imagePhone : classes.image } src="images/Artist.png"/>
    </div>
  );
}