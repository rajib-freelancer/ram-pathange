import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const ReachUs = () => {
    return (
        <div className="min-h-[24rem] grid place-content-center p-5 bg-slate-200 md:pb-0 pb-24">
            <div
            // data-aos="zoom-out-up"
            >
                <div className="space-y-5">
                    <div className="flex items-center justify-center gap-2 px-4 py-3 bg-white rounded-full w-80 mx-auto">
                        <div className="md:p-4 p-2 bg-[#1c2885] text-white rounded-full md:text-3xl">
                            <FaLocationDot />
                        </div>
                        <h1 className="uppercase md:text-3xl font-semibold">Our Address</h1>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                        <p className="md:mt-4 md:text-xl text-sm text-[#20296d] font-medium">
                            <h5 className="font-semibold">Mysore Office:</h5>
                            Door no 1148, Railway station road
                            <br />
                            Chamaraja puram, Mysore
                            <br />
                            570004
                        </p>
                        <p className=" md:mt-4 md:text-xl text-sm text-[#20296d] font-medium">
                            <h5 className="font-semibold">Bengaluru Office:</h5>
                            22, 5th Cross Rd, R.K.Colony, Manjunath Colony
                            <br />
                            2nd Phase, J.P. Nagar, Bengaluru
                            <br />
                            Karnataka, Pin- 560040
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReachUs;