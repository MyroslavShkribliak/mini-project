import { useDispatch } from 'react-redux';
import { movieActions } from '../../redux';
import { useEffect, useState } from 'react';

const SearchMovie = () => {
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (query) {
      dispatch(movieActions.searchMovie(query))
    }
  }, [dispatch, query])

  const clear = (e) => {
    e.preventDefault()
    if (query) {
      dispatch(movieActions.searchMovie(query))
    }
    setQuery('');
  }

  return (
    <form>
      <input type="text"
             placeholder={'Пошук...'}
             onChange={(e) => setQuery(e.target.value)}
             value={query}
      />
      <button onClick={clear}>Пошук</button>
    </form>
  );
};

export { SearchMovie };
