import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Components
import NavBar from './components/static/NavBar.js';
import Test from './components/static/Test.js';

// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <NavBar />
          <Route exact path='/test' component={Test} />
        </div>
      </Router>
    );
  }
}

export default App;
