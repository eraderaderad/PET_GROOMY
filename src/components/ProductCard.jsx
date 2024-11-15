import { useState } from "react";

export default function ProductCard({ addItem, item, ...props }) {
  const [quantity, setQuantity] = useState(1);

  const formattedNumber = item.price.toLocaleString();

  function handleSubmit(event) {
    event.preventDefault();
    addItem(item, quantity); // Pass quantity to the addItem function
  }

  return (
    <div
      {...props}
      className="flex flex-col min-w-[45rem] min-h-[1000px] snap-start font-sans bg-white rounded-lg overflow-hidden border-2 border-black border-opacity-50 p-4 m-4"
    >
      {/* Image container */}
      <div className="flex-none w-full h-[60%] relative border-b-2 border-black border-opacity-50 mb-4">
        <img
          src={`/${item.image}.png`}
          alt={item.name}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Product details and Add to Bag form */}
      <form className="flex-auto p-6 flex flex-col justify-between" onSubmit={handleSubmit}>
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-lg font-semibold text-slate-900">
            {item.name}
          </h1>
          <div className="text-lg font-semibold text-slate-500">
            ₱{formattedNumber}
          </div>
          <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
            {item.description}
          </div>
        </div>

        {/* Quantity selector */}
        <div className="flex flex-col mt-4 gap-1">
          <p className="text-sm font-medium">Select quantity</p>
          <div className="flex items-baseline mb-6 pb-6 border-b border-slate-200">
            <select
              required
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-16 h-9 border border-slate-300 rounded-lg text-center"
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Centered Add to Bag button */}
        <div className="flex justify-center mt-auto mb-6">
          <button
            className="h-10 px-20 font-semibold rounded-md bg-black text-white"
            type="submit"
          >
            Add to bag
          </button>
        </div>
      </form>
    </div>
  );
}