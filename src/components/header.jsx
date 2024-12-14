import { Link } from "react-router-dom";
import Button from "./button";

function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src="/user-graduate-solid.svg" 
            alt="Site Logo"
            className="w-10 h-10"
          />
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:underline hover:text-gray-900">
            Home
          </Link>
          <Link to="/courses" className="mr-5 hover:underline hover:text-gray-900">
            Courses
          </Link>
          <Link to="/teachers" className="mr-5 hover:underline hover:text-gray-900">
            Teachers
          </Link>
          <Link to="/aboutus" className="mr-5 hover:underline hover:text-gray-900">
            About Us
          </Link>
        </nav>
        <div className="inline-flex items-center text-base mt-4 md:mt-0">
          <Button label={"Login"} />
        </div>
      </div>
    </header>
  )
};

export default Header;