import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";


const GenreBadge = () => {

    const ref = useRef(null);

    const {genres} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getGenrebadge)
    }, [])

    const handleSubmit = (id) => {
        if (ref.current.checked) {
            dispatch(movieActions.selectGenre(id))
        }else dispatch(movieActions.deleteGenre(id))
    }

    return (
        <div>
            <div>
                {
                    genres.genres?.map(genre => <div key={genre.id}>
                        <label>
                            <input
                                type="checkbox"
                                value={genre.name}
                                name={genre.name}
                                ref={ref}
                                onClick={() => handleSubmit(genre.id)}
                            />
                            {genre.name}
                        </label>
                    </div>)
                }

            </div>
            <div>
                <button onClick={() => dispatch(movieActions.show(false))}>Ok</button>
            </div>
        </div>
    )
};

export {GenreBadge};