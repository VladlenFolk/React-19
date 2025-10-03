import { memo, useState } from "react";
function FavoriteButon() {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <button onClick={() => setIsFavorite(!isFavorite)} type="button">
      {isFavorite ? "❤️" : "🤍"}
    </button>
  );
}

export default memo(FavoriteButon)