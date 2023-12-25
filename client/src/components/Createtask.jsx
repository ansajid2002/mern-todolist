import React, { useState } from 'react'
import { Button, Modal, Checkbox, Form, Input, DatePicker } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';

const Createtask = () => {


    const [taskData,setTaskData] = useState({
        title: '',
        description: '',
        date: null,
        status: '',
    })
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const items = [
        {
            key: '1',
            label: 'Item 1',
        },
        {
            key: '2',
            label: 'Item 2',
        },
        {
            key: '3',
            label: 'Item 3',
        },
    ];

    const handleFormChange = (changedValues, allValues) => {
        // Update taskData with the changed form values
        setTaskData({ ...taskData, ...changedValues });
      };
    
      const onFinish = () => {
        console.log(taskData); // Task data when form is submitted
        // You can perform further actions or submit the data to an API
      };
console.log(taskData,"taskDATA");       
    return (<>

        <h1 onClick={showModal} className=' cursor-pointer text-xl p-1 border bg-green-400 text-center rounded-md'>Create New Task</h1>

        <Modal title="Task Details" open={isModalOpen}

            footer={[
                <Button onClick={handleCancel}>
                    Cancel
                </Button>,
                <Button onClick={handleOk}>
                    Custom OK
                </Button>,
            ]}>
           <Form
      name="basic"
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 24,
      }}
      style={{
        maxWidth: 600,
      }}
      onFinish={onFinish}
      autoComplete="off"
      initialValues={taskData}
      onValuesChange={handleFormChange}
    >
      <Form.Item
        label="Title"
        name="title"
        labelAlign='left'
        rules={[
          {
            required: true,
            message: 'Please input your Title!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        labelAlign='left'
        rules={[
          {
            required: true,
            message: 'Please input your Description!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Date"
        name="date"
        labelAlign='left'
        rules={[
          {
            required: true,
            message: 'Please input Date!',
          },
        ]}
      >
        <DatePicker format="YYYY-MM-DD" />
      </Form.Item>
      <Form.Item
        label="Status"
        name="status"
        labelAlign='left'
        rules={[
          {
            required: true,
            message: 'Please input Status!',
          },
        ]}
      >
        <Dropdown
          menu={{
            items,
            selectable: true,
            defaultSelectedKeys: ['3'],
          }}
        >
          <Space>
            {`Status ${taskData?.status}`}
            <DownOutlined />
          </Space>
        </Dropdown>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 6 }}>
        <Button type="primary" htmlType="submit">
          SUBMIT
        </Button>
      </Form.Item>
    </Form>
        </Modal>
    </>
    )
}   

export default Createtask