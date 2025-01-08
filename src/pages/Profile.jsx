import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { BASE_URL } from "../Constant/Constant";
import Cookies from "js-cookie";
import axios from "axios";
import { LogOut, Trash2, BookOpen, UserCircle } from "lucide-react";

function Profile() {
    const { user, setUser } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    // fetching course from DB according user
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const endpoint = user.role === "teacher"
                    ? `${BASE_URL}course/teacher/${user._id}`
                    : `${BASE_URL}course/student/${user._id}`;

                const response = await axios.get(endpoint, { withCredentials: true });

                if (response.status === 200) {
                    setCourses(response.data.courses);
                } else {
                    alert("Failed to fetch courses");
                }
            } catch (error) {
                console.error("Error fetching courses:", error);
                alert("Error fetching courses");
            } finally {
                setLoading(false);
            }
        };

        if (user?._id) {
            fetchCourses();
        }
    }, [user]);

    if (loading) return (<p>Loading...</p>)

    const logout = async () => {
        try {
            const response = await axios.get(`${BASE_URL}logout`, {
                withCredentials: true,
            });
            if (response.status === 200) {
                setUser(null);
                Cookies.set("userId", null);
                alert('Logout successful!');
                window.location.href = '/';
            }
        } catch (error) {
            console.error('Error during logout:', error);
            alert('Failed to log out. Please try again.');
        }
    };

    const deleteAccount = async (id) => {
        try {
            const response = await axios.delete(`${BASE_URL}users/${id}`, {
                withCredentials: true,
            });
            if (response.status === 200) {
                setUser(null);
                Cookies.set("userId", null);
                alert('Delete Account Successful!');
                window.location.href = '/';
            }
        } catch (error) {
            console.error('Error during deleting account:', error);
            alert('Failed to delete your account. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                {/* Profile Info */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="md:flex">
                        <div className="md:shrink-0 p-6 flex justify-center md:justify-start">
                            <div className="relative">
                                {user?.profilePhoto ? (
                                    <img
                                        className="h-48 w-48 rounded-full object-cover border-4 border-white shadow-lg"
                                        src={user.profilePhoto}
                                        alt={user.name}
                                    />
                                ) : (
                                    <UserCircle className="h-48 w-48 text-gray-400" />
                                )}
                                <span className="absolute bottom-2 right-2 px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
                                    {user?.role}
                                </span>
                            </div>
                        </div>
                        <div className="p-6 md:p-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">{user?.name}</h2>
                            <p className="text-gray-600 mb-4">{user?.email || "email@gmail.com"}</p>
                            <button
                                onClick={logout}
                                className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
                            >
                                <LogOut size={18} />
                                <span>Logout</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        {user?.role === "teacher" ? "My Created Courses" : "My Enrolled Courses"}
                    </h2>
                    <div className="grid gap-4">

                        {/* Course Card */}
                        {courses.map((course) => (
                            <div key={course?._id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">{`${course?.batch} - ${course?.title}`}</h3>
                                        <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                                            Active
                                        </span>
                                    </div>
                                    <button className="w-full sm:w-auto px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors duration-200">
                                        {user?.role === "teacher" ? "Delete Course" : "Leave Course"}
                                    </button>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                {/* Delete Account Section */}
                <div className="mt-12 bg-white rounded-lg shadow-md p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">Delete Account</h3>
                            <p className="text-gray-600 mt-1">This action cannot be undone.</p>
                        </div>
                        <button
                            onClick={() => deleteAccount(user._id)}
                            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
                        >
                            <Trash2 size={18} />
                            <span>Delete Account</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;