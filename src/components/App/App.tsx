import { Route, Routes, useLocation } from 'react-router-dom';

import './App.css';
import { About } from '../../pages/About/About.tsx';
import { Error } from '../../pages/Error/Error.tsx';
import { Home } from '../../pages/Home/Home.tsx';
import { Projects } from '../../pages/Projects/Projects.tsx';
import { WishList } from '../../pages/WishList/WishList.tsx';
import { Urls } from '../../utils/routePath';
import { useEffect } from 'react';

const App = () => {
  const location = useLocation();

  const background = location.state && location.state.background;

  useEffect(() => {
    window.location.href = 'https://eugenepokalyuk.vercel.app/';
  }, []);

  return (
    <Routes location={background || location}>
      <Route path={Urls.Home} element={<Home />} />

      <Route path={Urls.Projects} element={<Projects />} />

      <Route path={Urls.About} element={<About />} />

      <Route path={Urls.WishList} element={<WishList />} />

      <Route path={Urls.Error} element={<Error />} />
    </Routes>
  );
};

export default App;
