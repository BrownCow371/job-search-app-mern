import React from 'react';
import {Link} from 'react-router-dom';
import {Table} from 'antd';

const columns = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Contact',
        dataIndex: 'contact',
        key: 'contact'
    },  
    {
        title: 'More Details',
        dataIndex: 'details',
        key: 'details'
    }  
]
const CompanyTable = ({companies}) => {
    const data = companies.map(company => {
        return {
            key: company._id,
            name: <a href={company.companyLink} target="_blank" rel="noopener noreferrer"> {company.name} </a>,
            contact: company.contactPerson,
            details: <Link key={company._id} to={`/companies/${company._id}`}>Details</Link>,
        }
    })
    return (
        <Table columns={columns} dataSource={data}/>
    )
}

export default CompanyTable;