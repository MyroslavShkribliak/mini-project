import { useLocation } from 'react-router-dom';

import { photosImages } from '../../configs';
import { StarsRating } from '../StarsRating/StarsRating'

const MovieInfo = () => {
  const location = useLocation();

  const { state: movie } = location;

  return (
    <div>
      <div>
        <img src={`${photosImages}${movie?.poster_path}`} alt={`${movie.title}`}/>
      </div>
      <div>
        <h2>{movie?.original_title}</h2>
        <div>Released:{movie?.release_date}</div>
        <StarsRating rating={movie?.vote_average}/>
        <div>Overview:{movie?.overview}</div>
      </div>
    </div>
  );
}

export { MovieInfo };
