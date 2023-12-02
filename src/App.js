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
import ManageProduct from './pages/manageproduct/manageproduct';
import ManageFinished from './pages/managefinished/managefinished';
import ManageReserve from './pages/managereserve/managereserve'
import ManageStat from './pages/managestat/managestat';
import AddFinished from './pages/addfinished/addfinished';
import AddCustom from './pages/addcustom/addcustom';
import ProductDetail from './pages/detail/detail';
import PSLensResults from './pages/pslens/pslensresults';
import Cart from './pages/purchase/cart/cart';
import Payment from './pages/purchase/payment/payment';
import CustomerHistory from './pages/history/customerhistory';
import SellerHistory from './pages/history/sellerhistory';
import NotFound from './pages/notfound/notfound';

function App() {



  // const [msg, setMsg] = useState([]);
  // useEffect(() => {
  //   fetch("/api/hello")
  //       .then((res) => {return res.json();})
  //       .then((data) => {setMsg(data);})
  // }, []);

  return (
   
    
    <RecoilRoot>
        <Router>
          <Routes> 
              <Route path="/" element={<StartScreen/>}/>
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
              <Route path="/manageproduct" element={<ManageProduct/>}/>
              <Route path="/managefinished" element={<ManageFinished/>}/>
              <Route path="/managereserve" element={<ManageReserve/>}/>
              <Route path="/managestat" element={<ManageStat/>}/>
              <Route path="/addfinished" element={<AddFinished/>}/>
              <Route path="/addcustom" element={<AddCustom/>}/>
              <Route path="/customersignup" element={<Customersignup/>}/>
              <Route path="/sellerhome" element={<SellerHome/>}/>
              <Route path="/customersignup" element={<Customersignup/>}/>
              <Route path="/sellerhome" element={<SellerHome/>}/>
              <Route path="/detail/:fpkey" element={<ProductDetail/>}/>
              <Route path="pslens/results" element = {<PSLensResults/>}/>
              <Route path="/cart" element = {<Cart/>}/>
              <Route path="/cart/payment" element = {<Payment/>}/>
              <Route path="/myhistory" element = {<CustomerHistory/>}/>
              <Route path="/sellerhome/history" element = {<SellerHistory/>}/>
              
              
              <Route path="/*" element = {<NotFound/>}/>
          </Routes>
        </Router>
    </RecoilRoot>
  );
}


export default App;
