import { memo } from "react";
import Newsletter from "../../components/newsletter/Newsletter";
import Carusel from "./components/Carusel";
import Funiture from "./components/Funiture";
import Service from "./components/Service";
import Discount from "./components/Discount";
import Articel from "./components/Articel";
import NewArrivals from "./components/NewArrivals";

const Home = () => {
  return (
    <>
      <Carusel /> {/* ELBEK */}
      <Funiture /> {/* ELBEK */}
      <NewArrivals />
      <Service /> {/* ELBEK */}
      <Discount /> {/* IZZAT */}
      <Articel /> {/* IZZAT */}
      <Newsletter /> {/* OZODBEK */}
    </>
  );
};

export default memo(Home);
