import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './style.css';

import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import UsersList from './pages/UsersList/UsersList';

export default function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container-app">
        <Sidebar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/users" element={<UsersList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
