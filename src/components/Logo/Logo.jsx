import React, { useState } from 'react';
import logoClosed from '../../assets/images/logo-white.png';
import logoOpened from '../../assets/images/logo-open.png';
import styles from './Logo.module.css';

const Logo = () => {
  const [logo, setLogo] = useState(logoClosed);

  const handleOpenEye = () => setLogo(logoOpened);
  const handleCloseEye = () => setLogo(logoClosed);

  return (
    <div
      className={styles.logo}
      id='logo'
      onMouseOver={handleOpenEye}
      onMouseOut={handleCloseEye}>
      <a href='/'>
        <img src={logo} alt='turmaham.com' />
      </a>
    </div>
  );
};

export default Logo;
