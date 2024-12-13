import { Link } from "react-router-dom";
import Button from "./button";

function HeroSection2() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img
                        className="object-cover object-center rounded-md "
                        alt="hero"
                        src="https://plus.unsplash.com/premium_photo-1663011360192-84994c8428c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGV4cGVyaWVtY2UlMjB0ZWFjaGVyc3xlbnwwfHwwfHx8MA%3D%3D"
                    />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Elevate Your Learning Experience
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Ready to unlock your full potential? Our expert instructors are here to guide you on an exciting educational journey. With our innovative online platform, you'll enjoy personalized attention, engaging coursework, and flexible learning options. Join our vibrant community of learners today and achieve academic excellence from the comfort of your own home.
                    </p>
                    <div className="flex justify-center">
                        <Link to={"/teachers"}>
                        <Button label={"Find Teachers"} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HeroSection2;