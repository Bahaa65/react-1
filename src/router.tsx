import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactPage from "./pages/ContactPage";
import Error404Page from "./pages/Error404Page";
import LoginPage from "./pages/LoginPage";
import MyAccountPage from "./pages/MyAccountPage";
import SignUpPage from "./pages/SignUpPage";
import WishlistPage from "./pages/WishlistPage";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/Product";

const AppRouter = () => {
  return (
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
      <Route path="/products" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetails id={0} name={""} price={0} image={""} addToCart={function (id: number): void {
              throw new Error("Function not implemented.");
          } } />} />
      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
};

export default AppRouter;