
const devUrl = "http://localhost:4000/";
const prodUrl = "https://school-management-system-backend-mern.onrender.com/";

export const BASE_URL = devUrl;

export const ApiRoutes = {
    // users
    getAllUsers: BASE_URL + "users",
    getSingleUserById: BASE_URL + "users/:id",
    updateUserById: BASE_URL + "users/:id",
    deleteUserById: BASE_URL + "/users/:id",

    // courses
    getAllCourses: BASE_URL + "course",
    getSingleCourseById: BASE_URL + "course/:id",
    createCourse: BASE_URL + "course",
    updateCoursebyId: BASE_URL + "course/:id",
    deleteCoursebyId: BASE_URL + "course/:id",

    // requests
    getAllRequests: BASE_URL + "request",
    teacherRequest: BASE_URL + "request/apply",
    approvedOrRejectRequest: BASE_URL + "request/routes/Requests",
}; 