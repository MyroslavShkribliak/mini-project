import React, { useEffect } from 'react';
import { BarLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';

import { movieActions } from '../../redux';
import { Pagination } from '../Pagination/Pagination';
import { MoviesList } from '../MoviesList/MoviesList';
import { GenreBadge } from '../GenreBadge/GenreBadge';
import { Header } from '../Header/Header';

const MoviesListCard = () => {

  const { show, movies, loading, currentGenres, page } = useSelector(state => state.movieReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentGenres) {
      dispatch(movieActions.getAllMovie(page))
    } else {
      dispatch(movieActions.searchGenreBadge({ currentGenres }))
    }
  }, [dispatch, page, currentGenres]);

  return (
      <>
        <Header/>
        {
          show ?  <GenreBadge/> : null
        }
        <hr/>
        {
          loading
            ?
              <BarLoader color="#8A2BE2" cssOverride={{}} height={3} width={505}/>
            :
            movies.results?.map(movie => <MoviesList key={movie.id} movie={movie}/>)
        }
        <hr/>
        <Pagination/>
      </>
  );
};

export { MoviesListCard };
