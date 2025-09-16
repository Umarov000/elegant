import React from "react";
import { useOutletContext } from "react-router-dom";
import type { User } from "../../../types/user";

type OutletContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const Profile: React.FC = () => {
  const { user } = useOutletContext<OutletContextType>();

  if (!user) return <p className="text-gray-500">Loading profile...</p>;

  return (
    <div className="text-[15px] md:text-[16px]">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Profile</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <p className="font-medium">{user.phone ?? "—"}</p>
        </div>
        <div>
          <p className="text-gray-500">Birth Date</p>
          <p className="font-medium">{user.birthDate ?? "—"}</p>
        </div>
        <div>
          <p className="text-gray-500">Gender</p>
          <p className="font-medium capitalize">{user.gender ?? "—"}</p>
        </div>
        <div>
          <p className="text-gray-500">University</p>
          <p className="font-medium">{user.university ?? "—"}</p>
        </div>
        <div>
          <p className="text-gray-500">Company</p>
          <p className="font-medium">
            {user.company?.name ?? "—"}{" "}
            {user.company?.title ? `— ${user.company.title}` : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
