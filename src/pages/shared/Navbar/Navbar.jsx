import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./Navbar.css";
import Container from "../../../components/Container/Container";
import { BiMenuAltRight } from "react-icons/bi";
import { SlClose } from "react-icons/sl";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const navOptions = (
        <>
            <li>
                <NavLink
                    to="/"
                    aria-label="Home"
                    title="Home"
                    className={({ isActive }) => (isActive ? "active" : "default")}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    aria-label="About"
                    title="About"
                    className={({ isActive }) => (isActive ? "active" : "default")}
                >
                    About
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/appointment"
                    aria-label="Appointment"
                    title="Appointment"
                    className={({ isActive }) => (isActive ? "active" : "default")}
                >
                    Appointment
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="w-full fixed top-0 z-50">
            <Container>
                <div className="navbar">
                    <div className="navbar-start">
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="navbar-end">
                        <div
                            onClick={() => setOpen(!open)}
                            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
                        >
                            {open ? <SlClose /> : <BiMenuAltRight />}
                        </div>
                        <ul
                            className={`md:flex gap-5 md:items-center absolute md:static md:z-auto z-[-1] right-10 w-fit bg-slate-500 rounded-xl p-5 md:p-0 md:w-auto md:bg-transparent ${open ? "top-20" : "top-[-490px]"}`}
                        >
                            {navOptions}
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;
