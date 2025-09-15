import { memo } from "react";
import bg from "../../assets/ozodbek_newsletterbg.png";
import { MdOutlineEmail } from "react-icons/md";

const Newsletter = () => {
  return (
    <div
      className="w-full h-[360px] flex items-center justify-center mt-[80px]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[600px] text-center space-y-4">
        <h2 className="text-3xl font-bold">Join Our Newsletter</h2>
        <p className="text-gray-600">
          Sign up for deals, new products and promotions
        </p>
        <form className="flex items-center gap-3 border-b border-gray-400 py-2">
          <MdOutlineEmail className="text-gray-500 text-xl" />
          <input
            type="text"
            placeholder="Email address"
            className="flex-1 outline-none bg-transparent text-gray-700"
          />
          <button
            type="submit"
            className="text-black hover:text-gray-700 font-medium"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default memo(Newsletter);
