import Navbar from "../components/Navbar";
import LandingPage from "../components/LandingPage";
import AboutMeSection from "../components/AboutMeSection";
import SkillsSection from "../components/SkillsSection";
import ContactMeSection from "../components/ContactMeSection";
import Separator from "../components/UI/Separator";

export default function Home() {
    return (
        <>
            <Navbar/>
            <LandingPage/>
            <Separator classProp={"my-20"}/>
            <AboutMeSection/>
            <Separator classProp={"my-20"}/>
            <SkillsSection/>
            <Separator classProp={"my-20"}/>
            <ContactMeSection/>
        </>
    )
}
