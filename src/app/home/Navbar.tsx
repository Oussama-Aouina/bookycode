'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logo/booky.png';
import { IoMenu } from 'react-icons/io5';
import { IoPersonCircle } from 'react-icons/io5';
import ProfilePopup from './ProfilePopup';
import { useState } from 'react';
import MobileSideBar from './MobileSideBar';

export default function Navbar(): JSX.Element {
    const [popupopen, setPopupopen] = useState<true | false>(false);
    const [sidebar, setSidebar] = useState<true | false>(false);
    function handleSideBar() {
        setSidebar(!sidebar);
    }

    return (
        <nav className="sticky z-20 flex h-full w-full items-center justify-between px-6 pb-1 pt-2 backdrop:blur-lg">
            <Link href="/">
                <Image
                    src={logo}
                    alt="logo"
                    width={110}
                    height={110}
                    priority
                />
            </Link>
            <ul className=" relative  flex items-center justify-center gap-7 font-medium max-md:hidden">
                <li>
                    <Link href="#mybooks">my books </Link>
                    📚
                </li>
                <li>
                    <div className="relative p-2">
                        <span className="absolute right-0 top-0 bg-gradient-to-br from-linearred from-10% to-transparent bg-clip-text text-xs text-transparent ">
                            available soon
                        </span>
                        <Link href="#createbook">create book</Link>
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
                        className=" cursor-pointer rounded-full bg-clip-text text-red-900 shadow-md"
                        onClick={() => {
                            setPopupopen(!popupopen);
                        }}
                    />
                </li>
                {popupopen && <ProfilePopup />}
            </ul>
            <IoMenu
                size={40}
                className="hidden cursor-pointer text-red-800 max-md:block"
                onClick={handleSideBar}
            />
            {sidebar && <MobileSideBar open={handleSideBar} />}
        </nav>
    );
}
