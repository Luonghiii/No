import { movies } from "../data/movies";

export default function Banner() {
  const movie = movies[0];

  return (
    <section
      className="relative h-[60vh] md:h-[75vh] w-full flex items-end"
      style={{
        backgroundImage: `url(${movie.backdrop})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="relative z-10 px-6 md:px-12 pb-24 max-w-xl text-white">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          {movie.title}
        </h2>
        <p className="text-sm md:text-base text-gray-200 max-w-md mb-4">
          A high-octane action thriller packed with intense sequences, gripping
          drama and spectacular visuals.
        </p>
        <div className="space-x-3">
          <button className="px-6 py-2 bg-white text-black font-semibold rounded-md text-sm md:text-base hover:bg-gray-200 transition-colors">
            ▶ Play
          </button>
          <button className="px-6 py-2 bg-gray-500/70 text-white font-semibold rounded-md text-sm md:text-base hover:bg-gray-500 transition-colors">
            ℹ More Info
          </button>
        </div>
      </div>
    </section>
  );
}
