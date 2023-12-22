import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { animateScroll as scroll } from 'react-scroll';
import { FaCircleArrowUp } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { useEffect, useState } from 'react';

const Main = () => {

    const [showScrollTop, setShowScrollTop] = useState(false);
    const phoneNumber = '9945212500';

    useEffect(() => {
        const handleScroll = () => {
            // Show the scroll top button after scrolling down 300 pixels
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    return (
        <div className='relative'>
            <Navbar />
            <Outlet />
            <Footer />
            <ScrollRestoration />
            {
                showScrollTop &&
                <>
                    <button className='fixed z-40 right-5 bottom-5 text-3xl hover:text-[#626ecc]' onClick={scrollToTop}>
                        <FaCircleArrowUp />
                    </button>
                    <div className='fixed z-40 left-5 bottom-5 text-4xl flex flex-col gap-2'>
                        <button className='text-green-500 hover:opacity-70 bg-white rounded-full p-2'
                            onClick={() => window.open(`whatsapp://send?phone=91${phoneNumber}`, '_blank')}
                        >
                            <RiWhatsappFill />
                        </button>
                        <button className='text-blue-600 hover:opacity-70 bg-white rounded-full p-2'
                        onClick={()=> window.open(`tel://+91${phoneNumber}`, '_blank')}
                        >
                            <IoCall />
                        </button>
                    </div>
                </>
            }
        </div>
    );
};

export default Main;