import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";

const st =
  "absolute inset-0 rounded-4xl bg-gradient-to-t from-[#061A15]/80 via-[#0B2B24]/30 to-[#D4AF62]/10";
export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="flex min-h-[calc(100vh-82px)] items-center justify-center">
        <h1 className="text-5xl font-bold text-[#D4AF62]">
          Welcome to SOHNA
        </h1>
      </div>

      {/* Hero Swiper */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1000}
          className="w-full"
        >
          {["w-1.jpg", "w-2.jpg", "w-3.jpg", "w-5.jpg"].map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[300px] overflow-hidden rounded-2xl sm:h-[400px] lg:h-[500px]">
                <img
                  src={new URL(`./assets/${image}`, import.meta.url).href}
                  className="h-full w-full object-cover"
                  alt={`SOHNA Watch ${index + 1}`}
                />

                <div className="absolute inset-0 bg-black/40" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Collections */}
      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 mt-20">

        {/* Collection 1 */}
        <div className="group w-64 overflow-hidden relative">
          <Link to="/watches">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            speed={800}
            className="h-[350px] w-full sm:h-[380px]"
            >
          <div className={st}></div>
            {[
              "squer1.avif",
              "squer2.avif",
              "squer3.avif",
              "squer4.avif",
              "squer5.avif",
              "squer6.avif",
            ].map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={new URL(
                    `./assets/swatch/${image}`,
                    import.meta.url
                  ).href}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-120 rounded-4xl"
                  alt="Classic Collection"
                  />
              </SwiperSlide>
            ))}
          </Swiper>

          <h2 className="mt-8 text-center text-lg tracking-wider text-[#D4AF62] ">
            Swatch Collection
          </h2>
          </Link>
        </div>

        {/* Collection 2 */}
        <div className="group w-64 overflow-hidden rounded-2xl">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2700,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            speed={800}
            className="h-[350px] w-full sm:h-[380px]"
          >
            <div className={st}></div>
            {["squer4.avif", "squer5.avif"].map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={new URL(
                    `./assets/swatch/${image}`,
                    import.meta.url
                  ).href}
                  className="h-full w-full object-cover"
                  alt="Royal Collection"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <h2 className="mt-4 text-center text-lg tracking-wider text-[#D4AF62]">
            Royal Collection
          </h2>
        </div>

        {/* Collection 3 */}
        <div className="group w-64 overflow-hidden rounded-2xl">
          <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2900 }}
            modules={[Autoplay]}
            className="h-[350px] w-full sm:h-[380px]"
          >
            <SwiperSlide>
              <img
                src={new URL(
                  "./assets/swatch/squer6.avif",
                  import.meta.url
                ).href}
                className="h-full w-full object-cover"
                alt="Luxury Collection"
              />
              <div className={st}></div>
            </SwiperSlide>
          </Swiper>

          <h2 className="mt-4 text-center text-lg tracking-wider text-[#D4AF62]">
            Luxury Collection
          </h2>
        </div>

        {/* Collection 4 */}
        <div className="group w-64   overflow-hidden rounded-2xl">
          <Swiper className="h-[350px] w-full sm:h-[380px]">
            <SwiperSlide>
              <img
                src={new URL(
                  "./assets/swatch/squer7.avif",
                  import.meta.url
                ).href}
                className="h-full w-full object-cover"
                alt="Heritage Collection"
              />
              <div className={st}></div>
            </SwiperSlide>
          </Swiper>

          <h2 className="mt-4 text-center text-lg tracking-wider text-[#D4AF62]">
            Heritage Collection
          </h2>
        </div>

        {/* Collection 5 */}
        <div className="group w-64 overflow-hidden rounded-2xl">
          <Swiper className="h-[350px] w-full sm:h-[380px]">
            <SwiperSlide>
              <img
                src={new URL(
                  "./assets/swatch/squer8.avif",
                  import.meta.url
                ).href}
                className="h-full w-full object-cover"
                alt="Elegance Collection"
              />
              <div className={st}></div>
            </SwiperSlide>
          </Swiper>

          <h2 className="mt-4 text-center text-lg tracking-wider text-[#D4AF62]">
            Elegance Collection
          </h2>
        </div>

        {/* Collection 6 */}
        <div className="group w-64   overflow-hidden rounded-2xl">
          <Swiper className="h-[350px] w-full sm:h-[380px]">
            <SwiperSlide>
              <img
                src={new URL(
                  "./assets/swatch/squer9.avif",
                  import.meta.url
                ).href}
                className="h-full w-full object-cover"
                alt="Modern Collection"
              />
              <div className={st}></div>
            </SwiperSlide>
          </Swiper>

          <h2 className="mt-4 text-center text-lg tracking-wider text-[#D4AF62]">
            Modern Collection
          </h2>
        </div>

        {/* Collection 7 */}
        <div className="group w-64   overflow-hidden rounded-2xl">
          <Swiper className="h-[350px] w-full sm:h-[380px]">
            <SwiperSlide>
              <img
                src={new URL(
                  "./assets/swatch/squer10.avif",
                  import.meta.url
                ).href}
                className="h-full w-full object-cover"
                alt="Signature Collection"
              />
              <div className={st}></div>  
            </SwiperSlide>
          </Swiper>

          <h2 className="mt-4 text-center text-lg tracking-wider text-[#D4AF62]">
            Signature Collection
          </h2>
        </div>

        {/* Collection 8 */}
        <div className="group w-64   overflow-hidden rounded-2xl">
          <Swiper className="h-[350px] w-full sm:h-[380px]">
            <SwiperSlide>
              <img
                src={new URL(
                  "./assets/swatch/squer11.avif",
                  import.meta.url
                ).href}
                className="h-full w-full object-cover"
                alt="Prestige Collection"
              />
              <div className={st}></div>
            </SwiperSlide>
          </Swiper>

          <h2 className="mt-4 text-center text-lg tracking-wider text-[#D4AF62]">
            Prestige Collection
          </h2>
        </div>

        {/* Collection 9 */}
        <div className="group w-64   overflow-hidden rounded-2xl">
          <Swiper className="h-[350px] w-full sm:h-[380px]">
            <SwiperSlide>
              <img
                src={new URL(
                  "./assets/swatch/squer12.avif",
                  import.meta.url
                ).href}
                className="h-full w-full object-cover"
                alt="Exclusive Collection"
              />
              <div className={st}></div>
            </SwiperSlide>
          </Swiper>

          <h2 className="mt-4 text-center text-lg tracking-wider text-[#D4AF62]">
            Exclusive Collection
          </h2>
        </div>

      </section>
    </>
  );
}