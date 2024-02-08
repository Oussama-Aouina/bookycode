import Image from 'next/image';
import logo from '../../../public/logo/booky.png';

export default function SignupLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex h-screen w-full flex-col items-center justify-center  bg-primary p-4 sm:p-24">
            <Image src={logo} alt="Booky" width={150} height={150} />
            {children}
        </main>
    );
}
