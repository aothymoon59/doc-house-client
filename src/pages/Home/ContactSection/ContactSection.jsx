import { SlCallOut } from "react-icons/sl";
import Container from "../../../components/Container/Container";
import { LuMapPin } from "react-icons/lu";
import ContactForm from "../../../components/ContactForm/ContactForm";

const ContactSection = () => {
    return (
        <section className="pt-8 md:pt-[130px]">
            <Container>
                <div className="bg-[#07332F] rounded-[10px] px-6 py-8 lg:px-[100px] lg:py-[100px] flex flex-col md:flex-row items-start gap-6 justify-center">
                    <div className="w-full md:w-[40%]">
                        <div className='text-center md:text-left max-w-4xl mx-auto md:mx-0 mb-[50px] text-white'>
                            <h2 className='text-[30px] sm:text-[40px] font-bold'>Our Services</h2>
                            <p className=''>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </div>
                        <div className="text-white">
                            <p className="flex items-center gap-2 mb-6"><SlCallOut /> +88 01750 14 14 14</p>
                            <p className="flex items-center gap-2"><LuMapPin /> Dhanmondi, Dhaka, Bangladesh</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[60%]">
                        <ContactForm />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ContactSection;