export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="container mx-auto p-6 text-center text-gray-500">
        © {new Date().getFullYear()} NextJS E-commerce. All rights reserved.
      </div>

    </footer>
  )
}
