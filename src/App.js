import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './component/Home';
import About from './component/About.jsx';
import StudentCrud from './component/StudentCrud';
import Login from './component/Login';
import Register from './component/Register';
import './App.css';
import Navbaar from './component/Navbaar';

function App() {
  return (
    <Fragment>
    <BrowserRouter>
    <Navbaar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/studentCrud" element={<StudentCrud/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      </BrowserRouter>
      </Fragment>
  );
}

export default App;
