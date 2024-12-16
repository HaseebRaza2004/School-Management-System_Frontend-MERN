import { Link } from "react-router-dom";
import TeacherList from "../components/teachersList"; // Ensure it returns the teacher array.

function Teachers() {
  const teacherList = TeacherList(); // TeacherList must return an array

  return (
    <section className="text-gray-600 body-font">
      <h1 className="text-center text-3xl font-semibold mt-16">
       Our Experienced Teachers Team.
      </h1>
      <div className="container px-5 py-24 mx-auto cursor-pointer">
        <div className="flex flex-wrap -m-4">
          {teacherList.map((teacher) => (
            <div key={teacher.id} className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md rounded-md">
              {/* Wrap the entire card content inside Link */}
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
