import React from "react";

const Categories = (props: {
  onChangeCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  categories?: string[];
}) => {
  return (
    <div className="w-52">
      <h3 className="mb-2 text-sm font-medium text-[#6C7275] uppercase tracking-wide">
        Categories
      </h3>
      <select
        onChange={props.onChangeCategory}
        className="w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-medium text-[#111827] focus:outline-none focus:ring-2 focus:ring-black"
      >
        <option value="">All Categories</option>
        {props.categories?.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.memo(Categories);
