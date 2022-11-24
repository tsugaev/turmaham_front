import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoivesPage from './components/pages/movies/MoviesPage';
import MainPage from './components/pages/MainPage';
import Footer from './components/Footer/Footer';
import './style.css';
import { Route, Routes, useHref } from 'react-router';
import ProjectsPage from './components/pages/projects/ProjectsPage';
import WorksPage from './components/pages/works/WorksPage';

const App = () => {
  const isMainPage = useHref() === '/';

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/movies' element={<MoivesPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/works' element={<WorksPage />} />
      </Routes>
      {!isMainPage && <Footer />}
    </>
  );
};

export default App;
