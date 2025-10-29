export default function LoginPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-8xl font-bold mb-6">Login Page</h1>
      <form className="max-w-md mx-auto space-y-4 bg-[#31394c] p-6 rounded shadow-md">
        <div>
          <label htmlFor="email" className="block text-sm font-medium">E-Mail</label>
          <input type="email" id="email" name="email" placeholder="johndoe@email.com" className="mt-1 w-full p-2 border rounded" />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input type="password" id="password" name="password" className="mt-1 w-full p-2 border rounded" />
        </div>
        <button type="submit" className="w-full bg-amber-500 hover:text-amber-600 text-black py-2 rounded">Log in</button>
      </form>
    </div>
  )
}
