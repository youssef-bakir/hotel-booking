import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto grid min-h-screen w-full max-w-6xl grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:flex flex-col justify-between p-10">
          <div className="text-xl font-bold">HotelBooking</div>
          <div className="text-slate-300">
            Secure login, fast booking, great UI.
          </div>
        </div>

        <div className="flex items-center justify-center p-6">
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
