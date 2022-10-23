import {useSelector} from "react-redux";
import {createContext, useState} from "react";
import {GenreBadge, Header, MovieInfo, MoviesList} from "./components";
import {Route, Routes} from "react-router-dom";

const ThemeContext = createContext(null)

const App = () => {

    const {show} = useSelector(state => state.movieReducer);

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div id={theme}>
                <Header toggleTheme={toggleTheme}/>
                {
                    show ? <GenreBadge/> : null
                }
                <Routes>
                    <Route path={'/'} element={<MoviesList/>}/>
                    <Route path={'/movie/:id'} element={<MovieInfo/>}/>
                </Routes>
            </div>
        </ThemeContext.Provider>
    );
};

export {App};