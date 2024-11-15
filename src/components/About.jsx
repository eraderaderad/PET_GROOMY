export default function About() {
    return (
        <div className="w-full mt-60">
        <div className="relative w-full h-48 object-cover mx-auto border">
            <img src="doggy3.png" />
        </div>

        <div id="our-story" className="text-4xl font-bold text-center pt-6 mt-32">
            <h1>Our Story</h1>
        </div>
        <div className="text-base text-center mt-4 pb-6">
            <p>Discover how we started and our journey so far.</p>
        </div>
        <div className="flex justify-center pb-8">
            <button className="px-6 py-2 min-w-[240px] text-center text-white bg-red-600 border border-red-600 rounded-lg hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring">
            Read More
            </button>
        </div>

        <section className="flex flex-col items-center space-y-6">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row border rounded-md border-inherit py-4 px-4 w-[530px] h-[116px] text-center sm:text-left shadow-md">
                    <img src="doggy4.png" className="flex-shrink-0 m-4 w-16 h-16 rounded-full bg-gray-400 self-center"/>
                <div className="flex flex-col py-2 pr-2">
                <h4 className="text-lg font-medium">History</h4>
                <p className="text-sm">
                    Established in 2010, we have been providing top-quality services
                    to our customers.
                </p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row border rounded-md border-inherit py-4 px-4 w-[530px] h-[116px] text-center sm:text-left shadow-md">
            <img src="doggy6.png" className="flex-shrink-0 m-4 w-16 h-16 rounded-full bg-gray-400 self-center"/>
                <div className="flex flex-col py-2 pr-2">
                <h4 className="text-lg font-medium">Mission</h4>
                <p className="text-sm">
                    Our mission is to redefine customer satisfaction by delivering
                    exceptional products.
                </p>
                </div>
            </div>
            </div>

            <div className="flex flex-col sm:flex-row border rounded-md border-inherit py-4 px-4 w-[530px] h-[116px] max-w-md text-center sm:text-left shadow-md mt-6">
            <img src="doggy5.png" className="flex-shrink-0 m-4 w-16 h-16 rounded-ful self-center"/>
            <div className="flex flex-col py-2 pr-2">
                <h4 className="text-lg font-medium">Vision</h4>
                <p className="text-sm">
                Our vision is to lead the market with innovative products that
                inspire our customers.
                </p>
            </div>
            </div>
        </section>

        <div className="w-full">
            <div className="relative mt-12">
            <img
                src="catgroom.jpg"
                className="w-full h-56 object-cover mx-auto opacity-50"
                alt="Logo"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center pt-6">
                <h1 className="text-4xl font-bold">About Us</h1>
                <p className="text-base mt-4 font-bold">
                Learn more about our company and mission.
                </p>
                <div className="flex justify-center pb-8 pt-8">
                <button className="px-6 py-2 min-w-[240px] text-center text-white bg-red-600 border border-red-600 rounded-lg hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring">
                    Contact Us
                </button>
                </div>
            </div>
            </div>

            <div className="flex justify-center w-full pt-9 pb-9">
            <div className="flex flex-col sm:flex-row border rounded-md border-inherit py-1 px-1 w-full max-w-[1140px] text-center sm:text-left shadow-md">
                <img src="doggy7.png" className="flex-shrink-0 m-4 w-[100px] h-[100px] rounded-full self-center"/>
                <div className="flex flex-col py-4 pr-2">
                <h4 className="text-[24px] font-bold">Our Team</h4>

                <div className="flex gap-x-[1px] justify-center sm:justify-start mt-2">
                    <span className="text-[12px] mx-1 my-[2px] font-semibold text-gray-600 bg-[#D9D9D9] rounded-sm w-[68px] h-[20px] flex items-center justify-center">
                    Leadership
                    </span>
                    <span className="text-[12px] mx-1 my-[2px] font-semibold text-gray-600 bg-[#D9D9D9] rounded-sm w-[64px] h-[20px] flex items-center justify-center">
                    Innovation
                    </span>
                </div>
                <p className="text-sm font-hairline mt-2">
                    Meet the people behind our success.
                </p>
                </div>
            </div>
            </div>

            <div className="relative mb-12">
            <div className="flex flex-col items-center mb-12 text-center pt-6 space-y-6 px-6">
                <h1 className="text-4xl font-bold">Join the Conversation</h1>
                <p className="text-base font-regular">
                Stay updated with our latest news and events.
                </p>
                <div className="flex justify-center">
                <button className="px-6 py-2 min-w-[240px] text-center text-white bg-red-600 border border-red-600 rounded-lg hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring">
                    Follow Us
                </button>
                </div>
            </div>
            </div>
        </div>

        <div className="relative pt-9 h-72">
            <img
            src="bigdoggy.png"
            className="w-[1140px] h-72 object-cover mx-auto"
            alt="Logo"
            />
        </div>

        <div className="text-base text-center mt-4 py-20">
            <p>© 2021 Groomy Sales Inc. All Rights Reserved.</p>
        </div>

        <section className="text-gray-600 body-font w-[1140px] h-[400px] mx-auto">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div
                className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left -mt-32 md:mb-0 items-center text-center"
                style={{ paddingBottom: "74px", paddingTop: "74px" }}
            >
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Welcome to our Pet Grooming Product
                </h1>
                <p className="mb-8 leading-relaxed">
                Explore our wide range of top-quality products
                </p>
                <div className="flex justify-center pb-8 pt-8">
                <button className="px-6 py-2 min-w-[240px] text-center text-white bg-red-600 border border-red-600 rounded-lg hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring">
                    View Inventory
                </button>
                </div>
            </div>
            <div
                className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 -mt-56"
                style={{ paddingTop: "74px" }}
            >
                <img
                className="object-cover object-center rounded"
                alt="hero"
                src="middoggy.png"
                />
            </div>
            </div>
        </section>
        </div>
    );
    }
