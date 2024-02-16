'use client';
import Link from 'next/link';
import React from 'react';

function MobileSideBar() {
    return (
        <ul className="absolute right-0 top-10 flex hidden w-full flex-col items-start justify-center rounded-xl bg-primary px-4 py-3.5 text-xl font-medium text-zinc-800 max-md:block">
            <Link className=" w-full text-red-900" href={''}>
                Foulen benfoulen
            </Link>
            <Link className="mt-4 text-lg" href={''}>
                edit account
            </Link>
            <Link className="mt-3.5 text-lg" href={''}>
                account info
            </Link>
            <Link className="mt-7 text-red-400" href={''}>
                my books 📚
            </Link>
            <Link className="mt-7 text-red-400" href={''}>
                <div className="relative p-2">
                    <span className="absolute right-0 top-0 bg-gradient-to-br from-linearred from-10% to-transparent bg-clip-text text-xs text-transparent ">
                        available soon
                    </span>
                    <Link href={'#createbook'}>create book</Link>
                </div>
            </Link>
            <Link className="mt-7 text-red-400" href={''}>
                about
            </Link>
            <Link className="mt-7 text-red-400" href={''}>
                contact
            </Link>
            <Link className="mt-7 text-red-400" href={''}>
                log out
            </Link>
        </ul>
    );
}

export default MobileSideBar;
