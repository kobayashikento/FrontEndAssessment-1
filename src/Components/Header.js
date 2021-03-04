import React from 'react';

// import dependencies
import { Modal, Backdrop, Typography } from '@material-ui/core';

import { useSpring, animated, useTrail } from 'react-spring'

import { Link, useHistory } from "react-router-dom";

// Redux
import { connect } from 'react-redux';
import { setMenuIndex, setSize, setNavIndex, setClickIndex } from '../Redux/actions/propertyAction';

import '../Assets/styles/header.css';

import useMediaQuery from '@material-ui/core/useMediaQuery';

const Header = (props) => {
    const history = useHistory();
    const innerWrapperRef = React.useRef(null);

    const matches = useMediaQuery('(min-width:1024px)', { noSsr: true });

    // states
    const [navOpen, setNavOpen] = React.useState(false);

    //listen to size change 
    React.useLayoutEffect(() => {
        const updateSize = () => {
            props.setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => {
            window.removeEventListener('resize', updateSize);
        }
    }, []);

    const handleNavTextClick = () => {
        history.push("/");
        history.go(0);
    }

    const headerTextSpring = useSpring({
        to: { opacity: navOpen ? 1 : props.showNavText ? 1 : 0, zIndex: navOpen ? 2020 : props.showNavText ? 2020 : -1 },
        from: { opacity: 0 }
    })

    const [barHover, setBarHover] = React.useState(false);
    const [pricingHover, setPricingHover] = React.useState(false);
    const [subHover, setSubHover] = React.useState(false);

    let barSpring = useSpring({
        to: { height: barHover ? "41px" : "32px" },
        from: { height: "32px" }
    });

    let barSpring1 = useSpring({
        to: { height: barHover ? "41px" : "24px" },
        from: { height: "24px" }
    });

    let allBars = useSpring({
        to: { transform: barHover ? "rotate(-90deg) scale(1.1) translate(-21px, -14px)" : "rotate(-90deg) scale(1) translate(-21px, -14px)", opacity: props.heroLeave ? 1 : 0 },
        from: { transform: "rotate(-90deg) scale(1) translate(-21px, -14px)", opacity: 0 }
    })

    let menuSpring = useSpring({
        to: { transform: barHover ? "translateY(0%)" : "translateY(90%)", opacity: barHover ? 1 : 0 },
        from: { transform: "translateY(90%)", opacity: 0 }
    })

    let lineSpring = useSpring({
        to: { width: pricingHover ? "100%" : "0%", opacity: pricingHover ? 1 : 0 },
        from: { width: "0%", opacity: 0 }
    })

    let lineSpring1 = useSpring({
        to: { width: subHover ? "100%" : "0%", opacity: subHover ? 1 : 0 },
        from: { width: "0%", opacity: 0 }
    })

    const [closeHover, setCloseHover] = React.useState(false);

    let closeSpring1 = useSpring({
        to: { transform: closeHover ? 'rotate(45deg)' : 'rotate(0deg)' },
        from: { transform: 'rotate(0deg)' }
    })

    let closeSpring2 = useSpring({
        to: { transform: closeHover ? 'rotate(-45deg)' : 'rotate(0deg)' },
        from: { transform: 'rotate(0deg)' }
    })

    return (
        <div style={{ position: "fixed", zIndex: 2020 }}>
            {matches ?
                <React.Fragment>
                    <div style={{ right: `8%`, top: `9%`, position: "fixed", display: props.heroLeave ? "flex" : "none" }}>
                        <Link to="/pricing" style={{ textDecoration: "none", marginRight: "7rem" }}>
                            <animated.div style={{ ...headerTextSpring, position: "fixed", cursor: "pointer" }}
                                onMouseEnter={() => setPricingHover(true)} onMouseLeave={() => setPricingHover(false)}>
                                <Typography style={{
                                    textAlign: "left", fontSize: `20px`, fontWeight: "600", fontStyle: "normal",
                                    fontFamily: "'Rajdhani', sans-serif", color: "white", transformOrigin: "bottom",
                                }}>
                                    Pricing
                </Typography>
                                <animated.div style={{ ...lineSpring, height: "2px", background: "white" }} />
                            </animated.div>
                        </Link>
                        <Link to="/payment" style={{ textDecoration: "none" }}>
                            <animated.div style={{ ...headerTextSpring, cursor: "pointer" }}
                                onMouseEnter={() => setSubHover(true)} onMouseLeave={() => setSubHover(false)}>
                                <Typography style={{
                                    textAlign: "left", fontSize: `20px`, fontWeight: "600", fontStyle: "normal",
                                    fontFamily: "'Rajdhani', sans-serif", color: "white", transformOrigin: "bottom",
                                }}>
                                    Subscribe
                </Typography>
                                <animated.div style={{ ...lineSpring1, height: "2px", background: "white" }} />
                            </animated.div>
                        </Link>
                    </div>
                    <animated.div style={{
                        height: "100px", justifyContent: "space-between", display: "flex", flexDirection: "column", opacity: props.clickIndex ? 1 : 0,
                        position: "fixed", left: `3.3%`, top: `45%`, cursor: "pointer", display: props.navIndex ? "none" : props.heroLeave ? "" : "none"
                    }} onMouseEnter={() => setBarHover(true)} onMouseLeave={() => setBarHover(false)} onClick={() => props.setNavIndex(true)}>
                        <Typography style={{
                            textAlign: "left", fontSize: `16px`, fontWeight: "normal", fontStyle: "normal",
                            fontFamily: "DINNextLTPro-Medium", color: "white", opacity: props.heroLeave ? 1 : 0
                        }}>
                            {props.menuIndex}
                        </Typography>
                        <animated.div style={{ ...allBars, display: "flex" }}>
                            <div style={{ overflow: "hidden", transform: "translate(100%,-100%)", height: "25px" }}>
                                <animated.div style={menuSpring}>
                                    <Typography style={{
                                        textAlign: "left", fontSize: `16px`, fontWeight: "500", fontStyle: "normal",
                                        fontFamily: "DINNextLTPro-Medium", color: "white", transformOrigin: "bottom",
                                    }}>
                                        Menu
                        </Typography>
                                </animated.div>
                            </div>
                            <animated.div style={{ ...barSpring, background: "white", width: "2px", marginLeft: "8px" }} />
                            <div style={{ height: "41px", background: "white", width: "2px", marginLeft: "8px" }} />
                            <animated.div style={{ ...barSpring1, background: "white", width: "2px", marginLeft: "8px" }} />
                        </animated.div>
                        <Typography style={{
                            textAlign: "left", fontSize: `16px`, fontWeight: "normal", fontStyle: "normal",
                            fontFamily: "DINNextLTPro-Medium", color: "rgba(182, 188, 206, 0.7)", opacity: props.heroLeave ? 1 : 0
                        }}>
                            5
                </Typography>
                    </animated.div>
                    <div ref={innerWrapperRef} style={{ display: "flex", flexDirection: "column", position: "fixed", left: `6%`, top: matches ? `8%` : "5%", }}>
                        <div style={{ display: "flex" }}>
                            <animated.div style={headerTextSpring} onClick={() => handleNavTextClick()}>
                                <Typography style={{
                                    textAlign: "left", font: matches ? `normal normal normal ${29 / 1920 * props.size[0]}px/${47 / 1920 * props.size[0]}px DINNextLTPro-Medium`
                                        : `normal normal normal 20px/40px DINNextLTPro-Medium`, cursor: "pointer",
                                    color: "white", letterSpacing: `${1.2 / 1920 * props.size[0]}px`,
                                }}>
                                    EXP|CON
                        </Typography>
                            </animated.div>
                        </div>
                    </div>
                    <animated.div style={{ left: `3.3%`, top: `47%`, position: "fixed", display: props.navIndex ? "flex" : "none", cursor: "pointer", alignItems: "center" }}
                        onMouseEnter={() => setCloseHover(true)} onMouseLeave={() => setCloseHover(false)} onClick={() => props.setNavIndex(false)}>
                        <div style={{ backgroundColor: "white", width: "44px", height: "44px", borderRadius: "22px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <animated.div style={{ ...closeSpring1, position: "absolute", width: "18px", height: "3px", background: "black" }} />
                            <animated.div style={{ ...closeSpring2, position: "absolute", width: "18px", height: "3px", background: "black" }} />
                        </div>
                        <Typography style={{
                            fontSize: "calc(16px + (18 - 16) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "normal", fontStyle: "normal",
                            fontFamily: "DINNextLTPro-Medium", color: "white", marginLeft: "1rem"
                        }}>
                            Close
                     </Typography>
                    </animated.div>
                </React.Fragment>
                :
                null
                //     <animated.div style={{
                //         justifyContent: "space-between", display: "flex",
                //         position: "fixed", right: `3.3%`, top: `5%`, cursor: "pointer"
                //     }} onMouseEnter={() => setBarHover(true)} onMouseLeave={() => setBarHover(false)} onClick={() => props.setNavIndex(true)}>
                //         <animated.div style={{ display: "flex", transform: "translateY(18px) rotate(90deg)", transformOrigin: "top" }}>
                //             <animated.div style={{ ...barSpring, background: "white", width: "2px", marginLeft: "8px" }} />
                //             <div style={{ height: "41px", background: "white", width: "2px", marginLeft: "8px" }} />
                //             <animated.div style={{ ...barSpring1, background: "white", width: "2px", marginLeft: "8px" }} />
                //         </animated.div>
                //         <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                //             <Typography style={{
                //                 textAlign: "left", fontSize: `16px`, fontWeight: "normal", fontStyle: "normal",
                //                 fontFamily: "DINNextLTPro-Medium", color: "white",
                //             }}>
                //                 {props.menuIndex}
                //             </Typography>
                //             <div style={{ width: "15px", height: "2px", background: "rgba(182, 188, 206, 0.7)" }} />
                //             <Typography style={{
                //                 textAlign: "left", fontSize: `16px`, fontWeight: "normal", fontStyle: "normal",
                //                 fontFamily: "DINNextLTPro-Medium", color: "rgba(182, 188, 206, 0.7)",
                //             }}>
                //                 5
                // </Typography>
                //         </div>
                //     </animated.div>
                // }
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        menuIndex: state.propertyReducer.menuIndex,
        size: state.propertyReducer.size,
        navIndex: state.propertyReducer.navIndex,
        showNavText: state.propertyReducer.showNavText,
        heroLeave: state.propertyReducer.heroLeave,
        clickIndex: state.propertyReducer.clickIndex
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMenuIndex: (index) => dispatch(setMenuIndex(index)),
        setNavIndex: (index) => dispatch(setNavIndex(index)),
        setSize: (size) => dispatch(setSize(size)),
        setClickIndex: (index) => dispatch(setClickIndex(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);