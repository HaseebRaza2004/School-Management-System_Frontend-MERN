import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button";
import axios from "axios";
import { ApiRoutes } from "../Constant/Constant";
import { AuthContext } from "../Context/AuthContext";

function Courses() {
  const { user } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);

  // Get All Courses From DB
  useEffect(() => {
    axios.get(ApiRoutes.getAllCourses, { withCredentials: true })
      .then((res) => {
        setCourses(res.data.courses);
      })
      .catch((err) => {
        console.log("error in fetching courses =>", err);
      });
  }, []);

  return (
    <div className="container mx-auto">

    {/* add courses */}
      {(user?.role === "teacher" || user?.role === "admin") && (
        <div className="my-5">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Add course</h1>
            <Link to={"/addcourse"}>
              <Button label={"Add Course"} />
            </Link>
          </div>
        </div>
      )}

      {/* Courses */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto">
          {
            courses.map((course, index) => {
              return (
                <div
                  key={course._id}
                  className={`flex px-5 py-10 cursor-pointer flex-col md:flex-row items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                    }`}
                >
                  {/* Course Image */}
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img
                      className="object-cover w-[599px] rounded"
                      alt={course.title}
                      src={course.thumbnail}
                    />
                  </div>

                  {/* Course Content */}
                  <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl xl:text-4xl mb-2 lg:mb-5 xl:mb-6 font-semibold text-gray-900">
                      {course.title}
                    </h1>
                    <p className="mb-2 lg:mb-5 xl:mb-6 leading-relaxed">Teacher : {course.teacherId.name}</p>
                    <p className="mb-2 lg:mb-5 xl:mb-6 leading-relaxed">{course.subTitle}</p>

                    {/* Link to Course Details */}
                    <Link to={`/course/${course._id}`} className="text-white inline-block">
                      <Button label="Learn More" />
                    </Link>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </div >
  );
}

export default Courses;
