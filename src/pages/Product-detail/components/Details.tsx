import { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { useFetch } from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseAmount,
  increaseAmount,
} from "../../../lib/features/cartSlice";
import { toggleLike } from "../../../lib/features/wishlistSlice";
import type { RootState } from "../../../lib";
import Loading from "./Loading";

export default function ProductPage() {
  const dispatch = useDispatch();
  const carts = useSelector((state: RootState) => state.cart.value);
  const wishlist = useSelector((state: RootState) => state.wishlist.value);

  const { id } = useParams();
  const { data, loading, error } = useFetch("/products");
  const [color, setColor] = useState("black");
  const data1 = [
    { id: "black", color: "bg-black" },
    { id: "beige", color: "bg-gray-300" },
    { id: "red", color: "bg-red-500" },
    { id: "yellow", color: "bg-yellow-500 border" },
  ];

  if (loading) return <Loading />;

  if (error)
    return <p className="text-center text-red-500">Error loading product</p>;
  if (!data) return null;

  const product = data.products.find((p: any) => String(p.id) === id);

  if (!product) {
    return <p className="text-center text-red-500">Product not found</p>;
  }
  console.log("carts>>>", carts);
  const cartItem = carts.find((c: any) => c.id === product.id);
  let quantity = cartItem?.quantity ?? 0;

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
          <div className="flex justify-center">
            <img
              src={product.thumbnail}
              alt="Tray Table"
              className="w-full max-w-lg h-auto object-contain rounded-lg shadow-md transition-shadow duration-300 hover:shadow-2xl hover:cursor-pointer"
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
          {product.images?.map((item: string, inx: number) => (
            <img
              key={inx}
              src={item}
              className="rounded-lg transition-shadow duration-300 hover:shadow-2xl hover:cursor-pointer"
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-3xl font-semibold">{product.title}</h2>
        <p className="text-gray-600">{product.description}</p>
        <span className=" text-red-400 text-[10px] mb-2">
          {product.discountPercentage}% discount
        </span>
        <div className="flex items-center gap-3">
          <span className="line-through text-gray-400">${product.price} </span>

          <div className="flex">
            <span className="text-2xl font-bold text-gray-900">
              $
              {(
                product.price -
                (product.price * product.discountPercentage) / 100
              ).toFixed(2)}
            </span>
          </div>
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
            {data1.map((c) => (
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
          <p className="ext-sm text-gray-500 mt-4">in stock: {product.stock}</p>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <div className="flex items-center border rounded-md w-fit">
            <button
              disabled={quantity <= 1}
              onClick={() => cartItem && dispatch(decreaseAmount(cartItem))}
              className="px-3 py-1 disabled:opacity-30 hover:bg-gray-100"
            >
              -
            </button>

            <span className="px-4">{quantity}</span>

            <button
              onClick={() => {
                if (cartItem) {
                  dispatch(increaseAmount(cartItem));
                } else {
                  quantity += 1;
                }
              }}
              className="px-3 py-1 disabled:opacity-30 hover:bg-gray-100"
            >
              +
            </button>
          </div>
          <button
            onClick={() => dispatch(toggleLike(product))}
            className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:cursor-pointer"
          >
            {wishlist.some((pro) => pro.id === product.id) ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart />
            )}
            Wishlist
          </button>
        </div>

        <button
          onClick={() => dispatch(addToCart(product))}
          className="w-full bg-black text-white py-3 rounded-lg font-medium mt-4 hover:cursor-pointer"
        >
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
