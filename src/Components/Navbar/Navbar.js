import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'products', path: '/home' },
        { id: 3, name: 'order', path: '/home' },
        { id: 4, name: 'contact', path: '/home' },
        { id: 5, name: 'about', path: '/home' },
    ]
    return (
        <nav className='bg-orange-700'>
            <div onClick={() => setOpen(!open)} className="h-6 w-6 text-rose-500 md:hidden" >
                {
                    open ?
                        <Bars3Icon /> : <XMarkIcon />
                }
            </div>


            <ul className={`bg-orange-600 w-full md:flex justify-center absolute md:static duration-500 ease-in-out  ${open ? 'top-6' : 'top-[-1200px]'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;