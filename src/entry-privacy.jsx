import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import PrivacyPolicy from './app/privacy-policy/page.jsx';
import './styles/global.css';
import './styles/fonts.css';
import './styles/animations.css';
import './styles/scrollbar.css';

const root = document.getElementById('root');
const app = (
  <React.StrictMode>
    <PrivacyPolicy />
  </React.StrictMode>
);

if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
