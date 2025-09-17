import { memo } from "react";
import notFound from "../../assets/ozodbek_notfound.webp";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-6 bg-gray-50 px-4">
      <img
        src={notFound}
        alt="Not found"
        className="max-w-[400px] w-full object-contain"
      />

      <p className="font-mono text-4xl md:text-6xl lg:text-8xl text-gray-800 text-center">
        404 - Page Not Found
      </p>

      <Link
        to="/"
        className="hover:cursor-pointer
          mt-4 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 
          px-8 py-3 rounded-full text-white text-lg md:text-xl font-semibold 
          transition-colors duration-200
        "
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default memo(NotFound);
