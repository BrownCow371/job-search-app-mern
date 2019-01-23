import React, {Component} from 'react';
import {connect} from 'react-redux'
import JobDetails from '../../components/jobs/JobDetails.js'

class ShowJob extends Component {

    render(){
        let id = this.props.match.params.id;
        let job = this.props.jobs.find(job => job._id == id)
        return (
            <div>
                <JobDetails
                    job={job}
                />
            </div>
    )}
}
const mapStateToProps = (state) => {
    return {jobs: state.jobs}
}

export default connect(mapStateToProps)(ShowJob);