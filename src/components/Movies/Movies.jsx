import React from 'react';
import Movie from './Movie';

const Movies = () => {
  return (
    <div className='row'>
      <div className='col-md-3'>
        <a href='https://turmaham.com/films/tsaptsalg/'>
          <Movie />
        </a>
      </div>
    </div>
  );
};

export default Movies;
