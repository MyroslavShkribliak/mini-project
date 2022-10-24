import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";

const Pagination = () => {

    const {page} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    return (
        <div className={"pag-wrap"}>
            <button className={"pag-btn"} onClick={()=> dispatch(movieActions.prevPage(1))}>Попередня сторінка</button>
            <span>Сторінка {page}</span>
            <button className={"pag-btn"} onClick={()=> dispatch(movieActions.nextPage(1))}>Наступна сторінка</button>
        </div>
    );
};

export {Pagination};