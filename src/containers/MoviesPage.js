import { Outlet } from 'react-router-dom'

import { MoviesListCard } from '../components';

const MoviesPage = () => {
  return (
    <div>
      <Outlet/>
      <MoviesListCard/>
    </div>
  );
};

export { MoviesPage };
