import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl py-16 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-2 text-slate-300">The page you’re looking for doesn’t exist.</p>
      <Link className="mt-6 inline-block rounded-xl bg-white/10 px-4 py-2 hover:bg-white/15" to="/">
        Go Home
      </Link>
    </div>
  );
}
