import Header from "../components/Header";
import Banner from "../components/Banner";
import MovieRow from "../components/MovieRow";
import { movies } from "../data/movies";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Header />
      <Banner />
      <div className="mt-[-4rem] space-y-10 pb-10">
        <MovieRow title="Trending Now" items={movies} />
        <MovieRow title="Top Picks for You" items={movies} />
        <MovieRow title="New Releases" items={movies} />
      </div>
    </main>
  );
}
