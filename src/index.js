import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom/client';
import './index.css';
import './App';
import './Assets/styles/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './Components/Config/Navgations';
import Header from './Components/Header';
import Admin from './Pages/Admin';
import User from './Pages/User';
import Home from './Pages/Home';
import { DataContextProvider } from './context/DataContext';
import DetailRestaurants from './Pages/DetailRestaurant';
import Profile from './Pages/Profile';
import EditProfile from './Pages/Edit-profile';
import AddProduk from './Pages/Add-produk';
import ChartOrder from './Pages/Chart-order';
import { CounterContextProvider } from './context/Data-counter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataContextProvider>
      <CounterContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />

            <Route exact path='/' element={<PrivateRoute />}>
              <Route exact path='/Admin' element={<Admin />} />
              <Route exact path='/User' element={<User />} />
              <Route exact path='/Home' element={<Home />} />
              <Route exact path='/DetailResto' element={<DetailRestaurants />} />
              <Route exact path='/Profile' element={<Profile />} />
              <Route exact path='/EditProfile' element={<EditProfile />} />
              <Route exact path='/AddProduct' element={<AddProduk />} />
              <Route exact path='/ChartOrder' element={<ChartOrder />} />
            </Route>
          </Routes>
        </Router>
      </CounterContextProvider>
    </DataContextProvider>
  </React.StrictMode>
);

