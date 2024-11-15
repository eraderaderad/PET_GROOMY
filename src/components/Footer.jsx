export default function Footer() {
    return (
        <div className="w-full">
        <footer className="bg-[#ffffff] h-[500px] py-8 text-gray-700  border-[#A5D2D9]">
            <div className="h-[30px] bg-[#A5D2D9]"></div>

            <div className="container mx-auto flex flex-wrap justify-between gap-8 px-4 lg:px-0 pt-[35px]">
            <div className=" md:w-1/4 flex flex-col items-start pb-[85px]">
                <img src="logo.png" className="w-[203] h-[70] mb-4" alt="Logo" />
            </div>

            <div className="">
                <div className="pb-[21px]">
                <h3 className="font-semibold text-[18px] mb-3">
                    Help & Information
                </h3>
                <ul className="space-y-2 text-[12px]">
                    <li><button>Contact Us</button></li>
                    <li><button>Terms & Conditions</button></li>
                    <li><button>Shipping & Returns</button></li>
                    <li><button>Order Tracking</button></li>
                    <li><button>Recycling</button></li>
                    <li><button>Warranty</button></li>
                </ul>
                </div>
                
                <div className="pb-[21px]">
                <h3 className="font-semibold text-[18px] mb-3">Shopping</h3>
                <ul className="space-y-2 text-[12px]">
                    <li><button>My Account</button></li>
                    <li><button>Foods & Treats</button></li>
                    <li><button>Brushes & Combs</button></li>
                    <li><button>Toys & Accessories</button></li>
                    <li><button>Soaps & Shampoos</button></li>
                    <li><button>Gift Vouchers</button></li>
                </ul>
                </div>
            </div>

            <div>
                
                <div className="pb-[21px]">
                <h3 className="font-semibold text-[18px] mb-3">Groomy</h3>
                <ul className="space-y-2 text-[12px]">
                    <li><button>Home</button></li>
                    <li><button>Products</button></li>
                    <li><button>Guides</button></li>
                    <li><button>About Us</button></li>
                    <li><button>Terms of Use</button></li>
                    <li><button>Privacy</button></li>
                </ul>
                </div>
                
                <div className="pb-[21px]">
                <h3 className="font-semibold text-[18px] mb-3">Our Website</h3>
                <ul className="space-y-2 text-[12px]">
                    <li><button>Site Map</button></li>
                    <li><button>Privacy Policy</button></li>
                    <li><button>Cookie Policy</button></li>
                    <li><button>Website Help</button></li>
                </ul>
                </div>
            </div>
            
            <div className="w-full md:w-1/4 flex flex-col items-start">
                <h3 className="font-semibold mb-3 text-[18px]">Get in Touch</h3>
                <div className="flex space-x-3  mb-[12px] text-[18px]">
                <a href="#" aria-label="Facebook" className="hover:text-gray-500">
                    F
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-gray-500">
                    T
                </a>
                <a
                    href="#"
                    aria-label="Instagram"
                    className="hover:text-gray-500"
                >
                    I
                </a>
                <a href="#" aria-label="YouTube" className="hover:text-gray-500">
                    Y
                </a>
                </div>
                <h3 className="font-semibold  text-[18px]">Subscribe</h3>
                <form className="flex py-[21px] items-center space-x-2">
                <input
                    type="email"
                    placeholder="Enter email address"
                    className="p-2 text-[12px] rounded-full border border-gray-300 focus:outline-none focus:border-gray-500 w-[240px] h-[45px]"
                />
                <br className="p-[10px]"></br>
                <button className="bg-red-600 text-white hover:bg-white hover:text-red-600 border border-transparent hover:border-red-600 rounded-full text-[18px] w-[120px] h-[45px]">
                    Subscribe
                </button>
                </form>
            </div>
            </div>
            <div className="relative w-full h-[30px] bg-[#A5D2D9]">
            <p className="absolute inset-0 flex items-center justify-center text-black text-[12px]">
                &copy; Copyright Groomy 2024. Registered No: 123456789
            </p>
            </div>
        </footer>
        </div>
    )
}