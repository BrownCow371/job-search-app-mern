import React from 'react';
import JobRow from './JobRow.js';
import {Table} from 'reactstrap';

const JobTable = ({jobs}) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Title</th>
                    <th>Date Applied</th>
                    <th>More Details</th>
                </tr>
            </thead>
            {jobs.map(job=> (
                <JobRow
                    job={job}
                    company={job.company}
                />
            ))}
        </Table>
    )
}

export default JobTable;