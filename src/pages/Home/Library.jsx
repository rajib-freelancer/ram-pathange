import { IoIosArrowForward } from "react-icons/io";

const Library = () => {
    return (
        <div>
            <div className="md:text-4xl text-2xl text-[#98841d] text-center md:py-16 py-10">
                <h1>Our Service</h1>
            </div>
            <div className="md:py-32 md:px-40 p-5 bg-[#1c2885]">
                <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-5">
                    <div className="bg-white h-[30rem] relative p-5">

                        <button className="absolute bottom-5 right-5 bg-[#1c2885] text-white p-2 text-xl rounded-full">
                            <IoIosArrowForward />
                        </button>
                    </div>
                    <div className="bg-white h-[30rem] relative p-5">

                        <button className="absolute bottom-5 right-5 bg-[#1c2885] text-white p-2 text-xl rounded-full">
                            <IoIosArrowForward />
                        </button>
                    </div>
                    <div className="bg-white h-[30rem] relative p-5">

                        <button className="absolute bottom-5 right-5 bg-[#1c2885] text-white p-2 text-xl rounded-full">
                            <IoIosArrowForward />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Library;