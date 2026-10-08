
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  useEffect(() => {
    const getWatch = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/watches/${id}`
        );

        if (!response.ok) {
          throw new Error("Watch not found");
        }

        const data = await response.json();
        setWatch(data);
      } catch (error) {
        console.error(error);
        setWatch(null);
      } finally {
        setLoading(false);
      }
    };

    getWatch();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B2B24] flex items-center justify-center text-[#D4AF62]">
        Loading...
      </div>
    );
  }

  if (!watch) {
    return (
      <div className="min-h-screen bg-[#0B2B24] flex items-center justify-center text-[#F5F1E8]">
        <h1 className="text-2xl">Watch not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B2B24] text-[#F5F1E8] px-6 py-12 md:px-12">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* تصویر */}

        <div className="group relative">

  {/* Outer Glow */}
  <div
    className="
      pointer-events-none
      absolute
      -inset-4
      rounded-[28px]
      bg-[#D4AF62]/10
      opacity-0
      blur-3xl
      transition-all
      duration-700
      ease-in-out
      group-hover:opacity-100
    "
  />

  {/* Card */}
  <div
    className="
      relative
      overflow-hidden
      rounded-[28px]
      border
      border-[#D4AF62]/20
      bg-gradient-to-br
      from-[#163C33]
      via-[#102F28]
      to-[#09221D]
      p-5
      shadow-[0_20px_60px_rgba(0,0,0,0.25)]
      transition-all
      duration-700
      ease-in-out

      group-hover:-translate-y-2
      group-hover:border-[#D4AF62]/50
      group-hover:shadow-[0_25px_70px_rgba(212,175,98,0.15)]
    "
  >

    {/* Top Shine */}
    <div
      className="
        pointer-events-none
        absolute
        -top-32
        -right-32
        h-64
        w-64
        rounded-full
        bg-[#D4AF62]/10
        blur-3xl
        transition-all
        duration-700
        ease-in-out
        group-hover:scale-150
        group-hover:bg-[#D4AF62]/15
      "
    />

    {/* Image Area */}
    <div
      className="
        relative
        flex
        h-[450px]
        items-center
        justify-center
        overflow-hidden
        rounded-2xl
        bg-[#0B2B24]
        border
        border-[#D4AF62]/10
      "
    >

      {/* Image Glow */}
      <div
        className="
          pointer-events-none
          absolute
          h-56
          w-56
          rounded-full
          bg-[#D4AF62]/10
          blur-3xl
          opacity-0
          transition-all
          duration-700
          ease-in-out
          group-hover:opacity-100
        "
      />

      <img
        src={watch.image}
        alt={watch.name}
        className="
          relative
          z-10
          h-full
          w-full
          object-contain
          p-8
          drop-shadow-[0_20px_25px_rgba(0,0,0,0.45)]
          transition-all
          duration-700
          ease-in-out

          group-hover:scale-110
          group-hover:drop-shadow-[0_25px_35px_rgba(212,175,98,0.18)]
        "
      />

      {/* Corner Decoration */}
      <div
        className="
          absolute
          left-4
          top-4
          h-8
          w-8
          border-l
          border-t
          border-[#D4AF62]/30
          transition-all
          duration-500
          group-hover:h-12
          group-hover:w-12
          group-hover:border-[#D4AF62]/70
        "
      />

      <div
        className="
          absolute
          bottom-4
          right-4
          h-8
          w-8
          border-b
          border-r
          border-[#D4AF62]/30
          transition-all
          duration-500
          group-hover:h-12
          group-hover:w-12
          group-hover:border-[#D4AF62]/70
        "
      />

    </div>

    {/* Bottom Line */}
    <div
      className="
        mt-5
        h-px
        w-0
        bg-[#D4AF62]
        transition-all
        duration-700
        ease-in-out
        group-hover:w-full
      "
    />

  </div>

</div>
        {/* مشخصات */}
        <div className="flex flex-col">

          {/* برند */}
          <span className="
            text-sm
            tracking-[4px]
            uppercase
            text-[#D4AF62]/70
            mb-3
          ">
            {watch.brand}
          </span>

          {/* اسم */}
          <h1 className="
            text-4xl
            md:text-5xl
            font-semibold
            tracking-wide
            text-[#F5F1E8]
            mb-6
          ">
            {watch.name}
          </h1>

          {/* قیمت */}
          <div className="mb-7">
            <span className="
              text-3xl
              font-semibold
              text-[#D4AF62]
            ">
              ${watch.price}
            </span>
          </div>

          <div className="w-20 h-[1px] bg-[#D4AF62] mb-7" />

          {/* توضیحات */}
          <p className="
            text-gray-300
            leading-8
            text-[15px]
            mb-8
            max-w-xl
          ">
            {watch.description}
          </p>

          {/* موجودی */}
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
          <Cart
            watchId={watch.id}
            price={watch.price}
            stock={watch.stock}
            onStockChange={(newStock) =>
              setWatch({
                ...watch,
                stock: newStock,
              })
            }
          />

        </div>

      </div>
    </div>
  );
}