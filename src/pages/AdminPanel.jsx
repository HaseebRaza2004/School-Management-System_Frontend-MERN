import React, { useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb, Table, Tabs, Modal, Button } from 'antd';
import 'antd/dist/reset.css';
import axios from 'axios';
import { ApiRoutes, BASE_URL } from '../Constant/Constant';

const { Header, Content, Footer, Sider } = Layout;

const teacherRequestsData = [
  { key: '1', name: 'Michael Green', qualification: 'MSc Physics', email: 'michael.green@example.com' },
  { key: '2', name: 'Sophia White', qualification: 'BSc Biology', email: 'sophia.white@example.com' },
];

const coursesData = [
  { key: '1', title: 'Algebra 101', createdBy: 'John Doe', duration: '3 months' },
  { key: '2', title: 'Physics Basics', createdBy: 'Jane Smith', duration: '4 months' },
];

const AdminPanel = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [teachersData, setTeachersData] = useState([]);
  const [studentsData, setStudentsData] = useState([]);

  // get teachers info from db
  useEffect(() => {
    axios
      .get(ApiRoutes.getAllApprovedTeachers, { withCredentials: true })
      .then((res) => {
        const fetchedTeachers = res.data.teachers.map((teacher) => ({
          key: teacher._id, // Use _id as unique key for rows
          name: teacher.userId.name,
          email: teacher.userId.email,
          contact: teacher.contact,
          education: teacher.education,
          skills: teacher.skills,
          specialistSubject: teacher.specialistSubject,
          workExperience: teacher.workExperience,
        }));
        setTeachersData(fetchedTeachers);
      })
      .catch((err) => {
        console.error("Error in fetching teachers =>", err);
      });
  }, []);

  // delete teacher from db
  const deleteTeacher = async (requestId, status) => {
    try {
      const response = await axios.patch(`${BASE_URL}request/routes/Requests/${requestId}`, { status }); // Update API endpoint
      // Update the local state with the updated request
      setTeachersData((prevRequests) =>
        prevRequests.map((request) =>
          request._id === requestId ? { ...request, status } : request
        )
      );
      window.location.reload("/adminpanel");
    } catch (error) {
      console.error('Error updating request status:', error);
    }
  };

  // Get All Students from db
  useEffect(() => {
    axios.get(ApiRoutes.getAllStudents, { withCredentials: true })
      .then((res) => {
        const fetchedStudents = res.data.students.map((student) => ({
          key: student._id, // Use _id as unique key for rows
          name: student.name,
          email: student.email,
          enrolledCourses: student.enrolledCourses.length
        }));
        setStudentsData(fetchedStudents);
      })
      .catch((err) => {
        console.log("error in fetching students", err);
      });
  }, [studentsData]);

  // delete student
  const deleteStudent = async ( id ) => {
    try {
      const res = await axios.delete(`${BASE_URL}users/${id}`, { withCredentials: true });
      setStudentsData([]);
    } catch (error) {
      console.log("error in deleting student", error);
    };
  };

  const showModal = (content) => {
    setModalContent(content);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalContent(null);
  };

  const teachersColumns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Skills', dataIndex: 'skills', key: 'skills' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button onClick={() => showModal(
          <div>
            <h3>Teacher Information</h3>
            <p><strong>Name:</strong> {record.name}</p>
            <p><strong>Email:</strong> {record.email}</p>
            <p><strong>Skills:</strong> {record.skills}</p>
            <p><strong>Contact:</strong> {record.contact}</p>
            <p><strong>Education:</strong> {record.education}</p>
            <p><strong>Specialist Subject:</strong> {record.specialistSubject}</p>
            <p><strong>Work Experience:</strong> {record.workExperience} years</p>
            <Button type="primary" danger onClick={() => { deleteTeacher(record.key, 'rejected'); closeModal() }}>Kick Out Teacher</Button>
          </div>
        )}>Teacher's Info</Button>
      ),
    },
  ];

  const studentsColumns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Enrolled Courses', dataIndex: 'enrolledCourses', key: 'enrolledCourses' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button type="primary" danger onClick={() => deleteStudent(record.key)}>Kick Student</Button>
      ),
    },
  ];

  const coursesColumns = [
    { title: 'Course Title', dataIndex: 'title', key: 'title' },
    { title: 'Created By', dataIndex: 'createdBy', key: 'createdBy' },
    { title: 'Duration', dataIndex: 'duration', key: 'duration' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button onClick={() => showModal(
          <div>
            <h3>Course Information</h3>
            <p>Title: {record.title}</p>
            <p>Created By: {record.createdBy}</p>
            <p>Duration: {record.duration}</p>
            <Button type="primary" danger onClick={closeModal}>Delete Course</Button>
          </div>
        )}>See Details</Button>
      ),
    },
  ];

  const teacherRequestsColumns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Qualification', dataIndex: 'qualification', key: 'qualification' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button onClick={() => showModal(
          <div>
            <h3>Teacher Request Details</h3>
            <p>Name: {record.name}</p>
            <p>Email: {record.email}</p>
            <p>Qualification: {record.qualification}</p>
            <Button type="primary" onClick={closeModal}>Accept</Button>
            <Button type="primary" danger onClick={closeModal} style={{ marginLeft: '10px' }}>Reject</Button>
          </div>
        )}>See Details</Button>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <div className="text-white text-center font-bold py-4">Admin Panel</div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={[
          { key: '1', label: 'Dashboard' },
          { key: '2', label: 'Teachers' },
          { key: '3', label: 'Teacher Requests' },
          { key: '4', label: 'Students' },
          { key: '5', label: 'Courses' },
        ]} />
      </Sider>
      <Layout>
        <Header className="bg-white shadow-md px-4">
          <Breadcrumb items={[
            { label: 'Home' },
            { label: 'Admin' },
          ]} />
        </Header>
        <Content className="m-4">
          <Tabs defaultActiveKey="1" items={[
            { key: '1', label: 'Teachers', children: <Table dataSource={teachersData} columns={teachersColumns} /> },
            { key: '2', label: 'Students', children: <Table dataSource={studentsData} columns={studentsColumns} /> },
            { key: '3', label: 'Courses', children: <Table dataSource={coursesData} columns={coursesColumns} /> },
            { key: '4', label: 'Teacher Requests', children: <Table dataSource={teacherRequestsData} columns={teacherRequestsColumns} /> },
          ]} />
        </Content>
        <Footer className="text-center">Admin Panel</Footer>
      </Layout>
      <Modal open={modalVisible} onCancel={closeModal} footer={null}>
        {modalContent}
      </Modal>
    </Layout>
  );
};

export default AdminPanel;
