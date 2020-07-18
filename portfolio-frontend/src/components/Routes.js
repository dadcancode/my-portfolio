import React from 'react';
import About from './About';
import Projects from './Projects';

const routes = {
    '/': () => <About />,
    '/projects' : () => <Projects />
};

export default routes;