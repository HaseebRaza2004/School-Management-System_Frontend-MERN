import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { BASE_URL } from "../Constant/Constant";
import Cookies from "js-cookie";
import axios from "axios";

function Profile() {
    const { user, setUser } = useContext(AuthContext);

    // logout function
    const logout = async () => {
        try {
            // Send a request to the backend to log out the user
            const response = await axios.get(`${BASE_URL}logout`, {
                withCredentials: true, // Include cookies in the request
            });
            // Handle the response
            if (response.status === 200) {
                setUser(null);
                Cookies.set("userId", null);
                alert('Logout successful!');
                // Redirect to login page or update UI
                window.location.href = '/';
            }
        } catch (error) {
            console.error('Error during logout:', error);
            alert('Failed to log out. Please try again.');
        }
    };

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
                        <h1 className="text-2xl font-semibold my-3">{user?.name}</h1>
                        <p className="my-3">{user?.email || "email@gmail.com"}</p>
                        <p className="my-3">{user?.role}</p>
                    </div>
                </div>
                <div className="flex justify-center flex-col my-10">
                    <h1 className="text-4xl font-bold my-10">
                        {
                            user?.role === "teacher" ? "My Classes" : "My Coursess"
                        }
                    </h1>
                    <div className="flex flex-col ">

                        <div className="flex justify-between items-center rounded-md shadow-md py-4 px-4 my-2">
                            <div className="text-xl font-medium">Batch - Course Name</div>
                            <div className="flex items-center gap-4">
                                <h1>Status</h1>
                                <button className="py-2 px-4 border rounded-md bg-green-300 hover:bg-green-400">
                                    {
                                        user?.role === "teacher" ? "Delete Course" : "Leave Course"
                                    }
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex justify-end mb-10">
                    <button
                    onClick={logout}
                        type="button"
                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                        logout
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Profile;