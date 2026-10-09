
import { useState } from "react";

const instagramIcon = "/watches/logos/instag.svg";
const telegramIcon = "/watches/logos/teleg.svg";
const locationIcon = "/watches/logos/location1.svg";
const phoneIcon = "/watches/logos/phone.svg";
const emailIcon = "/watches/logos/email2.svg";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(form);

    alert("Your message has been sent successfully.");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-[#061A15] text-[#F5F1E8]">

      {/* ================= HERO ================= */}

      <section className="px-5 pb-16 pt-20 text-center sm:px-8 sm:pt-28">
        <p className="text-xs uppercase tracking-[0.4em] text-[#D4AF62]">
          Get In Touch
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-wide text-[#F5F1E8] sm:text-5xl lg:text-6xl">
          Contact SOHNA
        </h1>

        <div className="mx-auto mt-6 h-px w-24 bg-[#D4AF62]/60" />

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#F5F1E8]/55 sm:text-base">
          Have a question about one of our timepieces, your order, or
          anything else? We would love to hear from you.
        </p>
      </section>


      {/* ================= CONTACT CONTENT ================= */}

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10">

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          {/* ================= LEFT SIDE ================= */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              border border-[#D4AF62]/15
              bg-[#0B2B24]
              p-7
              sm:p-10
            "
          >

            {/* Decorative circle */}

            <div
              className="
                absolute
                -right-20
                -top-20
                h-56
                w-56
                rounded-full
                border border-[#D4AF62]/10
              "
            />

            <div
              className="
                absolute
                -right-10
                -top-10
                h-36
                w-36
                rounded-full
                border border-[#D4AF62]/10
              "
            />

            <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF62]">
              Contact Information
            </p>

            <h2 className="mt-4 max-w-sm text-3xl font-semibold leading-tight">
              Let's talk about your next timepiece.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#F5F1E8]/50">
              Whether you are looking for a specific watch, need help with
              your order, or simply want to learn more about SOHNA, our team
              is here to help.
            </p>


            {/* Information */}

            <div className="mt-10 space-y-7">

              {/* Location */}

              <a
                href="https://maps.google.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4"
              >
                <div
                  className="
                    flex h-12 w-12 shrink-0
                    items-center justify-center
                    rounded-full
                    border border-[#D4AF62]/20
                    bg-[#061A15]
                    transition
                    duration-300
                    group-hover:border-[#D4AF62]
                    group-hover:bg-[#D4AF62]
                  "
                >
                  <img
                    src={locationIcon}
                    alt="Location"
                    className="h-5 w-5 object-contain"
                  />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-[#D4AF62]/70">
                    Visit Us
                  </p>

                  <p className="mt-1 text-sm text-[#F5F1E8]/70">
                    SOHNA Watch Store
                  </p>
                </div>
              </a>


              {/* Phone */}

              <a
                href="tel:+989123456789"
                className="group flex items-center gap-4"
              >
                <div
                  className="
                    flex h-12 w-12 shrink-0
                    items-center justify-center
                    rounded-full
                    border border-[#D4AF62]/20
                    bg-[#061A15]
                    transition
                    duration-300
                    group-hover:border-[#D4AF62]
                    group-hover:bg-[#D4AF62]
                  "
                >
                  <img
                    src={phoneIcon}
                    alt="Phone"
                    className="h-5 w-5 object-contain"
                  />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-[#D4AF62]/70">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-[#F5F1E8]/70">
                    +98 912 345 6789
                  </p>
                </div>
              </a>


              {/* Email */}

              <a
                href="mailto:info@sohna.com"
                className="group flex items-center gap-4"
              >
                <div
                  className="
                    flex h-12 w-12 shrink-0
                    items-center justify-center
                    rounded-full
                    border border-[#D4AF62]/20
                    bg-[#061A15]
                    transition
                    duration-300
                    group-hover:border-[#D4AF62]
                    group-hover:bg-[#D4AF62]
                  "
                >
                  <img
                    src={emailIcon}
                    alt="Email"
                    className="h-5 w-5 object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-[#D4AF62]/70">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm text-[#F5F1E8]/70">
                    info@sohna.com
                  </p>
                </div>
              </a>

            </div>


            {/* Social */}

            <div className="mt-12 border-t border-[#D4AF62]/10 pt-7">

              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#D4AF62]/70">
                Follow SOHNA
              </p>

              <div className="flex gap-3">

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-full
                    border border-[#D4AF62]/20
                    bg-[#061A15]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#D4AF62]
                    hover:bg-[#D4AF62]
                  "
                >
                  <img
                    src={instagramIcon}
                    alt="Instagram"
                    className="h-5 w-5"
                  />
                </a>

                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-full
                    border border-[#D4AF62]/20
                    bg-[#061A15]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#D4AF62]
                    hover:bg-[#D4AF62]
                  "
                >
                  <img
                    src={telegramIcon}
                    alt="Telegram"
                    className="h-5 w-5"
                  />
                </a>

              </div>
            </div>

          </div>


          {/* ================= RIGHT SIDE / FORM ================= */}

          <div
            className="
              rounded-[2rem]
              border border-[#D4AF62]/15
              bg-[#0B2B24]
              p-7
              sm:p-10
            "
          >

            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF62]">
                Send a Message
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                How can we help?
              </h2>
            </div>


            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Name + Email */}

              <div className="grid gap-6 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs uppercase tracking-wider text-[#F5F1E8]/60"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    required
                    placeholder="John Doe"
                    className="
                      w-full
                      rounded-xl
                      border border-[#D4AF62]/15
                      bg-[#061A15]
                      px-4
                      py-3.5
                      text-sm
                      text-[#F5F1E8]
                      outline-none
                      transition
                      placeholder:text-[#F5F1E8]/25
                      focus:border-[#D4AF62]/60
                      focus:ring-1
                      focus:ring-[#D4AF62]/30
                    "
                  />
                </div>


                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs uppercase tracking-wider text-[#F5F1E8]/60"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="
                      w-full
                      rounded-xl
                      border border-[#D4AF62]/15
                      bg-[#061A15]
                      px-4
                      py-3.5
                      text-sm
                      text-[#F5F1E8]
                      outline-none
                      transition
                      placeholder:text-[#F5F1E8]/25
                      focus:border-[#D4AF62]/60
                      focus:ring-1
                      focus:ring-[#D4AF62]/30
                    "
                  />
                </div>

              </div>


              {/* Subject */}

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs uppercase tracking-wider text-[#F5F1E8]/60"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  type="text"
                  required
                  placeholder="How can we help you?"
                  className="
                    w-full
                    rounded-xl
                    border border-[#D4AF62]/15
                    bg-[#061A15]
                    px-4
                    py-3.5
                    text-sm
                    text-[#F5F1E8]
                    outline-none
                    transition
                    placeholder:text-[#F5F1E8]/25
                    focus:border-[#D4AF62]/60
                    focus:ring-1
                    focus:ring-[#D4AF62]/30
                  "
                />
              </div>


              {/* Message */}

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs uppercase tracking-wider text-[#F5F1E8]/60"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={7}
                  placeholder="Write your message..."
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border border-[#D4AF62]/15
                    bg-[#061A15]
                    px-4
                    py-3.5
                    text-sm
                    text-[#F5F1E8]
                    outline-none
                    transition
                    placeholder:text-[#F5F1E8]/25
                    focus:border-[#D4AF62]/60
                    focus:ring-1
                    focus:ring-[#D4AF62]/30
                  "
                />
              </div>


              {/* Submit */}

              <button
                type="submit"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#D4AF62]
                  px-5
                  py-3.5
                  text-sm
                  font-medium
                  text-[#061A15]
                  transition
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#E3C67C]
                "
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>
    </main>
  );
}