import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import './App.css';
import App from './App';
import App1 from './App1';
import Memo from './Memo';
import Login from './Login';
import UseId from './UseId';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div className="layout-fix">
      <App/>
      <App1/>
      <Memo/>
      <Login/>
      <UseId/>
      <UseId/>
    </div>
  </>
);
