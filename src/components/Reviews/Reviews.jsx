import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from 'services/api';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    API.getFilmReviews(movieId).then(press => {
      setReviews([...press.results]);
    });
  }, [movieId]);

  //   console.log(reviews);

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h4>Author: {author}</h4>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </ul>
  );
}

export default Reviews;
