import { FaBars } from 'react-icons/fa'
import { IoMdCloseCircleOutline } from "react-icons/io";
import logo from '../assets/logo.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    return (
        <div className='flex justify-between p-5 relative overflow-hidden'>
            <Link to='/'>
                <img src={logo} alt="" className='md:w-80 w-28 object-contain' />
            </Link>
            <button className='md:text-3xl text-xl' onClick={() => { setMenu(!menu) }}><FaBars /></button>
            <div className={`h-screen ${menu ? 'right-0' : '-right-64'} top-0 w-60 bg-white fixed z-40 p-5 duration-300 shadow-2xl`}>
                <div className='w-full h-full'>
                    <button className='w-full flex justify-end' onClick={() => { setMenu(!menu) }}>
                        <IoMdCloseCircleOutline className='text-3xl' />
                    </button>
                    <ul className='w-full h-full flex items-center flex-col gap-5 text-2xl text-yellow-600 font-semibold uppercase justify-center'>
                        <li><a href="/#home" className='hover:border-b-2 border-yellow-600'>Home</a></li>
                        <li><a href="/#legacy" className='hover:border-b-2 border-yellow-600'>Legacy</a></li>
                        <li><a href="/#capabilities" className='hover:border-b-2 border-yellow-600'>Capabilities</a></li>
                        <li><a href="/#service" className='hover:border-b-2 border-yellow-600'>Service</a></li>
                        <li><a href="/#library" className='hover:border-b-2 border-yellow-600'>Library</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;