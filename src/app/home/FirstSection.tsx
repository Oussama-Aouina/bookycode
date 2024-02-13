export default function FirstSection() {
    return (
        <section className="flex h-screen flex-col items-center justify-center ">
            <h2 className="mb-4 bg-gradient-to-r from-linearred from-10%  to-red-200 bg-clip-text py-8 text-6xl font-semibold text-transparent ">
                Welcome Oussama
            </h2>
            <div className="max-w-[876px]">
                <div className="max-md: flex items-start justify-start gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex w-2/5 flex-col items-start max-md:ml-0 max-md:w-full">
                        <div className="flex grow flex-col items-start whitespace-nowrap px-5 text-3xl font-semibold leading-[56.62px] text-black max-md:mt-10">
                            <h3 className="-mt-3">
                                📖{' '}
                                <span className="text-black">last reading</span>
                                :{' '}
                            </h3>
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/915db04dc28366987e78cda3cb8736b63cb618d175252fb2a5b77d54250c4794?apiKey=e523dd2b0fa04ae38e0bed12183ccf1a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/915db04dc28366987e78cda3cb8736b63cb618d175252fb2a5b77d54250c4794?apiKey=e523dd2b0fa04ae38e0bed12183ccf1a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/915db04dc28366987e78cda3cb8736b63cb618d175252fb2a5b77d54250c4794?apiKey=e523dd2b0fa04ae38e0bed12183ccf1a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/915db04dc28366987e78cda3cb8736b63cb618d175252fb2a5b77d54250c4794?apiKey=e523dd2b0fa04ae38e0bed12183ccf1a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/915db04dc28366987e78cda3cb8736b63cb618d175252fb2a5b77d54250c4794?apiKey=e523dd2b0fa04ae38e0bed12183ccf1a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/915db04dc28366987e78cda3cb8736b63cb618d175252fb2a5b77d54250c4794?apiKey=e523dd2b0fa04ae38e0bed12183ccf1a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/915db04dc28366987e78cda3cb8736b63cb618d175252fb2a5b77d54250c4794?apiKey=e523dd2b0fa04ae38e0bed12183ccf1a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/915db04dc28366987e78cda3cb8736b63cb618d175252fb2a5b77d54250c4794?apiKey=e523dd2b0fa04ae38e0bed12183ccf1a&"
                                className="mt-6 aspect-[0.65] w-full shadow-sm"
                            />
                        </div>
                    </div>
                    <div className="ml-5 flex w-3/5 flex-col max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col justify-center px-5 max-md:mt-10 max-md:max-w-full">
                            <div className="text-3xl font-semibold tracking-wide text-black max-md:max-w-full">
                                The Shape of Design
                            </div>
                            <div className="mt-2 flex gap-2 self-start whitespace-nowrap text-sm">
                                <div className="my-auto grow text-neutral-800">
                                    Author
                                </div>
                                <div className="flex justify-between gap-2 rounded px-3 py-1.5 font-light text-black">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/96fe9e7c1cfacf2447e870c1cba4f186cc952abd2039316e48ee68a97bfb55d1?apiKey=e523dd2b0fa04ae38e0bed12183ccf1a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/96fe9e7c1cfacf2447e870c1cba4f186cc952abd2039316e48ee68a97bfb55d1?apiKey=e523dd2b0fa04ae38e0bed12183ccf1a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/96fe9e7c1cfacf2447e870c1cba4f186cc952abd2039316e48ee68a97bfb55d1?apiKey=e523dd2b0fa04ae38e0bed12183ccf1a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/96fe9e7c1cfacf2447e870c1cba4f186cc952abd2039316e48ee68a97bfb55d1?apiKey=e523dd2b0fa04ae38e0bed12183ccf1a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/96fe9e7c1cfacf2447e870c1cba4f186cc952abd2039316e48ee68a97bfb55d1?apiKey=e523dd2b0fa04ae38e0bed12183ccf1a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/96fe9e7c1cfacf2447e870c1cba4f186cc952abd2039316e48ee68a97bfb55d1?apiKey=e523dd2b0fa04ae38e0bed12183ccf1a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/96fe9e7c1cfacf2447e870c1cba4f186cc952abd2039316e48ee68a97bfb55d1?apiKey=e523dd2b0fa04ae38e0bed12183ccf1a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/96fe9e7c1cfacf2447e870c1cba4f186cc952abd2039316e48ee68a97bfb55d1?apiKey=e523dd2b0fa04ae38e0bed12183ccf1a&"
                                        className="aspect-square w-4 self-start"
                                    />
                                    <div className="grow">Frank Chimero</div>
                                </div>
                            </div>
                            <div className="mt-2 flex gap-2 self-start whitespace-nowrap text-neutral-800">
                                <div className="my-auto grow text-sm">
                                    Categories
                                </div>
                                <div className="aspect-[1.87] justify-center rounded bg-pink-200 p-2 text-xs font-bold">
                                    Design
                                </div>
                            </div>
                            <div className="mt-7 text-lg font-bold text-neutral-800 max-md:max-w-full">
                                Description
                            </div>
                            <div className="mt-3 text-sm leading-5 text-neutral-800 max-md:max-w-full">
                                “If you create things, the book’s insights will
                                inform the way you think about your work,
                                regardless of how you make your living.”
                            </div>
                            <div className="mt-7 text-lg font-bold text-neutral-800 max-md:max-w-full">
                                Rating
                            </div>
                            <div className="mt-3 flex w-[170px] max-w-full gap-2.5">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/04afbd117cdb376a335092efb9b4e067837dd1c77bf62a574be5eff7e2ee2a1b?apiKey=e523dd2b0fa04ae38e0bed12183ccf1a&"
                                    className="aspect-square w-full flex-1 shrink-0"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/04afbd117cdb376a335092efb9b4e067837dd1c77bf62a574be5eff7e2ee2a1b?apiKey=e523dd2b0fa04ae38e0bed12183ccf1a&"
                                    className="aspect-square w-full flex-1 shrink-0"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/04afbd117cdb376a335092efb9b4e067837dd1c77bf62a574be5eff7e2ee2a1b?apiKey=e523dd2b0fa04ae38e0bed12183ccf1a&"
                                    className="aspect-square w-full flex-1 shrink-0"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/04afbd117cdb376a335092efb9b4e067837dd1c77bf62a574be5eff7e2ee2a1b?apiKey=e523dd2b0fa04ae38e0bed12183ccf1a&"
                                    className="aspect-square w-full flex-1 shrink-0"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/04afbd117cdb376a335092efb9b4e067837dd1c77bf62a574be5eff7e2ee2a1b?apiKey=e523dd2b0fa04ae38e0bed12183ccf1a&"
                                    className="aspect-square w-full flex-1 shrink-0"
                                />
                            </div>
                            <div className="mt-6 pb-2 pt-7 max-md:max-w-full">
                                <div className="max-md: flex gap-5 max-md:flex-col max-md:gap-0">
                                    <div className="flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
                                        <div className="flex grow flex-col font-bold max-md:mt-10">
                                            <div className="text-lg text-neutral-800">
                                                Marked page:
                                            </div>
                                            <div className="mt-3.5 justify-center whitespace-nowrap rounded border border-dashed border-black bg-stone-200 px-5 py-3 text-center text-4xl text-yellow-400">
                                                119
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ml-5 flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
                                        <div className="mt-8 w-full grow justify-center whitespace-nowrap rounded-xl border border-solid border-black bg-yellow-400 px-7 py-3.5 text-lg font-semibold text-white max-md:mt-10 max-md:px-5">
                                            mark as completed
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
