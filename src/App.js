import {Route, Routes} from "react-router-dom";

import {MovieInfo, PosterPreview} from "./components";
import {MoviesPage} from "./containers";



const App = () => {

    return (
        <div>
            <Routes>
                    <Route path={'/'} element={<MoviesPage/>}/>
                    <Route path={'PosterPreview'} element={<PosterPreview/>}>
                        <Route path={':id'} element={<MovieInfo/>}/>
                    </Route>
            </Routes>
        </div>

    );
};

export {App};