"use client";

import CartProvider from "./CartContext";

export default function CategoriesPageLayout({ children }) {
  return <CartProvider>{children}</CartProvider>;
}
