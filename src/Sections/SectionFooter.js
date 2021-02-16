import React from 'react';

import { Typography } from '@material-ui/core';

import empty_set from '../Assets/pictures/Footer/blue_stage.jpeg';

import { connect } from 'react-redux';

//"#5E33D1 0% 0% no-repeat padding-box"
const SectionFooter = (props) => {

    return (
        <div style={{ backgroundImage: `url(${empty_set})`, backgroundSize: "cover", height: `40vh`, 
        backgroundColor: "#847c7c", backgroundPosition: "center bottom", backgroundBlendMode: "multiply", zIndex: 1 }}>
            <div style={{
                position: "absolute", paddingTop: `4%`, marginLeft: `11%`,
                display: "flex", alignItems: "center", justifyContent: 'center'
            }}>
                <Typography style={{
                    color: "#FFFFFF", fontFamily: "'Rajdhani', sans-serif", fontSize: "calc(28px + (32 - 28c) * ((100vw - 300px) / (1600 - 300)))",
                    letterSpacing: `${3.3 / 1920 * props.size[0]}px`, pointerEvents: "none"
                }}>
                    support@experienceconcerts.co
                    </Typography>
            </div>
            <div style={{
                position: "absolute", display: "flex", flexDirection: "column", paddingTop: "11%", width: "100vw", alignItems: "center"
            }}>
                <Typography style={{
                    color: "#FFFFFF", maxWidth: `${235 / 1920 * props.size[0]}px`,
                    font: `normal normal normal ${35 / 1920 * props.size[0]}px/${45 / 1920 * props.size[0]}px Helvetica Neue`,
                    letterSpacing: `${4.8 / 1920 * props.size[0]}px`, height: `${56 / 1080 * props.size[1]}px`, pointerEvents: "none",
                    marginRight: `${45 / 1920 * props.size[0]}px`
                }}>
                    EXP|CON
                    </Typography>
                <Typography style={{
                    color: "#FFFFFF", fontFamily: `DINNextLTPro-Medium`, fontSize: "calc(16px + (18 - 16) * ((100vw - 300px) / (1600 - 300)))",
                    letterSpacing: `${2.4 / 1920 * props.size[0]}px`, pointerEvents: "none", marginTop: `${25 / 1080 * props.size[1]}px`
                }}>
                    2019 © All Rights Reserved | Speer Technologies Incorporated
                    </Typography>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        size: state.propertyReducer.size,
    }
}

export default connect(mapStateToProps)(SectionFooter)