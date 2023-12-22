import Banner from "./Banner";
import Capabilities from "./Capabilities";
import Library from "./Library";
import ReachUs from "./ReachUs";
import Service from "./Service";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Capabilities/>
            <Service/>
            <Library/>
            {/* <ReachUs/> */}
        </div>
    );
};

export default Home;