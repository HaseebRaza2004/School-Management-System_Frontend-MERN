import { useContext, useEffect } from "react";
import HeroSection1 from "../components/heroSection1";
import HeroSection2 from "../components/heroSection2";
import HeroSection3 from "../components/heroSection3";
import Statistics from "../components/statistics";
import HowItWorks from "../components/stepsHowItWorks";
import axios from "axios";
import Cookies from "js-cookie";
import { AuthContext } from "../Context/AuthContext";
import { BASE_URL } from "../Constant/Constant";

function Home() {
    const { setUser } = useContext(AuthContext);
    // get user info from db after login and save user id into cookies and set user in authcontext
    useEffect(() => {
        axios.get(`${BASE_URL}api/user`, { withCredentials: true })
            .then((res) => {
                Cookies.set('userId', res.data._id);
                setUser(res?.data);
            })
            .catch((err) => console.log("error in geting response", err.message));
    }, []);

    return (
        <div className="container mx-auto">
            <HeroSection1 />
            <Statistics />
            <HeroSection2 />
            <HeroSection3 />
            <HowItWorks />
        </div>
    )
};

export default Home;