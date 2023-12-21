import { IoCall } from "react-icons/io5";

const ReachUs = () => {
    return (
        <div className="min-h-[20rem] grid place-content-center p-5 bg-slate-200">
            <div data-aos="zoom-out-up">
                <div className="flex items-center gap-2 px-4 py-3 bg-white rounded-full">
                    <div className="md:p-4 p-2 bg-[#1c2885] text-white rounded-full md:text-3xl">
                        <IoCall />
                    </div>
                    <h1 className="uppercase md:text-3xl font-semibold">Reach Us Today</h1>
                </div>
                <p className="text-center md:mt-4 mt-2 md:text-xl text-sm text-[#20296d] font-medium">Phone : +91 9945 212 500</p>
            </div>
        </div>
    );
};

export default ReachUs;