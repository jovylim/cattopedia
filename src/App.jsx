import React from "react";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "./pages/Main";
import RandomCat from "./pages/RandomCat";
import BrowseBreeds from "./pages/BrowseBreeds";
import KindaRandomCat from "./pages/KindaRandomCat";

function App() {
  const [breedData, setBreedData] = useState([]);

  const getData = async () => {
    const res = await fetch("https://api.thecatapi.com/v1/breeds");
    const cat = await res.json();
    setBreedData(cat);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/random-cat">
          <RandomCat />
        </Route>
        <Route exact path="/kinda-random-cat">
          <KindaRandomCat />
        </Route>
        <Route exact path="/browse-breeds">
          <BrowseBreeds data={breedData} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
