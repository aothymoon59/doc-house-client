import Banner from "../Banner/Banner";
import ContactDetails from "../ContactDetails/ContactDetails";
import OurServices from "../OurServices/OurServices";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner />
            <OurServices />
            <ContactDetails />
            <Testimonials />
        </div>
    );
};

export default Home;