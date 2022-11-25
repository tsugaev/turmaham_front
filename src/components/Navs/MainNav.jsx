import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const MainNav = () => {
  return (
    <nav>
      <ul className='nav justify-content-end'>
        <li className={`${styles.navItem}`}>
          <Link to='/' className={`${styles.navLink}`}>
            Главная
          </Link>
        </li>
        <li className={`${styles.navItem}`}>
          <Link to='/movies' className={`${styles.navLink}`}>
            Фильмы
          </Link>
        </li>
        <li className={`${styles.navItem}`}>
          <Link to='/projects' className={`${styles.navLink}`}>
            Проекты
          </Link>
        </li>
        <li className={`${styles.navItem}`}>
          <Link to='/works' className={`${styles.navLink}`}>
            Работы
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
