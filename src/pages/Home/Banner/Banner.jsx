import Container from "../../../components/Container/Container";
import bannerImg from '../../../assets/doc-house-banner.png'

const Banner = () => {
    return (
        <div className="bg-[#07332F] text-white">
            <Container>
                <div className="flex flex-col gap-10 md:flex-row justify-center md:justify-between items-center h-screen pt-[102px]">
                    <div className="md:w-[50%] text-center md:text-left space-y-3 sm:space-y-5 xl:space-y-10">
                        <h1 className="text-[30px] md:text-4xl xl:text-[60px] font-semibold">Your Best Medical</h1>
                        <h1 className="text-[30px] md:text-4xl xl:text-[60px] font-semibold">Help Center</h1>
                        <p className="text-sm md:text-lg">Our best-in-class Medical Help Center provides comprehensive healthcare support, offering expert advice and solutions. From medical inquiries to wellness guidance, we are committed to enhancing your well-being and ensuring a healthier future.</p>
                        <button className="font-bold text-xl bg-[#F7A582] rounded-md py-4 px-6">All Service</button>
                    </div>
                    <div className="md:w-[50%]">
                        <img src={bannerImg} className="mx-auto md:ml-auto w-[90%]" alt="Banner image" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;