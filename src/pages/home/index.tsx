import { memo } from "react";
import { useFetch } from "../../hooks/useFetch";
import ProductView from "../../components/product-view/ProductView";
import Newsletter from "../../components/newsletter/Newsletter";
import Carusel from "./components/Carusel";
import Funiture from "./components/Funiture";
import Service from "./components/Service";
import Discount from "./components/Discount";
import Articel from "./components/Articel";

const Home = () => {
  const { data } = useFetch("/products", { limit: 4 });

  return (
    <div>
      <Carusel /> {/* ELBEK */}
      <Funiture /> {/* ELBEK */}
      <ProductView data={data?.products} /> {/* IZZAT */}
      <Service /> {/* ELBEK */}
      <Discount /> {/* IZZAT */}
      <Articel /> {/* IZZAT */}
      <Newsletter /> {/* OZODBEK */}
    </div>
  );
};

export default memo(Home);
