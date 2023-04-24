import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import RandomCat from "./pages/RandomCat";
import BrowseBreeds from "./pages/BrowseBreeds";
import CustomSearch from "./pages/CustomSearch";

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
        <Route exact path="/browse-breeds">
          <BrowseBreeds />
        </Route>
        <Route exact path="/custom-search">
          <CustomSearch />
        </Route>
      </Switch>
    </>
  );
}

export default App;
