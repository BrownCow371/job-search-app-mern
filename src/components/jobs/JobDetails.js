import React from 'react';
import {Row, Col} from 'antd';
import NotesList from './NotesList.js'

const JobDetails =({job})=>{

    let date = new Date(job.dateApplied);
    return (
        <div>
            <Row>
                <Col span={4}><strong>Title:</strong></Col>
                <Col><a href={job.postingLink} target="_blank" rel="noopener noreferrer"> {job.title}</a></Col>
            </Row>
            <Row>
                <Col span={4}><strong>Company Name: </strong></Col>
                <Col>{job.company.name}</Col>
            </Row>
            <Row>
                <Col span={4}><strong>Date Applied: </strong></Col>
                <Col>{date.toLocaleDateString()}</Col>
            </Row>
            <Row>
                <Col span={4}><strong>App Method: </strong></Col>
                <Col>{job.applicationMethod}</Col>
            </Row>
            <Row>
                <Col span={4}><strong>Description: </strong></Col>
                <Col>{job.description}</Col>
            </Row>
            <Row>
                <Col span={4}><strong>Notes: </strong></Col>
            </Row>
            <Row>
                <NotesList
                    notes = {job.notes}
                />
            </Row>
            
        </div>
    )
}

export default JobDetails;