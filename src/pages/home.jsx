import { useEffect } from "react";
import HeroSection1 from "../components/heroSection1";
import HeroSection2 from "../components/heroSection2";
import HeroSection3 from "../components/heroSection3";
import Statistics from "../components/statistics";
import HowItWorks from "../components/stepsHowItWorks";
import axios from "axios";

function Home() {

    useEffect(() => {
        axios.get(`http://localhost:4000/api/user`, { withCredentials: true })
            .then((res) => {
                console.log("response in frontend from db =>", res.data);
            })
            .catch((err) => console.log("error in geting response", err));
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