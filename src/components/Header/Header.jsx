import React from 'react';
import MainNav from '../Navs/MainNav';
import styles from './style.module.css';
import Logo from '../Logo/Logo';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container-fluid'>
        <div className='row justify-content-between align-items-center'>
          <div className='col-md-auto'>
            <Logo />
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
