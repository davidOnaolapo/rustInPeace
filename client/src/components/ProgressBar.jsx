import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { getPercentage } from "../helpers/selectors"

import "aos/dist/aos.css";
import "./ProgressBar.scss";

const useStyles = makeStyles({
  progress: {
    marginTop:"2.5em",
    padding: "2px",
    width: "100%",
    maxWidth: "500px",
    background: "#f5f5f5",
    border: "3px solid #000",
    borderRadius: "20px",
    height: "20px"
  },
  progressBar: {
    height: "100%",
    borderRadius: "15px",
    background: `repeating-linear-gradient(
      135deg,
      #696fc5,
      #696fc5 20px,
      #6368af 20px,
      #6368af 40px
    )`
  }
});

export default function News({mintUpdate}) {
  const classes = useStyles();
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("xs"));

  const [bar, setBar] = useState("5%")

  useEffect(() => {
    setBar(getPercentage(mintUpdate))
  }, [mintUpdate]);


  const progressBar = document.getElementById("progressBar");
  progressBar?.style.setProperty(
    "width",
    bar
  );

  return (   
    <div style={{display:"flex", flexDirection:"column", alignItems: "flex-end"}}>
       { !mintUpdate.nftTotal &&
         <img style={{width:"6em", margin: "1em 13em 0em 0em"}} src="images/loading-55.gif" />
       }
       { mintUpdate.nftTotal &&
         <>
          <div className={classes.progress}>
            <div id="progressBar" className={classes.progressBar}></div>
          </div> 
          <div className="progressText">
            Total Nfts: { mintUpdate.nftTotal &&
              mintUpdate.nftTotal
            } <br/>
            Remaining Nfts: {mintUpdate.free} <br/>
            Percentage Minted: { mintUpdate.nftTotal &&
              getPercentage(mintUpdate)
            }         
          </div>
         </>
       }      
    </div>     
  );
}