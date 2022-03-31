import { useState, useEffect } from "react";
import axios from "axios";

import { checkForUser } from "../helpers/dataOrganisers";
import { API_URL } from "../constants";
import Aos from "aos";

// const MINT_API_CALL_INTERVAL = 1500000;
const MINT_API_CALL_INTERVAL = 5000;

const currentEditions = [
  {
    name: "Edition 1 - Life Bulb",
    image: "images/bulb.png",
    isRoom: false,
    isGasTank: false,
  },
  {
    name: "Edition 2 - Eco Chamber",
    image: "images/ed2.png",
    isRoom: false,
    isGasTank: true,
  },
  {
    name: "Edition 3 - Sun Dial",
    image: "images/zeWatch.png",
    isRoom: false,
    isGasTank: false,
  },
  {
    name: "Final Edition - Place of Solace",
    image: "images/room.png",
    isRoom: true,
    isGasTank: false,
  },
];

export default function useApplicationData() {
  const [mintUpdate, setMintUpdate] = useState({});
  const [editions, setEditions] = useState([]);
  // const [loadingMintUpdate, setloadingNftUpdate] = useState(true)

  useEffect(() => {
    mountEditions();
    continousMintUpdate();
  }, []);

  const mountEditions = () => {
    setEditions(currentEditions);
  };

  const continousMintUpdate = () => {
    setInterval(() => {
      getMintUpdate();
    }, MINT_API_CALL_INTERVAL);
  };

  const getMintUpdate = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/mintUpdate`);
      if (data) {
        setMintUpdate(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return {
    mintUpdate,
    editions,
    // loadingMintUpdate
  };
}
