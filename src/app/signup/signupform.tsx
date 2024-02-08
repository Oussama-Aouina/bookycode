export default function SignupForm() {
    return (
        <div className="max-w-[745px] justify-center rounded-md bg-neutral-100 bg-opacity-60 px-11 py-12 shadow-sm backdrop-blur-[27.5px] max-md:px-5">
            <div className="max-md: flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex w-[35%] flex-col max-md:ml-0 max-md:w-full">
                    <div className="my-auto flex w-full flex-col justify-center self-stretch whitespace-nowrap rounded-[200px] border-2 border-dashed border-stone-600 border-opacity-40 bg-zinc-300 bg-opacity-0 px-20 py-12 text-lg font-medium text-pink-900 shadow-sm max-md:mt-10 max-md:px-5">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b625f13b3623be5d7bbe6a731cbef14bf09fdcb4211ce7be9e471f8659b2e9fa?apiKey=e523dd2b0fa04ae38e0bed12183ccf1a&"
                            className="mt-5 aspect-[0.76] w-[31px] self-center fill-red-900"
                        />
                        <div className="mt-2">+Photo</div>
                    </div>
                </div>
                <div className="ml-5 flex w-[65%] flex-col max-md:ml-0 max-md:w-full">
                    <div className="my-auto flex flex-col justify-center self-stretch whitespace-nowrap text-lg font-medium text-red-900 max-md:mt-10">
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
                        <input
                            type="password"
                            name="password"
                            className="mt-2.5 items-start justify-center rounded-xl bg-white py-2.5 pl-3 pr-16 text-zinc-500 shadow-sm"
                            placeholder="password..."
                        />
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
