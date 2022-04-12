import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './style.css';

import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import UsersList from './pages/UsersList/UsersList';
import UserPage from './pages/UserPage/UserPage';
import NewUser from './pages/NewUser/NewUser';
import Products from './pages/Products/Products';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Topbar />
        <div className="container-app">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/users" element={<UsersList />} />
            <Route exact path="/user-details/:id" element={<UserPage />} />
            <Route exact path="/newUser" element={<NewUser />} />
            <Route exact path="/products" element={<Products />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
