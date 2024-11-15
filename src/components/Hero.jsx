export default function Hero() {
    return (
        <div className="flex  flex-col ">
            <div className="w-2/5 pl-36 ">
                <div className="text-3xl place-content-start font-bold ">
                    <h1>When comfort meets care, every moment shines.</h1>
                </div>
                <div className="text-2xl mt-4">
                    <h2>Just like every mile on the road feels golden when you're at your best. 
                        Our grooming products are designed to bring you the ultimate comfort and confidence, 
                        so you can look and feel your best, no matter where life takes you.</h2>
                </div>     
            </div>
            <div className="relative">
                    <img src="dog.png" className="w-2/5 h-auto absolute inset-y-0 -top-96 right-44 " />
                </div>
        </div>
    )
}