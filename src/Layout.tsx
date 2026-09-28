
import type { ReactNode } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import instagramIcon from "./assets/logos/insta.jpg";
import telegramIcon from "./assets/logos/telegram.png";
import locationIcon from "./assets/logos/location.jpg";

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B2B24] text-[#F5F1E8]">

      {/* ================= NAVBAR ================= */}

      <nav
        className="
          flex h-[82px] w-full items-center justify-between
          border-b border-[#D4AF62]/25
          bg-[#0B2B24]
          px-16
        "
      >

        {/* Logo */}

        <Link to="/" className="flex flex-col">

          <span
            className="
              text-[27px]
              font-bold
              tracking-[5px]
              text-[#D4AF62]
            "
          >
            SOHNA
          </span>

          <span
            className="
              mt-1
              text-[8px]
              tracking-[4px]
              text-[#E8E1CF]
            "
          >
            WATCHES
          </span>

        </Link>


        {/* Menu */}

        <div className="flex items-center gap-10">

          <Link
            to="/"
            className="
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
            to="/collection"
            className="
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
            className="
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
            className="
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


        {/* Right Side */}

        <div className="flex items-center gap-3">

          {/* Search Button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              flex h-11 w-11
              items-center justify-center
              rounded-full
              border border-[#D4AF62]/35
              text-[#D4AF62]
              transition-all
              duration-300
              ease-out
              hover:bg-[#D4AF62]
              hover:text-[#0B2B24]
            "
          >
            🔍
          </button>


          {/* Search Input */}

          <div
            className={`
              overflow-hidden
              transition-all
              duration-300
              ease-out
              ${
                isOpen
                  ? "w-52 translate-x-0 opacity-100"
                  : "w-0 translate-x-4 opacity-0"
              }
            `}
          >

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search watches..."
              className="
                w-52
                rounded-lg
                bg-[#F5F1E8]
                px-4
                py-2
                text-black
                outline-none
                placeholder:text-gray-500
              "
            />

          </div>


          {/* Cart */}

          <Link
            to="/cart"
            className="
              flex h-11 w-11
              items-center justify-center
              rounded-full
              border border-[#D4AF62]/35
              text-[#D4AF62]
              transition-all
              duration-300
              hover:bg-[#D4AF62]
              hover:text-[#0B2B24]
            "
          >
            🛒
          </Link>

        </div>

      </nav>


      {/* ================= PAGE CONTENT ================= */}

      <main>
        {children}
      </main>


      {/* ================= FOOTER ================= */}

      <footer
        className="
          border-t
          border-[#D4AF62]/25
          px-16
          py-14
        "
      >

        <div
          className="
            flex
            flex-col
            gap-12
            md:flex-row
            md:justify-between
          "
        >

          {/* ================= BRAND ================= */}

          <div className="max-w-sm">

            <h2
              className="
                text-4xl
                font-bold
                tracking-[5px]
                text-[#D4AF62]
              "
            >
              SOHNA
            </h2>

            <p
              className="
                mt-4
                text-sm
                leading-6
                text-[#F5F1E8]/60
              "
            >
              Timeless design. Elegant details.
              Discover the world of SOHNA watches.
            </p>


            {/* Social Media */}

            <div className="mt-6 flex gap-3">

              {/* Instagram */}

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border
                  border-[#D4AF62]/30
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


              {/* Telegram */}

              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border
                  border-[#D4AF62]/30
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

            <h3
              className="
                text-lg
                font-semibold
                text-[#D4AF62]
              "
            >
              Contact
            </h3>


            {/* Store */}

            <a
              href="https://maps.google.com/"
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                gap-3
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

              <span>
                Our Store
              </span>

            </a>


            {/* Phone */}

            <a
              href="tel:+989123456789"
              className="
                text-sm
                text-[#F5F1E8]/65
                transition
                hover:text-[#D4AF62]
              "
            >
              +98 912 345 6789
            </a>


            {/* Email */}

            <a
              href="mailto:info@sohna.com"
              className="
                text-sm
                text-[#F5F1E8]/65
                transition
                hover:text-[#D4AF62]
              "
            >
              info@sohna.com
            </a>

          </div>


          {/* ================= ABOUT ================= */}

          <div className="max-w-xs">

            <h3
              className="
                text-lg
                font-semibold
                text-[#D4AF62]
              "
            >
              About Us
            </h3>

            <p
              className="
                mt-4
                text-sm
                leading-6
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
            mt-12
            border-t
            border-[#D4AF62]/15
            pt-6
            text-center
          "
        >

          <p
            className="
              text-xs
              tracking-wider
              text-[#F5F1E8]/40
            "
          >
            © 2026 SOHNA. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}
