import { memo, useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import ProductView from "../../../components/product-view/ProductView";

const SearchPage = () => {
  const [query, setQuery] = useState("");

  const { data, loading, error } = useFetch("/products", { limit: 100 });

  const filtered =
    data?.products?.filter((item: any) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    ) || [];

  return (
    <div className="p-6">
      <div className="flex justify-center mb-6">
        <input
          className="border rounded-full shadow-2xl w-[600px] h-[50px] placeholder:text-center placeholder:text-xl text-center text-xl"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
        />
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">Error!</p>}

      {!loading && !error && <ProductView data={filtered} gridCols={3} />}
    </div>
  );
};

export default memo(SearchPage);
