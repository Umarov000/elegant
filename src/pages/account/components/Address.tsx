import React from "react";
import { useOutletContext } from "react-router-dom";
import type { User } from "../../../types/user";

type OutletContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const Address: React.FC = () => {
  const { user } = useOutletContext<OutletContextType>();

  if (!user) return <p className="text-gray-500">Loading address...</p>;

  const a = user.address;
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Address</h2>
      {a ? (
        <div className="text-[15px] md:text-[16px]">
          <p className="text-gray-500">Street</p>
          <p className="font-medium">{a.address}</p>

          <p className="text-gray-500 mt-3">City / State</p>
          <p className="font-medium">
            {a.city}, {a.stateCode}
          </p>

          <p className="text-gray-500 mt-3">Country</p>
          <p className="font-medium">{a.country}</p>
        </div>
      ) : (
        <p className="text-gray-500">No address saved.</p>
      )}
    </div>
  );
};

export default Address;
