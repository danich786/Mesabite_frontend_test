"use client";

import CartProvider from "./CartContext";

export default function ItemPageLayout({ children }) {
  return <CartProvider>{children}</CartProvider>;
}
