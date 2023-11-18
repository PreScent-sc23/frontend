import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {RecoilRoot} from 'recoil';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


import Home from './pages/home/home';
import PSLens from './pages/pslens/pslens';
import Mypage from './pages/mypage/mypage';
import Search from './pages/search/search';
import SellerHome from './pages/sellermain/sellerhome';
import Shopregister from './pages/shopregister/shopregister';
import LocationSet from './pages/locationset/locationset';
import Login from './pages/login/login';
import Sellersignup from './pages/sellersignup/sellersignup';
import Customersignup from './pages/customersignup/customersignup';
import StartScreen from './pages/main/main';
import ProductDetail from './pages/detail/detail';


function App() {



  return (
    <RecoilRoot>
        <Router>
          <Routes> 
              <Route path="/main" element={<StartScreen/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/locationset" element={<LocationSet/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/pslens" element={<PSLens/>}/>
              <Route path="/mypage" element={<Mypage/>}/>
              <Route path="/search" element={<Search/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/sellersignup" element={<Sellersignup/>}/>
              <Route path="/shopregister" element={<Shopregister/>}/>
              <Route path="/customersignup" element={<Customersignup/>}/>
              <Route path="/sellerhome" element={<SellerHome/>}/>
              <Route path="/detail" element={<ProductDetail/>}/>

              
          </Routes>
        </Router>
    </RecoilRoot>
  );
}


export default App;
