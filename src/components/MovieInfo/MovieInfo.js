import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {photosImages} from "../../configs";


const MovieInfo = ({next}) => {
    const navigate = useNavigate();

    const {movie, genres} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();


    const Genre = (id) => {
        const genre = genres?.genres?.find(value => value.id === id)
        return genre?.name;
    }

    return (
        <div>


                <div className={'movie-wrapper'}>

                    <div>
                        <img src={photosImages + next.poster_path} alt={next.title}/>
                    </div>
                    <div className={'movie-container_content'}>
                        <h2>{next?.original_title}</h2>

                        <div>
                            <span>Genre </span>
                            {
                                next?.genres?.map(genre => <span key={genre.id}> {Genre(genre.id)}</span>)
                            }
                        </div>
                        <div><p>Released:<span>{next?.release_date}</span></p></div>
                        <div><p>Rating: <span>{next?.vote_average}</span></p></div>
                        <div><p>Runtime: <span>{next?.runtime}</span></p></div>
                        <div><p>Overview: <span>{next?.overview}</span></p></div>
                    </div>

                </div>



        </div>
    );
}


export {MovieInfo};