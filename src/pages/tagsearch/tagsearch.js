import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import Searchbar from '../../components/search/searchbar';
import BottomTap from '../../components/bottomtap/bottomtap';

function TagSearch(){
    
    return(
        <div>
            <Statusbar/>
            <Searchbar/>
            <BottomTap/>
        </div>
        
            

    );
}
export default TagSearch;