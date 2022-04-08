import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routers from './Routers';

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>
);
