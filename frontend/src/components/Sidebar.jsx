function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-slate-900 text-white fixed left-0 top-0">
      <div className="p-6 text-2xl font-bold border-b border-slate-700">
        AI QA
      </div>

      <nav className="mt-6">
        <ul className="space-y-2 px-4">
          <li className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 cursor-pointer">
            Dashboard
          </li>

          <li className="p-3 rounded-lg hover:bg-slate-700 cursor-pointer">
            Scan History
          </li>

          <li className="p-3 rounded-lg hover:bg-slate-700 cursor-pointer">
            Reports
          </li>

          <li className="p-3 rounded-lg hover:bg-slate-700 cursor-pointer">
            Settings
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;