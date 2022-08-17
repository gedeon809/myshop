import { createContext, useState, useEffect } from 'react';

const addCardItem = (cartItems, productToAdd) => {
  //find if cartItems contains productToAdd
  const existingCardItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  //if found, increment quantity
  if (existingCardItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //return new array with modified cartItems
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCardOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  // cart counting
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [cartItems, setCardItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCardItems(addCardItem(cartItems, productToAdd));
  };

  const value = {
    isCardOpen,
    setIsCardOpen,
    addItemToCart,
    cartItems,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
