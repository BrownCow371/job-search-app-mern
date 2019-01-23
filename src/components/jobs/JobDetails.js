import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import NotesList from './NotesList.js'

const JobDetails =({job})=>{

    let date = new Date(job.dateApplied);
    return (
        <Container>
            <Row>
                <Col xs="3"><strong>Title:</strong></Col>
                <Col>{job.title}</Col>
            </Row>
            <Row>
                <Col xs="3"><strong>Company Name: </strong></Col>
                <Col>{job.company.name}</Col>
            </Row>
            <Row>
                <Col xs="3"><strong>Date Applied: </strong></Col>
                <Col>{date.toLocaleDateString()}</Col>
            </Row>
            <Row>
                <Col xs="3"><strong>App Method: </strong></Col>
                <Col>{job.applicationMethod}</Col>
            </Row>
            <Row>
                <Col xs="3"><strong>Job Link: </strong></Col>
                <Col>{job.postingLink}</Col>
            </Row>
            <Row>
                <Col xs="3"><strong>Description: </strong></Col>
                <Col>{job.description}</Col>
            </Row>
            <Row>
                <Col xs="3"><strong>Notes: </strong></Col>
                <NotesList
                    notes = {job.notes}
                />
            </Row>
        </Container>
    )
}

export default JobDetails;