import React, { Component} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import InfoCar from './componens/infoCar';
import Login from './componens/login';
import Main from './componens/main';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="frantsuze-go-login/" element={<Login/>} />
          <Route path="site-frantsuz-go/e" element={<Main/>} />
          <Route path="firebase-taxi-app-info" element={<InfoCar/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
