import React, { type ChangeEvent } from "react";

const SelectOrder = (props: { onChangeOrder: (e: ChangeEvent<HTMLSelectElement>) => void }) => {
  return (
    <div className="w-52">
      <h3 className="mb-2 text-sm font-medium text-[#6C7275] uppercase tracking-wide">
        Price
      </h3>
      <select
        className="w-full rounded-lg border  bg-white px-4 py-2 text-sm font-medium text-[#111827] focus:outline-none focus:ring-2 focus:ring-black"
        onChange={props.onChangeOrder}
      >
        <option value="id-asc">All Price</option>
        <option value="rating-desc">Reting</option>
        <option value="price-desc">Qimmat</option>
        <option value="price-asc">Arzon</option>
      </select>
    </div>
  );
};

export default React.memo(SelectOrder);
