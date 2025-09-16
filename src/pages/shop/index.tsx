import {
  memo,
  useCallback,
  useEffect,
  useState,
  type ChangeEvent,
} from "react";
import { useFetch } from "../../hooks/useFetch";
import ProductView from "../../components/product-view/ProductView";
import shopImage from "../../assets/shop.png";
import SelectOrder from "./components/SelectOrder";
import Categories from "./components/categories";
import { FaTh } from "react-icons/fa";
import { TiThLarge } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { TbGridDots } from "react-icons/tb";

const Shop = () => {
  const [order, setOrder] = useState<string>("id-asc");
  const [skip, setSkip] = useState(0);
  const [products, setProducts] = useState<any>([]);
  const [category, setCategory] = useState("");
  const [gridCols, setGridCols] = useState(3); // default 3 ta

  const limit = 4;

  const { data: categories } = useFetch("/products/category-list");

  const { data, loading } = useFetch(`/products/${category}`, {
    limit,
    skip,
    sortBy: order.split("-")[0],
    order: order.split("-")[1],
  });

  useEffect(() => {
    if (data) {
      setProducts((prev: any) => [...prev, ...data?.products]);
    }
  }, [data]);

  const setDefaultValue = useCallback(() => {
    setProducts([]);
    setSkip(0);
  }, []);

  const handleChangeOrder = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrder(e.target.value);
    setDefaultValue();
  };

  const handleChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setCategory(value ? `category/${value}` : value);
    setDefaultValue();
  };

  const backra = {
    backgroundImage: `url(${shopImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "40px",
    color: "#fff",
  };

  return (
    <div className="container">

    <div
  style={backra}
  className="text-center flex flex-col justify-center 
             min-h-[260px] sm:min-h-[320px] md:min-h-[392px] 
             px-4 sm:px-8 md:px-20"
>
  <div className="flex flex-wrap justify-center text-black gap-4 sm:gap-8">
    <NavLink to={"/"} className="text-[#605F5F] text-sm sm:text-base md:text-lg">
      Home
    </NavLink>
    <h2 className="text-base sm:text-lg md:text-xl">Shop</h2>
  </div>

  <h3 className="text-black text-2xl sm:text-4xl md:text-[54px] mt-4 sm:mt-6 mb-4 sm:mb-6">
    Shop Page
  </h3>

  <p className="text-black text-xs sm:text-sm md:text-base">
    Let’s design the place you always imagined.
  </p>
    </div>


    <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-6 mt-10 sm:mt-[60px] mb-5">
  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start">
    <Categories
      onChangeCategory={handleChangeCategory}
      categories={categories}
    />
    <SelectOrder onChangeOrder={handleChangeOrder} />
    <span className="text-sm sm:text-base">{data?.total}</span>
  </div>

  <div className="flex items-center justify-center sm:justify-start gap-4">
    <div className="text-xs sm:text-sm">
      <label className="text-gray-500 font-medium">View</label>
    </div>

    <div className="flex items-center gap-2 text-gray-600">
      <button
        onClick={() => setGridCols(4)}
        className={`p-2 border rounded hover:bg-gray-100 ${
          gridCols === 4 ? "bg-gray-200" : ""
        }`}
      >
        <TbGridDots size={18} className="sm:size-[18px]" />
      </button>
      <button
        onClick={() => setGridCols(3)}
        className={`p-2 border rounded hover:bg-gray-100 ${
          gridCols === 3 ? "bg-gray-200" : ""
        }`}
      >
        <FaTh size={18} className="sm:size-[18px]" />
      </button>
      <button
        onClick={() => setGridCols(2)}
        className={`p-2 border rounded hover:bg-gray-100 ${
          gridCols === 2 ? "bg-gray-200" : ""
        }`}
      >
        <TiThLarge size={18} className="sm:size-[18px]" />
      </button>
    </div>
  </div>
    </div>



      <ProductView data={products} gridCols={gridCols} />

      {loading && <div className="text-center text-5xl">Loading...</div>}
      {data?.total > skip + limit && (
        <div className="flex justify-center py-6">
          <button
            onClick={() => setSkip((p) => p + limit)}
            className="bg-black text-white font-inter px-5 rounded-full py-3"
          >
            See more
          </button>
        </div>
      )}
    </div>
  );
};

export default memo(Shop);
