import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { App } from 'components/App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

// import { ThemeProvider } from 'styled-components';
// import { theme } from '../src/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter basename="goit-react-hw-08-phonebook">
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
 
  </React.StrictMode>
);
