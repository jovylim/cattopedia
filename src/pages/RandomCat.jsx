import React from "react";
import { useState, useEffect } from "react";
import RandomCatPic from "../Components/RandomCatPic";

const RandomCat = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch(
      "https://api.thecatapi.com/v1/images/search?api_key=live_TUfkBM4ab1BTafYrbpbgiW6V3vHtJgzcSBISe7PAFOpeK8Qu02LMUT2jp0NLO9Tw"
    );
    const cat = await res.json();
    setData(cat);
  };
  useEffect(() => {
    getData();
  }, []);

  return <RandomCatPic data={data}></RandomCatPic>;
};

export default RandomCat;
