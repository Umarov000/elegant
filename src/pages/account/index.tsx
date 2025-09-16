import { memo, useEffect, useState } from "react";
import { api } from "../../api";
import { useDispatch } from "react-redux";
import { removeToken } from "../../lib/features/authSlice";
import type { User } from "../../types/user";
import { NavLink, Outlet } from "react-router-dom";

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
        <aside className="bg-[#F3F5F7] w-full md:w-[262px] md:max-h-[998px] px-4 py-10 rounded-lg">
          <div className="flex flex-col gap-2 items-center">
            <img
              className="rounded-full"
              src={user?.image ?? "/placeholder-avatar.png"}
              width={80}
              height={80}
              alt="avatar"
            />
            <span className="text-[20px] font-semibold text-center">
              {user?.firstName ?? "User"} {user?.lastName ?? ""}
            </span>
          </div>

          <nav className="flex flex-col gap-6 text-[#6C7275] mt-10">
            <div>
              <strong className="text-black font-bold">Account</strong>
              <hr className="my-2" />
              <ul className="ml-3 flex flex-col gap-3">
                <li>
                  <NavLink
                    to="."
                    end
                    className={({ isActive }) =>
                      isActive ? "font-semibold text-black" : "text-[#6C7275]"
                    }
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="address"
                    className={({ isActive }) =>
                      isActive ? "font-semibold text-black" : "text-[#6C7275]"
                    }
                  >
                    Address
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="orders"
                    className={({ isActive }) =>
                      isActive ? "font-semibold text-black" : "text-[#6C7275]"
                    }
                  >
                    Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="wishlist"
                    className={({ isActive }) =>
                      isActive ? "font-semibold text-black" : "text-[#6C7275]"
                    }
                  >
                    Wishlist
                  </NavLink>
                </li>
              </ul>
            </div>

            <button
              className="text-left text-red-500 font-medium"
              onClick={() => {
                dispatch(removeToken());
              }}
            >
              Log Out
            </button>
          </nav>
        </aside>

        <main className="flex-1 bg-white shadow-sm rounded-lg p-6 md:p-8 min-h-[300px]">
          <Outlet context={{ user, setUser }} />
        </main>
      </div>
    </div>
  );
};

export default memo(Account);
