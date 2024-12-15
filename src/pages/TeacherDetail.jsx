import React from "react";
import { useParams } from "react-router-dom";
import TeacherList from "../components/teachersList";
import Button from "../components/button";

function TeacherDetail() {
  const { id } = useParams();
  const teacherList = TeacherList(); 
  const teacher = teacherList.find((t) => t.id === parseInt(id)); 

  if (!teacher) {
    return <div className="text-center text-2xl mt-10">Teacher Not Found</div>;
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt={teacher.name}
          src={teacher.image || "https://dummyimage.com/720x600"}
        />
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {teacher.name}
          </h1>
          <h3 className="text-xl text-indigo-500 mb-2">{teacher.subject}</h3>
          <p className="mb-8 leading-relaxed text-gray-700">
            {teacher.description ||
              "This teacher specializes in providing excellent subject knowledge and personalized learning experiences."}
          </p>
          <div className="flex w-full justify-center items-end">
            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
              <label
                htmlFor="email-field"
                className="leading-7 text-sm text-gray-600"
              >
                Contact {teacher.name}
              </label>
              <input
                type="email"
                id="email-field"
                name="email-field"
                placeholder="Enter your email"
                className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
           <Button
           label="Contact"
           />
          </div>
          <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
            Get in touch with {teacher.name} for your learning journey.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TeacherDetail;
