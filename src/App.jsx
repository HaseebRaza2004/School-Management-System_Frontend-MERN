import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import Teachers from "./pages/teachers";
import Courses from "./pages/courses";
import AboutUs from "./pages/aboutUs";
import SignUp from "./pages/Auth/SignUp";
import CourseDetail from "./pages/CourseDetail";
import TeacherDetail from "./pages/TeacherDetail";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFoundPage";
import AdminPanel from "./pages/AdminPanel";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import TeacherApplicationForm from "./components/TeacherApplicationForm";
import CourseAdditionForm from "./components/CourseAddForm";


function App() {

  const { user } = useContext(AuthContext);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/teachers/:id" element={<TeacherDetail />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/signup" element={user ? <Navigate to={"/"} /> : <SignUp />} />
            <Route path="/adminpanel" element={<AdminPanel />} />
            <Route path="/profile" element={user ? <Profile /> : <Navigate to={"/signup"} />} />
            <Route path="/addteacher" element={user ? <TeacherApplicationForm /> : <Navigate to={"/signup"} />} />
            <Route path="/addcourse" element={user ? <CourseAdditionForm /> : <Navigate to={"/signup"} />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;  
