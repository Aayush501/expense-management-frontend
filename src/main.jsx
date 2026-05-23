import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './redux/store/Store.js';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Provider store={store}>
          <CssBaseline />
          <App />  
        </Provider>
    </BrowserRouter>
  </StrictMode>,
)
