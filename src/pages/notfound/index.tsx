import { memo } from "react";
import notFound from "../../assets/ozodbek_notfound.webp";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="NotFound h-screen w-full grid place-items-center justify-center gap-15">
      <img src={notFound} alt="" />
      <p className="font-mono text-9xl text-center">404 Not found</p>
      <Link
        to="/"
        className="bg-blue-400 px-15 py-4 rounded-full text-3xl text-white hover:bg-blue-700 active:border-blue-950 mb-20"
      >
        Home Page
      </Link>
    </div>
  );
};

export default memo(NotFound);
