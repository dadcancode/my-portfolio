import React from 'react';
import About from './About';
import Projects from './Projects';
import Connect from './Connect';

const routes = {
    '/': () => <About />,
    '/projects' : () => <Projects />,
    '/connect' : () => <Connect />
};

export default routes;