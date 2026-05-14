import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProviders } from './providers/AppProviders';
import './styles/main.scss';

async function enableMocking() {
  const { worker } = await import('./mocks/browser');
  return worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root')!);

enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <AppProviders>
        <App />
      </AppProviders>
    </React.StrictMode>
  );
});
