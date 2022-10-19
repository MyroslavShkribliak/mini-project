import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";


import {MoviesList} from "../MoviesList/MoviesList";
import {movieActions} from "../../redux";

const MoviesListCard = () => {

    const {movie} = useSelector(state => state.movieReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll())
    },[]);
    return (
        <div>
            {
                movie.map((movie, index) => <MoviesList key={index} movie={movie}/>)
            }
        </div>
    );
};

export {MoviesListCard};