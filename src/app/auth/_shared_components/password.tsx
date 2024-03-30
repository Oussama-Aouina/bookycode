'use client';

import { useState } from 'react';
import { LiaEyeSlash } from 'react-icons/lia';
import { LiaEye } from 'react-icons/lia';

export default function Password() {
    const [hiden, setHiden] = useState(true);
    return (
        <div className="relative">
            <input
                type={hiden ? 'password' : 'text'}
                name="password"
                className="mt-2.5 w-full items-start justify-center rounded-xl bg-white py-2.5 pl-3 pr-9 text-zinc-500 shadow-sm"
                placeholder="password..."
            />
            <div className="absolute right-2 top-6">
                {hiden ? (
                    <LiaEyeSlash
                        size={20}
                        className="text-zinc-500"
                        onClick={() => setHiden(false)}
                    />
                ) : (
                    <LiaEye
                        size={20}
                        className="text-zinc-500"
                        onClick={() => setHiden(true)}
                    />
                )}
            </div>
        </div>
    );
}
