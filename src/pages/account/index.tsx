import { memo, useEffect, useState } from "react";
import { api } from "../../api";
import { useDispatch } from "react-redux";
import { removeToken } from "../../lib/features/authSlice";
import type { User } from "../../types/user";
import { Link } from "react-router-dom";

const Account = () => {
  const [user, setUser] = useState<User | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .get<User>("/auth/me")
      .then((res) => setUser(res.data))
      .catch(() => {
        dispatch(removeToken());
      });
  }, [dispatch]);

  return (
    <div className="container font-inter mb-20">
      <h1 className="font-poppins text-[36px] md:text-[54px] font-medium py-10 md:py-20 text-center">
        Account
      </h1>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        <div className="bg-[#F3F5F7] w-full md:w-[262px] md:max-h-[498px] px-4 py-10 rounded-lg">
          <div className="flex flex-col gap-2 items-center">
            <img
              className="rounded-full"
              src={user?.image}
              width={80}
              height={80}
              alt=""
            />
            <span className="text-[20px] font-semibold text-center">
              {user?.firstName} {user?.lastName}
            </span>
          </div>
          <div className="flex flex-col gap-6 text-[#6C7275] mt-10">
            <div>
              <strong className="text-black font-bold">Account</strong>
              <hr />
            </div>
            <Link to="#">Address</Link>
            <Link to="/cart">Orders</Link>
            <Link to="/wishes">Wishlist</Link>
            <button
              className="text-left text-red-500 font-medium"
              onClick={() => dispatch(removeToken())}
            >
              Log Out
            </button>
          </div>
        </div>

        <div className="flex-1 bg-white shadow-sm rounded-lg p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            Account Details
          </h2>
          {user ? (
            <div className="flex flex-col gap-6 text-[15px] md:text-[16px]">
              <div>
                <p className="text-gray-500">Full Name</p>
                <p className="font-medium">
                  {user.firstName} {user.lastName}
                </p>
              </div>
              <div>
                <p className="text-gray-500">Username</p>
                <p className="font-medium">{user.username}</p>
              </div>
              <div>
                <p className="text-gray-500">Email</p>
                <p className="font-medium">{user.email}</p>
              </div>
              <div>
                <p className="text-gray-500">Phone</p>
                <p className="font-medium">{user.phone}</p>
              </div>
              <div>
                <p className="text-gray-500">Birth Date</p>
                <p className="font-medium">{user.birthDate}</p>
              </div>
              <div>
                <p className="text-gray-500">Gender</p>
                <p className="font-medium capitalize">{user.gender}</p>
              </div>
              <div>
                <p className="text-gray-500">University</p>
                <p className="font-medium">{user.university}</p>
              </div>
              <div>
                <p className="text-gray-500">Company</p>
                <p className="font-medium">
                  {user.company.name} — {user.company.title}
                </p>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-500">Address</p>
                <p className="font-medium">
                  {user.address.address}, {user.address.city},{" "}
                  {user.address.stateCode}, {user.address.country}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">Loading user details...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(Account);
