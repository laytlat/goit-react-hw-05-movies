export function MovieCard({ image, title, description, genres, rating }) {
  const genresList = genres?.flatMap(genre => genre.name);
  const userScore = Math.round(rating * 10);
  const imgURL = 'https://image.tmdb.org/t/p/w500';
  return (
    <div>
      <img src={`${imgURL}${image}`} alt={title} />
      <h2>{title}</h2>
      <p>{`User Score: ${userScore}%`}</p>
      <h3>Overview</h3>
      <p>{description}</p>
      <h3>Genres</h3>
      <p>{genresList?.join(', ')}</p>
    </div>
  );
}
