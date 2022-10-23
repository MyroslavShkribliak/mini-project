// import {Link} from "react-router-dom";
//
// const Header = () => {
//     return (
//         <div>
//             <div><Link to={'movie?page=1'}/></div>
//         </div>
//     );
// };
//
// export {Header};

import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLightbulb} from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";
import {Search} from "../SearchMovie/Search";

const Header = ({toggleTheme}) => {

    const {show} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    return (
        <div>

            <div>
                <FontAwesomeIcon className={'icon'} icon={faLightbulb} onClick={toggleTheme}/>
            </div>

            <Search/>

            <button onClick={() => dispatch(movieActions.show(!show))}>Параметри</button>

        </div>
    );
}

export {Header};