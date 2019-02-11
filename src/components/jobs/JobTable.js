import React from 'react';
// import JobRow from './JobRow.js';
import {Link} from 'react-router-dom';
import {Table} from 'antd';

const columns = [{
        title: 'Company',
        dataIndex: 'company',
        key: 'company'
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title'
    },
    {
        title: 'Date Applied',
        dataIndex: 'date',
        key: 'date'
    },
    {
        title: 'More Details',
        dataIndex: 'details',
        key: 'details'
    }  
]
const JobTable = ({jobs}) => {
    const data = jobs.map(job => {
        let date = new Date(job.dateApplied)
        return {
            key: job._id,
            company:job.company.name,
            title: <a href={job.postingLink} target="_blank" rel="noopener noreferrer">{job.title}</a>,
            date: date.toLocaleDateString(),
            details: <Link key={job._id} to={`/jobs/${job._id}`}>Details</Link>,
        }
    })
    return (
        <Table columns={columns} dataSource={data}/>
    )
}

export default JobTable;