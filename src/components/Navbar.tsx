import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const auth = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-3 shadow-md bg-white">
      <Link to="/home" className="text-2xl font-bold">Exclusive</Link>

      <div className="space-x-6 text-lg">
        <Link to="/" className="hover:text-gray-600">Home</Link>
        <Link to="/contact" className="hover:text-gray-600">Contact</Link>
        <Link to="/about" className="hover:text-gray-600">About</Link>
        {!auth?.user && <Link to="/signup" className="hover:text-gray-600">Sign Up</Link>}
      </div>

      <div className="flex items-center border rounded-md px-3 py-1 bg-gray-100">
        <input 
          type="text" 
          placeholder="What are you looking for?" 
          className="bg-transparent outline-none px-2"
        />
        <FaSearch className="text-gray-500" />
      </div>

      <div className="flex items-center space-x-4">
        <FaHeart className="text-xl cursor-pointer hover:text-red-500" />
        <Link to="/cart">
          <FaShoppingCart className="text-xl cursor-pointer hover:text-gray-600" />
        </Link>

        {auth?.user ? (
          <div className="relative">
            <FaUser 
              className="text-xl cursor-pointer hover:text-gray-600" 
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2">
                <Link to="/my-account" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                <button 
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={auth.logout}
                >Logout</button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">
            <FaUser className="text-xl cursor-pointer hover:text-gray-600" />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;