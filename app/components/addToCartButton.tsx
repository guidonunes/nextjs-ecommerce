// Exemplo: src/components/AddToCartButton.tsx
"use client";

import React from 'react';
import { Produto } from '@/app/interfaces/product.interface';
import { useCart } from '@/context/CartContext';

export default function AddToCartButton({ product }: { product: Produto }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product, 1)}
      className="bg-blue-600 text-white px-3 py-2 rounded"
    >
      Adicionar ao carrinho
    </button>
  );
}
