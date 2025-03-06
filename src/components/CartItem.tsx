import React from "react";

interface CartItemProps {
  item: {
    id: string | number;
    name: string;
    price: number;
    quantity: number;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  return (
    <tr>
      <td className="p-3 border">{item.name}</td>
      <td className="p-3 border">${item.price.toFixed(2)}</td>
      <td className="p-3 border">{item.quantity}</td>
      <td className="p-3 border">${(item.price * item.quantity).toFixed(2)}</td>
      <td className="p-3 border">
        <button className="bg-red-500 text-white px-2 py-1 rounded">
          Remove ❌
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
