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
    margin:"2em 0em 6em 0em",
    borderRadius:"2px"
  }, 
  
  imagePhone: {
    height:"30em", 
    width:"20.69em", 
    margin:"2em 2em 6em 2em",
    borderRadius: "2px",
  },
  discordImage: {
    height:"14em", 
    width:"14em",
  },
  discordImagePhone: {
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
      <img data-aos= "fade-up" data-aos-delay="800" className={ phone ? classes.imagePhone : classes.image } src="images/Artist.png"/>
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
      <a href="https://discord.gg/fhTbq6CTRH" target="_blank"><img className= {phone ? classes.discordImagePhone: classes.discordImage} src='Images/discord.png' onMouseOver={hoverImg} onMouseOut={unhoverImg}></img></a>
      <a href="https://twitter.com/RustInPeaceNFT" target="_blank"><img className= {phone ? classes.discordImagePhone: classes.discordImage} src='Images/twitter_logo.png'></img></a>
      <div id="mint">
        Mint address:
        Coming soon!
        <br/><br/>
        Price List:
        <br/>
        1x NFT: 45 ADA
        <br/>
        2x NFT: 90 ADA
        <br/>
        3x NFT: 135 ADA
        <br/>
        Any other amounts sent will be refunded.<br/> If we sell out after you pay, you will also be refunded.
      </div>
    </div>
  );
}