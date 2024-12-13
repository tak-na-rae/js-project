// import './App.css';
import "./App.scss";

import Nav from './components/Nav';
import Footer from './components/Footer';

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import Event from "./pages/Event.jsx";
import Users from "./pages/Users.jsx";


function App() {
  return (
    <>
      <div className="App">
        <Nav/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/event" element={<Event/>}/>
            <Route path="/users" element={<Users/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </>
  );
}

export default App;
