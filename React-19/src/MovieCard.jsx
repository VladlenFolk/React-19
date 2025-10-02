

export function MovieCard({ image, rating }) {
  return (
    <div>
      <div>INDb rating: {rating}</div>
      <img src={image} alt="" width={200} height={250}/>
    </div>
  );
}
