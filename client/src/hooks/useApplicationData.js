import {useState, useEffect} from "react";
import axios from 'axios';

import { checkForUser } from "../helpers/dataOrganisers"
import { API_URL } from "../constants"
import Aos from "aos";

const LOADING = "LOADING"
const currentEditions = [
  {
    name: "Edition 1 - Life Bulb",
    image: "images/bulb.png",
    isRoom: false,
    isGasTank: false
  },
  {
    name: "Edition 2 - Eco Chamber",
    image: "images/ed2.png",
    isRoom: false,
    isGasTank: true
  },
  {
    name: "Edition 3 (Coming Soon)",
    image: "images/ed3.png",
    isRoom: false,
    isGasTank: false
  },
  {
    name: "Final Edition - Place of Solace",
    image: "images/room.png",
    isRoom: true,
    isGasTank: false
  }
]


export default function useApplicationData () {
  const [nfts, setNfts] = useState([]);
  const [editions, setEditions] = useState([]);
  
  useEffect(() => {
    mountEditions()
  },[])

  const mountEditions = () => {
    setEditions(currentEditions)
  }
  
  const nftMint = (removeRecData) => {
  }
  
  return {
    nftMint,
    editions
  }
}