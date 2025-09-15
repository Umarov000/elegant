import { memo, type FC } from "react";
import { FaStar, FaRegStar, FaStarHalfAlt, FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../lib";
import { toggleLike } from "../../lib/features/wishlistSlice";
import { addToCart } from "../../lib/features/cartSlice";
interface IProps {
  data: any;
}

const ProductView: FC<IProps> = (props) => {
  const { data } = props;
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.value);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6 ">
        {data?.map((item: any) => (
          <div key={item.id} className="group">
            <div className="relative overflow-hidden bg-py">
              <div className="flex flex-col pl-4 pt-4 max-w-[75px] text-center uppercase font-bold gap-2 absolute z-10">
                <span className="bg-[#FFFFFF] rounded-[4px]">new</span>
                <span className="bg-[#38CB89] rounded-[4px]">-50%</span>
              </div>
              <img
                src={item.thumbnail}
                alt=""
                className="w-full transition-transform duration-300 lg:group-hover:-translate-y-4 bg-[#F3F5F7]"
              />
              <button
              onClick={() => dispatch(toggleLike(item))}
              className="absolute top-3 right-3 cursor-pointer p-2.5 rounded-full"
            >
              {wishlist.some((pro) => pro.id === item.id) ? (
                <FaHeart />
              ) : (
                <FaRegHeart />
              )}
            </button>
              <button
              onClick={()=> dispatch(addToCart(item))}
                className="
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
              onClick={()=> dispatch(addToCart(item))}
                className="
            mt-2 block lg:hidden
            bg-[#141718] text-white px-6 py-2 rounded-md w-full
          "
              >
                Add to Cart
              </button>
            </div>

            <div className="flex flex-col gap-1 mt-3">
              <div className="flex">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <FaRegStar />
              </div>
              <h3 className="font-semibold">{item.title}</h3>
              <h3 className="font-semibold">${item.price}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default memo(ProductView);
