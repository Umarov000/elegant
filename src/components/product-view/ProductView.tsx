import { memo, type FC } from "react";
import {
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../lib";
import { toggleLike } from "../../lib/features/wishlistSlice";
import { addToCart } from "../../lib/features/cartSlice";
import { Link } from "react-router-dom";
import Star from "../../hooks/useStart";
import ProductCardSkeleton from "../productLoading/ProductCardSkeleton";




interface IProps {
  data: any;
  gridCols: number;
}

const ProductView: FC<IProps> = ({ data, gridCols }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.value);

  const gridClass =
    gridCols === 2
      ? "grid-cols-2"
      : gridCols === 3
      ? "sm:grid-cols-2 md:grid-cols-3"
      : "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";

  return (
    <div className={`grid gap-6 ${gridClass}`}>
      {
        !data
        ?Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)
        :
      data?.map((item: any) => (
        <div key={item.id} className="group">
          <div className="relative overflow-hidden bg-py">
            <div className="flex flex-col pl-4 pt-4 max-w-[75px] text-center uppercase font-bold gap-2 absolute z-10">
              <span className="bg-[#FFFFFF] rounded-[4px] font-inter px-3">new</span>
              <span className="bg-[#38CB89] rounded-[4px] font-inter text-white">-50%</span>
            </div>

            <Link to={`/product/${item.id}`}>
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full transition-transform duration-300 lg:group-hover:-translate-y-4 bg-[#F3F5F7] cursor-pointer"
              />
            </Link>

            <button
              onClick={() => dispatch(toggleLike(item))}
              className="absolute top-3 right-3 cursor-pointer p-2.5 rounded-full z-20 bg-white"
            >
              {wishlist.some((pro) => pro.id === item.id) ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart />
              )}
            </button>

            <button
              onClick={() => dispatch(addToCart(item))}
              className=" hover:bg-gray-800
                absolute left-1/2 -translate-x-1/2 bottom-0
                bg-[#141718] text-white px-6 py-2 rounded-md w-[230px]
                hidden lg:block
                translate-y-full group-hover:translate-y-0
                transition-all duration-300 z-20
              "
            >
              Add to Cart
            </button>

            <button
              onClick={() => dispatch(addToCart(item))}
              className="
                mt-2 block lg:hidden hover:bg-gray-800
                bg-[#141718] text-white px-6 py-2 rounded-md w-full
              "
            >
              Add to Cart
            </button>
          </div>

          <div className="flex flex-col gap-1 mt-3">
            <Star rating={item.rating} />

            <Link
              to={`/product/${item.id}`}
              className="font-semibold hover:underline font-inter"
            >
              {item.title}
            </Link>
            <h3 className="font-semibold">${item.price}</h3>
          </div>
        </div>
      ))
      }


      
    </div>
  );
};

export default memo(ProductView);
