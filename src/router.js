import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import App from './App';
import NewForm from './components/form';
import OfferDetails from './components/offer_details/offer_details'

function Router() {
  return (
    
    <BrowserRouter>
       <Switch>
          <Route exact path="/"><App/></Route>
          <Route exact path="/details"><OfferDetails/></Route>
          <Route exact path="/form"><NewForm /></Route>
      
        </Switch>
    </BrowserRouter>
  );
}

export default Router;

