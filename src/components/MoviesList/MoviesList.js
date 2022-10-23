import {photosImages} from "../../configs";
import {StarsRating} from "../StarsRating/StarsRating";


const MoviesList = ({movie}) => {

    // const {genres} = useSelector(state => state.movieReducer);
    //
    // const Genre = (id) => {
    //     const genre = genres?.genres?.find(value => value.id === id)
    //     return genre?.name;
    // }
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(movieActions.getAllMovie)
    // }, [])

    return (

            <div>

                {
                    movie.poster_path ? <img src={photosImages + movie.poster_path} alt={movie.title}/> :
                        <img
                            className={'no-photo'}
                            src="https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc="
                            alt="No picture"
                        />
                }
                <h2>{movie.title}</h2>
                <p>{movie.release_date}</p>
                <h3>
                    {/*{*/}
                    {/*    movie.genre_ids?.map(value => <div key={value}> {Genre(value)}</div>)*/}
                    {/*}*/}
                </h3>
                <StarsRating rating={movie.vote_average}/>
                {/*{*/}
                {/*    genres.results?.map((value, index) => <PosterPreview key={index} value={value}/>)*/}
                {/*}*/}
            </div>
    );
};

export {MoviesList};