import {useDispatch, useSelector} from "react-redux";

import {SearchMovie} from "../SearchMovie/SearchMovie";
import {movieActions} from "../../redux";

const Header = () => {

    const {show} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <SearchMovie/>
                <button onClick={() => dispatch(movieActions.show(!show))}>Жанр Фільму</button>
            </div>

        </div>
    );
}

export {Header};