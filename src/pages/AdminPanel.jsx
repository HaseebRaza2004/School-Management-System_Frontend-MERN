import React from "react";
import { Layout, Menu, Breadcrumb, Table, Tabs } from "antd";
import "antd/dist/reset.css";


const { Header, Content, Footer } = Layout;

const teachersData = [
  {
    key: "1",
    name: "John Doe",
    subject: "Math",
    email: "john.doe@example.com",
  },
  {
    key: "2",
    name: "Jane Smith",
    subject: "Science",
    email: "jane.smith@example.com",
  },
];

const studentsData = [
  {
    key: "1",
    name: "Alice Brown",
    grade: "A",
    email: "alice.brown@example.com",
  },
  {
    key: "2",
    name: "Bob Johnson",
    grade: "B",
    email: "bob.johnson@example.com",
  },
];

const coursesData = [
  { key: "1", title: "Algebra 101", teacher: "John Doe", duration: "3 months" },
  {
    key: "2",
    title: "Physics Basics",
    teacher: "Jane Smith",
    duration: "4 months",
  },
];

const columnsTeachers = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Subject", dataIndex: "subject", key: "subject" },
  { title: "Email", dataIndex: "email", key: "email" },
];

const columnsStudents = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Grade", dataIndex: "grade", key: "grade" },
  { title: "Email", dataIndex: "email", key: "email" },
];

const columnsCourses = [
  { title: "Title", dataIndex: "title", key: "title" },
  { title: "Teacher", dataIndex: "teacher", key: "teacher" },
  { title: "Duration", dataIndex: "duration", key: "duration" },
];

const handleAccept = () => {
  console.log("Request Accepted");
};

const handleReject = () => {
  console.log("Request Rejected");
};

const AdminPanel = () => {
  return (
    
    <Layout style={{ minHeight: "100vh" }}>
      
      <Layout className="mx-auto container">
        <Header className="bg-white shadow-md px-4 z-10">
          <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Admin" }]}
            className="text-gray-800"
          />
        </Header>

        <Content className="m-4">
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                key: "1",
                label: "Teachers",
                children: (
                  <Table dataSource={teachersData} columns={columnsTeachers} />
                ),
              },
              {
                key: "2",
                label: "Students",
                children: (
                  <Table dataSource={studentsData} columns={columnsStudents} />
                ),
              },
              {
                key: "3",
                label: "Courses",
                children: (
                  <Table dataSource={coursesData} columns={columnsCourses} />
                ),
              },
              {
                key: "4",
                label: "Teacher's Request",
                children: (
                  <div className="text-center py-8">
                    <p className="text-lg">Teacher's Request</p>
                    <div className="mt-4 flex justify-center gap-4">
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                        onClick={handleAccept}
                      >
                        Accept
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                        onClick={handleReject}
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </Content>
        <Footer className="text-center">Admin Panel AC</Footer>
      </Layout>
    </Layout>
  );
};

export default AdminPanel;
