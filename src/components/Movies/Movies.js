import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Movies.module.css';

import { BASE_URL_POSTER } from '../../services/themoviedbApi';

function Movies({ movies }) {
  const location = useLocation();
  return (
    <ul className={styles.list}>
      {movies &&
        movies.map(movie => (
          <li key={movie.id} className={styles.item}>
            <Link
              to={{
                pathname: `/movie/${movie.id}`,
                state: { from: location },
              }}
              className={styles.link}
            >
              <img
                className={styles.poster}
                src={`${BASE_URL_POSTER}${movie.poster_path}`}
                alt={movie.original_name || movie.original_title || movie.title}
              />
              <h3 className={styles.title}>
                {movie.original_name || movie.original_title || movie.title}
              </h3>
            </Link>
          </li>
        ))}
    </ul>
  );
}

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      genre_ids: PropTypes.arrayOf(PropTypes.number),
    }),
  ),
};

export default Movies;
