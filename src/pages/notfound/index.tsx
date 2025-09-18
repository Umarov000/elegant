import type { JSX } from "react";
import { Link } from "react-router-dom";
import notFoundImg from "../../assets/ozodbek_notfound.webp";

export default function NotFound(): JSX.Element {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-4xl w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12 grid md:grid-cols-2 gap-6 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-slate-800">
            404
          </h1>
          <p className="text-xl text-slate-600">Page Not Found</p>

          <p className="text-slate-500">
            Sorry — the address you're looking for does not exist or has been
            moved.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-3 mt-4">
            <Link
              to="/"
              className="inline-block rounded-lg font-medium shadow hover:shadow-md transition"
            >
              <span className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
                Go back Home
              </span>
            </Link>

            <Link
              to="/contact"
              className="inline-block px-4 py-2 text-sm text-slate-600 hover:underline"
            >
              Need Help?
            </Link>
          </div>

          <p className="text-xs text-slate-400 mt-6">
            If this error continues, please contact us —
            <a href="https://ozodbekjalilov07@gmail.com/">
              ozodbekjalilov07@gmail.com
            </a>
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="max-w-sm">
            <img src={notFoundImg} alt="404" />
          </div>
        </div>
      </div>
    </div>
  );
}
