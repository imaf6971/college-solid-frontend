/* @refresh reload */
import { Router } from '@solidjs/router';
import { render } from 'solid-js/web';

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('root') as HTMLElement
);
