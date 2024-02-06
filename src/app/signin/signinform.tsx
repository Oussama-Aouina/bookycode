export default function SigninForm(props: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col flex-wrap content-center justify-center whitespace-nowrap rounded-md bg-neutral-100 bg-opacity-60 px-6 py-6 text-lg font-medium text-red-900 shadow-sm backdrop-blur-[27.5px]  sm:max-w-[435px] sm:rounded-[30px]">
            <label>username:</label>
            <input
                name="username"
                type="text"
                className="mt-2.5 items-start justify-center rounded-xl bg-white px-3 py-2.5 text-zinc-500 shadow-sm"
                placeholder="username..."
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
    );
}
