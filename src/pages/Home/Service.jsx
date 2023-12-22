
import icon1 from '../../assets/07.png';
import icon2 from '../../assets/08.png';
import icon3 from '../../assets/09.png';
import icon4 from '../../assets/10.png';
import icon5 from '../../assets/11.png';
import ContactForm from '../../components/ContactForm/ContactForm';


const Service = () => {

    const content = [
        {
            id: 1,
            title: 'BACKEND SERVICES',
            image: icon1,
            desc: 'Revamp your financial strategy with our Backend Services—ideal for startups and small businesses seeking precise ledgers without the hefty cost of an in-house finance department.'
        },
        {
            id: 2,
            title: 'VIRTUAL CFO',
            image: icon2,
            desc: 'Unlock the power of a virtual CFO ;seamlessly blending expert financial insights with the convenience of remote collaboration for lasting success.'
        },
        {
            id: 3,
            title: 'INTERNATIONAL TAXATION',
            image: icon3,
            desc: 'Navigate global tax complexities effortlessly            with our international taxation service, covering NRI tax matters and strategic transfer pricing solutions for businesses worldwide'
        },
        {
            id: 4,
            title: 'CORPORATE LAW',
            image: icon4,
            desc: 'Elevate your business compliance with our            corporate law and secretarial services ; expert guidance for legal adherence and seamless corporate governance.'
        },
        {
            id: 5,
            title: 'CONCIERGE SERVICES',
            image: icon5,
            desc: 'Experience unparalleled convenience with our concierge services—our dedicated personnel handle on-ground tasks, from documentation to stock checks, ensuring seamless support.'
        },
    ]

    return (
        <div id="service">
            <div className="md:text-4xl text-2xl text-[#98841d] text-center md:py-16 py-10">
                <h1>Our Service</h1>
            </div>
            <div className="md:py-20 py-10 p-2 bg-slate-200 space-y-10">
                {
                    content.map(value => {
                        const { id, title, desc, image } = value
                        return <div key={id} className="md:w-2/3 w-full mx-auto bg-white rounded-full grid grid-cols-4 items-center md:p-6 p-3 md:gap-20 gap-5"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                        >
                            <div className="col-span-1 bg-[#1c2885] md:h-48 h-20 md:w-48 w-20 rounded-full p-5 grid place-content-center">
                                <img src={image} alt="" className=' md:h-20 h-12 object-contain' />
                            </div>
                            <div className="col-span-3 flex flex-col justify-center md:gap-5 gap-1">
                                <h1 className="text-[#1c2885] md:text-2xl text-sm font-semibold">
                                    {title}
                                </h1>
                                <p className='md:text-xl text-[10px] md:w-[85%]'>
                                    {desc}
                                </p>
                            </div>
                        </div>
                    })
                }
            </div>
            <ContactForm />
        </div>
    );
};

export default Service;