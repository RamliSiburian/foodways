import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/style.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './Components/Config/Navgations';
import Header from './Components/Header';
import Admin from './Pages/Admin';
import Home from './Pages/Home';
import { DataContextProvider } from './context/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />

          <Route exact path='/' element={<PrivateRoute />}>
            <Route exact path='/Admin' element={<Admin />} />
            <Route exact path='/App' element={<App />} />
            <Route exact path='/Home' element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </DataContextProvider>
  </React.StrictMode>
);

