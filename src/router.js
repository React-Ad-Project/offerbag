import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";
import NewForm from "./components/form";
import OfferDetails from "./components/offer_details/offer_details";
import Filter from "./components/Filter";
import Discover from "./components/Discover";
import Layout from "./Layout";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/filter">
          <Filter />
        </Route>
        <Layout>
          <Route exact path="/">
            <App />
          </Route>
          <Route exact path="/details">
            <OfferDetails />
          </Route>
          <Route exact path="/form">
            <NewForm />
          </Route>
          <Route exact path="/search">
            <Discover />
          </Route>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
