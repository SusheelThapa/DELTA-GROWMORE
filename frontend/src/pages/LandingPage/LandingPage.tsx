// Importing necessary components from their respective paths
import Box from "../../components/Box";
import Feature from "../../components/Feature";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import NavBar from "../../components/NavBar";
import Service from "../../components/Service";
import Testimonial from "../../components/Testimonial";

// Functional component representing the landing page
const LandingPage = () => {
  return (
    <div>
      {/* Navigation bar component */}
      <NavBar />

      {/* Hero section component */}
      <Hero />

      {/* Box component, which might contain additional information or features */}
      <Box />

      {/* Service section component, showcasing various services or features */}
      <Service />

      {/* Feature section component, highlighting key features or aspects */}
      <Feature />

      {/* Testimonial section component, displaying user testimonials or reviews */}
      <Testimonial />

      {/* Footer component, providing information or links at the bottom of the page */}
      <Footer />
    </div>
  );
};

// Exporting the LandingPage component as the default export
export default LandingPage;
