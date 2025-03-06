import ProductCard from "./ProductCard";

const ProductList = () => {
  const products = [
    { id: 1, name: "Laptop", price: 1200, quantity: 1 },
    { id: 2, name: "Headphones", price: 150, quantity: 1 },
    { id: 3, name: "Smartphone", price: 800, quantity: 1 },
  ];

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
