import React from 'react';

import './styles/PageLoading.css';
import PreloaderImg from '../images/preloader.svg';

function PageLoading() {
    return (
    <div className="preloader">
        <img src={PreloaderImg} alt="Pre-loader" />
    </div>);
}

export default PageLoading;