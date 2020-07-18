import React, { useState } from 'react';
import { useRoutes } from 'hookrouter';
import routes from './components/Routes';


import Navigation from './components/Navigation';
import ViewWindow from './components/ViewWindow';

import './App.css';

function App() {

  const routeResult = useRoutes(routes);

  return (
    <div className="App">
      {/* <ViewWindow view={view}/> */}
      {routeResult}
      <Navigation/>
    </div>
  );
}

export default App;
