function Navbar() {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-8">
      <h1 className="text-2xl font-bold">
        AI QA Engineer Dashboard
      </h1>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        New Scan
      </button>
    </header>
  );
}

export default Navbar;