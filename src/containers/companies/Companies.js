import React, {Component} from 'react';
import {connect} from 'react-redux'
import CompanyTable from '../../components/companies/CompanyTable.js'

class Companies extends Component {

    render(){
    return (
        <div>
            <h2>Companies List</h2>
            <CompanyTable
                companies={this.props.companies}
            />
        </div>
    )}
}
const mapStateToProps = (state) => {
    return {companies: state.companies}
}

export default connect(mapStateToProps)(Companies);