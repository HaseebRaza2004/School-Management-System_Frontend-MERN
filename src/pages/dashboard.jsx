import { Outlet } from "react-router";
import Footer from "../components/footer";
import Header from "../components/header";

function Dashboard() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
};

export default Dashboard;