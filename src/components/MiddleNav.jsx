export default function MiddleNav() {
  return (
    <div className="flex items-center justify-center relative mt-20">

      <nav className="bg-[#A1D3D6] p-12 w-[1100px] h-[180px] absolute inset-y-0 -mt-20 text-white rounded-[50px] shadow-lg">
        <ul className="flex space-x-20 justify-center items-center">
          <li className="flex flex-col items-center">
            <img 
              src="Bath.png" 
              alt="" 
              className="w-20 h-20 mb-2 transform transition-all duration-300 ease-in-out hover:scale-110"
            />
            <a className="hover:text-[#424D4E]">Personalize Grooming</a>
          </li>
          <li className="flex flex-col items-center">
            <img 
              src="Shampoo.png" 
              alt="" 
              className="w-20 h-20 mb-2 transform transition-all duration-300 ease-in-out hover:scale-110"
            />
            <a className="hover:text-[#424D4E]">Salon-Style Grooming</a>
          </li>
          <li className="flex flex-col items-center">
            <img 
              src="Foot.png" 
              alt="" 
              className="w-20 h-20 mb-2 transform transition-all duration-300 ease-in-out hover:scale-110"
            />
            <a className="hover:text-[#424D4E]">Safety and Comfort</a>
          </li>
          <li className="flex flex-col items-center">
            <img 
              src="DOGS.png" 
              alt="" 
              className="w-20 h-20 mb-2 transform transition-all duration-300 ease-in-out hover:scale-110"
            />
            <a className="hover:text-[#424D4E]">Care for All Breeds</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
