import { MovieCard } from "./MovieCard";

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-5">
      <header className="mb-10 flex items-center"></header>
      <MovieCard image={"/narcos.jpg"} rating={8.8}  />
    </div>
  );
}

export default App;
