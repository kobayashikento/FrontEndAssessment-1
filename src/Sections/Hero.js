import React from 'react'

import { connect } from 'react-redux';

import { useHistory } from 'react-router-dom';


import { Curtains } from 'react-curtains';

import CurtainContent from '../Components/CurtainContent';

const Hero = (props) => {
    const history = useHistory();

    console.log(history);

    return (
        <div style={{ background: "black", position: "absolute", 
        display: props.menuIndex === 5 ? "none" : props.menuIndex === 6 ? "none" : "", zIndex: 0 }}>
            <Curtains
                pixelRatio={Math.min(1.5, window.devicePixelRatio)}
                autoRender={false}
            >
                <CurtainContent
                    size={[window.innerWidth, window.innerHeight]}
                />
            </Curtains>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        menuIndex: state.propertyReducer.menuIndex,
    }
}

export default connect(mapStateToProps)(Hero);