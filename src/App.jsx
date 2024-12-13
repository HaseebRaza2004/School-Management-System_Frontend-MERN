import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import Teachers from "./pages/teachers";
import Courses from "./pages/courses";
import AboutUs from "./pages/aboutUs";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/aboutUs" element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;  