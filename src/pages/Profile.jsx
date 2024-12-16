
function Profile() {

    const role = "student";
    
    return (
        <div className="container mx-auto">
            <div className="flex flex-col">
                <div className="flex items-center mt-10">
                    <img
                        className="w-52 h-52 ml-6 shadow-md rounded-md"
                        src="https://img.freepik.com/premium-vector/police-vector-illustration-officer-policeman-cop-law-security-uniform-patrol-enforcement_1013341-141655.jpg?semt=ais_hybrid"
                        alt="Profile Image"
                    />
                    <div className="ml-6">
                        <h1 className="text-2xl font-semibold my-3">Name</h1>
                        <p className="my-3">email@gmail.com</p>
                        <p className="my-3">education</p>
                    </div>
                </div>
                <div className="flex justify-center flex-col my-10">
                    <h1 className="text-4xl font-bold my-10">
                        {
                            role === "teacher" ? "My Classes" : "My Coursess"
                        }
                    </h1>
                    <div className="flex flex-col ">

                        <div className="flex justify-between items-center rounded-md shadow-md py-4 px-4 my-2">
                            <div className="text-xl font-medium">Batch - Course Name</div>
                            <div className="flex items-center gap-4">
                                <h1>Status</h1>
                                <button className="py-2 px-4 border rounded-md bg-green-300 hover:bg-green-400">
                                    {
                                        role === "teacher" ? "Delete Course" : "Leave Course"
                                    }
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;