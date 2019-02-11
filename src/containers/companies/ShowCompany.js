import React, {Component} from 'react';
import {connect} from 'react-redux'
import CompanyDetails from '../../components/companies/CompanyDetails.js'

class ShowCompany extends Component {

    render(){
        let id = this.props.match.params.id;
        let company = this.props.companies.find(company => company._id === id)
        return (
            <div>
                <CompanyDetails
                    company={company}
                />
            </div>
    )}
}
const mapStateToProps = (state) => {
    return {companies: state.companies}
}

export default connect(mapStateToProps)(ShowCompany);