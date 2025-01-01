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

    // delete Account Function
    const deleteAccount = async (id) => {
        try {
            // Send a request to the backend to delete the user from db
            const response = await axios.delete(`${BASE_URL}users/${id}`, {
                withCredentials: true, // Include cookies in the request
            });
            // Handle the response
            if (response.status === 200) {
                setUser(null);
                Cookies.set("userId", null);
                alert('delete Account Successful!');
                // Redirect to login page or update UI
                window.location.href = '/';
            }
        } catch (error) {
            console.error('Error during deleting account:', error);
            alert('Failed to delete your account. Please try again.');
        }
    };

    return (
        <div className="container mx-auto">
            <div className="flex flex-col">
                <div className="flex items-center mt-10">
                    <img
                        className="w-52 h-52 ml-6 shadow-md rounded-md"
                        src={user?.profilePhoto}
                        alt="Profile Image"
                    />
                    <div className="ml-10">
                        <h1 className="text-3xl font-semibold my-3">{user?.name}</h1>
                        <p className="my-3 text-xl">{user?.email || "email@gmail.com"}</p>
                        <p className="my-3 text-lg">{user?.role}</p>
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
                <div className="flex flex-col w-full mb-10">
                    <div className="flex justify-between items-center w-full py-4 px-4 my-2">
                        <div className="text-xl font-medium">logout Your Acccount:</div>
                        <div className="flex items-center">
                            <button
                                onClick={logout}
                                type="button"
                                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            >
                                logout
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-full py-4 px-4 my-2">
                        <div className="text-xl font-medium">Delete Your Acccount Permanently:</div>
                        <div className="flex items-center">
                            <button
                                onClick={() => deleteAccount(user._id)}
                                type="button"
                                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            >
                                Delete Account
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Profile;