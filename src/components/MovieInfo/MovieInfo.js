import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {photosImages} from "../../configs";
import {movieActions} from "../../redux";

const MovieInfo = () => {

    const {id} = useParams();

    const navigate = useNavigate();

    const {movie, genres} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    dispatch(movieActions.show(false))

    useEffect(() => {
        if (id) dispatch(movieActions.getMovie(id))
    }, [id])

    const Genre = (id) => {
        const genre = genres?.genres?.find(value => value.id === id)
        return genre?.name;
    }

    return (
        <div>

            {movie ?
                <div className={'movie-wrapper'}>

                    <div>
                        <img src={photosImages + movie.poster_path} alt={movie.title}/>
                    </div>
                    <div className={'movie-container_content'}>
                        <h2>{movie?.original_title}</h2>

                        <div>
                            <span>Genre </span>
                            {
                                movie?.genres?.map(genre => <span key={genre.id}> {Genre(genre.id)}</span>)
                            }
                        </div>
                        <div><p>Released:<span>{movie?.release_date}</span></p></div>
                        <div><p>Rating: <span>{movie?.vote_average}</span></p></div>
                        <div><p>Runtime: <span>{movie?.runtime}</span></p></div>
                        <div><p>Overview: <span>{movie?.overview}</span></p></div>
                    </div>

                </div>
                :
                <h2 className={"no_info"}>No info</h2>
            }



        </div>
    );
}


export {MovieInfo};