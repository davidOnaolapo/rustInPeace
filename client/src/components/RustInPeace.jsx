import React, {useEffect} from "react"
import Aos from "aos";

import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Edition from "./Edition"
import About from "./About"
import RoadMap from "./RoadMap"

import "./RustInPeace.scss";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  natureRust: {
    display:"flex",
    flexDirection:"column", 
  },
  image: {
    height:"30em", 
    width:"30em", 
    marginTop:"10em"
  },
  lastImage: {
    height:"35em", 
    width:"35em", 
    marginTop:"10em",
    marginBottom:"20em"
  },
  introDiv: {
    display:"flex",
    alignItems:"center",
    minHeight:"40em",
    marginBottom:"24em"
  },
  introImage: {
    height:"30em", 
    width:"30em", 
    marginLeft:"1em"
  },
  introImagePhone: {
    height:"10em", 
    width:"10em", 
    marginLeft:"1em"
  },

}))

export default function RustInPeace({ editions }) {
  const classes = useStyles();
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("xs"));
  const ipad = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    Aos.init({duration: 3000})
  },[])      

  return (
    <div className={classes.natureRust}>
        <div className={classes.introDiv}>
          <div className="fadeIn">
            <h2 className="introText">When nature and Tech come together. Mint the NFTs</h2>
          </div>
          <div className="introImage__moving">
            <img className={!phone ? classes.introImage: classes.introImagePhone} src="images/bulb3.png"/>
          </div>
        </div>
        <div className="natureRust__editions">
          { editions.map((edition) => {
            return <Edition  name={edition.name} 
              image={edition.image} 
              isRoom={edition.isRoom}
            />
          })}
          <RoadMap/>
          <About/> 
        </div> 
    </div>   
  )
}