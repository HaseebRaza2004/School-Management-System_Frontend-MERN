import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <div className=" bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white py-8 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div>
        <img 
            src="/user-graduate-solid.svg"
            alt="Logo"
            className="h-8 mb-3"
          />
          <h4 className="font-bold mb-3">Let's Get Social</h4>
          <ul className="flex space-x-3 mx-2 mb-3 justify-center">
            <a href="#" className="hover:text-[#B55D51]">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#B55D51]">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#B55D51]">
              <BsTwitterX />
            </a>
          </ul>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h4 className="font-bold mb-2">My Account</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Sign In
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Monitor Progress
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Company Success
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  My Tasks
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">About SBA</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Company Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our Success
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Meet the Experts
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Support</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Join our mailing list
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Subscribe
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>© 2025. All Rights Reserved.</p>
      </div>
    </div>

  )
}

export default Footer;