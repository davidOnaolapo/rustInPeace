import {useState, useEffect} from "react";
import axios from 'axios';

import { checkForUser } from "../helpers/dataOrganisers"
import { API_URL } from "../constants"
import Aos from "aos";

const LOADING = "LOADING"
const currentEditions = [
  {
    name: "The Timeless Watch",
    image: "images/watch.png",
    isRoom: false
  },
  {
    name: "The Life Bulb",
    image: "images/bulb.png",
    isRoom: false
  },
  {
    name: "The Natural Gas Tank",
    image: "images/gastank.png",
    isRoom: false
  },
  {
    name: "The Filled Room",
    image: "images/newRoom.png",
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