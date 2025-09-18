import { memo } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../lib';
import ProductView from '../../components/product-view/ProductView';
import empty from "../../assets/empty.webp"

const Wishes = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist.value)
  
  return (
    <div className="container">
      {!wishlist.length ? (
        <div className="text-center">
          <img 
            src={empty}
            className="min-w-[350px] mx-auto"
            width={150}
            alt=""
          />
          <button></button>
        </div>
      ) : (
        <ProductView data={wishlist} gridCols={3} />
      )}
    </div>
  );
};

export default memo(Wishes);