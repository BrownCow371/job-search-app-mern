import React from 'react';
import {Form, Input, Select, DatePicker, Button, Row, Col} from 'antd';


const JobForm = ({job, handleInputChange, handleDateChange, handleSelectChange, handleSubmit, companies, title}) => {
    const Option = Select.Option;

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
        <Form onSubmit={handleSubmit} className="job-form">
            <Row>
                <Col span={8}></Col>
                <Col span={8}> <h2>{title}</h2></Col>
            </Row>
            <Form.Item label="Job Title" {...formItemLayout}>
                <Input 
                    name="title"
                    value={job.title}
                    placeholder="Job Title" 
                    onChange={handleInputChange}
                />
            </Form.Item>
            <Form.Item label="Job Desc" {...formItemLayout}>
                <Input 
                    name="description"
                    value={job.description}
                    placeholder="Job Desc" 
                    onChange={handleInputChange}
                />
            </Form.Item>
            <Form.Item label="Job Link" {...formItemLayout}>
                <Input 
                    name="postingLink"
                    value={job.postingLink}
                    placeholder="Job Link" 
                    onChange={handleInputChange}
                />
            </Form.Item>
            <Form.Item label="Date Applied" {...formItemLayout}>
                <DatePicker
                    name="dateApplied"
                    value={job.dateApplied}
                    placeholder="Select Date Applied" 
                    onChange={handleDateChange}
                />
            </Form.Item>
            <Form.Item label="Application Method" {...formItemLayout}>
                <Input 
                    name="applicationMethod"
                    value={job.applicationMethod}
                    placeholder="Application Method" 
                    onChange={handleInputChange}
                />
            </Form.Item>
            <Form.Item label="Company" {...formItemLayout}>
                <Select
                    name="company"
                    onChange={handleSelectChange}
                    value={job.company}
                >
                    {companies.map(company=> {
                        return (<Option value={company._id}>{company.name}</Option>)
                    })}
                </Select>
            </Form.Item>
            <Form.Item label="Note" {...formItemLayout}>
                <Input 
                    name="notes"
                    value={job.notes}
                    placeholder="Notes" 
                    onChange={handleInputChange}
                />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    )
}

export default JobForm;