import { useRef, useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const form = useRef(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .sendForm(
                "service_49h5qlc",
                "template_5wow4fd",
                form.current,
                "kj9ajPfcjqKMFM3F4"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    toast.success("Message send successfully");
                    e.target.reset();
                    setLoading(false);
                },
                (error) => {
                    console.log(error.text);
                    toast.error("Message not sent!");
                    setLoading(false);
                }
            );
    };

    return (
        <div>
            <form ref={form} onSubmit={handleSubmit} className='md:px-40 px-5 py-5 flex justify-between items-center text-center md:flex-row flex-col gap-5'>
                <select data-aos="fade-right"
                    data-aos-duration="1000" name="service" id="" className='border-2 border-slate-400 py-1 rounded-sm md:w-48 w-full text-center'
                    required
                >
                    <option value="SERVICE" className='' disabled selected >SERVICE</option>
                    <option value="BACKEND" className='' >BACKEND</option>
                    <option value="VIRTUAL CFO" className='' >VIRTUAL CFO</option>
                    <option value="INTERNATIONAL TAXATION" className='' >INTERNATIONAL TAXATION</option>
                    <option value="CORPORATE LAW" className='' >CORPORATE LAW</option>
                    <option value="CONCIERGE" className='' >CONCIERGE</option>
                </select>
                <input data-aos="fade-right"
                    data-aos-duration="1500" type="text" name="name" id="" placeholder='NAME' className='border-2 border-slate-400 p-3 py-1 rounded-sm placeholder:text-center md:w-48 w-full' required />
                <input data-aos="fade-right"
                    data-aos-duration="2000" type="number" name="contact" id="" placeholder='CONTACT' className='border-2 border-slate-400 p-3 py-1 rounded-sm placeholder:text-center md:w-48 w-full' required />
                <input data-aos="fade-right"
                    data-aos-duration="2500" type="email" name="email" id="" placeholder='EMAIL' className='border-2 border-slate-400 p-3 py-1 rounded-sm placeholder:text-center md:w-48 w-full' required />
                <button data-aos="fade-right"
                    data-aos-duration="3000"
                    type='submit' className='text-white bg-[#1c2885] px-10 py-1 rounded-full md:w-48 w-full'
                    disabled={loading}
                >SUBMIT</button>
            </form>
        </div>
    );
};

export default ContactForm;