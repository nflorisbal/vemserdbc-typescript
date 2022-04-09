import ReactDOM from 'react-dom/client';
import Routers from './Routers';
import './NotiflixInit';

import './index.css';

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
  // <React.StrictMode>
  <Routers />
  // </React.StrictMode>
);
