import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Components
import MyNavBar from './components/static/NavBar.js';
import Test from './components/static/Test.js';
import Greeting from './components/static/Greeting.js';
import Jobs from './containers/jobs/Jobs.js';
import ShowJob from './containers/jobs/ShowJob.js';
import {connect} from 'react-redux';

// actions
import {fetchJobs} from './actions/jobs.js'

class App extends Component {

  componentDidMount(){
    this.props.fetchJobs();
  }
  
  render() {
    return (
      <Router>
        <>
          
          <div className="outside-wrapper">
            <MyNavBar />
            <div className="inside-wrapper">
              <Route path='/' component={Greeting} />
              <Route exact path='/jobs' component={Jobs} />
              <Route exact path='/jobs/:id' component={ShowJob} />
              <Route exact path='/test' component={Test} />
            </div>
          </div>
        </>
      </Router>
    );
  }
}

export default connect(null, {fetchJobs})(App);
