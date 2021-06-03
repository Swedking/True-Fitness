import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Fitness from "./pages/fitness";
import Inspiration from "./pages/inspiration";
import Nutrition from "./pages/nutrition";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/fitness" component={Fitness} />
              <Route path="/inspiration" component={Inspiration} />
              <Route path="/nutrition" component={Nutrition} />
              <Route path="/about" component={About} />
            </Switch>

          </div>
        </Router>

      </div>
    );
  }
}

//=================================================================================//

