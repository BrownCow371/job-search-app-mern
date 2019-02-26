import React, {Component} from 'react';
import {connect} from 'react-redux';
import JobForm from '../../components/jobs/JobForm.js';

class NewJob extends Component {
    constructor(props){
        super(props);
        this.state ={
            job: {
                title: '',
                description: '',
                postingLink: '',
                dateApplied: '',
                applicationMethod: '',
                notes: '',
                company: ''
            }
        }
    }

    handleInputChange = (event) => {
        event.preventDefault();
        let value = event.target.value;
        let name = event.target.name;
        this.setState((state) => {
            return {job: {...this.state.job, [name]: value}}
        })
    }

    handleDateChange = (date, dateString) => {
        this.setState((state) => {
            return {job: {...this.state.job, dateApplied: date}}
        })
    }

    handleSelectChange = (value) => {
        this.setState((state) => {
            return {job: {...this.state.job, company: value}}
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render(){
        return(
            <JobForm 
                job={this.state.job}
                companies={this.props.companies}
                handleInputChange={this.handleInputChange}
                handleDateChange={this.handleDateChange}
                handleSelectChange={this.handleSelectChange}
                handleSubmit={this.handleSubmit}
                title="New Job Form"
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {companies: state.companies}
}

export default connect(mapStateToProps)(NewJob);