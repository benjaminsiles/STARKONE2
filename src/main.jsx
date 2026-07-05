import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import StarkOneLanding from './app/page.jsx';
import PrivacyPolicy from './app/privacy-policy/page.jsx';
import './app/global.css';

function AppRouter() {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    const handleNavigation = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', handleNavigation);
    return () => window.removeEventListener('popstate', handleNavigation);
  }, []);

  const normalizedPath = pathname.replace(/\/$/, '');

  if (normalizedPath === '/privacy-policy') {
    return <PrivacyPolicy />;
  }

  return <StarkOneLanding />;
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
