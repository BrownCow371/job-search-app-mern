import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Components
import MyNavBar from './components/static/NavBar.js';
import Test from './components/static/Test.js';
import Greeting from './components/static/Greeting.js';
import Jobs from './containers/jobs/Jobs.js';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <MyNavBar />
          <Route path='/' component={Greeting} />
          <Route exact path='/jobs' component={Jobs} />
          <Route exact path='/test' component={Test} />
        </div>
      </Router>
    );
  }
}

export default App;
