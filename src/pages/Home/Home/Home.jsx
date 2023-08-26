import Banner from "../Banner/Banner";
import ContactDetails from "../ContactDetails/ContactDetails";
import ContactSection from "../ContactSection/ContactSection";
import OurServices from "../OurServices/OurServices";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner />
            <OurServices />
            <ContactDetails />
            <Testimonials />
            <ContactSection />
        </div>
    );
};

export default Home;