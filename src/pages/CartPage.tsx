import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>Error: CartContext is undefined</div>;
  }
  
  const { cart, total, clearCart } = cartContext;
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    document.title = "Checkout | E-Commerce";
  }, []);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        cartContext.cart = JSON.parse(savedCart);
      } catch (error) {
        console.error("Failed to load cart from localStorage", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty! Add some products before checking out. 🛒");
      return;
    }
    setOrderPlaced(true);
    clearCart();
    localStorage.removeItem("cart");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="container mx-auto px-4 py-10 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Checkout 🛍️
        </h1>

        {orderPlaced ? (
          <div className="bg-green-100 p-6 text-center rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-green-700">
              🎉 Order Placed Successfully!
            </h2>
            <p className="text-gray-600 mt-3">
              Thank you for your purchase! You will receive an email confirmation soon.
            </p>
            <Link
              to="/products"
              className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Continue Shopping 🛒
            </Link>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {cart.length === 0 ? (
              <div className="text-center text-gray-600">
                <p className="text-lg">Your cart is empty. Add some items first! 🚀</p>
                <Link
                  to="/products"
                  className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                  Browse Products
                </Link>
              </div>
            ) : (
              <>
                <table className="w-full border-collapse border border-gray-300 mb-6">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="p-3 border">Product</th>
                      <th className="p-3 border">Price</th>
                      <th className="p-3 border">Quantity</th>
                      <th className="p-3 border">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id} className="border-b">
                        <td className="p-3">{item.name}</td>
                        <td className="p-3">${item.price.toFixed(2)}</td>
                        <td className="p-3">{item.quantity}</td>
                        <td className="p-3">${(item.price * item.quantity).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="text-right text-lg font-semibold">
                  Total: <span className="text-green-600">${total.toFixed(2)}</span>
                </div>

                <button
                  className="mt-6 w-full bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
                  onClick={handleCheckout}
                >
                  Place Order ✅
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
