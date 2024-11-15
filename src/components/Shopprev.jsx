export default function Shopprev() {
    return (
        <div className="w-full h-full bg-sky-100 ">
            <div className=" grid grid-cols-3 gap-7 mt-24 pl-36 pr-28 relative mx-32">

                <div className="flex flex-col w-96 h-44 bg-sky-300 mt-20 drop-shadow-xl">  
                    <div className="relative">
                        <img src="as.png" className="w-34 h-40"/>
                        <p className="text-4xl font-black text-right pr-3 -mt-36">BLACK FRIDAY</p>
                        <h1 className="text-4xl font-bold text-right pr-3 text-red-800">Up to 18% Off</h1>
                        <button className="w-28 h-10 ml-52 mt-5 bg-red-600 text-white hover:bg-white hover:text-red-600 border border-transparent hover:border-red-600">SHOP NOW!</button>
                    </div>
                </div>  
                <div className="flex flex-col w-96 h-44 bg-sky-300 mt-20 drop-shadow-xl">  
                    <div className="relative ">
                        <img src="puppy1.png" className="w-34 h-40"/>
                        <p className="text-4xl font-black text-right pr-3 -mt-36">FREE BUNDLES </p>
                        <h1 className="text-4xl font-bold text-right pr-3 text-red-800">& Give Aways</h1>
                        <button className="w-28 h-10 ml-52 mt-5 bg-red-600 text-white hover:bg-white hover:text-red-600 border border-transparent hover:border-red-600">SHOP NOW!</button>
                    </div>
                </div>  
                <div className="flex flex-col w-96 h-44 bg-sky-300 mt-20 drop-shadow-xl">  
                    <div className="relative ">
                        <img src="puppy2.png" className="w-34 h-40"/>
                        <p className="text-4xl font-black text-right pr-3 -mt-36">TOYS</p>
                        <h1 className="text-4xl font-bold text-right pr-3 text-red-800">25% Off</h1>
                        <button className="w-28 h-10 ml-52 mt-5 bg-red-600 text-white hover:bg-white hover:text-red-600 border border-transparent hover:border-red-600">SHOP NOW!</button>
                    </div>
                </div>  
            </div>

            <div className="grid grid-cols-5 gap-16 pl-72"> 
                <div className="w-72 h-36 bg-sky-300 mt-9 drop-shadow-xl">
                    <div className="relative ">
                        <img src="puppy.png" className="w-34 h-40 -ml-5"/>
                        <p className="text-2xl font-black text-right pr-3 -mt-36">COMBS</p>
                        <h1 className="text-2xl font-bold text-right pr-3 text-red-800">Buy 1 Get 1</h1>
                        <button className="w-28 h-10 ml-40 mt-2 bg-red-600 text-white hover:bg-white hover:text-red-600 border border-transparent hover:border-red-600">SHOP NOW!</button>
                    </div>
                </div>
                <div className="w-72 h-36 bg-sky-300 mt-9 drop-shadow-xl ">
                    <div className="relative ">
                        <img src="puppy.png" className="w-30 h-40 -ml-5"/>
                        <p className="text-2xl font-black text-right pr-3 -mt-36">TOYS</p>
                        <h1 className="text-2xl font-bold text-right pr-3 text-red-800"> 25% Off</h1>
                        <button className="w-28 h-10 ml-40 mt-2 bg-red-600 text-white hover:bg-white hover:text-red-600 border border-transparent hover:border-red-600">SHOP NOW!</button>
                    </div>
                </div>
                <div className="w-72 h-36 bg-sky-300 mt-9 drop-shadow-xl ">
                    <div className="relative ">
                        <img src="puppy.png" className="w-30 h-40 -ml-5"/>
                        <p className="text-2xl font-black text-right pr-3 -mt-36">PET FOOD</p>
                        <h1 className="text-2xl font-bold text-right pr-3 text-red-800">Buy 1 Get 1</h1>
                        <button className="w-28 h-10 ml-40 mt-2 bg-red-600 text-white hover:bg-white hover:text-red-600 border border-transparent hover:border-red-600">SHOP NOW!</button>
                    </div>
                </div>
                <div className="w-72 h-36 bg-sky-300 mt-9 drop-shadow-xl ">
                    <div className="relative ">
                        <img src="puppy.png" className="w-30 h-40 -ml-5"/>
                        <p className="text-2xl font-black text-right pr-3 -mt-36">BAGS</p>
                        <h1 className="text-2xl font-bold text-right pr-3 text-red-800"> 50% Off</h1>
                        <button className="w-28 h-10 ml-40 mt-2 bg-red-600 text-white hover:bg-white hover:text-red-600 border border-transparent hover:border-red-600">SHOP NOW!</button>
                    </div>
                </div>
            </div>
            <div className="mt-24 mr-56 ml-72 flex flex-col">
                <p className="text-5xl font-bold">Featured Product for Sale</p>
                <p className="mt-3">Check out our top picks!</p>
                <button className="mt-6 ml-6 rounded-lg bg-red-500 w-52 h-11 text-white hover:bg-white hover:text-red-600 border border-transparent hover:border-red-600">View All Products</button>
                <img src="dog1.png" className="w-64 place-self-end -mt-44 mr-14 " />
            </div>
            <div className="grid grid-cols-3 gap-14 ml-80 mt-16 pr-24 w-full justify-center">
                
                <div className="w-80 h-full border-2 bg-transparent border-black rounded-md">
                    <div className="items-center">
                        <img src="doggy.png" className="w-72 mx-3.5 my-3.5 rounded-md" />
                        <p className="text-2xl font-bold pl-4">Soft Doggy Toy</p>
                        <p className="pl-4">Price: 89 Php</p>
                        <button className="w-64 h-8 ml-7 my-3.5 bg-red-600 text-white hover:bg-white hover:text-red-600 border border-transparent hover:border-red-600 rounded-md">
                        BUY NOW
                        </button>
                    </div>
                </div>
                <div className="w-80 h-full border-2 bg-transparent border-black rounded-md -ml-48">
                    <div className="items-center">
                        <img src="pedigree.png" className="w-72 mx-3.5 my-3.5 rounded-md" />
                        <p className="text-2xl font-bold pl-4">Pedigree Tasty Bites</p>
                        <p className="pl-4">Price: 105 Php</p>
                        <button className="w-64 h-8 ml-7 my-3.5 bg-red-600 text-white hover:bg-white hover:text-red-600 border border-transparent hover:border-red-600 rounded-md">
                        BUY NOW
                        </button>
                    </div>
                </div>
                <div className="w-80 h-full border-2 bg-transparent border-black rounded-md -ml-96">
                    <div className="items-center">
                        <img src="brush.png" className="w-72 mx-3.5 my-3.5 rounded-md" />
                        <p className="text-2xl font-bold pl-4">Large Slicker Brush</p>
                        <p className="pl-4">Price: 880 Php</p>
                        <button className="w-64 h-8 ml-7 my-3.5 bg-red-600 text-white hover:bg-white hover:text-red-600 border border-transparent hover:border-red-600 rounded-md">
                        BUY NOW
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}