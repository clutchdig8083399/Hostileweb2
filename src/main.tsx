import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ScrollObserver } from './components/utils/ScrollObserver.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScrollObserver>
      <App />
    </ScrollObserver>
  </StrictMode>
);