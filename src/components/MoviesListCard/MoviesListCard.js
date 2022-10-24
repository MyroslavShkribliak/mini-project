import React, {useEffect} from 'react';
import {BarLoader} from "react-spinners";
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";
import {Pagination} from "../Pagination/Pagination";
import {MoviesList} from "../MoviesList/MoviesList";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {Header} from "../Header/Header";

const MoviesListCard = () => {

    const {show,movies, loading, currentGenres, page} = useSelector(state => state.movieReducer);


    const dispatch = useDispatch();

    useEffect(() => {
        if (!currentGenres) {
            dispatch(movieActions.getAllMovie(page))
        } else {
            dispatch(movieActions.searchGenreBadge({currentGenres}))
        }
    }, [dispatch, page, currentGenres]);

    return (
        <div>

            <Header/>
            {
                show ? <GenreBadge/> : null
            }
            <Pagination/>
            <div>
                {
                    loading
                        ?
                        <div><BarLoader color="#8A2BE2" cssOverride={{}} height={15} width={400}/>
                        </div>
                        :
                        movies.results?.map(movie => <MoviesList key={movie.id} movie={movie}/>)
                }

            </div>
        </div>
    );
};

export {MoviesListCard};