import { MoviesListCard } from '../components';
import { Outlet } from 'react-router-dom';

const MoviesPage = () => {
  return (
    <>
      <MoviesListCard/>
      <Outlet/>
    </>
  );
};

export { MoviesPage };
