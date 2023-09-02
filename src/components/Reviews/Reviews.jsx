import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchChosenReviews } from 'Api/tmdb';

function Reviews() {
  const [reviews, setReviews] = useState();
  const params = useParams();

  useEffect(() => {
    try {
      async function chosenMovieReviews() {
        const results = await fetchChosenReviews(params.movieId);
        setReviews(results.results);
      }
      chosenMovieReviews();
    } catch (error) {
      console.log(error);
    }
  }, [params]);

  return (
    <div>
      <ul>
        {reviews && reviews.length > 0 ? (
          reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <li>'No reviews for this film'</li>
        )}
      </ul>
    </div>
  );
}

export default Reviews;
