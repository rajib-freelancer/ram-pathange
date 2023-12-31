
import image1a from '../../assets/img1.png';
import image1b from '../../assets/img1-mobile.png';
import image2a from '../../assets/img2.png';
import image2b from '../../assets/img2-mobile.png';
import card from '../../assets/01.png';
import ContactForm from '../../components/ContactForm/ContactForm';

const Banner = () => {

    const isMobile = window.innerWidth <= 768; // Adjust the width according to your mobile breakpoint


    return (
        <div>
            <div className="bg-[#1c2885] text-white p-5" id='home'>
                <h1 className="md:text-4xl"
                // data-aos="fade-up"
                >PRECISION IN NUMBERS, <br />
                    PARTNER IN <span className="font-semibold">SUCCESS</span>. </h1>
            </div>
            <div className="md:h-screen h-[45rem] bg-cover relative md:bg-top bg-center" style={{ backgroundImage: `url(${isMobile ? image1b : image1a})` }} >
                <div className=' absolute top-1/2 -translate-y-1/2 md:left-40 left-1/2 md:translate-x-0 -translate-x-1/2'>
                    <img src={card} alt=""
                        // data-aos="fade-right"
                        // data-aos-duration="1000"
                        className='md:w-72 w-52 p-5' />
                </div>
            </div>
            <ContactForm />
            <div className='h-screen bg-cover bg-center p-5 relative' id='legacy' style={{
                backgroundImage: `url(${isMobile ? image2b : image2a})`
            }}>
                <div className='md:w-3/4 w-full mx-auto text-center md:text-4xl md:leading-[40px] absolute left-1/2 -translate-x-1/2 md:top-20 top-40 p-5'>
                    <h1
                    data-aos="zoom-out"
                    >With A Legacy Spanning Three Generations, Our Advisory Firm, Celebrates 40 Years Of Excellence, We Are A Beacon Of Expertise In Monthly Accounting, Statutory Compliance, GST Filing, And TDS Returns & More</h1>
                </div>

                <div className='md:w-1/2 w-full mx-auto text-center absolute left-1/2 -translate-x-1/2 md:bottom-4 bottom-10 text-red-950 p-5' >
                    <h2 className='text-2xl'
                    data-aos="zoom-in-up"
                    >most trusted</h2>
                    <h1 className='md:text-4xl text-2xl font-semibold border-b-2 border-red-950 inline-block'
                    data-aos="zoom-in-up"
                    >FINANCIAL ADVISORS</h1>
                    <p className='md:mt-4 mt-2' data-aos="zoom-in-up">SINCE 1984</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;