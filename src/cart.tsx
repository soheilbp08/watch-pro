
import { useEffect, useState } from "react";

interface CartProps {
  watchId: string;
  price: number;
  stock: number;
  onStockChange: (newStock: number) => void;
}

interface CartItem {
  id?: number;
  watchId: string;
  quantity: number;
}

export default function Cart({
  watchId,
  stock,
  price,
  onStockChange,
}: CartProps) {
  const [quantity, setQuantity] = useState(0);
  const [cartItemId, setCartItemId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  // گرفتن اطلاعات Cart از json-server
  useEffect(() => {
    const getCartItem = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/cart?watchId=${watchId}`
        );

        if (!response.ok) {
          throw new Error("Failed to get cart");
        }

        const data: CartItem[] = await response.json();

        if (data.length > 0) {
          setQuantity(data[0].quantity);
          setCartItemId(data[0].id ?? null);
        } else {
          setQuantity(0);
          setCartItemId(null);
        }
      } catch (error) {
        console.error("Cart error:", error);
      }
    };

    getCartItem();
  }, [watchId]);

  // اضافه کردن به Cart
  const addToCart = async () => {
    if (stock <= 0 || loading) return;

    setLoading(true);

    try {
      // اول موجودی محصول کم می‌شود
      const stockResponse = await fetch(
        `http://localhost:3000/watches/${watchId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            stock: stock - 1,
          }),
        }
      );

      if (!stockResponse.ok) {
        throw new Error("Failed to update stock");
      }

      // اگر قبلاً در Cart وجود دارد
      if (cartItemId !== null) {
        const cartResponse = await fetch(
          `http://localhost:3000/cart/${cartItemId}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              quantity: quantity + 1,
            }),
          }
        );

        if (!cartResponse.ok) {
          throw new Error("Failed to update cart");
        }
      } else {
        // اگر اولین بار است که محصول وارد Cart می‌شود
        const cartResponse = await fetch(
          "http://localhost:3000/cart",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              watchId,
              quantity: 1,
            }),
          }
        );

        if (!cartResponse.ok) {
          throw new Error("Failed to add cart item");
        }

        const newCartItem: CartItem = await cartResponse.json();

        setCartItemId(newCartItem.id ?? null);
      }

      setQuantity((prev) => prev + 1);
      onStockChange(stock - 1);
    } catch (error) {
      console.error(error);
      alert("خطا در ارتباط با دیتابیس");
    } finally {
      setLoading(false);
    }
  };

  // کم کردن از Cart
  const removeFromCart = async () => {
    if (quantity <= 0 || loading || cartItemId === null) return;

    setLoading(true);

    try {
      // اول موجودی محصول برمی‌گردد
      const stockResponse = await fetch(
        `http://localhost:3000/watches/${watchId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            stock: stock + 1,
          }),
        }
      );

      if (!stockResponse.ok) {
        throw new Error("Failed to update stock");
      }

      const newQuantity = quantity - 1;

      if (newQuantity === 0) {
        // اگر تعداد رسید به صفر، محصول از Cart حذف شود
        const cartResponse = await fetch(
          `http://localhost:3000/cart/${cartItemId}`,
          {
            method: "DELETE",
          }
        );

        if (!cartResponse.ok) {
          throw new Error("Failed to remove cart item");
        }

        setCartItemId(null);
      } else {
        // فقط quantity کم شود
        const cartResponse = await fetch(
          `http://localhost:3000/cart/${cartItemId}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              quantity: newQuantity,
            }),
          }
        );

        if (!cartResponse.ok) {
          throw new Error("Failed to update cart");
        }
      }

      setQuantity(newQuantity);
      onStockChange(stock + 1);
    } catch (error) {
      console.error(error);
      alert("خطا در ارتباط با دیتابیس");
    } finally {
      setLoading(false);
    }
  };

  const totalPrice = quantity * price;

  return (
    <div className="flex items-center gap-3">

      {/* کم کردن */}
      <button
        onClick={removeFromCart}
        disabled={quantity === 0 || loading}
        className="
          flex h-11 w-11 items-center justify-center
          rounded-full
          border border-[#D4AF62]/40
          bg-[#0B2B24]
          text-xl text-[#D4AF62]
          transition-all duration-300
          hover:border-[#D4AF62]
          hover:bg-[#D4AF62]/10
          disabled:cursor-not-allowed
          disabled:opacity-30
        "
      >
        −
      </button>

      {/* تعداد */}
      <div
        className="
          flex h-11 min-w-[50px]
          items-center justify-center
          rounded-lg
          border border-[#D4AF62]/40
          bg-gradient-to-br
          from-[#123C32]
          via-[#0B2B24]
          to-[#061A16]
          text-[#F5F1E8]
          font-semibold
        "
      >
        {quantity}
      </div>

      {/* اضافه کردن */}
      <button
        onClick={addToCart}
        disabled={stock <= 0 || loading}
        className="
          flex h-11 items-center gap-2
          rounded-lg
          border border-[#D4AF62]
          bg-[#D4AF62]
          px-6
          font-semibold
          tracking-wide
          text-[#0B2B24]
          transition-all duration-300
          hover:bg-[#E2C477]
          hover:shadow-[0_0_20px_rgba(212,175,98,0.25)]
          active:scale-95
          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >
        <span className="text-lg">+</span>

        {loading ? "Updating..." : "Add to Cart"}
      </button>

      {/* قیمت کل */}
      <div className="ml-4 text-lg font-semibold text-[#D4AF62]">
        Total: ${totalPrice.toFixed(2)}
      </div>

    </div>
  );
}