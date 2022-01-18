import React, {useEffect} from "react"
import Aos from "aos";
import { HashLink as Link } from 'react-router-hash-link';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Edition from "./Edition"
import About from "./About"
import RoadMap from "./RoadMap"
import News from "./News"

import "./RustInPeace.scss";
import "aos/dist/aos.css";
import { TableHead } from "@material-ui/core";
import PolicyTable from "./PolicyTable";
import Updates from "./Updates";


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
  introDivPhone: {
    display:"flex",
    flexDirection: "column",
    minHeight:"40em",
    padding: "0em 0em 0em 2em",
    justifyContent: "center",
    alignItems:"center",
    marginBottom:"20em"
  },
  introImage: {
    height:"30em", 
    width:"30em", 
    marginLeft:"1em"
  },
  introImagePhone: {
    height:"14em", 
    width:"14em", 
    marginLeft:"6em",
  },
  none: {
    display: "none"
  },
  menu: {
    display:"flex",
    flexDirection:"column",
    color:"#E0D8E9"
  },
}))

export default function RustInPeace({ editions, phoneDrawerOpen, setPhoneDrawerOpen }) {
  const classes = useStyles();
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("xs"));
  const ipad = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    Aos.init({duration: 3000})
  },[])      

  return (
    <div className={classes.natureRust}>
                    <News/>

      <div className={!phone ? classes.introDiv : classes.introDivPhone}>
        { !phoneDrawerOpen && 
          <>
            <div className="fadeIn" style={{display:"flex"}}>
              <h2 className="introText">A clash of nature with tech. {!phone && <br/>} Post-apocalyptic remnants captured as NFTs. Explore the world of Rust In Peace on Cardano
              with 7 editions and a final collectible featuring all these editions</h2>
            </div>
            <div className={!phone ? "introImage__moving": classes.none}>
              <img className={!phone ? classes.introImage: classes.none} src="images/bulb3.png"/>
            </div>
            { (phone && ipad) &&
              <div className={"introImage__moving"}>
                <img className={classes.introImagePhone} src="images/bulb3.png"/>
              </div>
            }
          </>       
        }  
        { phoneDrawerOpen &&
          <div className={classes.menu}>
            <Link smooth to="#editions" className="tabPhone" >NFT Series</Link>
            <Link smooth to="#roadmap" className="tabPhone">Road Map</Link>
            <Link smooth to="#about" className="tabPhone">The Artist</Link>
            <Link smooth to="#mint" className="tabPhone">Edition 1</Link>
          </div>
        }     
      </div>     
      <div className="natureRust__editions" id="editions">      
        { editions.map((edition) => {
          return <Edition  name={edition.name} 
            image={edition.image} 
            isRoom={edition.isRoom}
          />
        })}
        <RoadMap/>
        <About/>
        <Updates/>
        <PolicyTable/>
      </div> 
    </div>
  )
}