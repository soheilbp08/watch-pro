
import type { ReactNode } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import data from "./data.json";
const instagramIcon = "/watches/logos/instag.svg";
const telegramIcon = "/watches/logos/teleg.svg";
const locationIcon = "/watches/logos/location1.svg";
const logo = "/watches/Sohna_logo/main.png";
const phone = "/watches/logos/phone.svg";
const Mail = "/watches/logos/email2.svg";

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
const filteredWatches = data.watches.filter((watch) =>
  `${watch.name} ${watch.brand}`
    .toLowerCase()
    .includes(search.toLowerCase())
);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0B2B24] text-[#F5F1E8]">

      {/* ================= NAVBAR ================= */}

      <nav
        className="
          sticky top-0 z-50
          w-full
          border-b border-[#D4AF62]/25
          bg-[#0B2B24]/95
          backdrop-blur-md
          transition-all
          duration-300
          lg:backdrop-blur-none
        "
      >
        <div
          className="
            mx-auto
            flex h-[76px]
            w-full
            items-center
            justify-between
            px-4
            sm:px-6
            lg:h-[82px]
            lg:px-10
            xl:px-16
          "
        >

          {/* ================= LOGO ================= */}

          <Link
            to="/login"
            onClick={closeMenu}
            className="inline-flex flex-col shrink-0"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <img
                src={logo}
                alt="SOHNA Logo"
                className="
                  h-10 w-10
                  rounded-full
                  object-cover
                  sm:h-11 sm:w-11
                  lg:h-12 lg:w-12
                "
              />

              <span
                className="
                  text-xl
                  font-bold
                  tracking-[3px]
                  text-[#D4AF62]
                  sm:text-2xl
                  sm:tracking-[4px]
                  lg:text-[27px]
                  lg:tracking-[5px]
                "
              >
                SOHNA
              </span>
            </div>

            <span
              className="
                mt-1
                ml-[48px]
                text-[6px]
                tracking-[3px]
                text-[#E8E1CF]
                sm:ml-[54px]
                sm:text-[7px]
                lg:ml-[60px]
                lg:text-[8px]
              "
            >
              WATCHES
            </span>
          </Link>


          {/* ================= DESKTOP MENU ================= */}

          <div className="hidden items-center gap-6 lg:flex xl:gap-10">

            <Link
              to="/"
              className="
                text-sm
                tracking-wide
                text-[#E8E1CF]
                transition
                duration-300
                hover:text-[#D4AF62]
              "
            >
              Home
            </Link>

            <Link
              to="/watches"
              className="
                text-sm
                tracking-wide
                text-[#E8E1CF]
                transition
                duration-300
                hover:text-[#D4AF62]
              "
            >
              Collection
            </Link>

            <Link
              to="/about"
              className="
                text-sm
                tracking-wide
                text-[#E8E1CF]
                transition
                duration-300
                hover:text-[#D4AF62]
              "
            >
              About
            </Link>

            <Link
              to="/contact"
              className="
                text-sm
                tracking-wide
                text-[#E8E1CF]
                transition
                duration-300
                hover:text-[#D4AF62]
              "
            >
              Contact
            </Link>

          </div>


          {/* ================= RIGHT SIDE ================= */}

          <div className="flex items-center gap-2 sm:gap-3">
{/* ================= SEARCH ================= */}

<div className="relative flex items-center">

  {/* Search Button */}

  <button
    onClick={() => setIsOpen(!isOpen)}
    aria-label="Search"
    className="
      relative z-[110]
      flex h-10 w-10 items-center justify-center
      rounded-full
      border border-[#D4AF62]/35
      text-[#D4AF62]
      transition-all
      duration-300
      ease-in-out
      hover:bg-[#D4AF62]
      hover:text-[#0B2B24]
      hover:scale-105
      active:scale-95
      sm:h-11 sm:w-11
    "
  >
    🔍
  </button>

  {/* Search Box */}

  <div
    className={`
      absolute
      right-0
      top-[calc(100%+14px)]
      z-[100]
      origin-top-right
      transition-all
      duration-300
      ease-in-out

      ${
        isOpen
          ? "visible translate-y-0 scale-100 opacity-100"
          : "invisible -translate-y-2 scale-95 opacity-0 pointer-events-none"
      }
    `}
  >

    <div
      className="
        w-[280px]
        rounded-2xl
        border border-[#D4AF62]/30
        bg-[#0B2B24]/98
        p-2
        shadow-[0_15px_40px_rgba(0,0,0,0.35)]
        backdrop-blur-xl
        sm:w-[320px]
      "
    >

      {/* Input */}

      <div
        className="
          flex
          items-center
          gap-2
          rounded-xl
          border border-[#D4AF62]/25
          bg-[#F5F1E8]
          px-3
          transition-all
          duration-300
          ease-in-out
          focus-within:border-[#D4AF62]
          focus-within:ring-1
          focus-within:ring-[#D4AF62]/30
        "
      >

        <span className="text-lg text-[#0B2B24]">
          🔍
        </span>

        <input
          autoFocus={isOpen}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search watches..."
          className="
            h-11
            w-full
            bg-transparent
            text-sm
            text-[#0B2B24]
            outline-none
            placeholder:text-[#0B2B24]/45
          "
        />

        {/* Clear */}

        {search && (
          <button
            onClick={() => setSearch("")}
            className="
              text-lg
              text-[#0B2B24]/50
              transition-all
              duration-200
              hover:scale-110
              hover:text-[#0B2B24]
            "
          >
            ×
          </button>
        )}

      </div>


      {/* Results */}

      {search.trim() !== "" && (
        <div
          className="
            mt-2
            max-h-[350px]
            overflow-y-auto
            rounded-xl
            border border-[#D4AF62]/15
            bg-[#0B2B24]
          "
        >

          {filteredWatches.length > 0 ? (

            filteredWatches.slice(0, 5).map((watch) => (

              <Link
                key={watch.id}
                to={`/watch/${watch.id}`}
                onClick={() => {
                  setIsOpen(false);
                  setSearch("");
                }}
                className="
                  flex
                  items-center
                  gap-3
                  border-b border-[#D4AF62]/10
                  p-3
                  transition-all
                  duration-300
                  ease-in-out
                  hover:bg-[#D4AF62]/10
                  hover:pl-4
                "
              >

                <img
                  src={watch.image}
                  alt={watch.name}
                  className="
                    h-12
                    w-12
                    shrink-0
                    rounded-lg
                    object-cover
                    transition-transform
                    duration-300
                    ease-in-out
                    group-hover:scale-105
                  "
                />

                <div className="min-w-0">

                  <p className="
                    truncate
                    text-sm
                    text-[#F5F1E8]
                  ">
                    {watch.name}
                  </p>

                  <p className="
                    mt-1
                    text-xs
                    text-[#D4AF62]
                  ">
                    {watch.brand} · ${watch.price}
                  </p>

                </div>

              </Link>

            ))

          ) : (

            <div className="
              px-4
              py-5
              text-center
              text-sm
              text-[#F5F1E8]/50
            ">
              No watches found
            </div>

          )}

        </div>
      )}

    </div>

  </div>

</div>


            {/* Cart */}

            <Link
              to="/pay"
              aria-label="Cart"
              className="
                flex
                h-10 w-10
                items-center justify-center
                rounded-full
                border border-[#D4AF62]/35
                text-[#D4AF62]
                transition-all
                duration-300
                hover:bg-[#D4AF62]
                hover:text-[#0B2B24]
                sm:h-11 sm:w-11
              "
            >
              🛒
            </Link>


            {/* ================= MOBILE MENU BUTTON ================= */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              className="
                flex
                h-10 w-10
                items-center justify-center
                rounded-full
                border border-[#D4AF62]/35
                text-[#D4AF62]
                transition
                duration-300
                hover:bg-[#D4AF62]
                hover:text-[#0B2B24]
                lg:hidden
                sm:h-11 sm:w-11
              "
            >
              {menuOpen ? "✕" : "☰"}
            </button>

          </div>

        </div>


        {/* ================= MOBILE MENU ================= */}

        <div
          className={`
            overflow-hidden
            border-t border-[#D4AF62]/10
            bg-[#061A15]
            transition-all
            duration-300
            lg:hidden
            ease-in-out
            ${
              menuOpen
                ? "max-h-[400px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >

          <div className="flex flex-col px-5 py-5">

            <Link
              to="/"
              onClick={closeMenu}
              className="
                border-b border-[#D4AF62]/10
                py-4
                text-sm
                tracking-wide
                text-[#E8E1CF]
                transition
                hover:text-[#D4AF62]
              "
            >
              Home
            </Link>

            <Link
              to="/watches"
              onClick={closeMenu}
              className="
                border-b border-[#D4AF62]/10
                py-4
                text-sm
                tracking-wide
                text-[#E8E1CF]
                transition
                hover:text-[#D4AF62]
              "
            >
              Collection
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className="
                border-b border-[#D4AF62]/10
                py-4
                text-sm
                tracking-wide
                text-[#E8E1CF]
                transition
                hover:text-[#D4AF62]
              "
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="
                py-4
                text-sm
                tracking-wide
                text-[#E8E1CF]
                transition
                hover:text-[#D4AF62]
              "
            >
              Contact
            </Link>

          </div>

        </div>

      </nav>


      {/* ================= PAGE CONTENT ================= */}

      <main>
        {children}
      </main>


      {/* ================= FOOTER ================= */}

      <footer
        className="
          border-t border-[#D4AF62]/25
          px-5
          py-12
          sm:px-8
          sm:py-14
          lg:px-10
          xl:px-16
        "
      >

        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-12
            md:grid
            md:grid-cols-2
            lg:flex
            lg:flex-row
            lg:justify-between
          "
        >

          {/* ================= BRAND ================= */}

          <div className="max-w-sm">

            <h2
              className="
                text-3xl
                font-bold
                tracking-[4px]
                text-[#D4AF62]
                sm:text-4xl
              "
            >
              SOHNA
            </h2>

            <p
              className="
                mt-4
                max-w-sm
                text-sm
                leading-7
                text-[#F5F1E8]/60
              "
            >
              Timeless design. Elegant details.
              Discover the world of SOHNA watches.
            </p>


            {/* Social */}

            <div className="mt-6 flex gap-3">

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  overflow-hidden
                  rounded-full
                  border border-[#D4AF62]/30
                
                  transition
                  duration-300
                  hover:bg-[#D4AF62]
                "
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="h-5 w-5 object-contain"
                />
              </a>

              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  overflow-hidden
                  rounded-full
                  border border-[#D4AF62]/30
                
                  transition
                  duration-300
                  hover:bg-[#D4AF62]
                "
              >
                <img
                  src={telegramIcon}
                  alt="Telegram"
                  className="h-5 w-5 object-contain"
                />
              </a>

            </div>

          </div>


          {/* ================= CONTACT ================= */}

          <div className="flex flex-col gap-5">

            <h3 className="text-lg font-semibold text-[#D4AF62]">
              Contact
            </h3>

            <a
              href="https://maps.google.com/"
              target="_blank"
              rel="noreferrer"
              className="
                flex items-center gap-3
                text-sm
                text-[#F5F1E8]/65
                transition
                hover:text-[#D4AF62]
              "
            >
              <img
                src={locationIcon}
                alt="Location"
                className="h-5 w-5 object-contain"
              />

              <span>Our Store</span>
            </a>


            <a
              href="tel:+989123456789"
              className="
                flex items-center gap-3
                text-sm
                text-[#F5F1E8]/65
                transition
                hover:text-[#D4AF62]
              "
            >
              <img
                src={phone}
                alt="Phone"
                className="h-5 w-5 object-contain"
              />

              <span>+98 912 345 6789</span>
            </a>


            <a
              href="mailto:info@sohna.com"
              className="
                flex items-center gap-3
                break-all
                text-sm
                text-[#F5F1E8]/65
                transition
                hover:text-[#D4AF62]
              "
            >
              <img
                src={Mail}
                alt="Email"
                className="h-5 w-5 shrink-0 object-contain"
              />

              <span>info@sohna.com</span>
            </a>

          </div>


          {/* ================= ABOUT ================= */}

          <div className="max-w-xs">

            <h3 className="text-lg font-semibold text-[#D4AF62]">
              About Us
            </h3>

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-[#F5F1E8]/60
              "
            >
              SOHNA creates elegant timepieces designed
              for those who appreciate timeless luxury
              and refined craftsmanship.
            </p>

          </div>

        </div>


        {/* ================= COPYRIGHT ================= */}

        <div
          className="
            mx-auto
            mt-12
            max-w-7xl
            border-t border-[#D4AF62]/15
            pt-6
            text-center
          "
        >
          <p
            className="
              text-[11px]
              tracking-wider
              text-[#F5F1E8]/40
              sm:text-xs
            "
          >
            © 2026 SOHNA. All rights reserved.
          </p>
        </div>

      </footer>

    </div>
  );
}
