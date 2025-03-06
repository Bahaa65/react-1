import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

const sampleProducts: Product[] = [
  { id: "1", name: "Wireless Headphones", price: 59.99, image: "/images/headphones.jpg", description: "High-quality wireless headphones with noise cancellation." },
  { id: "2", name: "Smart Watch", price: 99.99, image: "/images/smartwatch.jpg", description: "Feature-rich smartwatch with health tracking capabilities." },
  { id: "3", name: "Gaming Mouse", price: 39.99, image: "/images/mouse.jpg", description: "Ergonomic gaming mouse with customizable buttons." },
  { id: "4", name: "Mechanical Keyboard", price: 79.99, image: "/images/keyboard.jpg", description: "Mechanical keyboard with RGB lighting and fast response." },
  { id: "5", name: "Portable Speaker", price: 49.99, image: "/images/speaker.jpg", description: "Wireless portable speaker with deep bass and long battery life." },
  { id: "6", name: "4K Monitor", price: 299.99, image: "/images/monitor.jpg", description: "Ultra HD 4K monitor with high refresh rate for smooth visuals." }
];

const CheckoutPage = () => {
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [total, setTotal] = useState<number>(0);
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    document.title = "Checkout | E-Commerce";
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCart(parsedCart);
      calculateTotal(parsedCart);
    }
  }, []);

  const calculateTotal = (cartData: { [key: string]: number }) => {
    let sum = 0;
    Object.keys(cartData).forEach((productId) => {
      const product = sampleProducts.find(p => p.id === productId);
      if (product) {
        sum += product.price * cartData[productId];
      }
    });
    setTotal(sum);
  };

  const updateCartQuantity = (productId: string, change: number) => {
    setCart((prevCart) => {
      const newQuantity = Math.max(0, (prevCart[productId] || 0) + change);
      const newCart = { ...prevCart, [productId]: newQuantity };
      if (newQuantity === 0) {
        delete newCart[productId];
      }
      localStorage.setItem("cart", JSON.stringify(newCart));
      calculateTotal(newCart);
      return newCart;
    });
  };

  const removeItem = (productId: string) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[productId];
      localStorage.setItem("cart", JSON.stringify(newCart));
      calculateTotal(newCart);
      return newCart;
    });
  };

  const handleCheckout = () => {
    if (Object.keys(cart).length === 0) {
      alert("Your cart is empty! Add some products before checking out. 🛒");
      return;
    }
    setOrderPlaced(true);
    setCart({});
    localStorage.removeItem("cart");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="container mx-auto px-4 py-10 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Checkout 🛍️</h1>

        {orderPlaced ? (
          <div className="bg-green-100 p-6 text-center rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-green-700">🎉 Order Placed Successfully!</h2>
            <p className="text-gray-600 mt-3">Thank you for your purchase! You will receive an email confirmation soon.</p>
            <Link to="/" className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
              Continue Shopping 🛒
            </Link>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {Object.keys(cart).length === 0 ? (
              <div className="text-center text-gray-600">
                <p className="text-lg">Your cart is empty. Add some items first! 🚀</p>
                <Link to="/" className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
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
                      <th className="p-3 border">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(cart).map((productId) => {
                      const product = sampleProducts.find(p => p.id === productId);
                      return product ? (
                        <tr key={product.id} className="border-b">
                          <td className="p-3">{product.name}</td>
                          <td className="p-3">${product.price.toFixed(2)}</td>
                          <td className="p-3 flex items-center justify-center">
                            <button onClick={() => updateCartQuantity(product.id, -1)} className="bg-gray-300 text-black px-2 py-1 rounded">-</button>
                            <span className="mx-3 text-lg">{cart[product.id]}</span>
                            <button onClick={() => updateCartQuantity(product.id, 1)} className="bg-gray-300 text-black px-2 py-1 rounded">+</button>
                          </td>
                          <td className="p-3">${(product.price * cart[product.id]).toFixed(2)}</td>
                          <td className="p-3">
                            <button onClick={() => removeItem(product.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Remove</button>
                          </td>
                        </tr>
                      ) : null;
                    })}
                  </tbody>
                </table>

                <div className="text-right text-lg font-semibold">
                  Total: <span className="text-green-600">${total.toFixed(2)}</span>
                </div>

                <button className="mt-6 w-full bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition" onClick={handleCheckout}>
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
