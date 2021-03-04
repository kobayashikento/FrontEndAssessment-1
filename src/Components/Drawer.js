import React from 'react';

import LetterTrail from './LetterTrail';

import { Typography, Dialog } from '@material-ui/core';

import { animated, useSpring } from 'react-spring';

import { connect } from 'react-redux';
import { setNavIndex, setMenuIndex } from '../Redux/actions/propertyAction';

// navIndex => true: open nav
// navIndex => false: close nav
const Drawer = (props) => {

    const [hover, setHover] = React.useState(0);

    let modalSpring = useSpring({
        to: { opacity: props.navIndex ? 1 : 0 },
        from: { opacity: 0, height: "100vh", backgroundColor: "rgba(25,25,25, 0.9)", width: "100vw" }
    })

    const handleNavClick = (index) => {
        props.handleNavClick(index);
    }

    const typoStyle = {
        textAlign: "left", fontSize: "calc(16px + (18 - 16) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "normal", fontStyle: "normal",
        fontFamily: "DINNextLTPro-Medium", marginRight: "4rem"
    }

    return (
        <Dialog fullScreen open={props.navIndex} PaperProps={{ style: { backgroundColor: 'transparent' } }}>
            <animated.div style={{ ...modalSpring }}>
                <div style={{ height: "60vh", paddingTop: "20vh", display: "flex", flexDirection: "column", paddingLeft: "30%", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", cursor: "pointer" }} onMouseEnter={() => setHover(1)} onMouseLeave={() => setHover(0)} onClick={() => handleNavClick(1)}>
                        <Typography style={{ ...typoStyle, color: props.menuIndex === 1 ? "white" : hover === 1 ? "white" : "#5F5E66" }} >.01</Typography>
                        <LetterTrail fontFamily={"DINNextLTPro-Medium"} fontSize={"calc(28px + (32 - 28) * ((100vw - 300px) / (1600 - 300)))"} render={props.navIndex} delay={0}>
                            <span style={{ color: props.menuIndex === 1 ? "white" : hover === 1 ? "white" : "#5F5E66" }}>EXP</span>
                            <span style={{ color: props.menuIndex === 1 ? "white" : hover === 1 ? "white" : "#5F5E66" }}>|</span>
                            <span style={{ color: props.menuIndex === 1 ? "white" : hover === 1 ? "white" : "#5F5E66" }}>CON</span>
                        </LetterTrail>
                    </div>
                    <div style={{ display: "flex", cursor: "pointer" }} onMouseEnter={() => setHover(2)} onMouseLeave={() => setHover(0)} onClick={() => handleNavClick(2)}>
                        <Typography style={{ ...typoStyle, color: props.menuIndex === 2 ? "white" : hover === 2 ? "white" : "#5F5E66" }} >.02</Typography>
                        <LetterTrail fontFamily={"DINNextLTPro-Medium"} fontSize={"calc(28px + (32 - 28) * ((100vw - 300px) / (1600 - 300)))"} render={props.navIndex} delay={150}>
                            <span style={{ color: props.menuIndex === 2 ? "white" : hover === 2 ? "white" : "#5F5E66" }}>FRONT</span>
                            <span>{'\u00A0'}</span>
                            <span style={{ color: props.menuIndex === 2 ? "white" : hover === 2 ? "white" : "#5F5E66" }}>ROW</span>
                            <span>{'\u00A0'}</span>
                            <span style={{ color: props.menuIndex === 2 ? "white" : hover === 2 ? "white" : "#5F5E66" }}>SEATS</span>
                        </LetterTrail>
                    </div>
                    <div style={{ display: "flex", cursor: "pointer" }} onMouseEnter={() => setHover(3)} onMouseLeave={() => setHover(0)} onClick={() => handleNavClick(3)}>
                        <Typography style={{ ...typoStyle, color: props.menuIndex === 3 ? "white" : hover === 3 ? "white" : "#5F5E66" }} >.03</Typography>
                        <LetterTrail fontFamily={"DINNextLTPro-Medium"} fontSize={"calc(28px + (32 - 28) * ((100vw - 300px) / (1600 - 300)))"} render={props.navIndex} delay={300}>
                            <span style={{ color: props.menuIndex === 3 ? "white" : hover === 3 ? "white" : "#5F5E66" }}>PERKS</span>
                        </LetterTrail>
                    </div>
                    <div style={{ display: "flex", cursor: "pointer" }} onMouseEnter={() => setHover(4)} onMouseLeave={() => setHover(0)} onClick={() => handleNavClick(4)}>
                        <Typography style={{ ...typoStyle, color: props.menuIndex === 4 ? "white" : hover === 4 ? "white" : "#5F5E66" }} >.04</Typography>
                        <LetterTrail fontFamily={"DINNextLTPro-Medium"} fontSize={"calc(28px + (32 - 28) * ((100vw - 300px) / (1600 - 300)))"} render={props.navIndex} delay={450}>
                            <span style={{ color: props.menuIndex === 4 ? "white" : hover === 4 ? "white" : "#5F5E66" }}>REVIEWS</span>
                        </LetterTrail>
                    </div>
                    <div style={{ display: "flex", cursor: "pointer" }} onMouseEnter={() => setHover(5)} onMouseLeave={() => setHover(0)} onClick={() => handleNavClick(5)}>
                        <Typography style={{ ...typoStyle, color: props.menuIndex === 5 ? "white" : hover === 5 ? "white" : "#5F5E66" }} >.05</Typography>
                        <LetterTrail fontFamily={"DINNextLTPro-Medium"} fontSize={"calc(28px + (32 - 28) * ((100vw - 300px) / (1600 - 300)))"} render={props.navIndex} delay={600}>
                            <span style={{ color: props.menuIndex === 5 ? "white" : hover === 5 ? "white" : "#5F5E66" }}>GET</span>
                            <span>{'\u00A0'}</span>
                            <span style={{ color: props.menuIndex === 5 ? "white" : hover === 5 ? "white" : "#5F5E66" }}>EXP|CON</span>
                        </LetterTrail>
                    </div>
                </div>
            </animated.div>
        </Dialog>
    )
}

const mapStateToProps = (state) => {
    return {
        navIndex: state.propertyReducer.navIndex,
        menuIndex: state.propertyReducer.menuIndex
    }
}

export default connect(mapStateToProps)(Drawer);