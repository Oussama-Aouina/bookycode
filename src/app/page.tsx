import Image from 'next/image';
import logo from '../../public/logo/booky.png';
import Link from 'next/link';
import { MdPerson } from 'react-icons/md';
import { TfiControlSkipForward } from 'react-icons/tfi';
import { TbPlayerSkipForward } from 'react-icons/tb';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className=" from-linearred to-99% max-w-[752px] bg-gradient-to-r from-10% to-transparent bg-clip-text text-8xl font-semibold text-transparent max-md:text-4xl">
                Welcome to{' '}
            </div>
            <Image
                src={logo}
                alt="Logo"
                width={400}
                height={400}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            />
            <div className="flex items-center ">
                <Link href={'/signin'} className="mr-3">
                    <div className="mr-4 flex items-center justify-center gap-20 rounded-md bg-red-500 bg-opacity-70 px-4 py-2 text-xl font-medium text-white hover:bg-opacity-80 md:px-7">
                        Login
                        <MdPerson size={25} />
                    </div>
                </Link>
                <Link href={'/home'} className="mr-3">
                    <div className="flex items-center justify-center gap-20 rounded-md bg-stone-600 bg-opacity-40 px-4 py-2 text-xl font-medium text-white hover:bg-opacity-60 md:px-7">
                        Skip
                        <TbPlayerSkipForward size={25} />
                    </div>
                </Link>
            </div>
        </main>
    );
}
