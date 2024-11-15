export default function Card() {
  return (
    <div className="flex items-center justify-center pt-24 bg-[#EEF0FC] min-h-screen">

      <div className="flex flex-col items-center space-y-6 max-w-7xl">


        <div className="flex border-2 border-gray-300 rounded-lg w-full max-w-4xl transform transition-all duration-300 ease-in-out hover:scale-105">
          <div className="w-1/3 bg-gray-300 flex items-center justify-center">
            <img src="G1.jpg" alt="" />
          </div>
          <div className="w-2/3 p-6">
            <h2 className="text-6xl font-bold text-gray-800">Personalized Grooming</h2>
            <p className="text-gray-600 mt-2 text-3xl">
              "At Groomy, we provide personalized grooming services to help you look and feel your best,
              offering everything from haircuts and beard trims to rejuvenating facials and relaxing massages."
            </p>
          </div>
        </div>

 
        <div className="flex border-2 border-gray-300 rounded-lg w-full max-w-4xl transform transition-all duration-300 ease-in-out hover:scale-105">
        
          <div className="w-2/3 p-2">
            <h2 className="text-6xl font-bold text-gray-800">Salon - Style Grooming</h2>
            <p className="text-gray-600 text-3xl mt-2">
              "At Groomy, we provide a salon-style grooming experience designed 
              to keep pets comfortable and stress-free. Our soothing ambiance, 
              gentle scents, and attentive care create a relaxing environment,
              ensuring that every visit leaves your pet feeling pampered and refreshed."
            </p>
          </div>
          <div className="w-1/3 bg-gray-300 flex items-center justify-center">
            <img src="G2.png" alt="" />
          </div>
        </div>

        <div className="flex border-2 border-gray-300 rounded-lg w-full max-w-4xl transform transition-all duration-300 ease-in-out hover:scale-105">
          <div className="w-1/3 bg-gray-300 flex items-center justify-center">
            <img src="G3.jpg" alt="" />
          </div>
          <div className="w-2/3 p-6">
            <h2 className="text-6xl font-bold text-gray-800">Safety & Comfort</h2>
            <p className="text-gray-600 text-3xl mt-2">
              "At Groomy, we prioritize your safety and comfort by following strict 
              hygiene protocols and using high-quality, gentle products
              to ensure a relaxing and worry-free grooming experience."
            </p>
          </div>
        </div>

        <div className="flex border-2 border-gray-300 rounded-lg w-full max-w-4xl transform transition-all duration-300 ease-in-out hover:scale-105">
          
          <div className="w-2/3 p-6">
            <h2 className="text-6xl font-bold text-gray-800">Care for All Breeds</h2>
            <p className="text-gray-600 text-3xl mt-2">
              "At Groomy, we offer specialized grooming services tailored to meet the 
              unique needs of all breeds, ensuring every pet receives gentle,
              professional care in a safe and comfortable environment."
            </p>
          </div>
          <div className="w-1/3 bg-gray-300 flex items-center justify-center">
            <img src="G4.jpg" className="w-30 h-30" alt="" />
          </div>
        </div>

      </div>
    </div>
  );
}
