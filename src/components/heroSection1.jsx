import { Link } from "react-router-dom";
import Button from "./button";


function HeroSection1() {
    return (
        <section className=" relative text-gray-600 body-font ">
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center">
       
          <img
            className="absolute  inset-0 w-full h-full object-cover object-center opacity-80"
            alt="hero"
            src="/public/images/Rectangle 168.png"
          />
      
     
          <div className="relative z-10 text-center px-6 lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Take <span className="text-cyan-500">student experience</span> to the next level
            </h1>
            <p className="mb-8 leading-relaxed text-gray-100">
              Unlock your full potential with our expert instructors. Our online platform offers a dynamic and interactive learning experience, tailored to your needs. From personalized guidance to engaging coursework, we're committed to helping you achieve academic excellence. Join our vibrant community of learners today and embark on a transformative educational adventure.
            </p>
            <div className="flex flex-col gap-3 justify-center">
              <Link to="/signup">
              <button className="px-6 py-2 bg-cyan-500 text-white rounded-lg shadow-lg hover:bg-cyan-600 transition duration-300">
                Join Now
              </button>
              </Link>
              <Link to="/registerasateacher">
              <button className="px-6 py-2 bg-cyan-500 text-white rounded-lg shadow-lg hover:bg-cyan-600 transition duration-300">
                Join as a Teacher
              </button>
              </Link>
            
            </div>
          </div>
      
          {/* Dark Overlay for better text contrast */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      </section>
      
    )
};

export default HeroSection1;