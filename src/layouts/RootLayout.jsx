import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-slate-950
     text-slate-100 flex flex-col">
      <Navbar />

      {/* GAP is controlled here */}
      <main className="flex-1 mx-auto w-full 
      max-w-6xl px-4 py-12">
        <Outlet />
      </main>

      <Footer />
    </div>

  );
}
