import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { animateScroll as scroll } from 'react-scroll';
import { FaCircleArrowUp } from "react-icons/fa6";
import { useEffect, useState } from 'react';

const Main = () => {

    const [showScrollTop, setShowScrollTop] = useState(false);

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
                showScrollTop && <button className='fixed z-40 right-5 bottom-5 text-3xl' onClick={scrollToTop}>
                    <FaCircleArrowUp />
                </button>
            }
        </div>
    );
};

export default Main;