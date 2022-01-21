import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Aos from "aos";
import "aos/dist/aos.css";
import clsx from 'clsx';
import "./Edition.scss";


import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  mediaNormal: {
    height:"44em", 
    width:"50em", 
    margin:"2em 0em 8em 0em",
    borderRadius: "6px",
  },
  mediaRoom: {
    height:"50em", 
    width:"60em", 
    margin: "2em 0em 5.5em 0em",
    borderRadius: "6px",
  },
  mediaPhone: {
    height:"43em", 
    width:"32em", 
    margin:"2em 1.1em 6em 2em",
    borderRadius: "2px",
  },
  mediaIsGasTank: {
    height:"55em", 
    margin:"2em 2em 8em 0em",
    borderRadius: "6px",
  },
  name: {
    display:"flex",
    margin: "1em 0em 0em 0em",
    justifyContent:"center",
    color:"#E0D8E9"
  },

});

export default function Edition(props) {
  const classes = useStyles();
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("xs"));

  const {
    name,
    image,
    isRoom,
    isGasTank
  } = props;
  console.log("G & P", isGasTank, phone)
  return (
    <div  data-aos= { isRoom ? "fade-down-right" : "fade-right" } style={{display:"flex", flexDirection:"column"}}>
      <div className={classes.name}>
        <div className={ clsx(
          "editionTitle",
          {
            ["editionTitlePhone"]: (isRoom && phone),
            ["editionPhoneRoom"]: (isRoom && !phone)
          }
        )}>
          {name}
        </div>
      </div>
      <CardMedia
        className={ clsx(
          classes.mediaNormal,
          {
            [classes.mediaRoom]: isRoom,
            [classes.mediaPhone]: phone,
            [classes.mediaIsGasTank]: isGasTank

          }
        )}
        image={image}
        alt="image"
        title="RustIP"
      />
    </div>
  );
}