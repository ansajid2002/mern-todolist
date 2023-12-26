import React, { useState } from 'react'
import { Button, Modal, Checkbox, Form, Input, DatePicker, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';
import moment from "moment"
import { Adminurl } from '../App';

const Createtask = () => {

    const [taskData,setTaskData] = useState({
        title: '',
        description: '',
        date: null,
        status: 'Pending',
    })
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const items = [
        {
            id: '1',
            key: 'Pending',
        },
        {
          id: '2',
          key: 'Completed',
        },
        {
          id: '3',
            key: 'Cancelled',
        },
    ];

    const handleFormChange = (changedValues, allValues) => {
        // Update taskData with the changed form values
        setTaskData({ ...taskData, ...changedValues });
      };
      const handleStatusChange = (selected) => {
        setTaskData({ ...taskData, status: selected });
      };
    
    
      const onFinish = async () => {
        

        try {
          const response = await fetch(`${Adminurl}/api/users`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(taskData),
          });
      
          if (response.ok) {
            const responseData = await response.json();
            console.log("Data posted successfully:", responseData);
            setTaskData({
              title: '',
              description: '',
              date: null,
              status: 'Pending',
            });
            // form.resetFields();
            setIsModalOpen(false);
          } else {
            console.error("Error occurred while posting data:", response.status);
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
      };
// console.log(moment(taskData?.date).format('LL'),"taskDATA"); 
console.log(taskData);      
    return (<>

        <h1 onClick={showModal} className=' cursor-pointer text-xl p-1 border bg-green-400 text-center rounded-md'>Create Task</h1>

        <Modal title="Task Details" open={isModalOpen} onCancel={handleCancel}

            footer={null}>
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


      <Form.Item label="Status" name="status"  rules={[
          {
            required: true,
            message: 'Please input your status!',
          },
        ]}>
        <Dropdown
          overlay={(
            <Menu onClick={({ key }) => handleStatusChange(key)}>
              {items.map(item => (
                <Menu.Item key={item.key}>
                  {item.key}
                </Menu.Item>
              ))}
            </Menu>
          )}
        >
          <Space>
            {`${taskData.status}`}
            <DownOutlined />
          </Space>
        </Dropdown>
      </Form.Item>
      
      <Form.Item wrapperCol={{ offset: 6 }}>
        <Button htmlType="submit" >
          SUBMIT
        </Button>
      </Form.Item>
    </Form>
        </Modal>
    </>
    )
}   

export default Createtask