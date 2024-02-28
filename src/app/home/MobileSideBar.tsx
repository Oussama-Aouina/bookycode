'use client';
import Link from 'next/link';
import React from 'react';
import { IoLogOutOutline } from 'react-icons/io5';
function MobileSideBar({ open }: { open: Function }): JSX.Element {
    return (
        <div className="absolute right-0 top-0 z-30 hidden h-screen w-1/2 flex-col items-center justify-around  rounded-xl bg-primary  px-4 py-3.5 text-xl font-medium text-zinc-800 shadow-md max-md:flex ">
            <div className="mb-10 w-full items-center justify-end  border-b-2 border-gray-500 border-opacity-20 p-2">
                <button
                    className="text-xl font-medium text-red-900 "
                    onClick={open as () => void}
                >
                    X
                </button>
            </div>
            <div className="mb-4 flex items-center justify-center">
                <ul className="flex flex-col items-start justify-center gap-6 border  p-4">
                    <li>
                        <Link href="#mybooks">my books 📚 </Link>
                    </li>
                    <li>
                        <div className="relative py-2">
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
                        <Link href="/">edit account</Link>
                    </li>
                    <li>
                        <Link href="/">account info</Link>
                    </li>
                </ul>
            </div>

            <div className="flex items-start justify-center">
                <Link
                    href="/"
                    className="mt-32 flex items-center gap-2 text-red-400"
                >
                    log out
                    <IoLogOutOutline />
                </Link>
            </div>
        </div>
    );
}

export default MobileSideBar;
