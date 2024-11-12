import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // adjust the path as necessary

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

