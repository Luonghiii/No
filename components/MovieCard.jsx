export default function MovieCard({ movie }) {
  return (
    <div className="min-w-[140px] md:min-w-[160px] lg:min-w-[180px] cursor-pointer transition-transform duration-200 hover:scale-110">
      <img
        src={movie.thumbnail}
        alt={movie.title}
        className="rounded-md shadow-lg object-cover w-full h-full"
      />
    </div>
  );
}