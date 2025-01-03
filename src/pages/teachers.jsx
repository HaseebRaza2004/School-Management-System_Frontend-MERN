import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "antd";
import TeacherList from "../components/teachersList";
import HeroSection4 from "../components/heroSection4";
import TeacherApplicationForm from "./TeacherApplicationForm";

function Teachers() {
  const teacherList = TeacherList();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="text-gray-600 body-font">
      <HeroSection4 showModal={showModal} />

      <div className="container px-5 py-24 mx-auto cursor-pointer shadow-lg rounded-lg mt-6">
        <div className="text-center mb-8">
          <Modal
            title="Teacher Application Form"
            open={isModalOpen}
            onCancel={handleCancel}
            footer={null}
          >
            <TeacherApplicationForm />
          </Modal>
        </div>

        <div className="flex flex-wrap -m-4">
          {teacherList.map((teacher) => (
            <div
              key={teacher.id}
              className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md rounded-md"
            >
              <Link to={`/teachers/${teacher.id}`} className="block">
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt={teacher.name}
                    className="object-cover object-center w-full h-full block"
                    src={teacher.image || "https://dummyimage.com/420x260"}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {teacher.subject}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {teacher.name}
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">
                    Email: <a href={`mailto:${teacher.email}`}>{teacher.email}</a>
                  </p>
                  <p className="text-gray-600 text-sm">Phone: {teacher.phone}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Teachers;
