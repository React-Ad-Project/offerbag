import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";
import NewForm from "./components/form";
import OfferDetails from "./components/offer_details/offer_details";
import Filter from "./components/Filter";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/details">
          <OfferDetails />
        </Route>
        <Route exact path="/form">
          <NewForm />
        </Route>
        <Route exact path="/filter">
          <Filter />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
