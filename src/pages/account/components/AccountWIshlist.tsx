// src/pages/account/Wishlist.tsx
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "../../../lib";
import type { IProduct } from "../../../types";

const Wishlist: React.FC = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist.value);

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold mb-6">Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid gap-4">
          {wishlist.map((item: IProduct) => (
            <Link
              to={`/product/${item.id}`}
              key={item.id}
              className="flex items-center gap-4 bg-[#F9FAFB] p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-md"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">Category: {item.category}</p>
              </div>

              <div className="font-medium text-gray-900">{item.price} USD</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
