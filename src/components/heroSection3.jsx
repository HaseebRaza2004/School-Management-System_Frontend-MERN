import { Link } from "react-router-dom";
import Button from "./button";

function HeroSection3() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Elevate Your Skills, Empower Your Future
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Discover a world of knowledge and expertise with our diverse range of courses. From foundational to advanced, our programs are designed to equip you with the skills you need to succeed. Learn from industry experts, engage in interactive learning experiences, and earn certifications that will propel your career to new heights.
                    </p>
                    <div className="flex justify-center">
                        <Link to={"/courses"}>
                            <Button label={"Find Courses"} />
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded-md"
                        alt="hero"
                        src="https://images.unsplash.com/photo-1478104718532-efe04cc3ff7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvdXJzZXxlbnwwfHwwfHx8MA%3D%3D"
                    />
                </div>
            </div>
        </section>

    )
};

export default HeroSection3;