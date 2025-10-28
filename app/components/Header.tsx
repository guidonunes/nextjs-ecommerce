import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#31394c] border text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold text-white">Next<span className="text-red-600">Store</span></Link>
        <nav className="flex items-center gap-4">
          <Link href="/" className="text-white hover:text-amber-500">Store</Link>
          <Link href="/products" className="text-white hover:text-amber-500">Products</Link>
          <Link href="/dashboard/login" className="px-3 py-2 bg-amber-500 text-black rounded hover:bg-blue-950">Log in</Link>
        </nav>
      </div>
    </header>
  )
}
