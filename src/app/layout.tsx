import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import '../styles/globals.css';
import { HiCalendarDays } from 'react-icons/hi2';

const quicksand = Quicksand({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Booky',
    description: 'Read books, be happy.',
    icons: {
        apple: ['/apple-icon.png'], // Fix: Add the 'appleTouchIcon' property with the correct value
        icon: ['/favicon.ico?v4'],
        shortcut: ['/apple-icon.png?v4'],
    },
    manifest: '/site.webmanifest',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link
                    rel="icon"
                    href="/icon?<generated>"
                    type="image/<generated>"
                    sizes="<generated>"
                />
                <link
                    rel="apple-touch-icon"
                    href="/apple-touch-icon?<generated>"
                    type="image/<generated>"
                    sizes="<generated>"
                />
            </head>
            <body className={`bg-primary ${quicksand.className} h-full w-full`}>
                {children}
            </body>
        </html>
    );
}
