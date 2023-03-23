import { useLocation } from 'react-router-dom';

import { StarsRating } from '../StarsRating/StarsRating';
import { photosImages } from '../../configs';

const MovieInfo = () => {
  const location = useLocation();

  const { state: movies } = location;

  return (
    <div>
      <div>
        <img src={`${photosImages}${movies?.poster_path}`} alt={`${movies.title}`}/>
        <h2>{movies?.original_title}</h2>
        <div>Released:{movies?.release_date}</div>
        <StarsRating rating={movies?.vote_average}/>
        <div>Overview:{movies?.overview}</div>
      </div>
    </div>
  );
}

export { MovieInfo };
