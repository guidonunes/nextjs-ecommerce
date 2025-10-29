"use client"
import Link from "next/link";
import { useState } from "react";
import { Produto } from "../interfaces/product.interface";


export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Produto>([]);
  return (
    <main className="container mx-auto p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>

      {loading ? (
        <p className="mt-6">Loading products...</p>
      ) : (
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full bg-[#31394c] rounded-lg shadow-md">
            <thead>
              <tr>
                <th className="px-6 py-3 border-black">ID</th>
                <th className="px-6 py-3 border-black">Name</th>
                <th className="px-6 py-3 border-black">Price</th>
                <th className="px-6 py-3 border-black">Stock</th>
                <th className="px-6 py-3 border-black">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                products.length === 0 && (
                  <tr>
                    <td colSpan={5} className="text-center py-4">No products found.</td>
                  </tr>
                )
              }
              {products.map((p) => (
                <tr key={p.id} className="border-t border-black">
                  <td className="px-6 py-4">{p.id}</td>
                  <td className="px-6 py-4">{p.nome}</td>
                  <td className="px-6 py-4">${p.preco.toFixed(2)}</td>
                  <td className="px-6 py-4">{p.estoque}</td>
                  <td className="px-6 py-4 flex gap-2">
                  <Link href={`/dashboard/product/${p.id}/edit`} className="px-3 py-1 bg-amber-500 text-black rounded flex">Edit</Link>
                  <button onClick={() => handleDelete(p.id)} className="px-3 py-1 bg-red-400 text-white rounded flex">Delete</button>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>

      )}



    </main>
  );
}
