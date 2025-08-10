"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useCart } from "@/lib/cart-context";
import { formatCurrency } from "@/lib/utils";

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  description: string;
}

const CartItem: React.FC<CartItemProps> = ({ id, name, price, quantity, image }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <Card className="p-4">
      <div className="flex items-center gap-4">
        <Link href={`/product/${id}`} className="shrink-0">
          <Image
            src={image}
            alt={name}
            width={80}
            height={80}
            className="rounded object-cover"
            unoptimized
          />
        </Link>

        <div className="flex-grow">
          <Link href={`/product/${id}`}>
            <h3 className="font-medium text-lg hover:text-primary transition-colors">
              {name}
            </h3>
          </Link>
          <div className="text-gray-600">{formatCurrency(price)}</div>

          <div className="flex items-center gap-3 mt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => updateQuantity(id, quantity - 1)}
            >
              -
            </Button>
            <span className="w-8 text-center">{quantity}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => updateQuantity(id, quantity + 1)}
            >
              +
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <div className="font-semibold text-lg">
            {formatCurrency(price * quantity)}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => removeFromCart(id)}
            className="text-red-500 hover:text-red-700 hover:bg-red-50"
          >
            Remove
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CartItem;