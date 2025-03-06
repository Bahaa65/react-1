import { useContext } from "react";
import { CartContext } from "../context/CartContext";

interface ProductCardProps {
  product: {
    id: string | number;
    name: string;
    price: number;
    quantity: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const cart = useContext(CartContext);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <button 
        onClick={() => cart?.addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;