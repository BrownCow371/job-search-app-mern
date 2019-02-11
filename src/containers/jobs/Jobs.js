import React, {Component} from 'react';
import {connect} from 'react-redux'
import JobTable from '../../components/jobs/JobTable.js'

class Jobs extends Component {

    render(){
    return (
        <div>
            <h2>Jobs List</h2>
            <JobTable
                jobs={this.props.jobs}
            />
        </div>
    )}
}
const mapStateToProps = (state) => {
    return {jobs: state.jobs}
}

export default connect(mapStateToProps)(Jobs);