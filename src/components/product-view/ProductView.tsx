import { memo, type FC } from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

interface IProps {
  data: any;
}

const ProductView: FC<IProps> = (props) => {
  const { data } = props;

  return (
    <>

    <div className="flex justify-between items-center mb-6">
      <h3 className="text-[40px] font-medium max-w-[149px]">New Arrivals</h3>
  
        <span className="text-sm font-medium text-[#141718] cursor-pointer border-b border-[#141718] flex items-center gap-2">
        More Products <FaArrowRightLong className="text-center"/>
      </span>
    </div>


    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6">
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
            className="w-full transition-transform duration-300 group-hover:-translate-y-4"
          />
          <button className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full group-hover:translate-y-0 transition-all duration-300 bg-[#141718] text-white px-6 py-2 rounded-md w-[230px]">
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
    </div></>
  );
};

export default memo(ProductView);
