import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../Constant/Constant";

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState([]);

  // fetch single course detail from db
  useEffect(() => {
    axios.get(`${BASE_URL}course/${id}`, { withCredentials: true })
      .then((res) => {
        setCourse(res.data.course);
      })
      .catch((err) => {
        console.log("err in course detail page =>", err);
      })
  }, []);

  if (!course) {
    return (
      <div className="text-center mt-16">
        <h1 className="text-2xl font-bold text-red-500">Course Not Found</h1>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    );
  };

  return (
    <div className="font-sans container mx-auto">
      <div
        className="relative bg-cover bg-center text-white px-6 py-16 md:py-24 rounded-t-lg"
        style={{ backgroundImage: `url(${course.thumbnail})` }}
      >
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-cyan-800 to-transparent rounded-md p-6">
          <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
          <p className="text-gray-200 mb-6 md:w-3/4">{course.subTitle}</p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded">
              Enroll
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-8 px-6  rounded-md shadow-md bg-white">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">Course Details</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
          <div className="border p-4 rounded shadow-sm">
            <p className="text-lg font-bold">Duration</p>
            <p className="text-gray-600">{`${course.courseDuration} Months`}</p>
          </div>
          <div className="border p-4 rounded shadow-sm">
            <p className="text-lg font-bold">Level</p>
            <p className="text-gray-600">{course.courseLevel}</p>
          </div>
          <div className="border p-4 rounded shadow-sm">
            <p className="text-lg font-bold">Timing</p>
            <p className="text-gray-600">{course.courseTimming}</p>
          </div>
          <div className="border p-4 rounded shadow-sm">
            <p className="text-lg font-bold">Fees</p>
            <p className="text-gray-600">{course.fees}</p>
          </div>
          <div className="border p-4 rounded shadow-sm">
            <p className="text-lg font-bold">Start from</p>
            <p className="text-gray-600">{course.activeDate}</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 bg-gray-50 rounded-b-lg shadow">
        <h2 className="text-2xl font-bold mb-4">About Module</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
      </div>
    </div>
  );
};

export default CourseDetail;
