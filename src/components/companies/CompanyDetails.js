import React from 'react';
import {Row, Col} from 'antd';

const CompanyDetails =({company})=>{
    // need renderThis so that if the route is "new" it doesn't try to render this component

    const renderThis = () => {
        return !!company
    }

    if(renderThis()){
        return (
            <div>
                <Row>
                    <Col span={4}><strong>Name:</strong></Col>
                    <Col>{company.name}</Col>
                </Row>
                <Row>
                    <Col span={4}><strong>Contact: </strong></Col>
                    <Col>{company.contactPerson}</Col>
                </Row>
                <Row>
                    <Col span={4}><strong>Company Link: </strong></Col>
                    <Col><a href={company.companyLink} target="_blank" rel="noopener noreferrer">Click Here</a></Col>
                </Row>
                <Row>
                    <Col span={4}><strong>Notes: </strong></Col>
                    <Col>{company.notes}</Col>
                </Row>

            </div>
        )
    } else {
        return null;
    }
}

export default CompanyDetails;