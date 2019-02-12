import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addCompany} from '../../actions/companies.js';
import CompanyForm from '../../components/companies/CompanyForm.js';

class NewCompany extends Component {
    constructor(props){
        super(props);
        this.state = {
           company: {
               name: '',
               companyLink: '',
               contactPerson: '',
               notes: '',
           } 
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        let value = event.target.value;
        let name = event.target.name;
        this.setState((state) => {
            return {company: {...this.state.company, [name]: value}}
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("The fomr was submitted")
        this.props.addCompany(this.state.company);
    }

    render(){
        return (
            <CompanyForm 
                company={this.state.company}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                title="New Company Form"
            />
        );
    }
}

export default connect(null, {addCompany})(NewCompany);