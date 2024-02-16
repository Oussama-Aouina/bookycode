import Link from 'next/link';

export default function ProfilePopup() {
    return (
        <ul className="absolute right-10 top-10 flex  max-w-[162px] flex-col items-start rounded-xl bg-primary px-4 py-3.5 text-xl font-medium text-zinc-800 shadow-pop">
            <Link className="self-stretch text-red-900" href={''}>
                Foulen benfoulen
            </Link>
            <Link className="mt-4 whitespace-nowrap text-lg" href={''}>
                edit account
            </Link>
            <Link className="mt-3.5 whitespace-nowrap text-lg" href={''}>
                account info
            </Link>
            <Link className="mt-7 text-red-400" href={''}>
                log out
            </Link>
        </ul>
    );
}
