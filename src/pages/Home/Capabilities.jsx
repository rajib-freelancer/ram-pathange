
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import icon1 from '../../assets/02.png';
import icon2 from '../../assets/03.png';
import icon3 from '../../assets/04.png';
import icon4 from '../../assets/05.png';
import icon5 from '../../assets/06.png';

const CustomArrow = ({ onClick, className, arrow }) => {
    return (
        <div className={className} onClick={onClick}>
            {arrow}
        </div>
    );
};


const Capabilities = () => {

    const customLeftArrow = <CustomArrow className="md:text-5xl text-2xl absolute z-10 text-white md:left-5 cursor-pointer" arrow={<IoIosArrowDropleft />} />;
    const customRightArrow = <CustomArrow className="md:text-5xl text-2xl absolute z-10 md:text-[#1c2885] text-white md:right-5 right-1 cursor-pointer" arrow={<IoIosArrowDropright />} />;


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (
        <div id="capabilities">
            <div className="md:text-4xl text-2xl text-[#98841d] text-center md:py-16 py-10">
                <h1>Our Capabilities</h1>
            </div>
            <div className='p-2'>
                <Carousel
                    responsive={responsive}
                    customLeftArrow={customLeftArrow}
                    customRightArrow={customRightArrow}
                >
                    <div data-aos="flip-left"
                        data-aos-duration="1500"
                        data-aos-easing="ease-out-cubic" className='h-96 bg-[#533ac2] p-5 flex flex-col justify-between'>
                        <img src={icon1} alt="" className='md:w-16 w-12 ms-auto object-contain' />
                        <h3 className='text-white md:text-2xl font-semibold mt-auto md:leading-6 leading-4'>SIMPLE
                            <br /> PRICING</h3>
                    </div>

                    <div data-aos="flip-left"
                        data-aos-duration="1500"
                        data-aos-easing="ease-out-cubic" className='h-96 bg-[#c2613a] p-5 flex flex-col justify-between'>
                        <img src={icon2} alt="" className='md:w-16 w-12 ms-auto object-contain' />
                        <h3 className='text-white md:text-2xl font-semibold mt-auto md:leading-6 leading-4'>FLEXIBILITY</h3>
                    </div>


                    <div data-aos="flip-left"
                        data-aos-duration="1500"
                        data-aos-easing="ease-out-cubic" className='h-96 bg-[#f9c82a] p-5 flex flex-col justify-between'>
                        <img src={icon3} alt="" className='md:w-16 w-12 ms-auto object-contain' />
                        <h3 className='md:text-2xl font-semibold mt-auto md:leading-6 leading-4'>QUICK START</h3>
                    </div>


                    <div data-aos="flip-left"
                        data-aos-duration="1500"
                        data-aos-easing="ease-out-cubic" className='h-96 bg-[#737373] p-5 flex flex-col justify-between'>
                        <img src={icon4} alt="" className='md:w-16 w-12 ms-auto object-contain' />
                        <h3 className=' md:text-2xl font-semibold mt-auto md:leading-6 leading-4'>DUE
                            <br /> DILIGENCE</h3>
                    </div>


                    <div data-aos="flip-left"
                        data-aos-duration="1500"
                        data-aos-easing="ease-out-cubic" className='h-96 bg-[#d0d0d0] p-5 flex flex-col justify-between'>
                        <img src={icon5} alt="" className='md:w-16 w-12 ms-auto object-contain' />
                        <h3 className=' md:text-2xl font-semibold mt-auto md:leading-6 leading-4'>HONEST
                            <br /> DELIVERABLES</h3>
                    </div>


                    {/* <div data-aos="flip-left"
                        data-aos-duration="1500"
                        data-aos-easing="ease-out-cubic" className='h-96 bg-[#1c2885] p-5 flex flex-col justify-between'>
                        <img src={icon1} alt="" className='md:w-16 w-12 ms-auto object-contain' />
                        <h3 className='text-white md:text-2xl font-semibold mt-auto md:leading-6 leading-4'>SIMPLE
                            <br /> PRICING</h3>
                    </div> */}
                </Carousel>
            </div>
        </div>
    );
};

export default Capabilities;