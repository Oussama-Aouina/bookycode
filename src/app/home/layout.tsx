import Navbar from './Navbar';

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen w-full flex-col items-center ">
            <header className="sticky -top-1 z-10  mb-5 w-full bg-slate-100 bg-opacity-10 shadow-lg backdrop-blur-2xl">
                <Navbar />
            </header>
            {children}
        </div>
    );
}
