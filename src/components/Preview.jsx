import PrevPic from "./Preview-pic"

export default function Preview() {
    return (
        <div className="w-full h-96 mt-28">
            <div className="text-center items-center justify-center mr-20">
                <h1 className="text-5xl text-center text-bold">SHOP PREVIEW</h1>
                <p className="my-3">Stay informed with our social posts</p>
                <button className="w-52 mt-3 h-10 bg-red-600 rounded-md text-white hover:bg-white hover:text-red-600 border border-transparent hover:border-red-600">Follow Us</button>
                <div className="ml-80">
                    <PrevPic/>
                </div>
            </div>
            <div className="mx-64 flex">
                <div>
                    <h1 className="text-4xl font-bold">Customer Reviews</h1>
                    <p className="mt-4">See what our customers say</p>
                </div>
                <div className="self-end max-w-sm bg-white border border-gray-300 rounded-lg p-4 ml-56 -mt-4 mr-10">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                            <img src="customer-photo.jpg" alt="Customer" className="w-full h-full object-cover" />
                        </div>
                        <div className="relative">
                            <h3 className="text-lg font-semibold text-gray-900">puke</h3>
                            <div className="absolute top-0 left-[150px] flex text-yellow-500">
                                <span className="text-xl">&#9733;</span>
                                <span className="text-xl">&#9733;</span>
                                <span className="text-xl">&#9733;</span>
                                <span className="text-xl">&#9733;</span>
                                <span className="text-xl">&#9733;</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-gray-700 text-sm">
                        <p>"This product is amazing! It exceeded my expectations in every way."</p>
                    </div>
                </div>
                <div className="self-end max-w-sm bg-white border border-gray-300 rounded-lg p-4 -mt-36 -mr-9">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                            <img src="customer-photo.jpg" alt="Customer" className="w-full h-full object-cover" />
                        </div>
                        <div className="relative">
                            <h3 className="text-lg font-semibold text-gray-900">tite</h3>
                            <div className="absolute top-0 left-[150px] flex text-yellow-500">
                                <span className="text-xl">&#9733;</span>
                                <span className="text-xl">&#9733;</span>
                                <span className="text-xl">&#9733;</span>
                                <span className="text-xl">&#9733;</span>
                                <span className="text-xl">&#9733;</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-gray-700 text-sm">
                        <p>"This product is amazing! It exceeded my expectations in every way."</p>
                    </div>
                </div>
            </div>
        </div>
    )
}