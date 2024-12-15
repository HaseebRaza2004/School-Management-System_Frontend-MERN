import Header from "../components/header";

function Courses() {
  const sections = [
    {
      title: "Welcome to SBA",
      description:
        "Lorem ipsum dolor sit amet cubilia letius non himenaeos mollis sed praesent. Habitant metus malesuada in integer ut porttitor nullam magnis dis. Tempus dictum mus est molestie ipsum ullamcorper dapibus montes sagittis. Nostra urna ex nisl habitasse sociosqu.",
      image:
        "/public/images/hands using laptop side 1 (1).png",
    },
    {
      title: "Foundation and Management",
      description:
        "Lorem ipsum dolor sit amet cubilia letius non himenaeos mollis sed praesent. Habitant metus malesuada in integer ut porttitor nullam magnis dis. Tempus dictum mus est molestie ipsum ullamcorper dapibus montes sagittis. Nostra urna ex nisl habitasse sociosqu.",
      image:
        "/public/images/hands using laptop side 1.png",
    },
  ];
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`flex px-5 py-24 md:flex-row flex-col items-center ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img
                  className="object-cover object-center"
                  alt="hero"
                  src={section.image}
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  {section.title}
                </h1>
                <p className="mb-8 leading-relaxed">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Courses;
