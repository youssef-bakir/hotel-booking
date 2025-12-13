import { NavLink, Outlet } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `block rounded-lg px-3 py-2 text-sm ${
    isActive ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5"
  }`;

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 lg:grid-cols-[260px_1fr] gap-6 px-4 py-6">
        <aside className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="mb-4 text-lg font-semibold">Dashboard</div>
          <nav className="space-y-1">
            <NavLink to="/dashboard" end className={linkClass}>Overview</NavLink>
            <NavLink to="/dashboard/hotels" className={linkClass}>Hotels</NavLink>
            <NavLink to="/dashboard/rooms" className={linkClass}>Rooms</NavLink>
            <NavLink to="/dashboard/amenities" className={linkClass}>Amenities</NavLink>
            <NavLink to="/dashboard/reservations" className={linkClass}>Reservations</NavLink>
          </nav>
        </aside>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <Outlet />
        </section>
      </div>
    </div>
  );
}
