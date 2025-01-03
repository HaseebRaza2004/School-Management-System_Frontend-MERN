import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button";
import axios from "axios";
import { ApiRoutes } from "../Constant/Constant";

function Courses() {
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
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    {course.title}
                  </h1>
                  <p className="mb-8 leading-relaxed">{course.subTitle}</p>

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
  );
}

export default Courses;
