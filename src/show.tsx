
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

          <div className="
            absolute inset-0
            rounded-2xl
            bg-[#D4AF62]/10
            blur-2xl
            opacity-0
            group-hover:opacity-100
            transition duration-500
          " />

          <div className="
            relative
            overflow-hidden
            rounded-2xl
            border border-[#D4AF62]/20
            bg-[#102F28]
            p-6
          ">
            <img
              src={watch.image}
              alt={watch.name}
              className="
                w-full
                h-[450px]
                object-contain
                transition-transform
                duration-700
                group-hover:scale-105
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