import React from 'react'
import './index.css'
import { Form, Input, InputNumber, Button } from 'antd';
import 'antd/dist/antd.css';
import '../../firebase config/fb'
import app from 'firebase';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const NewForm = () => {

  const onFinish = ({product}) => {
    const db = app.firestore();
    db.collection('OfferBag')
    .add({
        ...product,
        time: new Date(),
        
    })
    .then(() => console.log('Document added'))
    .catch(err => console.log('Error: ',err))
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} className="customForm">
      <Form.Item
        name={['product', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['product', 'link']}
        label="Link"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={['product', 'price']} label="Price" rules={[{ type: 'number', required:true}]}>
        <InputNumber />
      </Form.Item>
      <Form.Item name={['product', 'off_price']} label="Offer Price" rules={[{ type: 'number',required:true}]}>
        <InputNumber />
      </Form.Item>
      <Form.Item name={['product', 'description']} label="Description" rules={[
          {
            required: true,
          },
        ]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default NewForm;