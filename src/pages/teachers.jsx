import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import HeroSection4 from "../components/heroSection4";
import TeacherApplicationForm from "../components/TeacherApplicationForm";
import axios from "axios";
import { ApiRoutes } from "../Constant/Constant";

function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // fetch teachers from db
  useEffect(() => {
    axios.get(ApiRoutes.getAllApprovedTeachers, { withCredentials: true })
      .then((res) => {
        setTeachers(res.data.teachers);
      })
      .catch((err)=>{
        console.log("err in fetching teachers =>",err);
      })
  }, []);

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

        <h1 className="text-4xl font-semibold text-center mb-14">Our Experience Teachers Team</h1>

        <div className="flex flex-wrap -m-4">
          {teachers.map((data) => (
            <div
              key={data?._id}
              className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md rounded-md"
            >
              <Link to={`/teachers/${data?.userId?._id}`} className="block">
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt={data?.userId?.name}
                    className="object-cover object-center w-full h-full block"
                    src={data?.userId?.profilePhoto}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {data?.education}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {data?.userId?.name}
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">
                    Email: {data?.userId?.email}
                  </p>
                  <p className="text-gray-600 text-sm">Phone: {data?.contact}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
