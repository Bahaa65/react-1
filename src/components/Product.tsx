interface ProductProps {
    id: number;
    name: string;
    price: number;
    image: string;
    addToCart: (id: number) => void;
  }
  
  const Product = ({ id, name, price, image, addToCart }: ProductProps) => {
    return (
      <div className="border p-4 rounded-md shadow-lg">
        <img src={image} alt={name} className="w-full h-48 object-cover mb-4" />
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500">${price.toFixed(2)}</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => addToCart(id)}
        >
          Add to Cart
        </button>
      </div>
    );
  };
  
  export default Product;