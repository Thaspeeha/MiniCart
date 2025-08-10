"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import CartItem from "@/components/CartItem";
import { formatCurrency } from "@/lib/utils";

export default function CartPage() {
  const { cart, subtotal, tax, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">
          Looks like you haven&apos;t added anything to your cart yet.
        </p>
        <Link href="/">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6 space-y-4 sticky top-4">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (10%)</span>
                <span>{formatCurrency(tax)}</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-primary">{formatCurrency(total)}</span>
                </div>
              </div>
            </div>

            <Button className="w-full mt-6" size="lg" asChild>
              <Link href="/checkout">
                Proceed to Checkout
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}