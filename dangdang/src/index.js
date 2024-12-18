import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
// import './index.css';
import App from './App';

// import Library from './chapter01/Library';
import Shopping from './Shopping';

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import Store from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App/>
    {/* <Library/> */}

    <Provider store={Store}> {/* Provider는 상위에 있어야함 */}
      <BrowserRouter basename={process.env.PUBLIC_URL}> {/* basename={process.env.PUBLIC_URL} */}
        <Shopping/>
      </BrowserRouter>
    </Provider>
  </>
);

