'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logo/booky.png';
import { IoMenu } from 'react-icons/io5';
import { IoPersonCircle } from 'react-icons/io5';
import ProfilePopup from './ProfilePopup';
import { useState } from 'react';

export default function Navbar() {
    const [popupopen, setPopupopen] = useState<true | false>(false);
    return (
        <nav className="sticky z-20 flex w-full items-center justify-between  px-6 pb-1 pt-2 backdrop:blur-lg">
            <Image src={logo} alt="logo" width={110} height={110} />
            <ul className=" relative  flex items-center justify-center gap-10 font-medium max-md:hidden">
                <li className="mr-2">
                    <Link href="#mybooks">my books 📚 </Link>
                </li>
                <li>
                    <div className="relative p-2">
                        <span className="absolute right-0 top-0 bg-gradient-to-br from-linearred from-10% to-transparent bg-clip-text text-xs text-transparent ">
                            available soon
                        </span>
                        <Link href={'#createbook'}>create book</Link>
                    </div>
                </li>
                <li>
                    <Link href="#about">about</Link>
                </li>
                <li>
                    <Link href="#contact">contact </Link>
                </li>
                <li>
                    <IoPersonCircle
                        size={45}
                        className="drop-shadow-icon cursor-pointer bg-clip-text text-red-900"
                        onClick={() => {
                            setPopupopen(!popupopen);
                        }}
                    />
                </li>
                {popupopen && <ProfilePopup />}
            </ul>
            <IoMenu size={40} className="hidden text-red-800 max-md:block" />
        </nav>
    );
}
