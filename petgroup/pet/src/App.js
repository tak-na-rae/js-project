import {Routes, Route} from 'react-router-dom';

import './App.scss';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UploadPage from "./components/UploadPage";
import Detail from "./components/Detail.jsx";

import { AccessTokenProvider } from './pages/AccessTokenContext.js';

import data from "./data/fresh.js";
import { createContext, useState } from 'react';
const DataContext = createContext();


function App() {
  let [petData,setPetData] = useState(data);
  console.log("pet==", petData);

  return (
    <AccessTokenProvider>
      <DataContext.Provider value={{ petData }}>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/:id" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
          <Footer />
        </div>
      </DataContext.Provider>
    </AccessTokenProvider>
  );
}

export default App;
export { DataContext };
