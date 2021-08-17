import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Orders from './pages/Orders/Orders'
import Navbar from './Components/Navbar/Navbar';
import Suggestions from './pages/Suggestions/Suggestions';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/orders" exact>
            <Orders />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/suggestions" exact>
            <Suggestions />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
