import { memo, useState } from "react";
import ProductView from "../../../components/product-view/ProductView";
import { useFetch } from "../../../hooks/useFetch";

const SearchPage = () => {
  const [query, setQuery] = useState("");

  const { data, loading, error } = useFetch(
    "/products/search",
    query ? { limit: 100, q: query } : undefined
  );

  const products = query ? data?.products || [] : [];

  return (
    <div className="container">
      <div className="flex justify-center mb-6">
        <input
          className="border rounded-full shadow-2xl w-[600px] h-[50px] placeholder:text-center placeholder:text-xl text-center text-xl"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
        />
      </div>

      {query && loading && <p className="text-center">Loading...</p>}
      {query && error && (
        <p className="text-center text-red-500">{String(error)}</p>
      )}
      {query && !loading && !error && (
        <ProductView data={products} gridCols={3} />
      )}
    </div>
  );
};

export default memo(SearchPage);
