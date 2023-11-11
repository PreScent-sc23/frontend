import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {RecoilRoot} from 'recoil';
import { useNavigate } from 'react-router-dom';

import Home from './pages/main/home';
import PSLens from './pages/pslens/pslens';
import Mypage from './pages/mypage/mypage';
import TagSearch from './pages/tagsearch/tagsearch'


function App() {
  return (
    <RecoilRoot>
        <Router>
          <Routes> 
              <Route path="/home" element={<Home/>}/>
              <Route path="/pslens" element={<PSLens/>}/>
              <Route path="/mypage" element={<Mypage/>}/>
              <Route path="/tagsearch" element={<TagSearch/>}/>
              
          </Routes>
        </Router>
    </RecoilRoot>
  );
}

export default App;
