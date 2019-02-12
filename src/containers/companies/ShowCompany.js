import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import CompanyDetails from '../../components/companies/CompanyDetails.js';

class ShowCompany extends Component {

    render(){
        let id = this.props.match.params.id;
        let company = this.props.companies.find(company => company._id === id)
        if (!company && this.props.match.params.id !=='new'){
            return <Redirect to="/"/>
        } else {
            return (
                    <CompanyDetails
                        company={company}
                    />
            )
        }
    }
}
const mapStateToProps = (state) => {
    return {companies: state.companies}
}

export default connect(mapStateToProps)(ShowCompany);