import React from "react";
import { useState, useEffect } from "react";

const RandomCat = () => {
  const [data, setData] = useState([]);
  const [catUrl, setCatUrl] = useState("");

  const getData = async () => {
    const res = await fetch(
      "https://api.thecatapi.com/v1/images/search?api_key=live_TUfkBM4ab1BTafYrbpbgiW6V3vHtJgzcSBISe7PAFOpeK8Qu02LMUT2jp0NLO9Tw"
    );
    const cat = await res.json();
    setData(cat);
    console.log("inside get data");
  };

  useEffect(() => {
    if (data) {
      data.map((item, idx) => {
        setCatUrl(item.url);
      });
    }
  }, [data]);

  useEffect(() => {
    getData();
    console.log("inside get data use effect");
  }, []);

  return <img src={catUrl}></img>;
};

export default RandomCat;
