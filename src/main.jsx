import React from 'react';
import { createRoot } from 'react-dom/client';
import StarkOneLanding from './app/page.jsx';
import './app/global.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StarkOneLanding />
  </React.StrictMode>
);
