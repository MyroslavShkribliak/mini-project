import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import {ThemeProvider} from "styled-components";

import {MovieInfo, MoviesList} from "./components";
import {MoviesPage} from "./containers";
import {darkTheme, GlobalStyles, lightTheme, StyledApp} from "./theme";


const App = () => {

    const [theme, setTheme] = useState("light");

    const ThemeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };


    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <StyledApp>
                <button onClick={() => ThemeToggler()}>Тема</button>
                <Routes>
                    <Route path={'/'} element={<MoviesPage/>}>
                        <Route path={'movie'} element={<MoviesList/>}>
                            <Route path={`movie:Id`} element={<MovieInfo/>}/>
                        </Route>
                    </Route>
                </Routes>
            </StyledApp>
        </ThemeProvider>

    );
};
export {App};