import React from 'react';

import { connect } from 'react-redux';

const Preloader = (props) => {

    return (
        <div style={{
            background: "rgb(63,50,81)", background: "linear-gradient(35deg, rgba(63,50,81,1) 0%, rgba(0,32,37,1) 70%)",
            height: "100vh", width: "100vw"
        }} >
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        size: state.propertyReducer.size,
        tryPos: state.propertyReducer.tryPos,
        demoPos: state.propertyReducer.demoPos,
    }
}

export default connect(mapStateToProps)(Preloader);