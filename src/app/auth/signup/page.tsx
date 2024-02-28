import Link from 'next/link';
import SignupForm from './signupform';

export default function SigninPage() {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center">
            <SignupForm />
            <span className="mt-5 text-xs font-semibold text-gray-400">
                Already have an account?
                <Link
                    href="/auth/signin"
                    className="text-red-300 hover:text-red-600"
                >
                    Sign in
                </Link>
            </span>
        </div>
    );
}
