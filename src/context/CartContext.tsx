import { createContext, useState, ReactNode, useContext, useEffect } from "react";

interface CartItemType {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItemType[];
  wishlistItems: CartItemType[];
  addToCart: (item: CartItemType) => void;
  removeFromCart: (id: string | number) => void;
  addToWishlist: (item: CartItemType) => void;
  removeFromWishlist: (id: string | number) => void;
  clearCart: () => void;
  updateQuantity: (id: string | number, quantity: number) => void;
  total: number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [wishlistItems, setWishlistItems] = useState<CartItemType[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, item) => acc + item.price * item.quantity, 0));
  }, [cart]);

  const addToCart = (item: CartItemType) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string | number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const addToWishlist = (item: CartItemType) => {
    setWishlistItems((prevWishlist) => [...prevWishlist, item]);
  };

  const removeFromWishlist = (id: string | number) => {
    setWishlistItems((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string | number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, wishlistItems, addToCart, removeFromCart, addToWishlist, removeFromWishlist, clearCart, updateQuantity, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
