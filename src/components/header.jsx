import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Button from "./button";
import { AuthContext } from "../Context/AuthContext";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/user-graduate-solid.svg"
            alt="Site Logo"
            className="w-8 h-8"
          />
          <h1 className="font-bold text-3xl ml-2">
            Academia<span className="text-cyan-500">Connect</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-5">
          <Link to="/" className="hover:underline hover:text-gray-900">
            Home
          </Link>
          <Link to="/courses" className="hover:underline hover:text-gray-900">
            Courses
          </Link>
          <Link to="/teachers" className="hover:underline hover:text-gray-900">
            Teachers
          </Link>
          <Link to="/aboutus" className="hover:underline hover:text-gray-900">
            About Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            className="text-gray-900 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Sign-In Button */}
        <div className="hidden md:inline-flex">
          {
            user ? (
              <Link to={"/profile"} className="m-2">
                <img
                  className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src={user?.profilePhoto}
                  alt="Bordered avatar"
                />

              </Link>
            ) : (
              <Link to="/signup">
                <Button label={"SignIn"} />
              </Link>
            )
          }
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col p-5 space-y-4">
            <Link
              to="/"
              className="hover:underline hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="hover:underline hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              to="/teachers"
              className="hover:underline hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Teachers
            </Link>
            <Link
              to="/aboutus"
              className="hover:underline hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <div>
              {
                user ? (
                  <Link to={"/profile"} className="m-2">
                    <img
                      className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                      src={user?.profilePhoto}
                      alt="Bordered avatar"
                    />

                  </Link>
                ) : (
                  <Link to="/signup">
                    <Button label={"SignIn"} />
                  </Link>
                )
              }
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
