import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className='home-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-md'>
              <div className={styles.copyright}>
                © Цугаев Заурбек.{' '}
                <a href='mailto:turmaham@inbox.ru'>turmaham@inbox.ru</a>
                <div>
                  <a
                    className={styles.useOfTermsLink}
                    href='https://turmaham.com/terms-of-use/'>
                    Все права защищены.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
