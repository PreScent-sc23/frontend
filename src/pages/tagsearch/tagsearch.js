import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Statusbar from '../../components/statusbar/statusbar';
import Searchbar from '../../components/search/searchbar';
import CustomerBottomTap from '../../components/bottomtap/customerbottomtap';

function TagSearch(){

    return(
        <div>
            <Statusbar/>
            <Searchbar>
                zzdsdsd
            </Searchbar>
            <CustomerBottomTap/>
        </div>
        


    );
}
export default TagSearch;