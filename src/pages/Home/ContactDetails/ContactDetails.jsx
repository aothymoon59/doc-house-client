import { FiClock } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";
import { SlCallOut } from "react-icons/sl";
import Container from "../../../components/Container/Container";
import SingleContactDetails from "./SingleContactDetails";

const ContactDetails = () => {
    return (
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-[130px]">
                <SingleContactDetails cardBg='#07332F' icon={<FiClock />} title='Opening Hours' desc='Open 9.00 am to 5.00pm Everyday' />
                <SingleContactDetails cardBg='#F7A582' icon={<LuMapPin />} title='Our Locations' desc='Dhanmondi 17, Dhaka -1200, Bangladesh' />
                <SingleContactDetails cardBg='#07332F' icon={<SlCallOut />} title='Contact Us' desc='+88 01750 00 00 00 , 
                    +88 01750 00 00 00' />

            </div>
        </Container>
    );
};

export default ContactDetails;