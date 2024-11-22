import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // adjust the path as necessary

// Check if service worker is supported and register it
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
  });
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
