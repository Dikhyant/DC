import React from 'react';
import Header from "./components/header/header";
import Body from "./components/body/body";
import HeroGallery from "./components/body/heros/HeroGallery";
import VillainGalley from "./components/body/villains/VillainGallery";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Body />
          </Route>
          <Route path="/heros">
            <HeroGallery />
          </Route>
          <Route path="/villains">
            <VillainGalley />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;