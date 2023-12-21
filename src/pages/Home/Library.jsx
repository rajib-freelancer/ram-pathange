import { Link } from "react-router-dom";


import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const CustomArrow = ({ onClick, className, arrow }) => {
    return (
        <div className={className} onClick={onClick}>
            {arrow}
        </div>
    );
};


const Library = () => {

    const customLeftArrow = <CustomArrow className="md:text-5xl text-2xl absolute z-10 left-4 cursor-pointer" arrow={<IoIosArrowBack />} />;
    const customRightArrow = <CustomArrow className="md:text-5xl text-2xl absolute z-10 right-1 cursor-pointer" arrow={<IoIosArrowForward />} />;


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div id="library">
            <div className="md:text-4xl text-2xl text-[#98841d] text-center md:py-16 py-10">
                <h1>Library</h1>
            </div>
            <div className="md:py-32 md:px-20 p-5 bg-[#1c2885]">
                <div className="uppercase">
                    <Carousel
                        responsive={responsive}
                        customLeftArrow={customLeftArrow}
                        customRightArrow={customRightArrow}
                    >
                        {/* item 1 */}
                        <div className="bg-white h-[30rem] relative p-5">
                            <div className="h-full grid place-content-center text-center">
                                <h1 className="text-2xl font-light leading-5">
                                    CAPITAL GAINS <br />
                                    ON SHARES SOLD
                                </h1>
                            </div>
                            <Link to='/capital-gain-on-shares-sold' className="absolute bottom-5 right-5 bg-[#1c2885] text-white p-2 text-xl rounded-full">
                                <IoIosArrowForward />
                            </Link>
                        </div>
                        {/* item 2 */}
                        <div className="bg-white h-[30rem] relative p-5 ms-4">
                            <div className="h-full grid place-content-center text-center">
                                <h1 className="text-2xl font-light leading-5">
                                    PRIVATE OR <br />
                                    PARTNERSHIP?
                                </h1>
                            </div>
                            <Link to='/private-or-partnership' className="absolute bottom-5 right-5 bg-[#1c2885] text-white p-2 text-xl rounded-full">
                                <IoIosArrowForward />
                            </Link>
                        </div>
                        {/* item 3 */}
                        <div className="bg-white h-[30rem] relative p-5 ms-4">
                            <div className="h-full grid place-content-center text-center">
                                <h1 className="text-2xl font-light leading-5">
                                    NRI <br />
                                    TAXATION
                                </h1>
                            </div>
                            <Link to='/nri-taxation' className="absolute bottom-5 right-5 bg-[#1c2885] text-white p-2 text-xl rounded-full">
                                <IoIosArrowForward />
                            </Link>
                        </div>
                        {/* item 4 */}
                        <div className="bg-white h-[30rem] relative p-5 ms-4">
                            <div className="h-full grid place-content-center text-center">
                                <h1 className="text-2xl font-light leading-5">
                                    Navigating<br />
                                    the GST Maze
                                </h1>
                            </div>
                            <Link to='/navigating-the-gst-maze' className="absolute bottom-5 right-5 bg-[#1c2885] text-white p-2 text-xl rounded-full">
                                <IoIosArrowForward />
                            </Link>
                        </div>
                        {/* item 5 */}
                        <div className="bg-white h-[30rem] relative p-5 ms-4">
                            <div className="h-full grid place-content-center text-center">
                                <h1 className="text-2xl font-light leading-5">
                                    Stock <br />
                                    Trading Taxation
                                </h1>
                            </div>
                            <Link to='/stock-trading-taxation' className="absolute bottom-5 right-5 bg-[#1c2885] text-white p-2 text-xl rounded-full">
                                <IoIosArrowForward />
                            </Link>
                        </div>

                    </Carousel>
                </div>
            </div>
        </div>
    );
};
// bg-[url(https://images.pexels.com/photos/8139402/pexels-photo-8139402.jpeg)] bg-cover bg-opacity-10 bg-black
export default Library;