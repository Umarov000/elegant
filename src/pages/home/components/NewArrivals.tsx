import { memo } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import ProductView from "../../../components/product-view/ProductView";
import { useFetch } from "../../../hooks/useFetch";

const NewArrivals = () => {
  const { data } = useFetch("/products", { limit: 4 });

  return (
    <div className="container">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[20px] md:text-[35px] lg:text-[40px] font-poppins font-medium max-w-[149px]">
          New Arrivals
        </h3>

        <span className="text-sm font-medium font-inter text-[#141718] cursor-pointer border-b border-[#141718] flex items-center gap-2">
          More Products <FaArrowRightLong className="text-center" />
        </span>
      </div>

      <ProductView data={data?.products} />
    </div>
  );
};

export default memo(NewArrivals);
