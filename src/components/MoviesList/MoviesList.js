import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { StarsRating } from '../StarsRating/StarsRating';
import { movieActions } from '../../redux';
import { photosImages } from '../../configs';
import css from './movie.module.css';

const MoviesList = ({ movie }) => {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(movieActions.getMovie(id))
  }, [dispatch, id]);

  return (
    <div className={css.app}>
      <Link to={'/movie/' + movie.id} state={{ ...movie }}>
        <img src={`${photosImages}${movie?.poster_path}`} alt={`${movie.title}`}/>
      </Link>

      <h2 className={css.title}>{movie?.title}</h2>
      <p>{movie?.overview} </p>
      <div className={css.rating}>
        <StarsRating rating={movie?.vote_average}/>
      </div>
    </div>
  );
};

export { MoviesList };
