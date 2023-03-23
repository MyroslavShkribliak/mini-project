import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { movieActions } from '../../redux';

const GenreBadge = () => {

  const { genres } = useSelector(state => state.movieReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieActions.getGenrebadge())
  }, [dispatch])

  const ByID = (id) => {
    if (id) {
      dispatch(movieActions.selectGenre(id))
    } else dispatch(movieActions.deleteGenre(id))
  }

  return (
      <>
        {
          genres?.genres?.map(genre => <div key={genre.id}>
            <label className={'checkbox-el'}>
              <input
                type="checkbox"
                value={genre.name}
                name={genre.name}
                onClick={() => ByID(genre.id)}
              />
              {genre.name}
            </label>
          </div>)
        }
        <button onClick={() => dispatch(movieActions.show(false))}>Згорнути</button>
      </>
  )
}
export { GenreBadge };
