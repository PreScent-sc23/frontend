import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Statusbar from './components/statusbar/statusbar';
import Searchbar from './components/search/searchbar';
import BottomTap from './components/bottomtap/bottomtap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Statusbar/> */}
    {/* <Searchbar/> */}
    {/* <BottomTap/> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
