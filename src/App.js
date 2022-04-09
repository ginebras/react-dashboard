import React from 'react';
import './style.css';

import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';

export default function App() {
  return (
    <div>
      <Topbar />
      <div className="container-app">
        <Sidebar />
        <Home/>
      </div>
    </div>
  );
}
