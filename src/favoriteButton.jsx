import { useState } from "react";
export function FavoriteButon() {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <button onClick={() => setIsFavorite(!isFavorite)} type="button">
      {isFavorite ? "❤️" : "🤍"}
    </button>
  );
}
