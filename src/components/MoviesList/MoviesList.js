import React from 'react';
import {useSelector} from "react-redux";


import {photosImages} from "../../configs";
import {Link} from "react-router-dom";
import {StarsRating} from "../StarsRating/StarsRating";

const MoviesList = ({movie}) => {

    const {genres} = useSelector(state => state.movieReducer);

    const findGenre = (id) => {
        const genre = genres?.genres?.find(value => value.id === id)
        return genre?.name;
    }

    return (
        <Link to={`/movie`}>
            <div>

                {
                    movie?.poster_path ? <img src={photosImages + movie.poster_path} alt={movie.title}/> :
                        <img
                            className={'no-photo'}
                            src="https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc="
                            alt="No picture"
                        />
                }
                <h2>{movie?.title}</h2>
                <p>{movie?.release_date}</p>
                <h3 className={"genre_container"}>
                    {
                        movie?.genre_ids.map(value => <div key={value}> {findGenre(value)}</div>)
                    }
                </h3>
                <StarsRating rating={movie?.vote_average}/>
            </div>
        </Link>
    );
};

export {MoviesList};