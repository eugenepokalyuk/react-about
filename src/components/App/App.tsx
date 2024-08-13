import {Route, Routes, useLocation} from 'react-router-dom';

import './App.css';
import {AboutPage} from '../../pages/AboutPage';
import {ErrorPage} from '../../pages/ErrorPage';
import {HomePage} from '../../pages/HomePage';
import {ProjectsPage} from '../../pages/ProjectsPage';
import {Urls} from '../../utils/routePath';

const App = () => {
    const location = useLocation();

    const background = location.state && location.state.background;

    return (
        <Routes location={background || location}>
            <Route path={Urls.Home} element={<HomePage/>}/>

            <Route path={Urls.Projects} element={<ProjectsPage/>}/>

            <Route path={Urls.About} element={<AboutPage/>}/>

            <Route path={Urls.Error} element={<ErrorPage/>}/>
        </Routes>
    )
}

export default App
