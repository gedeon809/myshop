import { createContext, useState } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCardOpen: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const value = { isCardOpen, setIsCardOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
