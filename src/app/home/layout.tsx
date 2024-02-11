import Navbar from './Navbar';

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen w-full flex-col items-center bg-primary">
            <header className="sticky top-0 z-10 mb-5 w-full shadow-lg backdrop-blur-2xl">
                <Navbar />
            </header>
            {children}
        </div>
    );
}
