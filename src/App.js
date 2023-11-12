import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {RecoilRoot} from 'recoil';
import { useNavigate } from 'react-router-dom';

import Home from './pages/Main/home';
import PSLens from './pages/PSLens/pslens';
import Mypage from './pages/Mypage/mypage';
import TagSearch from './pages/TagSearch/tagsearch'
import SellerHome from './pages/SellerMain/sellerhome';

function App() {

  // const [currentPage, setCurrentPage] = useState(); 
  // const changePage = (newPage) => {
  //   setCurrentPage(newPage);
  // };

  return (
    <RecoilRoot>
        <Router>
          <Routes> 
              <Route path="/home" element={<Home/>}/>
              <Route path="/pslens" element={<PSLens/>}/>
              <Route path="/mypage" element={<Mypage/>}/>
              <Route path="/tagsearch" element={<TagSearch/>}/>

              
              <Route path="/sellerhome" element={<SellerHome/>}/>

              
          </Routes>
        </Router>
    </RecoilRoot>
  );
}

export default App;
