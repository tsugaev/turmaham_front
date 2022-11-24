import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = () => {
  return (
    <nav>
      <ul className='nav justify-content-end'>
        <li className='nav-item'>
          <Link to='/' className='nav-link'>
            Главная
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/movies' className='nav-link'>
            Фильмы
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/projects' className='nav-link'>
            Проекты
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/works' className='nav-link'>
            Работы
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
