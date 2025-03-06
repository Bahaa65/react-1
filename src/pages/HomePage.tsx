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

const HomePage = () => {
  const [cart, setCart] = useState<{ [key: string]: number }>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : {};
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const updateCartQuantity = (productId: string, change: number) => {
    setCart((prevCart) => {
      const newQuantity = Math.max(0, (prevCart[productId] || 0) + change);
      const newCart = { ...prevCart, [productId]: newQuantity };
      if (newQuantity === 0) {
        delete newCart[productId];
      }
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-6">Welcome to E-Commerce</h1>
        <p className="text-lg text-center text-gray-600">The best deals and latest trends in one place.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {sampleProducts.map((product) => (
            <div key={product.id} className="relative bg-white p-6 rounded-lg shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-lg font-bold mt-4">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-gray-800 font-semibold mt-2">Price: ${product.price.toFixed(2)}</p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <button onClick={() => updateCartQuantity(product.id, -1)} className="bg-gray-300 text-black px-2 py-1 rounded">-</button>
                  <span className="mx-3 text-lg">{cart[product.id] || 0}</span>
                  <button onClick={() => updateCartQuantity(product.id, 1)} className="bg-gray-300 text-black px-2 py-1 rounded">+</button>
                </div>
                <Link to="/checkout" className="text-blue-500 hover:underline">
                  Go to Checkout
                </Link>
              </div>
              {cart[product.id] > 0 && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {cart[product.id]}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
