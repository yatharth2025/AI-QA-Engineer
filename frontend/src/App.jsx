import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="ml-64">
        <Navbar />

        <Dashboard />
      </div>
    </div>
  );
}

export default App;