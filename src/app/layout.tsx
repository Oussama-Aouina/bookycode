import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import '../styles/globals.css';

const quicksand = Quicksand({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Booky',
    description: 'Read books, be happy.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`bg-primary ${quicksand.className} h-full w-full`}>
                {children}
            </body>
        </html>
    );
}
