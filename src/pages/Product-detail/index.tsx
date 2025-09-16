import Newsletter from "../../components/newsletter/Newsletter";
import ProductPage from "./components/Details";
import ProductTabs from "./components/ProductTabs";

const ProductDetail = () => {
  return (
    <>
      <ProductPage />
      <ProductTabs />
      <Newsletter />
    </>
  );
};

export default ProductDetail;
