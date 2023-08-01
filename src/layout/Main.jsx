import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";

const Main = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-[calc(100vh-76px)]">
                <Outlet></Outlet>
            </div>
            <Footer />
        </>
    );
};

export default Main;