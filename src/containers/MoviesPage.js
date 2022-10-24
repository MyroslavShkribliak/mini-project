import { MoviesListCard} from "../components";
import {Outlet} from "react-router-dom";

const MoviesPage = () => {
    return (
        <div>
            <Outlet/>
            <MoviesListCard/>
        </div>
    );
};

export {MoviesPage};