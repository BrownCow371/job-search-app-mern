import React, {Component} from 'react';
import {connect} from 'react-redux'

class Jobs extends Component {
    render(){
    return (
        <div>
            <h2>Jobs list</h2>
            {this.props.jobs.map((job, i) => {
                return <li key={i}>{job.title}</li>
            })}
        </div>
    )}
}
const mapStateToProps = (state) => {
    return {jobs: state.jobs}
}

export default connect(mapStateToProps)(Jobs);