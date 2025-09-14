import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaHeart } from "react-icons/fa";
import photo from "../../../assets/stul.png";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);

  const [color, setColor] = useState("black");
  const data = [
    { id: "black", color: "bg-black" },
    { id: "beige", color: "bg-gray-300" },
    { id: "red", color: "bg-red-500" },
    { id: "yellow", color: "bg-yellow-500 border" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">
      <div>
        <div className="relative">
          <div className="flex gap-2">
            <p className="text-sm text-gray-500 mb-2 hover:cursor-pointer">
              Home {"> "}
            </p>
            <p className="text-sm text-gray-500 mb-2 hover:cursor-pointer">
              Shop {"> "}
            </p>
            <p className="text-sm text-gray-500 mb-2 hover:cursor-pointer">
              Living Room {"> "}
            </p>
            <p className="text-sm text-gray-500 mb-2 hover:cursor-pointer">
              Product
            </p>
          </div>
          <div>
            <img
              src={photo}
              alt="Tray Table"
              className="rounded-lg shadow-md  transition-shadow duration-300 hover:shadow-2xl hover:cursor-pointer"
            />
          </div>

          <button className="absolute top-1/2 left-2 bg-white rounded-full p-2 shadow">
            <FaChevronLeft />
          </button>
          <button className="absolute top-1/2 right-2 bg-white rounded-full p-2 shadow">
            <FaChevronRight />
          </button>
        </div>
        <div className="flex gap-3.5 mt-4 w-[167px] ">
          <img
            src={photo}
            className="rounded-lg transition-shadow duration-300 hover:shadow-2xl hover:cursor-pointer"
          />
          <img
            src={photo}
            className="rounded-lg transition-shadow duration-300 hover:shadow-2xl hover:cursor-pointer"
          />
          <img
            src={photo}
            className="rounded-lg transition-shadow duration-300 hover:shadow-2xl hover:cursor-pointer"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-3xl font-semibold">Tray Table</h2>
        <p className="text-gray-600">
          Buy one or buy a few and make every space where you sit more
          convenient. Light and easy to move around with removable tray top,
          handy for serving snacks.
        </p>

        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-gray-900">$199.00</span>
          <span className="line-through text-gray-400">$400.00</span>
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-1">Offer expires in:</p>
          <div className="flex gap-3 text-center">
            <div className="p-2 bg-gray-100 rounded">
              <p className="text-lg font-bold">02</p>
              <p className="text-xs">Days</p>
            </div>
            <div className="p-2 bg-gray-100 rounded">
              <p className="text-lg font-bold">12</p>
              <p className="text-xs">Hours</p>
            </div>
            <div className="p-2 bg-gray-100 rounded">
              <p className="text-lg font-bold">05</p>
              <p className="text-xs">Minutes</p>
            </div>
            <div className="p-2 bg-gray-100 rounded">
              <p className="text-lg font-bold">45</p>
              <p className="text-xs">Seconds</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-500">Measurements</p>
          <p className="font-medium">17 1/2 × 20 5/8 "</p>
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-1">Choose Color</p>
          <div className="flex gap-3  ">
            {data.map((c) => (
              <button
                key={c.id}
                onClick={() => setColor(c.id)}
                className={`w-10 h-10 rounded-full border flex items-center justify-center hover:cursor-pointer ${
                  color === c.id ? "ring-2 ring-black" : ""
                }`}
              >
                <span className={`w-6 h-6 rounded-full ${c.color}`}></span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <div className="flex items-center border rounded-lg">
            <button
              className="px-3 py-2 text-lg hover:cursor-pointer"
              onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              className="px-3 py-2 text-lg hover:cursor-pointer"
              onClick={() => setQuantity((q) => q + 1)}
            >
              +
            </button>
          </div>
          <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:cursor-pointer">
            <FaHeart size={18} />
            Wishlist
          </button>
        </div>

        <button className="w-full bg-black text-white py-3 rounded-lg font-medium mt-4 hover:cursor-pointer">
          Add to Cart
        </button>

        <div className="text-sm text-gray-500 mt-3">
          <p>SKU: 1117</p>
          <p>Category: Living Room, Bedroom</p>
        </div>
      </div>
    </div>
  );
}
