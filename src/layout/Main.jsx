import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";

const Main = () => {
    const location = useLocation();
    const noHeaderFooter =
        location.pathname.includes("login") || location.pathname.includes("register");
    return (
        <>
            {noHeaderFooter || <Navbar></Navbar>}
            <div className="min-h-[calc(100vh-76px)]">
                <Outlet></Outlet>
            </div>
            {noHeaderFooter || <Footer></Footer>}
        </>
    );
};

export default Main;