import { useEffect, useState } from "react";
import Container from "../../../components/Container/Container";
import TabCard from "./TabCard";

const OurServices = () => {
    const [service, setService] = useState({});
    const [activeTab, setActiveTab] = useState("Gastrology");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://doc-house-server-psi.vercel.app/services/category/${activeTab}`
                );
                const data = await response.json();
                setService(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [activeTab]);


    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <section className="pt-8 md:pt-[130px]">
            <Container>
                <div className='text-center max-w-4xl mx-auto mb-[50px]'>
                    <h2 className='text-[30px] sm:text-[40px] font-bold'>Our Services</h2>
                    <p className='text-[#3B3A3A]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-6">
                        <div onClick={() => handleTabClick("Gastrology")} title="Gastrology">
                            <TabCard name='Gastrology' image='https://i.ibb.co/D8Grw0C/Gastrology-sm.png' />
                        </div>

                        <div onClick={() => handleTabClick("Orthopedic")} title='Orthopedic'>
                            <TabCard name='Orthopedic' image='https://i.ibb.co/J52rCt0/Orthopedic-sm.png' />
                        </div>

                        <div onClick={() => handleTabClick("Gynecology")} title='Gynecology'>
                            <TabCard name='Gynecology' image='https://i.ibb.co/C0v799w/Gynecology-sm.png' />
                        </div>

                        <div onClick={() => handleTabClick("Neorology")} title='Neorology'>
                            <TabCard name='Neorology' image='https://i.ibb.co/LNfz23h/Neorology-sm.png' />
                        </div>

                        <div onClick={() => handleTabClick("Dental")} title='Dental Care'>
                            <TabCard name='Dental Care' image='https://i.ibb.co/vDf9fBM/Dental-sm.png' />
                        </div>

                        <div onClick={() => handleTabClick("Surgery")} title='Cosmetic Surgery'>
                            <TabCard name='Cosmetic Surgery' image='https://i.ibb.co/nDP4bM5/Cosmetic-Surgery-sm.png' />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 mt-[50px]">
                        <div className="md:w-1/2">
                            <img src={service?.image} className="rounded-[10px] w-full" alt={service?.title} />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-2xl sm:text-[30px] text-[#0A0808] font-bold mb-5 text-center md:text-left">{service?.title}</h2>
                            <p className="text-[#3B3A3A] mb-[10px]">{service?.desc1}</p>
                            <p className="text-[#3B3A3A] mb-5">{service?.desc2}</p>
                            <div className="text-center md:text-left">
                                <button className="outline-btn">More Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>

    );
};

export default OurServices;