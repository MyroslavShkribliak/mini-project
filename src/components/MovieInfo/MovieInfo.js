import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

import {movieActions} from "../../redux";
import {photosImages} from "../../configs";

const MovieInfo = () => {

    const {id} = useParams();

    const navigate = useNavigate();

    const {movie, genres} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    dispatch(movieActions.show(false))

    useEffect(() => {
        if (id) dispatch(movieActions.getMovie(id))
    }, [dispatch, id])

    const findGenre = (id) => {
        const genre = genres?.genres?.find(value => value.id === id)
        return genre?.name;
    }

    return (
        <div>

            <FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate(-1)}/>

            {movie ?
                <div>

                    <div>
                        <img src={photosImages + movie?.poster_path} alt={movie?.title}/>
                    </div>
                    <div>
                        <h2>{movie?.original_title}</h2>

                        <div>
                            <span>Genre: </span>
                            {
                                movie.genres?.map(genre => <span key={genre.id}> {findGenre(genre.id)}</span>)
                            }
                        </div>
                        <div><p>Released{movie?.release_date}</p></div>
                        <div><p>Rating:{movie?.vote_average}</p></div>
                        <div><p>Runtime:{movie?.runtime}</p></div>
                        <div><p>Overview:{movie?.overview}</p></div>
                    </div>

                </div>
                :
                <h2>No info</h2>
            }


        </div>
    );
}


export {MovieInfo};