import { Swiper, SwiperSlide } from 'swiper/react';
import './Testimonials.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';
import Container from '../../../components/Container/Container';
import { useEffect, useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const breakpoints = {
        // Otherwise, show 2 slides per view
        1100: {
            slidesPerView: 2,
        },
    };

    return (
        <section className='pt-8 md:pt-[130px]'>
            <Container>
                <div className='text-center max-w-4xl mx-auto mb-[50px]'>
                    <h2 className='text-[30px] sm:text-[40px] font-bold'>What Our Patients Says</h2>
                    <p className='text-[#3B3A3A]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={24}
                    navigation={true}
                    loop={true}
                    modules={[Autoplay, Navigation]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                    breakpoints={breakpoints}
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review?._id}>
                            <div className="p-[50px] border border-[#E6E6E6] rounded-[10px]">
                                <div className='flex justify-between items-center mb-5'>
                                    <div className='flex items-center gap-5'>
                                        <img className="w-[50px] md:w-[66px] h-[50px] md:h-[66px] rounded-full border border-[#F7A582] object-cover object-center" src={review?.image} alt={review?.name} />
                                        <div>
                                            <h2 className='text-lg sm:text-xl font-bold'>{review?.name}</h2>
                                            <h4 className='text-sm sm:text-base text-[#6C6B6B]'>{review?.title}</h4>
                                        </div>
                                    </div>
                                    <div className='hidden md:block'><FaQuoteLeft className="text-4xl lg:text-[54px] text-[#F7A582]" /></div>
                                </div>
                                <div className=''>
                                    <p className='text-base sm:text-lg text-[#6C6B6B]'>{review?.description}</p>
                                </div>
                                <div className='block md:hidden mt-5'><FaQuoteLeft className="text-4xl lg:text-[54px] text-[#F7A582]" /></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    );
};

export default Testimonials;