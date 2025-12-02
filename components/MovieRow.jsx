import dynamic from "next/dynamic";
import MovieCard from "./MovieCard";
import "swiper/css";

const Swiper = dynamic(
  () => import("swiper/react").then((mod) => mod.Swiper),
  { ssr: false }
);
const SwiperSlide = dynamic(
  () => import("swiper/react").then((mod) => mod.SwiperSlide),
  { ssr: false }
);

export default function MovieRow({ title, items }) {
  return (
    <section className="mt-4 px-6 md:px-12">
      <h3 className="text-lg md:text-2xl font-semibold mb-3">{title}</h3>
      <Swiper
        slidesPerView={3}
        spaceBetween={8}
        breakpoints={{
          640: { slidesPerView: 4, spaceBetween: 10 },
          768: { slidesPerView: 5, spaceBetween: 12 },
          1024: { slidesPerView: 6, spaceBetween: 14 },
        }}
      >
        {items.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}