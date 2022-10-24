import {useDispatch} from "react-redux";
import {useEffect} from "react";


import {StarsRating} from "../StarsRating/StarsRating";
import {movieActions} from "../../redux";
import {photosImages} from "../../configs";
import css from './movie.module.css'
// import {Link} from "react-router-dom";

const MoviesList = ({movie}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(movieActions.getAllMovie)
    }, [])

    return (

        <div className={css.app}>

                <img src={`${photosImages}${movie.poster_path}`} alt={`${movie.title}`}/>

            <h2 className={css.title}>{movie?.title}</h2>
            <p>{movie?.overview} </p>
            <div className={css.rating}>
                <StarsRating rating={movie?.vote_average}/>
            </div>
        </div>
    );
};

export {MoviesList};