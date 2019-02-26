import React, {Component} from 'react';
import {connect} from 'react-redux'
import JobDetails from '../../components/jobs/JobDetails.js'
import {Redirect} from 'react-router-dom';

class ShowJob extends Component {

    render(){
        let id = this.props.match.params.id;
        let job = this.props.jobs.find(job => job._id === id)
        if (!job && this.props.match.params.id !=='new'){
            return <Redirect to="/"/>
        } else {
            return (
                <div>
                    <JobDetails
                        job={job}
                    />
                </div>
            )}
        }
}
const mapStateToProps = (state) => {
    return {jobs: state.jobs}
}

export default connect(mapStateToProps)(ShowJob);