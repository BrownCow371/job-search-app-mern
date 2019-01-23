import React from 'react';
import {Link} from 'react-router-dom';

const JobRow = ({job, company}) => {
    let date = new Date(job.dateApplied);
    // let company = job.company;
    return (
        <tr>
            <td>{company.name}</td>
            <td>{job.title}</td>
            <td>{date.toLocaleDateString()}</td>
            <td><Link key={job.id} to={`/jobs/${job._id}`}>Details</Link></td>
        </tr>
    )
}

export default JobRow;