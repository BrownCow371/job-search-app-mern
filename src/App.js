import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Layout} from 'antd';

//Components
import MyNavBar from './components/static/NavBar.js';
import Greeting from './components/static/Greeting.js';
import Jobs from './containers/jobs/Jobs.js';
import NewJob from './containers/jobs/NewJob.js';
import ShowJob from './containers/jobs/ShowJob.js';
import Companies from './containers/companies/Companies.js';
import NewCompany from './containers/companies/NewCompany.js';
import ShowCompany from './containers/companies/ShowCompany.js';


import {connect} from 'react-redux';

// actions
import {fetchJobs} from './actions/jobs.js';
import {fetchCompanies} from './actions/companies.js';

const {Header} = Layout;
class App extends Component {

  componentDidMount(){
    this.props.fetchJobs();
    this.props.fetchCompanies();
  }
  
  render() {
    return (
      <Router>
        <Layout className ="layout">
          
          <div className="outside-wrapper">
            <Header>
              <MyNavBar />
            </Header>
            <div className="inside-wrapper">
              <Route path='/' component={Greeting} />
              <Route exact path='/jobs' component={Jobs} />
              <Route exact path='/jobs/new' component={NewJob} />
              <Route exact path='/jobs/:id' component={ShowJob} />
              <Route exact path='/companies' component={Companies} />
              <Route exact path='/companies/new' component={NewCompany} />
              <Route exact path='/companies/:id' component={ShowCompany} />
            </div>
          </div>
        </Layout>
      </Router>
    );
  }
}

export default connect(null, {fetchJobs, fetchCompanies})(App);
