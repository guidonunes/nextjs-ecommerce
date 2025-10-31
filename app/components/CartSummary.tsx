// Exemplo: src/components/CartSummary.tsx
"use client";

import React from 'react';
import { useCart } from '@/context/CartContext';

export default function CartSummary() {
  const { cartItems, totalItems, totalPrice, removeFromCart, clearCart } = useCart();

  return (
    <aside className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto">
      <h3 className="font-bold text-xl mb-4 text-gray-800">Resumo do Carrinho</h3>
      <table className="min-w-full border rounded overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border-b text-left">Product</th>
            <th className="px-4 py-2 border-b text-center">Quantity</th>
            <th className="px-4 py-2 border-b text-center">Price per Unit</th>
            <th className="px-4 py-2 border-b text-center">Total</th>
            <th className="px-4 py-2 border-b text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center py-6 text-gray-500">Cart is empty.</td>
            </tr>
          ) : (
            cartItems.map((i) => (
              <tr key={i.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 font-medium text-gray-900">{i.nome}</td>
                <td className="px-4 py-2 text-center">{i.quantity}</td>
                <td className="px-4 py-2 text-center">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'USD' }).format(i.valor)}</td>
                <td className="px-4 py-2 text-center">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'USD' }).format(i.valor * i.quantity)}</td>
                <td className="px-4 py-2 text-center">
                  <button onClick={() => { if (i.id != null) removeFromCart(i.id); }} className="px-2 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 transition">Remover</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="font-semibold">Total de cartItems:</span> {totalItems}
        </div>
        <div>
          <span className="font-semibold">Valor total:</span> {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'USD' }).format(totalPrice)}
        </div>
        <button onClick={clearCart} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition font-semibold">Empty cart</button>
      </div>
    </aside>
  );
}
