import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import RandomCat from "./pages/RandomCat";
import BrowseBreeds from "./pages/BrowseBreeds";
import KindaRandomCat from "./pages/KindaRandomCat";

function App() {
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
          <BrowseBreeds />
        </Route>
      </Switch>
    </>
  );
}

export default App;
