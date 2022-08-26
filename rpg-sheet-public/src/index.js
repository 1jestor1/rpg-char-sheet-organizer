import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Site,Login, CreateAccount} from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>RPG SHEET MANAGER</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Site/>}/>
        <Route path="/gate" element={<Login/>}/>
        <Route path="/gate/create" element={<CreateAccount/>}/>
      </Routes>
    </BrowserRouter>
</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
