import {useState, useEffect} from "react";
import axios from 'axios';

import { checkForUser } from "../helpers/dataOrganisers"
import { API_URL } from "../constants"
import Aos from "aos";

const LOADING = "LOADING"
const currentEditions = [
  {
    name: "Edition 1 - The Life Bulb",
    image: "images/bulb.png",
    isRoom: false
  },
  {
    name: "Edition 2 (Coming Soon)",
    image: "images/ed2.png",
    isRoom: false
  },
  {
    name: "Edition 3 (Coming Soon)",
    image: "images/ed3.png",
    isRoom: false
  },
  {
    name: "The Final Room",
    image: "images/room.png",
    isRoom: true
  }
]


export default function useApplicationData () {
  const [nfts, setNfts] = useState([]);
  const [editions, setEditions] = useState([]);
  
  useEffect(() => {
    mountEditions()
  },[])

  const nftMint = (removeRecData) => {

  }

  const mountEditions = () => {
    setEditions(currentEditions)
  }

  return {
    nftMint,
    editions
  }
}