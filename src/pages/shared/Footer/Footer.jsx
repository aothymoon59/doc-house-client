import { Link } from "react-router-dom";
import Container from "../../../components/Container/Container";
import footerLogo from '../../../assets/footer-logo.png'


const Footer = () => {
    return (
        <div
            className={`w-full pt-10 md:pt-20 bg-[#F3F3F3] mt-8 md:mt-[130px]`}
        >
            <Container>
                <footer className="footer">
                    <div className="space-y-4">
                        <Link to="/">
                            <img className="w-[120px] md:w-[180px] xl:w-[233px]" src={footerLogo} alt="Footer Logo" />
                        </Link>
                        <p className="max-w-xs">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been since the printer took.
                        </p>
                        <button className="outline-btn">Appointment</button>
                    </div>
                    <div>
                        <span
                            className={`font-bold text-2xl`}
                        >
                            Quick Links
                        </span>
                        <Link to="/" className="link link-hover">
                            Home
                        </Link>
                        <Link to="/about" className="link link-hover">
                            About Us
                        </Link>
                        <Link to="/service" className="link link-hover">
                            Service
                        </Link>
                        <Link to="/doctors" className="link link-hover">
                            Doctors
                        </Link>
                        <Link to="/departments" className="link link-hover">
                            Departments
                        </Link>
                        <Link to="/payment" className="link link-hover">
                            Online Payment
                        </Link>
                        <Link to="/contact" className="link link-hover">
                            Contact Us
                        </Link>
                        <Link to="/account" className="link link-hover">
                            My Account
                        </Link>
                    </div>
                    <div>
                        <span
                            className={`font-bold text-2xl`}
                        >
                            Doc House Services
                        </span>
                        <a className="link link-hover">Pediatric Clinic</a>
                        <a className="link link-hover">Diagnosis Clinic</a>
                        <a className="link link-hover">Cardiac Clinic</a>
                        <a className="link link-hover">Laboratory Analysis</a>
                        <a className="link link-hover">Gynecological Clinic</a>
                        <a className="link link-hover">Personal Counseling</a>
                        <a className="link link-hover">Dental Clinic</a>
                    </div>

                    <div>
                        <span
                            className={`font-bold text-2xl`}
                        >
                            Working Hours
                        </span>
                        <p>Monday - 10 am to 7 pm</p>
                        <p>Tuesday - 10 am to 7 pm</p>
                        <p>Wednesday - 10 am to 7 pm</p>
                        <p>Thursday - 10 am to 7 pm</p>
                        <p>Friday - 10 am to 7 pm</p>
                        <p>Saturday - 10 am to 7 pm</p>
                        <p>Sunday - 10 am to 7 pm</p>
                    </div>
                </footer>
                <hr className="mt-5 md:mt-10" />
                <p className="text-center mx-4 py-5 md:py-10">
                    Copyright © {new Date().getFullYear()} - All right reserved by Doc House Ltd
                </p>
            </Container>
        </div>
    );
};

export default Footer;
