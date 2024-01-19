import Analytics from "../../components/Analytics";
import Box from "../../components/Box";
import Feature from "../../components/Feature";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import NavBar from "../../components/NavBar";
import Service from "../../components/Service";
import Testimonial from "../../components/Testimonial";

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Box />
      <Service/>
      <Feature/>
      <Analytics/>
      <Testimonial/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
