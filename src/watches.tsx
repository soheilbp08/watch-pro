
import { Link } from "react-router-dom";
import data from "./data.json";

export default function Watches() {
  const watches = data.watches;

  return (
    <main className="min-h-screen bg-[#061A15] px-4 py-12 text-[#F5F1E8] sm:px-6 lg:px-10">
      
      {/* Header */}
      <div className="mx-auto mb-12 max-w-7xl text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF62]">
          SOHNA
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-wide text-[#F5F1E8]">
          All Watches
        </h1>

        <div className="mx-auto mt-4 h-px w-20 bg-[#D4AF62]/50" />

        <p className="mt-4 text-sm text-[#F5F1E8]/50">
          Discover our complete collection of watches
        </p>
      </div>

      {/* Watches */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {watches.map((watch) => (
          <Link
            key={watch.id}
            to={`/watch/${watch.id}`}
            className="group overflow-hidden rounded-3xl border border-[#D4AF62]/10 bg-[#0B2B24] transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF62]/40 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative h-[360px] overflow-hidden">
              <img
                src={watch.image}
                alt={watch.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061A15]/90 via-transparent to-transparent" />

              {/* Brand */}
              <span className="absolute left-4 top-4 rounded-full border border-[#D4AF62]/30 bg-[#061A15]/70 px-3 py-1 text-xs uppercase tracking-wider text-[#D4AF62]">
                {watch.brand}
              </span>
            </div>

            {/* Info */}
            <div className="p-5">
              <h2 className="text-lg font-medium tracking-wide text-[#F5F1E8]">
                {watch.name}
              </h2>

              <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#F5F1E8]/50">
                {watch.description}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-lg font-semibold text-[#D4AF62]">
                  ${watch.price.toFixed(2)}
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D4AF62]/30 text-[#D4AF62] transition-all duration-300 group-hover:border-[#D4AF62] group-hover:bg-[#D4AF62] group-hover:text-[#061A15]">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty */}
      {watches.length === 0 && (
        <div className="py-20 text-center text-[#F5F1E8]/50">
          No watches found.
        </div>
      )}
    </main>
  );
}