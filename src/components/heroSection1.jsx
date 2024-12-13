import Button from "./button";


function HeroSection1() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
                <img
                    className="lg:w-3/4 md:w-3/4 w-5/6 mb-10 object-cover object-center rounded-md"
                    alt="hero"
                    src="https://img.icons8.com/wired/64/students.png"
                />
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Take <span className="text-cyan-500">student experience</span> to the next level
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste laboriosam tempora, voluptate similique ab soluta nobis saepe possimus blanditiis veritatis expedita cupiditate deserunt rem, deleniti molestias recusandae vel distinctio dolorem?
                    </p>
                    <div className="flex justify-center">
                       <Button label="Join Now"/>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HeroSection1;