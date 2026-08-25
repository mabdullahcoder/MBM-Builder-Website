import Construction from "../components/Construction"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import Vision from "../components/Vision"
import { Service } from "../components/Service"
import { Footer } from "../components/Footer"

export const Home = () => {

    return (
        <>
            <Header />
            <HeroSection />
            <Construction />
            <Service />
            <Vision />
            <Footer />
        </>
    )
}
