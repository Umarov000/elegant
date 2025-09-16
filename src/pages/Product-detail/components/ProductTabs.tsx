import { NavLink, Outlet } from "react-router-dom";

const ProductTabs = () => {
  const tabs = [
    { label: "Additional Info", to: "additional-info" },
    { label: "Questions", to: "questions" },
    { label: "Reviews", to: "reviews" },
  ];

  return (
    <div className=" container w-full">
      <div className="flex space-x-8 border-b">
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            className={({ isActive }) =>
              `pb-2 text-sm font-medium ${
                isActive
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500 hover:text-black"
              }`
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </div>

      <div className="mt-6">
        <Outlet context={{}} />
      </div>
    </div>
  );
};

export default ProductTabs;
