
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "./data.json";
import Cart from "./cart";

interface Watch {
  id: string;
  brand: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
}

export default function Show() {
  const { id } = useParams<{ id: string }>();

  const [watch, setWatch] = useState<Watch | null>(null);
  const [loading, setLoading] = useState(true);

  // دریافت محصول از data.json
  useEffect(() => {
    setLoading(true);

    const selectedWatch = data.watches.find(
      (item) => item.id === id
    );

    setWatch(selectedWatch ?? null);
    setLoading(false);
  }, [id]);

  // Loading
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0B2B24] text-[#D4AF62]">
        Loading...
      </div>
    );
  }

  // Product not found
  if (!watch) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-5 bg-[#0B2B24] px-4 text-[#F5F1E8]">
        <h1 className="text-3xl font-semibold">Watch Not Found</h1>

        <p className="text-sm text-[#F5F1E8]/60">
          This watch could not be found in our collection.
        </p>

        <Link
          to="/"
          className="rounded-full border border-[#D4AF62]/50 px-6 py-3 text-[#D4AF62] transition hover:bg-[#D4AF62] hover:text-[#061A15]"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0B2B24] px-4 py-12 text-[#F5F1E8] sm:px-6 md:px-12">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-12">

        {/* Watch Image */}
        <div className="group relative">
          {/* Outer Glow */}
          <div className="pointer-events-none absolute -inset-4 rounded-[28px] bg-[#D4AF62]/10 opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100" />

          {/* Image Card */}
          <div className="relative overflow-hidden rounded-[28px] border border-[#D4AF62]/20 bg-gradient-to-br from-[#163C33] via-[#102F28] to-[#09221D] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-700 group-hover:-translate-y-2 group-hover:border-[#D4AF62]/50 group-hover:shadow-[0_25px_70px_rgba(212,175,98,0.15)] sm:p-5">

            {/* Decorative Shine */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-[#D4AF62]/10 blur-3xl transition-all duration-700 group-hover:scale-150" />

            {/* Image Area */}
            <div className="relative flex h-[320px] items-center justify-center overflow-hidden rounded-2xl border border-[#D4AF62]/10 bg-[#0B2B24] sm:h-[400px] lg:h-[450px]">

              <div className="pointer-events-none absolute h-56 w-56 rounded-full bg-[#D4AF62]/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

              <img
                src={watch.image}
                alt={watch.name}
                className="relative z-10 h-full w-full object-contain p-6 drop-shadow-[0_20px_25px_rgba(0,0,0,0.45)] transition-transform duration-700 group-hover:scale-105 sm:p-8"
                onError={(event) => {
                  event.currentTarget.style.visibility = "hidden";
                }}
              />

              {/* Corner Decorations */}
              <div className="absolute left-4 top-4 h-8 w-8 border-l border-t border-[#D4AF62]/40 transition-all duration-500 group-hover:h-12 group-hover:w-12 group-hover:border-[#D4AF62]/70" />

              <div className="absolute bottom-4 right-4 h-8 w-8 border-b border-r border-[#D4AF62]/40 transition-all duration-500 group-hover:h-12 group-hover:w-12 group-hover:border-[#D4AF62]/70" />
            </div>

            {/* Bottom Gold Line */}
            <div className="mt-5 h-px w-0 bg-[#D4AF62] transition-all duration-700 group-hover:w-full" />
          </div>
        </div>

        {/* Watch Information */}
        <section className="flex flex-col">

          {/* Brand */}
          <span className="mb-3 text-sm uppercase tracking-[4px] text-[#D4AF62]/70">
            {watch.brand}
          </span>

          {/* Name */}
          <h1 className="mb-6 text-3xl font-semibold tracking-wide text-[#F5F1E8] sm:text-4xl md:text-5xl">
            {watch.name}
          </h1>

          {/* Price */}
          <div className="mb-7">
            <span className="text-3xl font-semibold text-[#D4AF62]">
              ${watch.price.toFixed(2)}
            </span>
          </div>

          <div className="mb-7 h-px w-20 bg-[#D4AF62]" />

          {/* Description */}
          <p className="mb-8 max-w-xl text-[15px] leading-8 text-gray-300">
            {watch.description}
          </p>

          {/* Stock */}
          <div className="mb-8">
            {watch.stock > 0 ? (
              <span className="text-sm text-green-400">
                ● In Stock — {watch.stock} available
              </span>
            ) : (
              <span className="text-sm text-red-400">
                ● Out of Stock
              </span>
            )}
          </div>

          {/* Cart */}
          {watch.stock > 0 ? (
            <Cart
              watchId={watch.id}
              price={watch.price}
              stock={watch.stock}
              onStockChange={(newStock) => {
                setWatch((currentWatch) =>
                  currentWatch
                    ? { ...currentWatch, stock: newStock }
                    : null
                );
              }}
            />
          ) : (
            <button
              type="button"
              disabled
              className="w-full cursor-not-allowed rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/40 sm:w-fit"
            >
              Currently Unavailable
            </button>
          )}

          {/* Back to Collection */}
          <Link
            to="/watches"
            className="mt-6 w-fit text-sm text-[#D4AF62]/70 transition hover:text-[#D4AF62]"
          >
            ← Back to All Watches
          </Link>
        </section>
      </div>
    </main>
  );
}
