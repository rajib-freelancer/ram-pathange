import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const ReachUs = () => {
    return (
        <div className="min-h-[20rem] grid place-content-center p-5 bg-slate-200">
            <div data-aos="zoom-out-up">
                <div className="flex items-center gap-2 px-4 py-3 bg-white rounded-full">
                    <div className="md:p-4 p-2 bg-[#1c2885] text-white rounded-full md:text-3xl">
                        <FaLocationDot />
                    </div>
                    <h1 className="uppercase md:text-3xl font-semibold">Our Address</h1>
                </div>
                <p className="text-center md:mt-4 mt-2 md:text-xl text-sm text-[#20296d] font-medium">
                    Door no 1148, Railway station road
                    <br />
                    Chamaraja puram, Mysore
                    <br />
                    Pin: 570004
                </p>
            </div>
        </div>
    );
};

export default ReachUs;