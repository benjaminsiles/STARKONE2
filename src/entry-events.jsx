import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import EventsPage from './app/events/page.jsx';
import './styles/global.css';
import './styles/fonts.css';
import './styles/animations.css';
import './styles/scrollbar.css';

const root = document.getElementById('root');
const app = (
  <React.StrictMode>
    <EventsPage />
  </React.StrictMode>
);

if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
