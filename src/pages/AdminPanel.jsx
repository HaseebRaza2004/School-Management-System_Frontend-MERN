// Import necessary libraries
import React from 'react';
import { Layout, Menu, Breadcrumb, Table, Tabs } from 'antd';
import 'antd/dist/reset.css';

const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;

const teachersData = [
    { key: '1', name: 'John Doe', subject: 'Math', email: 'john.doe@example.com' },
    { key: '2', name: 'Jane Smith', subject: 'Science', email: 'jane.smith@example.com' },
];

const studentsData = [
    { key: '1', name: 'Alice Brown', grade: 'A', email: 'alice.brown@example.com' },
    { key: '2', name: 'Bob Johnson', grade: 'B', email: 'bob.johnson@example.com' },
];

const coursesData = [
    { key: '1', title: 'Algebra 101', teacher: 'John Doe', duration: '3 months' },
    { key: '2', title: 'Physics Basics', teacher: 'Jane Smith', duration: '4 months' },
];

const columnsTeachers = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Subject', dataIndex: 'subject', key: 'subject' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
];

const columnsStudents = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Grade', dataIndex: 'grade', key: 'grade' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
];

const columnsCourses = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Teacher', dataIndex: 'teacher', key: 'teacher' },
    { title: 'Duration', dataIndex: 'duration', key: 'duration' },
];

const AdminPanel = () => {
    return (
        <div className=''>
   <Layout className='' style={{ minHeight: '100vh' }}>
            <Sider className='' collapsible>
                <div className="text-white text-center font-bold py-4">Admin Panel</div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">Dashboard</Menu.Item>
                    <Menu.Item key="2">Teachers</Menu.Item>
                    <Menu.Item key="3">Students</Menu.Item>
                    <Menu.Item key="4">Courses</Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header className="bg-white shadow-md px-4">
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Admin</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                <Content className="m-4">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Teachers" key="1">
                            <Table dataSource={teachersData} columns={columnsTeachers} />
                        </TabPane>
                        <TabPane tab="Students" key="2">
                            <Table dataSource={studentsData} columns={columnsStudents} />
                        </TabPane>
                        <TabPane tab="Courses" key="3">
                            <Table dataSource={coursesData} columns={columnsCourses} />
                        </TabPane>
                        <TabPane tab="Drop Courses" key="4">
                            <div className="text-center py-8">
                                <p className="text-lg">Manage dropped courses here</p>
                            </div>
                        </TabPane>
                    </Tabs>
                </Content>
                <Footer className="text-center">Admin Panel AC</Footer>
            </Layout>
        </Layout>
        </div>
     
    );
};

export default AdminPanel;
