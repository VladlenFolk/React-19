import { useState } from "react";
import { MovieCard } from "./MovieCard";
import { MOVIES } from "./movies.data";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const movies = MOVIES.filter((movie) =>
    movie.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-5">
      <header className="mb-10 flex items-center justify-between">
        <img src="/netflix.png" alt="Netflix" className="h-8 w-auto" />

        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="border border-white/15 px-2 py-1 rounded outline-0"
        />
      </header>
      <main className="flex gap-6">
        {movies.length ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.name}
              image={movie.image}
              rating={movie.rating}
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
