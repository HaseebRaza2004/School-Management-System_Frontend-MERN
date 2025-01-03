import React, { useContext, useState } from "react";
import { Form, Input, Button, Typography, message } from "antd";
import axios from "axios";
import { ApiRoutes } from "../Constant/Constant";
import { AuthContext } from "../Context/AuthContext";

const { TextArea } = Input;
const { Title } = Typography;

const TeacherApplicationForm = () => {
  const { user } = useContext(AuthContext);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  // sending user request to db 
  const onFinish = (values) => {
    setLoading(true);
    const obj = {
      userId: user._id,
      contact: values.phone,
      education: values.qualifications,
      specialistSubject: values.specialistSubject,
      workExperience: values.experience,
      skills: values.Skills,
    };
    console.log("Form obj=>", obj);
    axios.post(ApiRoutes.teacherRequest, obj)
      .then((res) => {
        setTimeout(() => {
          setLoading(false);
          message.success("Thank you for applying! We will review your application.");
          form.resetFields();
        }, 2000);
      })
      .catch((err) => {
        setTimeout(() => {
          setLoading(false);
          message.success(err.response.data.message);
          form.resetFields();
        }, 2000);
      });
  };

  const onFinishFailed = (errorInfo) => {
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
            name="phone"
            label="Phone Number"
            rules={[{ required: true, message: "Please specify your contact number!" }]}
          >
            <Input
              className="hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"
              placeholder="e.g., +123456789" />
          </Form.Item>

          <Form.Item
            name="qualifications"
            label="Qualifications"
            rules={[{ required: true, message: "Please specify your qualifications!" }]}
          >
            <TextArea
              className="hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"
              rows={4} placeholder="List your qualifications here" />
          </Form.Item>

          <Form.Item
            name="Skills"
            label="Skills"
            rules={[{ required: true, message: "Please specify your Skills!" }]}
          >
            <TextArea
              className="hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"
              rows={3} placeholder="List your Skills here" />
          </Form.Item>

          <Form.Item
            name="specialistSubject"
            label="Specialist Subject"
            rules={[{ required: true, message: "Please specify your specialty!" }]}
          >
            <Input
              className="hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"
              placeholder="e.g., Mathematics, Physics" />
          </Form.Item>

          <Form.Item
            name="experience"
            label="Years of Experience"
            rules={[{ required: true, message: "Please specify your years of experience!" }]}
          >
            <Input
              className="hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"
              type="number" placeholder="e.g., 5" />
          </Form.Item>

          <Form.Item>
            <Button
              className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"
              type="submit"
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
