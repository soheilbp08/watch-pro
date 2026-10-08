import data from "./data.json";

interface CartItem {
  watchId: string;
  quantity: number;
  id: string;
}

export default function Pay() {
  const cartItems: CartItem[] = data.cart;

  const products = cartItems.map((cartItem) => {
    const watch = data.watches.find(
      (watch) => watch.id === cartItem.watchId
    );

    return {
      ...cartItem,
      watch,
    };
  });

  const totalPrice = products.reduce(
    (sum, item) => sum + (item.watch?.price ?? 0) * item.quantity,
    0
  );

  return (
    <div className="
      min-h-screen
      overflow-x-hidden
      bg-[#0B2B24]
      px-4
      py-8
      text-[#F5F1E8]
      sm:px-6
      sm:py-10
      lg:px-10
      lg:py-14
    ">

      {/* Background Glow */}

      <div className="
        pointer-events-none
        fixed
        left-1/2
        top-1/2
        -z-0
        h-[300px]
        w-[300px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-[#D4AF62]/5
        blur-[100px]
        sm:h-[500px]
        sm:w-[500px]
        sm:blur-[140px]
      " />

      <div className="
        relative
        z-10
        mx-auto
        w-full
        max-w-6xl
      ">

        {/* ================= HEADER ================= */}

        <div className="
          mb-8
          text-center
          sm:mb-10
        ">

          <p className="
            mb-2
            text-[10px]
            uppercase
            tracking-[4px]
            text-[#D4AF62]/70
            sm:text-xs
            sm:tracking-[5px]
          ">
            SOHNA
          </p>

          <h1 className="
            text-2xl
            font-semibold
            tracking-wide
            sm:text-3xl
            lg:text-4xl
          ">
            Checkout
          </h1>

          <div className="
            mx-auto
            mt-3
            h-px
            w-12
            bg-[#D4AF62]
            sm:mt-4
            sm:w-16
          " />

          <p className="
            mx-auto
            mt-3
            max-w-md
            text-xs
            leading-5
            text-[#F5F1E8]/45
            sm:mt-4
            sm:text-sm
          ">
            Review your selected watches before completing your order.
          </p>

        </div>


        {/* ================= MAIN ================= */}

        <div className="
          grid
          grid-cols-1
          gap-6
          md:gap-8
          lg:grid-cols-[minmax(0,1fr)_340px]
          xl:grid-cols-[minmax(0,1fr)_380px]
        ">


          {/* ================= PRODUCTS ================= */}

          <div className="space-y-4">

            {products.map((item) => (

              <div
                key={item.id}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#D4AF62]/15
                  bg-[#102F28]/80
                  p-3
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  ease-in-out
                  hover:-translate-y-1
                  hover:border-[#D4AF62]/40
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                  sm:rounded-3xl
                  sm:p-4
                  md:p-5
                "
              >

                {/* Glow */}

                <div className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-40
                  w-40
                  rounded-full
                  bg-[#D4AF62]/10
                  blur-3xl
                  opacity-0
                  transition-all
                  duration-700
                  group-hover:opacity-100
                " />


                <div className="
                  relative
                  flex
                  flex-col
                  gap-4
                  sm:flex-row
                  sm:items-center
                  sm:gap-5
                ">


                  {/* ================= IMAGE ================= */}

                  <div className="
                    relative
                    flex
                    h-40
                    w-full
                    shrink-0
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-xl
                    border
                    border-[#D4AF62]/10
                    bg-[#0B2B24]
                    sm:h-28
                    sm:w-28
                    sm:rounded-2xl
                    md:h-32
                    md:w-32
                  ">

                    <div className="
                      absolute
                      h-20
                      w-20
                      rounded-full
                      bg-[#D4AF62]/10
                      blur-2xl
                    " />

                    <img
                      src={item.watch?.image}
                      alt={item.watch?.name}
                      className="
                        relative
                        z-10
                        h-full
                        w-full
                        object-contain
                        p-4
                        drop-shadow-[0_10px_15px_rgba(0,0,0,0.4)]
                        transition-transform
                        duration-700
                        ease-in-out
                        group-hover:scale-110
                        sm:p-3
                      "
                    />

                  </div>


                  {/* ================= INFO ================= */}

                  <div className="
                    min-w-0
                    flex-1
                  ">

                    <p className="
                      text-[9px]
                      uppercase
                      tracking-[2px]
                      text-[#D4AF62]/70
                      sm:text-[10px]
                      sm:tracking-[3px]
                    ">
                      {item.watch?.brand}
                    </p>

                    <h2 className="
                      mt-1.5
                      truncate
                      text-base
                      font-semibold
                      sm:mt-2
                      sm:text-lg
                    ">
                      {item.watch?.name}
                    </h2>

                    <span className="
                      mt-3
                      inline-flex
                      rounded-full
                      border
                      border-[#D4AF62]/20
                      bg-[#D4AF62]/5
                      px-3
                      py-1
                      text-[11px]
                      text-[#F5F1E8]/60
                    ">
                      Quantity: {item.quantity}
                    </span>

                  </div>


                  {/* ================= PRICE ================= */}

                  <div className="
                    flex
                    items-center
                    justify-between
                    border-t
                    border-[#D4AF62]/10
                    pt-3
                    sm:block
                    sm:min-w-[100px]
                    sm:border-0
                    sm:pt-0
                    sm:text-right
                    md:min-w-[120px]
                  ">

                    <div>
                      <p className="
                        text-[10px]
                        text-[#F5F1E8]/35
                        sm:text-xs
                      ">
                        Unit Price
                      </p>

                      <p className="
                        mt-1
                        text-base
                        font-semibold
                        text-[#D4AF62]
                        sm:text-lg
                      ">
                        ${item.watch?.price}
                      </p>
                    </div>

                    <div className="
                      sm:mt-3
                    ">
                      <p className="
                        text-[10px]
                        text-[#F5F1E8]/35
                        sm:text-xs
                      ">
                        Subtotal
                      </p>

                      <p className="
                        mt-1
                        text-sm
                        font-medium
                      ">
                        ${(item.watch?.price ?? 0) * item.quantity}
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>


          {/* ================= ORDER SUMMARY ================= */}

          <div className="
            h-fit
            lg:sticky
            lg:top-28
          ">

            <div className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-[#D4AF62]/25
              bg-gradient-to-br
              from-[#163C33]
              via-[#102F28]
              to-[#0B2B24]
              p-5
              shadow-[0_25px_70px_rgba(0,0,0,0.3)]
              sm:rounded-3xl
              sm:p-6
            ">

              {/* Glow */}

              <div className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-48
                w-48
                rounded-full
                bg-[#D4AF62]/10
                blur-3xl
              " />


              <div className="relative">

                <p className="
                  text-[10px]
                  uppercase
                  tracking-[3px]
                  text-[#D4AF62]/70
                  sm:text-xs
                ">
                  Order Summary
                </p>

                <h2 className="
                  mt-2
                  text-xl
                  font-semibold
                  sm:text-2xl
                ">
                  Your Order
                </h2>


                <div className="
                  my-5
                  h-px
                  bg-[#D4AF62]/15
                  sm:my-6
                " />


                {/* Items */}

                <div className="
                  flex
                  items-center
                  justify-between
                  text-sm
                ">
                  <span className="text-[#F5F1E8]/50">
                    Items
                  </span>

                  <span>
                    {products.length}
                  </span>
                </div>


                {/* Shipping */}

                <div className="
                  mt-4
                  flex
                  items-center
                  justify-between
                  text-sm
                ">
                  <span className="text-[#F5F1E8]/50">
                    Shipping
                  </span>

                  <span className="text-[#D4AF62]">
                    Free
                  </span>
                </div>


                <div className="
                  my-5
                  h-px
                  bg-[#D4AF62]/15
                  sm:my-6
                " />


                {/* Total */}

                <div className="
                  flex
                  items-end
                  justify-between
                ">

                  <div>

                    <p className="
                      text-[10px]
                      uppercase
                      tracking-wider
                      text-[#F5F1E8]/40
                    ">
                      Grand Total
                    </p>

                    <p className="
                      mt-1
                      text-2xl
                      font-bold
                      text-[#D4AF62]
                      sm:text-3xl
                    ">
                      ${totalPrice}
                    </p>

                  </div>

                  <span className="
                    text-[10px]
                    text-[#F5F1E8]/40
                  ">
                    USD
                  </span>

                </div>


                {/* Payment Button */}

                <button
                  className="
                    mt-6
                    w-full
                    rounded-xl
                    bg-[#D4AF62]
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-[#0B2B24]
                    transition-all
                    duration-300
                    ease-in-out
                    hover:-translate-y-1
                    hover:bg-[#E3C477]
                    hover:shadow-[0_12px_30px_rgba(212,175,98,0.25)]
                    active:translate-y-0
                    sm:py-3.5
                  "
                >
                  Continue to Payment
                </button>


                <p className="
                  mt-3
                  text-center
                  text-[10px]
                  leading-4
                  text-[#F5F1E8]/30
                  sm:text-[11px]
                ">
                  Secure checkout · Your information is protected
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}