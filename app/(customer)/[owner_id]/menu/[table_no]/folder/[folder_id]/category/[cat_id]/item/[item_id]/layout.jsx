"use client";

import TempCartProvider from "./TempCartContext";

export default function ItemsPageLayout({ children }) {
  return <TempCartProvider>{children}</TempCartProvider>;
}
