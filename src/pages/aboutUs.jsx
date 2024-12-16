
function AboutUs() {
    return (
        <div className="container mx-auto">
            {/* Hero Section */}
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-cyan-500">
                            We're here to help those who teach. It's what brings us to work every day.
                        </h1>
                    </div>
                    <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6">
                        <img
                            className="object-cover object-center rounded-md"
                            alt="hero"
                            src="/public/images/10088.jpg"
                        />
                    </div>
                </div>
            </section>

            {/* Story Paragraphs */}
            <div className="mx-10 md:mx-16 lg:mx-24 xl:mx-24 text-gray-600 mb-20">
                <p className="mb-6">
                    At <span className="text-cyan-500">AcademiaConnect</span>, we've been providing educators across the world with high quality, trusted teaching and learning resources for over a decade now. They're all written and checked by our wonderful team of experienced educators, and there are hundreds of thousands of resources to download, with new ones added daily.
                </p>
                <p className="mb-6">
                    {`If you'd like to dive straight in and explore, a AcademiaConnect account unlocks a curriculum-wide library of over 900,000 resources, all available 24/7 and bursting with essential (and some not so essential!) teaching, planning and assessment materials.`}
                </p>
                <p className="mb-6">
                    Want to know more about what makes AcademiaConnect, AcademiaConnect? You've come to the right place - keep on reading for a rundown of our story, values, and what we're all about:
                </p>
                <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-black">The AcademiaConnect Story</h1>
                <h3 className="title-font text-1xl mb-6 font-medium text-cyan-500">Tiny office, big dreams.</h3>
                <p className="mb-6">
                    AcademiaConnect began life in 2010, in the back bedroom of a Sheffield home. It all started with a simple dream - helping those who teach.
                </p>
                <p className="mb-6">
                    Founders realised there weren't enough accessible, reliable and high-quality teaching resources out there. Susie was a teacher back then, and like lots of other educators, they often had to spend precious time making their own materials. It was clear things could be a lot simpler.
                </p>
                <p className="mb-6">
                    So, they got to work, Twinkling away in the evenings and on weekends, putting together teaching resources at home alongside their day jobs. By making these resources just once and sharing them with the education community, AcademiaConnect could free up time for educators and help them focus on what really matters - teaching our children.
                </p>
                <p className="mb-6">
                    {`AcademiaConnect has come a long way since then. From humble beginnings at home in Yorkshire, we're now a global leader in education resources (it still feels weird saying that!). We're not done yet, either. There's still lots of work to do, loads of educators to help, and we're always finding ways to improve.`}
                </p>
                <p className="mb-6">
                    Now supporting millions of educators across the World and in many countries around the world, our team is passionate about creating high-quality, low-cost teaching resources. We help educators stay connected and feel supported.
                </p>
            </div>
        </div>
    )
};

export default AboutUs;