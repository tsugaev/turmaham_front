import React, { useEffect } from 'react';
import Main from '../Main/Main';

const MainPage = () => {
  useEffect(() => {
    document.body.setAttribute('id', 'home');

    return () => {
      document.body.removeAttribute('id');
    };
  }, []);

  return <Main />;
};

export default MainPage;
