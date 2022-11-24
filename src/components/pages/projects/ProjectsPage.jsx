import React, { useState } from 'react';
import Projects from '../../Projects/Projects';

const ProjectsPage = () => {
  return (
    <>
      <div class='page-title d-flex align-items-center justify-content-center'>
        <h1>Проекты</h1>
      </div>
      <main>
        <section className='single-page pages-padding'>
          <div className='container'>
            <Projects />
          </div>
        </section>
      </main>
    </>
  );
};

export default ProjectsPage;
