import React, { useEffect } from 'react';
import Movies from '../../Movies/Movies';

const MoviesPage = () => {
  useEffect(() => {
    document.body.setAttribute('id', 'movies');

    return () => {
      document.body.removeAttribute('id');
    };
  }, []);
  return (
    <>
      <div className='page-title d-flex align-items-center justify-content-center'>
        <h1>Фильмы</h1>
      </div>
      <main>
        <section className='single-page pages-padding'>
          <div className='container'>
            <hr className='separator' />
            <Movies />
          </div>
        </section>
      </main>
    </>
  );
};

export default MoviesPage;
