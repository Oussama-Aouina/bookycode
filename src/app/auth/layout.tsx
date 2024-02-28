import Image from 'next/image';
import logo from '../../../public/logo/booky.png';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Link from 'next/link';
export default function SigninLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="relative flex h-screen w-full flex-col items-center  justify-center bg-primary p-24">
            <Link href="/">
                <IoMdArrowRoundBack className="absolute left-6 top-6 text-2xl text-red-900" />
            </Link>
            <Image src={logo} alt="Booky" width={150} height={150} priority />
            {children}
        </main>
    );
}
