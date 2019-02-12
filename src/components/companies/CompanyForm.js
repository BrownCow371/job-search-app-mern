import React from 'react';
import {Form, Input, Button, Row, Col} from 'antd';

const CompanyForm = ({handleSubmit, handleChange, company, title}) => {

    const formItemLayout = {
        labelCol: {
          sm: { span: 8 },
        },
        wrapperCol: {
          sm: { span: 8 },
        },
      };

      const tailFormItemLayout = {
        wrapperCol: {
            sm: {
            span: 24,
            offset: 8,
          },
        },
      };

    return (
        <Form onSubmit={handleSubmit} className="company-form">
            <Row>
                <Col span={8}></Col>
                <Col span={8}> <h2>{title}</h2></Col>
            </Row>
            <Form.Item label="Company Name" {...formItemLayout}>
                <Input 
                    name="name"
                    value={company.name}
                    placeholder="Company Name" 
                    onChange={handleChange}
                />
            </Form.Item>
            <Form.Item label="Company Link" {...formItemLayout}>
                <Input
                    name="companyLink"
                    value={company.companyLink}
                    placeholder="Company Link" 
                    onChange={handleChange}
                />
            </Form.Item>
            <Form.Item label="Contact Name" {...formItemLayout}>
                <Input 
                    name="contactPerson"
                    value={company.contactPerson}
                    placeholder="Contact Name" 
                    onChange={handleChange}
                />
            </Form.Item>
            <Form.Item label="Notes" {...formItemLayout}>
                <Input 
                    name="notes"
                    value={company.notes}
                    placeholder="Notes" 
                    onChange={handleChange}
                />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    )
}

export default CompanyForm;