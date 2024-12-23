import React, { useState } from "react";
import { Form, Input, Select, Button, Typography, message } from "antd";

const { TextArea } = Input;
const { Option } = Select;
const { Title } = Typography;

const TeacherApplicationForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    console.log("Form submitted:", values);

    setTimeout(() => {
      setLoading(false);
      message.success("Thank you for applying! We will review your application.");
      form.resetFields();
    }, 2000);
  };

  const onFinishFailed = (errorInfo) => {
    console.error("Form submission failed:", errorInfo);
    message.error("Please complete the required fields.");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-photo/assortment-teacher-s-day-elements_23-2149044959.jpg?t=st=1734972159~exp=1734975759~hmac=7f96a04b386cc3aa779c571ea212080429ae0ef1331b119ca88788d9da604a8a&w=900")',
      }}
    >
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg lg:max-w-2xl">
        <Title level={2} className="text-center mb-6">
          Apply as a Teacher
        </Title>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="name"
            label="Full Name"
            rules={[{ required: true, message: "Please input your full name!" }]}
          >
            <Input placeholder="John Doe" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email Address"
            rules={[
              { required: true, message: "Please input your email address!" },
              { type: "email", message: "Please enter a valid email address!" },
            ]}
          >
            <Input placeholder="john.doe@example.com" />
          </Form.Item>

          <Form.Item name="phone" label="Phone Number">
            <Input placeholder="e.g., +123456789" />
          </Form.Item>

          <Form.Item name="qualifications" label="Qualifications">
            <TextArea rows={4} placeholder="List your qualifications here" />
          </Form.Item>

          <Form.Item
            name="specialty"
            label="Specialty"
            rules={[{ required: true, message: "Please specify your specialty!" }]}
          >
            <Input placeholder="e.g., Mathematics, Physics" />
          </Form.Item>

          <Form.Item name="experience" label="Years of Experience">
            <Input type="number" placeholder="e.g., 5" />
          </Form.Item>

          <Form.Item name="preferredSubjects" label="Preferred Subjects">
            <Select
              mode="multiple"
              placeholder="Select preferred subjects"
              allowClear
            >
              <Option value="mathematics">Mathematics</Option>
              <Option value="physics">Physics</Option>
              <Option value="chemistry">Chemistry</Option>
              <Option value="english">English</Option>
              <Option value="computerScience">Computer Science</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button
              className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"
              type="primary"
              htmlType="submit"
              loading={loading}
              block
            >
              {loading ? "Submitting..." : "Submit Application"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default TeacherApplicationForm;
