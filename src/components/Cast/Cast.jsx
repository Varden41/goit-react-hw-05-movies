import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchChosenCast } from 'Api/tmdb';
import defaultImage from 'DefaultPicture/images.jpg';

function Cast() {
  const [cast, setCast] = useState();
  const params = useParams();

  useEffect(() => {
    try {
      async function chosenCast() {
        const results = await fetchChosenCast(params.movieId);
        setCast(results.cast);
      }
      chosenCast();
    } catch (error) {
      console.log(error);
    }
  }, [params]);

  return (
    <ul>
      {cast &&
        cast.map(cast => (
          <li key={cast.id}>
            <img
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                  : defaultImage
              }
              alt={cast.original_name}
              width="100"
            />

            <p>{cast.name}</p>
            <p>Character: {cast.character}</p>
          </li>
        ))}
    </ul>
  );
}

export default Cast;

// https://image.tmdb.org/t/p/w500
