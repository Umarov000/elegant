import { memo, useState, type FormEvent } from "react";
import { api } from "../../api";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setToken } from "../../lib/features/authSlice";
import { Link, useNavigate } from "react-router-dom";
import signinImage from "../../assets/signin-image.png";
import logo from "../../assets/logo.svg";

const SignIn = () => {
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const body = { username, password, expiresInMins: 1 };
    api
      .post("/auth/login", body)
      .then((res) => {
        toast.success("Welcome");
        dispatch(setToken(res.data.accessToken));
        navigate("/account");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex flex-col gap-10 md:flex-row md:gap-22">
      <div
        className="bg-no-repeat bg-cover bg-center w-full md:w-1/2 min-h-[430px] md:min-h-screen"
        style={{ backgroundImage: `url(${signinImage})` }}
      >
        <Link to={"/"}>
          <img className="mt-8 mx-auto w-[105px]" src={logo} alt="" />
        </Link>
      </div>

      <div className="font-inter my-auto w-full md:w-[456px] px-6 md:px-0">
        <h1 className="font-poppins font-medium text-[40px] mb-6">Sign In</h1>
        <p className="mb-8">
          Don’t have an accout yet?{" "}
          <a className="text-[#38CB89]" href="#">
            Sign Up
          </a>
        </p>

        <form className="flex flex-col gap-8" onSubmit={handleSubmit} action="">
          <input
            value={username}
            placeholder="Your username or email address"
            onChange={(e) => setUsername(e.target.value)}
            className="border-b border-b-gray-400 focus:border-b-slate-900 outline-none py-2"
            type="text"
          />
          <input
            autoComplete="off"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="border-b border-b-gray-400 focus:border-b-slate-900 outline-none py-2"
            type="password"
          />

          <div className="flex justify-between items-center">
            <label className="flex h-7 items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-slate-900" />
              <span>Remember me</span>
            </label>

            <a href="#" className="font-bold text-[#121212] hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            className="p-[10px] mb-10 font-medium rounded-lg bg-slate-900 text-white disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default memo(SignIn);
