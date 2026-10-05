
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";

const collections = [
  {
    name: "Swatch",
    route: "/watches/swatch",
    folder: "./assets/swatch",
    images: [
      "squer1.avif",
      "squer2.avif",
      "squer3.avif",
      "squer4.avif",
      "squer5.avif",
      "squer6.avif",
    ],
    delay: 2500,
  },
  {
    name: "Swatch",
    route: "/watches/swatch",
    folder: "./assets/swatch",
    images: [
      "squer1.avif",
      "squer2.avif",
      "squer3.avif",
      "squer4.avif",
      "squer5.avif",
      "squer6.avif",
    ],
    delay: 2700,
  },
  {
    name: "Swatch",
    route: "/watches/swatch",
    folder: "./assets/swatch",
    images: [
      "squer1.avif",
      "squer2.avif",
      "squer3.avif",
      "squer4.avif",
      "squer5.avif",
      "squer6.avif",
    ],
    delay: 2900,
  },

  {
    name: "Swatch",
    route: "/watches/swatch",
    folder: "./assets/swatch",
    images: [
      "squer1.avif",
      "squer2.avif",
      "squer3.avif",
      "squer4.avif",
      "squer5.avif",
      "squer6.avif",
    ],
    delay: 3100,
  },  {
    name: "Swatch",
    route: "/watches/swatch",
    folder: "./assets/swatch",
    images: [
      "squer1.avif",
      "squer2.avif",
      "squer3.avif",
      "squer4.avif",
      "squer5.avif",
      "squer6.avif",
    ],
    delay: 3300,
  },
  {
    name: "Swatch",
    route: "/watches/swatch",
    folder: "./assets/swatch",
    images: [
      "squer1.avif",
      "squer2.avif",
      "squer3.avif",
      "squer4.avif",
      "squer5.avif",
      "squer6.avif",
    ],
    delay: 3500,
  },
];

const overlay =
  "absolute inset-0 z-10 pointer-events-none rounded-3xl bg-gradient-to-t from-[#061A15]/90 via-[#0B2B24]/20 to-[#D4AF62]/10";

const card =
  "group relative w-full overflow-hidden rounded-3xl border border-[#D4AF62]/10 bg-[#0B2B24] shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-2 hover:border-[#D4AF62]/40 hover:shadow-2xl";

const imageStyle =
  "h-full w-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#061A15] text-[#F5F1E8]">

      {/* ==================== Hero ==================== */}
      <section className="flex min-h-[calc(100vh-82px)] items-center justify-center px-4">
        <div className="text-center">

          <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-[#D4AF62] sm:text-sm">
            Luxury Watches
          </p>

          <h1 className="text-4xl font-bold tracking-wider text-[#D4AF62] sm:text-5xl lg:text-6xl">
            Welcome to SOHNA
          </h1>

          <div className="mx-auto mt-6 h-px w-24 bg-[#D4AF62]/60" />

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#F5F1E8]/60 sm:text-base">
            Discover timeless designs crafted for those who appreciate
            elegance and precision.
          </p>

        </div>
      </section>

      {/* ==================== Hero Slider ==================== */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop
          speed={1200}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="w-full"
        >
          {["w-1.jpg", "w-2.jpg", "w-3.jpg", "w-5.jpg"].map(
            (image, index) => (
              <SwiperSlide key={index}>

                <div className="group relative h-[260px] overflow-hidden rounded-3xl sm:h-[400px] lg:h-[550px]">

                  <img
                    src={
                      new URL(
                        `./assets/${image}`,
                        import.meta.url
                      ).href
                    }
                    className="h-full w-full object-cover transition-transform duration-[2000ms] ease-in-out group-hover:scale-105"
                    alt={`SOHNA Watch ${index + 1}`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061A15]/80 via-transparent to-black/20" />

                  <div className="absolute bottom-8 left-6 z-10 sm:bottom-12 sm:left-10">

                    <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#D4AF62]">
                      SOHNA
                    </p>

                    <h2 className="text-2xl font-semibold text-white sm:text-4xl">
                      Timeless Elegance
                    </h2>

                  </div>

                </div>

              </SwiperSlide>
            )
          )}
        </Swiper>

      </section>

      {/* ==================== Collections ==================== */}
      <section className="mx-auto mt-20 w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-10 text-center">

          <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF62]">
            Explore
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-wide text-[#F5F1E8] sm:text-4xl">
            Our Collections
          </h2>

          <div className="mx-auto mt-4 h-px w-20 bg-[#D4AF62]/50" />

        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {collections.map((collection) => (
            <Link
              key={collection.name}
              to={collection.route}
              className={card}
            >

              {/* Collection Image Slider */}
              <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop
                speed={1000}
                autoplay={{
                  delay: collection.delay,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                className="h-[360px] w-full sm:h-[400px] lg:h-[430px]"
              >
                {collection.images.map((image, index) => (
                  <SwiperSlide key={index}>

                    <div className="relative h-full w-full">

                      <img
                        src={
                          new URL(
                            `${collection.folder}/${image}`,
                            import.meta.url
                          ).href
                        }
                        className={imageStyle}
                        alt={`${collection.name} Collection ${index + 1}`}
                      />

                      <div className={overlay} />

                    </div>

                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Collection Info */}
              <div className="relative z-20 flex items-center justify-between px-5 py-5">

                <div>

                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF62]/60">
                    Collection
                  </p>

                  <h3 className="mt-1 text-lg font-medium tracking-wider text-[#D4AF62]">
                    {collection.name}
                  </h3>

                </div>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D4AF62]/30 text-lg text-[#D4AF62] transition-all duration-300 group-hover:border-[#D4AF62] group-hover:bg-[#D4AF62] group-hover:text-[#061A15]">
                  →
                </span>

              </div>

            </Link>
          ))}

        </div>

      </section>
{/* ================= BRAND VIDEO ================= */}

<section className="mx-auto w-full max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">

  <div className="relative overflow-hidden rounded-3xl border border-[#D4AF62]/15 bg-[#0B2B24] shadow-2xl">

    {/* Video */}

    <video
      src={new URL("./assets/video.mp4", import.meta.url).href}
      autoPlay
      muted
      loop
      playsInline
      className="
        h-[320px]
        w-full
        object-cover
        sm:h-[450px]
        lg:h-[600px]
      "
    />

    {/* Dark Overlay */}

    <div
      className="
        absolute
        inset-0
        bg-gradient-to-t
        from-[#061A15]
        via-[#061A15]/45
        to-[#061A15]/10
      "
    />

    {/* Gold Glow */}

    <div
      className="
        absolute
        inset-0
        bg-gradient-to-r
        from-[#061A15]/40
        via-transparent
        to-[#D4AF62]/5
      "
    />

    {/* Content */}

    <div
      className="
        absolute
        inset-0
        z-10
        flex
        flex-col
        items-center
        justify-end
        px-6
        pb-10
        text-center
        sm:pb-14
        lg:pb-16
      "
    >

      <p
        className="
          text-[10px]
          uppercase
          tracking-[0.45em]
          text-[#D4AF62]
          sm:text-xs
        "
      >
        The SOHNA Experience
      </p>

      <h2
        className="
          mt-3
          text-3xl
          font-semibold
          tracking-wide
          text-[#F5F1E8]
          sm:text-4xl
          lg:text-5xl
        "
      >
        Time, Reimagined.
      </h2>

      <div className="mt-5 h-px w-16 bg-[#D4AF62]/70" />

      <p
        className="
          mt-5
          max-w-xl
          text-xs
          leading-6
          text-[#F5F1E8]/60
          sm:text-sm
          sm:leading-7
        "
      >
        Discover the beauty of precision, craftsmanship and timeless
        elegance with SOHNA.
      </p>

    </div>

  </div>

</section>

    </main>
  );
}
