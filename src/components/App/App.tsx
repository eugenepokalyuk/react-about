import { Route, Routes, useLocation } from 'react-router-dom';

import './App.css';
import AboutPage from '../../pages/AboutPage';
import ErrorPage from '../../pages/ErrorPage';
import HomePage from '../../pages/HomePage';
import ProjectsPage from '../../pages/ProjectsPage';
import { ABOUT_PATH, DEFAULT_PATH, ERROR_PATH, PROJECTS_PATH } from '../../utils/routePath';

const App = () => {
  const location = useLocation();
  
  const background = location.state && location.state.background;

  return (
    <Routes location={background || location}>
      <Route path={DEFAULT_PATH} element={<HomePage />} />
      <Route path={PROJECTS_PATH} element={<ProjectsPage />} />
      <Route path={ABOUT_PATH} element={<AboutPage />} />
      <Route path={ERROR_PATH} element={<ErrorPage />} />
    </Routes>
  )
}

export default App
