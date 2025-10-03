import { useMemo, useState } from "react";
import MovieCard from "./MovieCard";
import { MOVIES } from "./movies.data";
import { useDebounce } from "./hooks/useDebounce";
import { useTheme } from "./hooks/useTheme";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);
  const { theme, toggleTheme } = useTheme();

  const movies = useMemo(() => {
    MOVIES.filter((movie) =>
      movie.name
        .toLocaleLowerCase()
        .includes(debouncedSearch.toLocaleLowerCase())
    );
  }, [debouncedSearch]);

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black text-black dark:text-white px-6 py-5">
      <header className="mb-10 flex items-center justify-between">
        <img src="/netflix.png" alt="Netflix" className="h-8 w-auto" />
        <div>
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="border border-black/15 dark:border-white/15 px-2 py-1 rounded outline-0"
          />
          <button
            onClick={toggleTheme}
            className="text-sm px-3 py-1 rounded border border-white/20 dark:border-white/10 hover:bg-white hover:text-black dark:hover:bg-white/10 transition w-20"
          >
            {theme === "dark" ? "Light ☀️" : "Dark 🌙"}
          </button>
        </div>
      </header>
      <main className="flex gap-6">
        {movies.length ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.name}
              image={movie.image}
              rating={movie.rating}
              trailerYoutubeId={movie.trailerYoutubeId}
            />
          ))
        ) : (
          <p>Movies not found</p>
        )}
      </main>
    </div>
  );
}

export default App;
