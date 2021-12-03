import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Aos from "aos";
import "aos/dist/aos.css";
import clsx from 'clsx';
import "./Edition.scss";


const useStyles = makeStyles({
 
});

export default function Edition(props) {
  const classes = useStyles();
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("xs"));

  const {
  } = props;
  return (
    <div  data-aos= { "zoom-in" } style={{display:"flex", flexDirection:"column", margin:"10em 0em 10em 0em "}}>
      <h1>There is no road map </h1>
    </div>
  );
}