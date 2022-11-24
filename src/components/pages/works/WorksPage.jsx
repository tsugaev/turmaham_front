import React from 'react';
import Works from '../../Works/Works';

const WorksPage = () => {
  return (
    <>
      <div class='page-title d-flex align-items-center justify-content-center'>
        <h1>Работы</h1>
      </div>
      <main>
        <section className='single-page pages-padding'>
          <div className='container'>
            <Works />
          </div>
        </section>
      </main>
    </>
  );
};

export default WorksPage;
