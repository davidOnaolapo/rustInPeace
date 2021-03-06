import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Aos from "aos";
import "aos/dist/aos.css";

import "./About.scss";


const useStyles = makeStyles({
  image: {
    height:"50em", 
    width:"34em", 
    margin:"4em 0em 6em 0em",
    borderRadius:"2px"
  }, 
  
  imagePhone: {
    height:"30em", 
    width:"20.69em", 
    margin:"2em 2em 6em 2em",
    borderRadius: "2px",
  },
  discordImage: {
    height:"10em", 
    width:"9em",
    margin:"2em 1.4em 0em 0em"
  },
  discordImagePhone: {
    height:"5em", 
    width:"4em",
    margin:"1em 0.5em 0em 0em"
  },
  twitterImage: {
    height:"14em", 
    width:"14em",
  },
  twitterImagePhone: {
    height:"7em", 
    width:"7em",
  }
});

function hoverImg(e) {
  e.target.src = "Images/discord_hover.png";
}

function unhoverImg(e) {
  e.target.src = "Images/discord.png";
}

export default function About(props) {
  const classes = useStyles();
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("xs"));

  const {
  } = props; 

  return (
    <div style={{display:"flex", flexDirection:"column", marginTop:"8em", alignItems:"center"}} id="about">
      <div data-aos= "fade-up" data-aos-delay="90">
        <div className="this"> The Artist</div>
      </div>
      <div data-aos= "fade-up" data-aos-delay="800" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <img className={ phone ? classes.imagePhone : classes.image } src="images/Artist.png"/>
        <div className="bio"> 
          I'm Zanti.
          Brave new steps for me on the start of my journey into digital art.
          My background as an artist spans over a decade of painstaking, graphite pencil realism art, capturing nature and it's tranquil moments in all its detail.
          I've now decided it's pencils down, but not from art for good. I've taken a step into the world of digital art and have begun to create a small world of my own.
          Familiar works for me, capturing scenes from the natural world though with a slightly less innocent twist.
          <br/>
          <br/>
          Welcome to Rust In Peace. Join our discord and follow us on twitter!
        </div>
        <div style={{display:"flex"}}>
        <a href="https://discord.gg/Q82XyBtxbk" target="_blank"><img className= {phone ? classes.discordImagePhone: classes.discordImage} src='Images/discord.png' onMouseOver={hoverImg} onMouseOut={unhoverImg}></img></a>
        <a href="https://twitter.com/RustInPeaceNFT" target="_blank"><img className= {phone ? classes.twitterImagePhone: classes.twitterImage} src='Images/twitter_logo.png'></img></a>
      </div>
      </div>
    </div>
  );
}