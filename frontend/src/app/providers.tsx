"use client";

import { CartProvider } from "@/lib/cart-context";
import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <Toaster />
      {children}
    </CartProvider>
  );
}
