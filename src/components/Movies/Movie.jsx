import React from 'react';
import styles from './Movies.module.css';

const Movie = () => {
  return (
    <div className={styles.movie}>
      <div className={styles.moviePreview}>
        <img
          src='https://turmaham.com/wp-content/uploads/2021/04/tsamptsalg.jpg'
          className='img-fluid'
          alt='tsaptsalg'
        />
      </div>
      <div className={styles.movieTitle}>
        <h5>Цаьпцалг</h5>
      </div>
    </div>
  );
};

export default Movie;
