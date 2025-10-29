"use client"

import { useState } from "react";

export default function NovoProdutoPage() {
  const[error, setError] = useState<string | null>(null);
  const[name, setName] = useState('');
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
  const [createdAt, setCreatedAt] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Implement product creation logic here
  }

  return (
    <div className="container mx-auto p-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 bg-[#31394c] p-6 rounded shadow">
      <h1 className="text-3xl font-bold mb-6">
        Add a New Product
      </h1>
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Name: </label>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" placeholder='e.g. Smartphone' className="mt-1 w-full p-2 border rounded" required />
        </div>
        <div>
          <label htmlFor="stock" className="block text-sm font-medium">Stock: </label>
          <input value={stock} onChange={(e) => setStock(Number(e.target.value))} type="number" id="stock" name="stock" className="mt-1 w-full p-2 border rounded" required />
        </div>
        <div>
          <label htmlFor="price" className="block text-sm font-medium">Price: </label>
          <input value={price} onChange={(e) => setPrice(Number(e.target.value))} type="number" id="price" name="price" className="mt-1 w-full p-2 border rounded" required />
        </div>
        <div>
          <label htmlFor="createdAt" className="block text-sm font-medium">Created at: </label>
          <input value={createdAt} onChange={(e) => setCreatedAt(e.target.value)} type="text" id="createdAt" name="createdAt" placeholder="2025-06-03" className="mt-1 w-full p-2 border rounded" required />
        </div>
        <button className="w-full bg-amber-500 text-black py-2 rounded">Save</button>
      </form>
    </div>
  )
}
