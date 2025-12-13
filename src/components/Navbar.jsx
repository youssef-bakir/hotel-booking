import { Link, NavLink } from "react-router-dom";

const cls = ({ isActive }) =>
  isActive ? "text-white" : "text-slate-300 hover:text-white";

export default function Navbar() {
  return (
    <header className="border-b border-white/10 bg-slate-950/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-lg font-bold">HotelBooking</Link>
        <nav className="flex items-center gap-5 text-sm">
          <NavLink to="/search" className={cls}>Search</NavLink>
          <NavLink to="/auth/login" className={cls}>Login</NavLink>
          <Link to="/auth/register" className="rounded-xl bg-white/10 px-3 py-2 hover:bg-white/15">
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}
