import { useDispatch, useSelector } from 'react-redux';

import { movieActions } from '../../redux';

const Pagination = () => {

  const { page } = useSelector(state => state.movieReducer);

  const dispatch = useDispatch();


  return (
    <div>
      <button onClick={() => dispatch(movieActions.prevPage(1))}> - </button>
      <span> {page} </span>
      <button onClick={() => dispatch(movieActions.nextPage(1))}> + </button>
    </div>
  );
};

export { Pagination };
