import Button from "./button";


function HeroSection1() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
                <img
                    className="lg:w-3/4 md:w-3/4 w-5/6 mb-10 object-cover object-center rounded-md"
                    alt="hero"
                    src="https://plus.unsplash.com/premium_photo-1664104722370-e90cba771a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fG9ubGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww"
                />
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Take <span className="text-cyan-500">student experience</span> to the next level
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Unlock your full potential with our expert instructors. Our online platform offers a dynamic and interactive learning experience, tailored to your needs. From personalized guidance to engaging coursework, we're committed to helping you achieve academic excellence. Join our vibrant community of learners today and embark on a transformative educational adventure.
                    </p>
                    <div className="flex justify-center">
                        <Button label="Join Now" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HeroSection1;