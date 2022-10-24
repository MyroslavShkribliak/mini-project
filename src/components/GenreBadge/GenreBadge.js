import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";


const GenreBadge = () => {

    const {genres} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getGenrebadge())
    }, [])

    const ByID = (id) => {
        if (id) {
            dispatch(movieActions.selectGenre(id))
        }else dispatch(movieActions.deleteGenre(id))
    }

    return (
        <div>
            <div>
                {
                    genres?.genres?.map(genre => <div key={genre.id}>
                        <label className={"checkbox-el"}>
                            <input
                                type="checkbox"
                                value={genre.name}
                                name={genre.name}
                                onClick={() => ByID(genre.id)}
                            />
                            {genre.name}
                        </label>
                    </div>)
                }

            </div>
            <div>
                <button onClick={() => dispatch(movieActions.show(false))}>Згорнути</button>
            </div>
        </div>
    )
}
export {GenreBadge};