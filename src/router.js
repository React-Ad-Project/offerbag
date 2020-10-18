import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import App from './App';
import Offer_details from './components/offer_details/offer_details'




function Router() {
  return (
    
    <BrowserRouter>
       <Switch>
          <Route exact path="/"><App/></Route>
          <Route exact path="/details"><Offer_details/></Route>
      
        </Switch>
    </BrowserRouter>
  );
}

export default Router;

