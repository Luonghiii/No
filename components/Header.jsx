export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent px-6 md:px-12 py-4 flex items-center">
      <h1 className="text-red-600 text-2xl md:text-3xl font-extrabold tracking-widest">
        NETFLIX
      </h1>
      <nav className="ml-8 md:ml-12 space-x-4 md:space-x-6 text-sm md:text-base text-gray-200 hidden md:flex">
        <button className="hover:text-white transition-colors">Home</button>
        <button className="hover:text-white transition-colors">TV Shows</button>
        <button className="hover:text-white transition-colors">Movies</button>
        <button className="hover:text-white transition-colors">New & Popular</button>
        <button className="hover:text-white transition-colors">My List</button>
      </nav>
      <div className="ml-auto flex items-center space-x-4 text-gray-200 text-sm">
        <button className="hidden sm:inline hover:text-white transition-colors">
          Kids
        </button>
        <button className="hover:text-white transition-colors">🔍</button>
        <div className="w-8 h-8 rounded bg-gray-500 flex items-center justify-center text-xs">
          U
        </div>
      </div>
    </header>
  );
}