import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import ProductCard from "../components/ProductCard";

const WishlistPage = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div className="text-center text-red-500">Error: CartContext is undefined</div>;
  }

  const { wishlistItems } = cartContext;

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Wishlist 💖</h2>
        {wishlistItems.length === 0 ? (
          <p className="text-center text-gray-600">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <ProductCard key={item.id} product={item} /> 
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default WishlistPage;
