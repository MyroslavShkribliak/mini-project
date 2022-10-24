import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

import {photosImages} from "../../configs";


const MovieInfo = ({next}) => {
    const navigate = useNavigate();

    const {genres} = useSelector(state => state.movieReducer);

    const Genre = (id) => {
        const genre = genres?.genres?.findIndex(value => value.id === id)
        return genre?.name;
    }

    return (
        <div>
                <div>
                    <div>
                        <img src={`${photosImages}${next.poster_path}`} alt={`${next.title}`}/>
                    </div>
                    <div>
                        <h2>{next?.original_title}</h2>

                        <div>
                            <span>Genre </span>
                            {
                                next?.genres?.map(genre => <span key={genre.id}> {Genre(genre.id)}</span>)
                            }
                        </div>
                        <div>Released:{next?.release_date}</div>
                        <div>Rating:{next?.vote_average}</div>
                        <div>Runtime:{next?.runtime}</div>
                        <div>Overview:{next?.overview}</div>
                    </div>

                </div>

        </div>
    );
}


export {MovieInfo};