import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Characters from './Characters';
import Episodes from './Episodes';
import Locations from './Locations';
import Home from './Home';
import Navbar from './Navbar';

class Main extends Component{
render() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/characters" component = {Characters} />
        <Route exact path = "/episodes" component = {Episodes} />
        <Route exact path = "/locations" component = {Locations} />
      </React.Fragment>
    </Router>
  )
}
}

export default Main;
