import React from 'react';
import MainNav from '../Navs/MainNav';
import styles from './style.module.css';
import logo from '../assets/images/logo-white.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container-fluid'>
        <div className='row justify-content-between align-items-center'>
          <div className='col-md-auto'>
            <div className={styles.logo} id='logo'>
              <a href='/'>
                <img src={logo} alt='turmaham.com' />
              </a>
            </div>
          </div>
          <div className='col-auto'>
            <MainNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
