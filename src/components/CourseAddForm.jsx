import React, { useContext, useEffect, useState } from "react";
import { Form, Input, Button, message } from "antd";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import { ApiRoutes } from "../Constant/Constant";
import { useNavigate } from "react-router";

const { TextArea } = Input;

const CourseAdditionForm = () => {
  const { user } = useContext(AuthContext);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // check user role for validation
  useEffect(() => {
    if (user?.role !== "teacher" && user?.role !== "admin") {
      navigate("/");
    }
  }, [user, navigate]);

  // adding course to Db
  const onFinish = (values) => {
    setLoading(true);
    const obj = {
      teacherId: user._id,
      title: values.title,
      subTitle: values.subTitle,
      description: values.description,
      thumbnail: values.thumbnail,
      courseDuration: values.courseDuration,
      courseTimming: values.courseTimming,
      courseLevel: values.courseLevel,
      batch: values.batch,
      activeDate: values.activeDate,
      endDate: values.endDate,
    };

    axios.post(ApiRoutes.createCourse, obj)
      .then((res) => {
        setTimeout(() => {
          setLoading(false);
          message.success("Course successfully added!");
          form.resetFields();
        }, 2000);
        navigate("/");
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
    <div className="mx-auto container my-4">
      <h1 className="text-4xl font-semibold text-center my-8">Add Course</h1>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >

        <Form.Item
          name="title"
          label="Course Title"
          rules={[{ required: true, message: "Please enter the course title!" }]}
        >
          <Input
            className="hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"
            placeholder="Enter course name" />
        </Form.Item>

        <Form.Item
          name="subTitle"
          label="Course Subtitle"
          rules={[
            { required: true, message: "Please enter the course subtitle!" },
          ]}
        >
          <Input
            className="hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"
            placeholder="e.g., Subtitle" />
        </Form.Item>

        <Form.Item
          name="thumbnail"
          label="Course Thumbnail"
          rules={[
            { required: true, message: "Please enter the course thumbnail URL!" },
          ]}
        >
          <Input
            className="hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"
            placeholder="thumbnail URL" />
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[
            { required: true, message: "Please enter the course description!" },
          ]}
        >
          <TextArea
            className="hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"
            rows={4}
            placeholder="Write a brief description of the course"
          />
        </Form.Item>

        <Form.Item
          name="courseDuration"
          label="Course Duration"
          rules={[
            { required: true, message: "Please enter the course duration!" },
          ]}
        >
          <Input
            className="hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"
            placeholder="e.g., 3 months" />
        </Form.Item>

        <Form.Item
          name="courseTimming"
          label="Course Timming"
          rules={[
            { required: true, message: "Please enter the course timming!" },
          ]}
        >
          <Input
            className="hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"
            placeholder="e.g., 6 to 9 pm" />
        </Form.Item>

        <Form.Item
          name="activeDate"
          label="Course Starting Date"
          rules={[{ required: true, message: "Please select the course starting date!" }]}
        >
          <Input
            className="hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"
            placeholder="e.g., 1 January 2025" />
        </Form.Item>

        <Form.Item
          name="endDate"
          label="Course Ending Date"
          rules={[{ required: true, message: "Please select the course ending date!" }]}
        >
          <Input
            className="hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"
            placeholder="e.g., 30 December 2025" />
        </Form.Item>

        <Form.Item
          name="courseLevel"
          label="Course Level"
          rules={[{ required: true, message: "Please enter the course level!" }]}
        >
          <Input
            className="hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"
            placeholder="e.g., Beginners" />
        </Form.Item>

        <Form.Item
          name="batch"
          label="Batch Name"
          rules={[{ required: true, message: "Please enter the batch name!" }]}
        >
          <Input
            className="hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"
            placeholder="e.g., tts,mwf" />
        </Form.Item>

        <Form.Item>
          <Button
            htmlType="submit"
            type="submit"
            loading={loading}
            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"
          >
            {loading ? "Submitting..." : "Add Course"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CourseAdditionForm;
