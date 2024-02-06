import Image from 'next/image';
import logo from '../../public/logo/booky.png';
import Link from 'next/link';
import { TbPlayerSkipForward } from 'react-icons/tb';
import { GoPerson } from 'react-icons/go';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className=" to-99% max-w-[752px] bg-gradient-to-r from-linearred from-10% to-transparent bg-clip-text text-center text-6xl font-semibold text-transparent sm:text-8xl">
                Welcome to
            </div>
            <div className="relative flex max-w-[200px] items-center justify-center sm:max-w-[300px]">
                <Image
                    src={logo}
                    alt="Logo"
                    // width={400}
                    // height={400}
                    objectFit="contain"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
            </div>

            <div className="flex items-center ">
                <Link href={'/signin'} className="mr-3">
                    <div className="mr-4 flex items-center justify-center gap-20 rounded-md bg-red-500 bg-opacity-70 px-4 py-2 text-xl font-medium text-white hover:bg-opacity-80 md:px-7">
                        Login
                        <GoPerson size={25} className="row-span-4" />
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
