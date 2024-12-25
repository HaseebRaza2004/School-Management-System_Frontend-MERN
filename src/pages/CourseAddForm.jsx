import React, { useState } from "react";
import { Form, Input, Select, DatePicker, Button, Upload, message } from "antd";

const { TextArea } = Input;
const { Option } = Select;

const CourseAdditionForm = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    console.log("Course Details Submitted:", values);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      message.success("Course successfully added!");
    }, 2000);
  };

  return (
    <div className="mx-auto container my-4">
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="courseName"
          label="Course Name"
          rules={[{ required: true, message: "Please enter the course name!" }]}
        >
          <Input placeholder="Enter course name" />
        </Form.Item>

        <Form.Item
          name="courseCode"
          label="Course Code"
          rules={[
            { required: true, message: "Please enter a unique course code!" },
          ]}
        >
          <Input placeholder="e.g., PHY101" />
        </Form.Item>

        <Form.Item name="description" label="Description">
          <TextArea
            rows={4}
            placeholder="Write a brief description of the course"
          />
        </Form.Item>

        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true, message: "Please select a category!" }]}
        >
          <Select placeholder="Select category">
            <Option value="science">Science</Option>
            <Option value="mathematics">Mathematics</Option>
            <Option value="languages">Languages</Option>
            <Option value="robotics">Robotics</Option>
            <Option value="astronomy">Astronomy</Option>
            <Option value="languagesAndCulture">Languages and Culture</Option>
            <Option value="mediaStudies">Media Studies</Option>
            <Option value="theology">Theology</Option>
            <Option value="education">Education</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="instructor"
          label="Instructor"
          rules={[{ required: true, message: "Please select an instructor!" }]}
        >
          <Select placeholder="Assign an instructor">
            <Option value="teacher1">Haseeb</Option>
            <Option value="teacher2">Bilal</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="duration"
          label="Duration"
          rules={[
            { required: true, message: "Please enter the course duration!" },
          ]}
        >
          <Input placeholder="e.g., 3 months" />
        </Form.Item>

        <Form.Item
          name="startDate"
          label="Start Date"
          rules={[{ required: true, message: "Please select the start date!" }]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item name="fee" label="Course Fee">
          <Input placeholder="e.g., $200" type="number" />
        </Form.Item>

        <Form.Item name="thumbnail" label="Course Thumbnail">
          <Upload maxCount={1}>
            <Button>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button
            htmlType="submit"
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
