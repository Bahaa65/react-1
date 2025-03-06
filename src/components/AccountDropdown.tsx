import { useState } from "react";

const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-gray-800 text-white rounded-md"
      >
        Account
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Profile</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Orders</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;