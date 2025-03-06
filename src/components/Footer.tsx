import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 text-sm">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-6">
        
<div className="md:col-span-1">
  <h3 className="font-semibold mb-2">Exclusive</h3>
  <p className="text-gray-400">Get 10% off your first order</p>
  <div className="mt-3 flex items-center border border-gray-600 rounded-md overflow-hidden w-full -w-sm">
    <input
      type="email"
      placeholder="Enter your email"
      className="p-2 flex-1 bg-black text-white outline text-xs placeholder-gray-400"
    />
    <button className="bg-white text-black px-4 py-2 flex-shrink-0">→</button>
  </div>
</div>

        <div className="text-left">
          <h3 className="font-semibold mb-2">Support</h3>
          <p className="text-gray-400">111 hadayk helwan.</p>
          <p className="text-gray-400">bahaa.mohamed@robustastudio.com</p>
          <p className="text-gray-400">+201205085742</p>
        </div>

        <div className="text-left">
          <h3 className="font-semibold mb-2">Account</h3>
          <ul className="space-y-1 text-gray-400">
            <li><Link to="/account" className="hover:text-white">My Account</Link></li>
            <li><Link to="/login" className="hover:text-white">Login / Register</Link></li>
            <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
            <li><Link to="/wishlist" className="hover:text-white">Wishlist</Link></li>
            <li><Link to="/shop" className="hover:text-white">Shop</Link></li>
          </ul>
        </div>

        <div className="text-left">
          <h3 className="font-semibold mb-2">Quick Link</h3>
          <ul className="space-y-1 text-gray-400">
            <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms Of Use</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div className="text-left">
          <h3 className="font-semibold mb-2">Download App</h3>
          <p className="text-gray-400">Save $3 with App New User Only</p>
          <div className="flex space-x-2 mt-2">
            <img src="/images/google-play.png" alt="Google Play" className="h-8" />
            <img src="/images/app-store.png" alt="App Store" className="h-8" />
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center px-6 text-xs">
        <p className="text-gray-500">&copy; Copyright Bahaa Akl.</p>
        <div className="flex space-x-3 text-lg mt-4 md:mt-0">
          <FaFacebookF className="cursor-pointer hover:text-gray-400" />
          <FaTwitter className="cursor-pointer hover:text-gray-400" />
          <FaInstagram className="cursor-pointer hover:text-gray-400" />
          <FaLinkedin className="cursor-pointer hover:text-gray-400" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;