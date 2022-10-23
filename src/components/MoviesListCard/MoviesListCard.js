import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {BarLoader} from "react-spinners";

import {movieActions} from "../../redux";
import {Pagination} from "../Pagination/Pagination";
import {MoviesList} from "../MoviesList/MoviesList";

const MoviesListCard = () => {

    const {movies, loading, page,currentGenres} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        if (currentGenres) {
            dispatch(movieActions.searchByGenre({currentGenres}))
        } else {
            dispatch(movieActions.getAllMovie(page))
        }
    },[dispatch,currentGenres,page]);

    return (
        <div>
            <Pagination/>
            <div>
                {
                    loading
                        ?
                        <div className={'loading'}><BarLoader color="#8A2BE2" cssOverride={{}} height={15} width={400}/>
                        </div>
                        :
                        movies.map(movie => <MoviesList key={movie.id} movie={movie}/>)
                }
            </div>
        </div>
    );
};

export {MoviesListCard};