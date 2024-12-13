import Header from "../components/header";
import Home from "./home";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

function Dashboard() {
    return (
        <>
            <Header />
            <Home />
            <Footer />
            <Outlet/>
        </>
    )
};

export default Dashboard;