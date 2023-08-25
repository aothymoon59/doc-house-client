import { useState } from "react";
import Container from "../../../components/Container/Container";
import TabCard from "./TabCard";

const OurServices = () => {
    const [activeTab, setActiveTab] = useState("Gastrology");


    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    console.log(activeTab)

    return (
        <section className="pt-8 md:pt-[130px]">
            <Container>
                <div className='text-center max-w-4xl mx-auto mb-[50px]'>
                    <h2 className='text-[30px] sm:text-[40px] font-bold'>Our Services</h2>
                    <p className='text-[#3B3A3A]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-6">
                        <div onClick={() => handleTabClick("Gastrology")}>
                            <TabCard name='Gastrology' image='https://i.ibb.co/D8Grw0C/Gastrology-sm.png' />
                        </div>

                        <div onClick={() => handleTabClick("Orthopedic")}>
                            <TabCard name='Orthopedic' image='https://i.ibb.co/J52rCt0/Orthopedic-sm.png' />
                        </div>

                        <div onClick={() => handleTabClick("Gynecology")}>
                            <TabCard name='Gynecology' image='https://i.ibb.co/C0v799w/Gynecology-sm.png' />
                        </div>

                        <div onClick={() => handleTabClick("Neorology")}>
                            <TabCard name='Neorology' image='https://i.ibb.co/LNfz23h/Neorology-sm.png' />
                        </div>

                        <div onClick={() => handleTabClick("Dental")}>
                            <TabCard name='Dental Care' image='https://i.ibb.co/vDf9fBM/Dental-sm.png' />
                        </div>

                        <div onClick={() => handleTabClick("Surgery")}>
                            <TabCard name='Cosmetic Surgery' image='https://i.ibb.co/nDP4bM5/Cosmetic-Surgery-sm.png' />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </Container>
        </section>

    );
};

export default OurServices;