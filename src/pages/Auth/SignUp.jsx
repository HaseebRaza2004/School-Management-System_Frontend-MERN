import Button from "../../components/button"


function SignUp() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
                <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img
                        className="object-cover object-center rounded-md "
                        alt="hero"
                        src="/public/images/11672021_13264.jpg"
                    />
                </div>
                <div className="lg:flex-grow md:w-1/4 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <div className="flex items-center flex-col w-full">
                        <h1 className="mb-10 text-3xl font-bold"> Welcome To <span className="text-cyan-500">AcademiaConnect</span></h1>
                        <button
                            onClick={()=>(window.location.href = 'http://localhost:4000/auth/google')}
                            type="button"
                            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-6 w-full"
                        >
                            Continue With Google
                        </button>
                        <button
                        onClick={()=>(window.location.href = 'http://localhost:4000/auth/facebook')}
                            type="button"
                            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-6 w-full"
                        >
                            Continue With Facebook
                        </button>
                        <button
                        onClick={()=>(window.location.href = 'http://localhost:4000/auth/github')}
                            type="button"
                            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-6 w-full"
                        >
                            Continue With Github
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp