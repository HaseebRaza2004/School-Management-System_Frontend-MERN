import { Link } from "react-router-dom";
import Button from "./button";

function HeroSection4() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col justify-between  gap-9 items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-md"
            alt="hero"
            src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Become an Educator, Inspire Minds, Shape Futures
          </h1>
          <p className="mb-8 leading-relaxed">
            Become a part of our educational community by joining as a teacher!
            Share your knowledge, inspire students, and create impactful
            learning experiences. With features to showcase your specialties and
            manage courses, our platform empowers educators to focus on what
            they do best—teaching. Apply now to start your journey with us!
          </p>
          <div className="flex justify-center">
            <Link to={"/addteacher"}>
              <Button label={"Become A Teacher"} />
            </Link>
          </div>
        </div>
       
      </div>
    </section>
  );
}

export default HeroSection4;
