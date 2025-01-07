import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // future={{
  //   v7_relativeSplatPath: true,
  //   v7_startTransition: true,
  // }}

   <BrowserRouter basename={process.env.PUBLIC_URL}>
     <App />
   </BrowserRouter>

);


