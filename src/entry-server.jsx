// Server-only entry used by scripts/prerender.mjs to render each page's real
// markup to a string at build time. This file is compiled with
// `vite build --ssr` (Node target) — it must never be loaded by the browser.
import React from 'react';
import { renderToString } from 'react-dom/server';
import HomePage from './app/page.jsx';
import AboutPage from './app/about/page.jsx';
import EventsPage from './app/events/page.jsx';
import PrivacyPolicyPage from './app/privacy-policy/page.jsx';

export function renderHome() {
  return renderToString(<HomePage />);
}

export function renderAbout() {
  return renderToString(<AboutPage />);
}

export function renderEvents() {
  return renderToString(<EventsPage />);
}

export function renderPrivacyPolicy() {
  return renderToString(<PrivacyPolicyPage />);
}
