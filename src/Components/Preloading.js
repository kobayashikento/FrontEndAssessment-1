import React from 'react';

import { animated, useSpring } from 'react-spring';

import '../Assets/styles/preload.css';

const Preloading = () => {
    return (
        <div id="loader-wrapper">
            <div id="loader"></div>
        </div>
    )
}

export default Preloading;