import FirstSection from './FirstSection';

export default function HomePage({ children }: { children?: React.ReactNode }) {
    return (
        <div className="flex w-full flex-col items-center">
            <FirstSection />
            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-700">
                    User Profile
                </h2>
                <div className="mt-8 flex flex-col items-center">
                    <div className="h-64 w-64 rounded-full bg-gray-200"></div>
                    <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                        User Profile
                    </h2>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-4">
                    <div className="h-40 w-32 bg-gray-200"></div>
                    <div className="h-40 w-32 bg-gray-200"></div>
                    <div className="h-40 w-32 bg-gray-200"></div>
                </div>
                <div className="mt-4 flex items-center">
                    <img
                        className="h-12 w-12 rounded-full object-cover"
                        src="user-profile-image.jpg"
                        alt="User Profile"
                    />
                    <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                            John Doe
                        </h3>
                        <p className="text-gray-600">john.doe@example.com</p>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-700">
                    My Books
                </h2>
                <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center">
                        <img
                            className="h-40 w-32 object-cover"
                            src="book1.jpg"
                            alt="Book 1"
                        />
                        <p className="mt-2 font-medium text-gray-900">Book 1</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            className="h-40 w-32 object-cover"
                            src="book2.jpg"
                            alt="Book 2"
                        />
                        <p className="mt-2 font-medium text-gray-900">Book 2</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            className="h-40 w-32 object-cover"
                            src="book3.jpg"
                            alt="Book 3"
                        />
                        <p className="mt-2 font-medium text-gray-900">Book 3</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
