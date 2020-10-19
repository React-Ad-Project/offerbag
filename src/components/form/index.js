import React, { useState } from "react";
import "./index.css";
import { Form, Input, InputNumber, Button, Select } from "antd";
import "antd/dist/antd.css";
import "../../firebase config/fb";
import app from "firebase";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const validateMessages = {
  // eslint-disable-next-line no-template-curly-in-string
  required: "${label} is required!",
  types: {
    // eslint-disable-next-line no-template-curly-in-string
    email: "${label} is not validate email!",
    // eslint-disable-next-line no-template-curly-in-string
    number: "${label} is not a validate number!",
  },
  number: {
    // eslint-disable-next-line no-template-curly-in-string
    range: "${label} must be between ${min} and ${max}",
  },
};

const NewForm = () => {
  const [load, setLoad] = useState(false);
  const [form] = Form.useForm();
  const [done, setDone] = useState(false);

  const onFinish = ({ product }) => {
    setLoad(true);
    const db = app.firestore();
    db.collection("OfferBag")
      .add({
        ...product,
        time: new Date(),
      })
      .then(() => {
        console.log("Document added");
        setLoad(false);
        form.resetFields();
        setDone(true);
        setTimeout(() => {
          setDone(false);
        }, 3000);
      })
      .catch((err) => console.log("Error: ", err));
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      className="customForm"
      scrollToFirstError
      form={form}
    >
      <Form.Item
        name={["product", "name"]}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="Enter the name of the product" />
      </Form.Item>
      <Form.Item
        name={["product", "link"]}
        label="Link"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="Enter the link to the product" />
      </Form.Item>
      <Form.Item
        name={["product", "imgUrl"]}
        label="Image Url"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="Enter the link to the product display image." />
      </Form.Item>
      <Form.Item
        name={["product", "price"]}
        label="Price"
        rules={[{ type: "number", required: true }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name={["product", "off_price"]}
        label="Offer Price"
        rules={[{ type: "number", required: true }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name={["product", "description"]}
        label="Description"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.TextArea placeholder="Enter the product description." />
      </Form.Item>
      <Form.Item
        name={["product", "provider"]}
        label="Offer Provider"
        hasFeedback
        rules={[
          { required: true, message: "Please select the Offer Provider!" },
        ]}
      >
        <Select placeholder="Please select the Offer Provider">
          <Option value="amazon">Amazon</Option>
          <Option value="flipkart">Flipkart</Option>
          <Option value="snapdeal">Snapdeal</Option>
          <Option value="lenskart">Lenskart</Option>
          <Option value="myntra">Myntra</Option>
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit" loading={load}>
          Submit
        </Button>
        {done && <p style={{ color: "red", marginTop: 10 }}>Data added!</p>}
      </Form.Item>
    </Form>
  );
};

export default NewForm;
