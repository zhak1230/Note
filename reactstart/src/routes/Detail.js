import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovies] = useState([]);
  const { id } = useParams();
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovies(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movie.background_image} alt='background_image' />
          <div>
            <img src={movie.medium_cover_image} alt='medium_cover_image' />
            <div>
              <h1>{movie.title}</h1>
              <div>
                <h3>{`rating: ${movie.rating}`}</h3>
                <h3>{`like: ${movie.like_count}`}</h3>
              </div>
            </div>
          </div>
          <p>{movie.description_intro}</p>
          <ul>
            {movie.genres.map((genres, index) => {
              return <li key={index}>{genres}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Detail;
