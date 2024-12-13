import HeroSection1 from "../components/heroSection1";
import HeroSection2 from "../components/heroSection2";
import HeroSection3 from "../components/heroSection3";
import Statistics from "../components/statistics";
import HowItWorks from "../components/stepsHowItWorks";

function Home() {
    return (
        <div className="container mx-auto">
            <Header/>
            <HeroSection1/>
            <Statistics/>
            <HeroSection2/>
            <HeroSection3/>
            <HowItWorks/>
        </div>
    )
};

export default Home;