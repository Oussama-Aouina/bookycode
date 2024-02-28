import Image from 'next/image';
import { MdContactPage } from 'react-icons/md';
import { LiaEyeSlash } from 'react-icons/lia';
import { LiaEye } from 'react-icons/lia';
import Password from '../shared_components/password';

export default function SignupForm() {
    return (
        <div className="max-w-[750px] justify-center rounded-3xl bg-neutral-100 bg-opacity-60 px-11 py-12 shadow-sm backdrop-blur-[27.5px] max-md:px-5 max-md:py-6 lg:w-[800px]">
            <div className="flex items-center gap-5 max-md:flex-col max-md:items-center max-md:gap-0">
                <div className="flex w-1/2 cursor-pointer flex-col items-center justify-center rounded-full border-2 border-dashed border-red-700 border-opacity-40 p-10 shadow-sm max-md:p-5 lg:h-[250px]">
                    <div className="flex flex-col items-center justify-center whitespace-nowrap rounded-full bg-opacity-0  text-lg font-medium text-pink-900 ">
                        <MdContactPage size={40} className="text-red-900" />
                        <div className="mt-1">+Photo</div>
                    </div>
                </div>
                <div className="ml-5 flex  w-[95%] flex-col max-md:ml-0 max-md:w-full">
                    <div className="my-auto flex flex-col justify-center self-stretch whitespace-nowrap text-lg font-medium text-red-900  max-md:mt-5">
                        <label>username:</label>
                        <input
                            name="username"
                            type="text"
                            className="mt-2.5 items-start justify-center rounded-xl bg-white px-3 py-2.5 text-zinc-500 shadow-sm"
                            placeholder="username..."
                        />
                        <label className="mt-5">email:</label>
                        <input
                            name="email"
                            type="email"
                            className="mt-2.5 items-start justify-center rounded-xl bg-white px-3 py-2.5 text-zinc-500 shadow-sm"
                            placeholder="email..."
                        />
                        <label className="mt-5">password:</label>
                        <Password />

                        <button
                            type="submit"
                            className="mt-5 justify-center self-center rounded-xl bg-red-500 bg-opacity-70 px-7 py-2.5 font-semibold text-white hover:bg-opacity-90"
                        >
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
