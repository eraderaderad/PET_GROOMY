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
                    <li>Contact Us</li>
                    <li>Terms & Conditions</li>
                    <li>Shipping & Returns</li>
                    <li>Order Tracking</li>
                    <li>Recycling</li>
                    <li>Warranty</li>
                </ul>
                </div>
                
                <div className="pb-[21px]">
                <h3 className="font-semibold text-[18px] mb-3">Shopping</h3>
                <ul className="space-y-2 text-[12px]">
                    <li>My Account</li>
                    <li>Foods & Treats</li>
                    <li>Brushes & Combs</li>
                    <li>Toys & Accessories</li>
                    <li>Soaps & Shampoos</li>
                    <li>Gift Vouchers</li>
                </ul>
                </div>
            </div>

            <div>
                
                <div className="pb-[21px]">
                <h3 className="font-semibold text-[18px] mb-3">Groomy</h3>
                <ul className="space-y-2 text-[12px]">
                    <li>Home</li>
                    <li>Products</li>
                    <li>Guides</li>
                    <li>About Us</li>
                    <li>Terms of Use</li>
                    <li>Privacy</li>
                </ul>
                </div>
                
                <div className="pb-[21px]">
                <h3 className="font-semibold text-[18px] mb-3">Our Website</h3>
                <ul className="space-y-2 text-[12px]">
                    <li>Site Map</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                    <li>Website Help</li>
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
                <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 text-[18px] w-[120px] h-[45px]">
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