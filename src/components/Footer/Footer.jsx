import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='home-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-md'>
              <div className='copyright'>
                © Цугаев Заурбек.{' '}
                <a href='mailto:turmaham@inbox.ru'>turmaham@inbox.ru</a>
                <div>
                  <a
                    className='use-of-terms-link'
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
