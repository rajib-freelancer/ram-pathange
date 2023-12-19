
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

import icon1 from '../../assets/02.png';
import icon2 from '../../assets/03.png';
import icon3 from '../../assets/04.png';
import icon4 from '../../assets/05.png';
import icon5 from '../../assets/06.png';




const Capabilities = () => {

    const swiper = useSwiper();

    return (
        <div id="capabilities">
            <div className="md:text-4xl text-2xl text-[#98841d] text-center md:py-16 py-10">
                <h1>Our Capabilities</h1>
            </div>
            <div className='p-2'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    // navigation={{
                    //     nextEl: '.swiper-button-next',
                    //     prevEl: '.swiper-button-prev',
                    // }}
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                        '@0.00': { slidesPerView: 2 },
                        '@0.75': { slidesPerView: 2 },
                        '@1.00': { slidesPerView: 3 },
                        '@1.50': { slidesPerView: 5 },
                    }}
                // modules={[Navigation, Pagination]}
                >
                    <SwiperSlide>
                        <div data-aos="flip-left"
                            data-aos-duration="1500"
                            data-aos-easing="ease-out-cubic" className='h-96 bg-[#533ac2] p-5 flex flex-col justify-between'>
                            <img src={icon1} alt="" className='md:w-16 w-12 ms-auto object-contain' />
                            <h3 className='text-white md:text-2xl font-semibold mt-auto md:leading-6 leading-4'>SIMPLE
                                <br /> PRICING</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div data-aos="flip-left"
                            data-aos-duration="1500"
                            data-aos-easing="ease-out-cubic" className='h-96 bg-[#c2613a] p-5 flex flex-col justify-between'>
                            <img src={icon2} alt="" className='md:w-16 w-12 ms-auto object-contain' />
                            <h3 className='text-white md:text-2xl font-semibold mt-auto md:leading-6 leading-4'>FLEXIBILITY</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div data-aos="flip-left"
                            data-aos-duration="1500"
                            data-aos-easing="ease-out-cubic" className='h-96 bg-[#f9c82a] p-5 flex flex-col justify-between'>
                            <img src={icon3} alt="" className='md:w-16 w-12 ms-auto object-contain' />
                            <h3 className='md:text-2xl font-semibold mt-auto md:leading-6 leading-4'>QUICK START</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div data-aos="flip-left"
                            data-aos-duration="1500"
                            data-aos-easing="ease-out-cubic" className='h-96 bg-[#737373] p-5 flex flex-col justify-between'>
                            <img src={icon4} alt="" className='md:w-16 w-12 ms-auto object-contain' />
                            <h3 className=' md:text-2xl font-semibold mt-auto md:leading-6 leading-4'>DUE
                                <br /> DILIGENCE</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div data-aos="flip-left"
                            data-aos-duration="1500"
                            data-aos-easing="ease-out-cubic" className='h-96 bg-[#d0d0d0] p-5 flex flex-col justify-between'>
                            <img src={icon5} alt="" className='md:w-16 w-12 ms-auto object-contain' />
                            <h3 className=' md:text-2xl font-semibold mt-auto md:leading-6 leading-4'>HONEST
                                <br /> DELIVERABLES</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div data-aos="flip-left"
                            data-aos-duration="1500"
                            data-aos-easing="ease-out-cubic" className='h-96 bg-[#533ac2] p-5 flex flex-col justify-between'>
                            <img src={icon1} alt="" className='md:w-16 w-12 ms-auto object-contain' />
                            <h3 className='text-white md:text-2xl font-semibold mt-auto md:leading-6 leading-4'>SIMPLE
                                <br /> PRICING</h3>
                        </div>
                    </SwiperSlide>
                    {/* <div className="swiper-button-next">
                        <button onClick={() => swiper.slideNext()}>
                            <IoIosArrowDropright />
                        </button>
                    </div>
                    <div className="swiper-button-prev">
                        <button>
                            <IoIosArrowDropleft />
                        </button>
                    </div> */}
                </Swiper>
            </div>
        </div>
    );
};

export default Capabilities;