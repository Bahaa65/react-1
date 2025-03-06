import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import MyAccountPage from "./pages/MyAccountPage";
import SignUpPage from "./pages/SignUpPage";
import WishlistPage from "./pages/WishlistPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/account" element={<MyAccountPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;