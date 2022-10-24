import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {StarsRating} from "../StarsRating/StarsRating";
import {movieActions} from "../../redux";
import {photosImages} from "../../configs";
import css from './movie.module.css';
import {Link} from "react-router-dom";
import {MovieInfo} from "../MovieInfo/MovieInfo";

const MoviesList = ({movie}) => {
    const {next} = useSelector(state => state.movieReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(movieActions.getAllMovie)
    }, [])

    return (

        <div className={css.app}>
            <Link to={`/movie/${movie.id}`}>
                <img src={`${photosImages}${movie.poster_path}`} alt={`${movie.title}`}/>
            </Link>

            <h2 className={css.title}>{movie?.title}</h2>
            <p>{movie?.overview} </p>
            <div className={css.rating}>
                <StarsRating rating={movie?.vote_average}/>
            </div>
            <div>
                {
                    next?.results?.map((next, index) => <MovieInfo key={index} next={next}/>)
                }
            </div>
        </div>
    );
};

export {MoviesList};