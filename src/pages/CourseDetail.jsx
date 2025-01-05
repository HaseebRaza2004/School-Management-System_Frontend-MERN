import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../Constant/Constant";
import NotFound from "./NotFoundPage";
import { AuthContext } from "../Context/AuthContext";
import EnrolledStudents from "../components/EnrolledStudents";

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [enrolling, setEnrolling] = useState(false);
  const { user } = useContext(AuthContext);

  // fetch single course detail from db
  useEffect(() => {
    axios.get(`${BASE_URL}course/${id}`, { withCredentials: true })
      .then((res) => {
        setCourse(res.data.course);
      })
      .catch((err) => {
        setNotFound(true);
      });
  }, [id]);

  const handleEnroll = async () => {
    if (!user) {
      navigate("/signup");
      return;
    }

    try {
      setEnrolling(true);
      const response = await axios.post(
        `${BASE_URL}course/${id}/enroll`,
        { userId: user._id }, // Send userId in request body
        { withCredentials: true }
      );

      if (!response.data.error) {
        // Update local state
        setCourse(prev => ({
          ...prev,
          studentsId: [...(prev.studentsId || []), user._id]
        }));
        alert("Successfully enrolled in course!");
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Failed to enroll in course";
      alert(errorMessage);
    } finally {
      setEnrolling(false);
    }
  };

  const isEnrolled = course?.studentsId?.includes(user?._id);

  return (
    <>
      {
        notFound ? (
          <NotFound />
        ) : (
          <div className="font-sans container mx-auto">
            <div
              className="relative bg-cover bg-center text-white px-6 py-16 md:py-24 rounded-t-lg"
              style={{ backgroundImage: `url(${course?.thumbnail})` }}
            >
              <div className="max-w-6xl mx-auto bg-gradient-to-r from-cyan-800 to-transparent rounded-md p-6">
                <h1 className="text-4xl font-bold mb-4">{course?.title}</h1>
                <p className="text-gray-200 mt-3 md:w-3/4">{course?.subTitle}</p>
                <p className="text-gray-200 mb-6 md:w-3/4">Teacher : {course?.teacherId?.name}</p>
                <div className="flex flex-wrap gap-4">
                  {isEnrolled ? (
                    <button
                      disabled
                      className="bg-green-500 text-white px-6 py-2 rounded cursor-not-allowed"
                    >
                      Enrolled
                    </button>
                  ) : (
                    <button
                      onClick={handleEnroll}
                      disabled={enrolling}
                      className={`${enrolling
                        ? "bg-orange-400 cursor-wait"
                        : "bg-orange-500 hover:bg-orange-600"
                        } text-white px-6 py-2 rounded`}
                    >
                      {enrolling ? "Enrolling..." : "Enroll"}
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto my-8 px-6  rounded-md shadow-md bg-white">
              <h2 className="text-2xl font-bold mb-6 text-gray-700">Course Details</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
                <div className="border p-4 rounded shadow-sm">
                  <p className="text-lg font-bold">Duration</p>
                  <p className="text-gray-600">{course?.courseDuration}</p>
                </div>
                <div className="border p-4 rounded shadow-sm">
                  <p className="text-lg font-bold">Level</p>
                  <p className="text-gray-600">{course?.courseLevel}</p>
                </div>
                <div className="border p-4 rounded shadow-sm">
                  <p className="text-lg font-bold">Timing</p>
                  <p className="text-gray-600">{course?.courseTimming}</p>
                </div>
                <div className="border p-4 rounded shadow-sm">
                  <p className="text-lg font-bold">Start from</p>
                  <p className="text-gray-600">{course?.activeDate}</p>
                </div>
                <div className="border p-4 rounded shadow-sm">
                  <p className="text-lg font-bold">Ends On</p>
                  <p className="text-gray-600">{course?.endDate}</p>
                </div>
                <div className="border p-4 rounded shadow-sm">
                  <p className="text-lg font-bold">Batch</p>
                  <p className="text-gray-600">{course?.batch}</p>
                </div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-8 bg-gray-50 rounded-b-lg shadow">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{course?.description}</p>
            </div>
            {/* After the course description div */}
            {/* {user?.role === 'teacher' || user?.role === 'admin' ? (
              <EnrolledStudents students={course?.studentsId || []} />
            ) : null} */}
          </div>
        )
      }
    </>
  );
};

export default CourseDetail;
