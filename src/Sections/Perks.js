import React from 'react';

import { Typography } from '@material-ui/core';

import { connect } from 'react-redux';

import { Link } from "react-router-dom";

import concert_purple from '../Assets/pictures/Review/concert_purple.jpg';

import { useSpring, animated, useTrail } from 'react-spring';

import useMediaQuery from '@material-ui/core/useMediaQuery';

const Perks = (props) => {

    const matches = useMediaQuery('(min-width:1200px)', { noSsr: true });

    let enterSpring = useSpring({
        to: { transform: props.render ? `rotate(90deg) translateX(0%)` : `rotate(90deg) translateX(-100%)`, opacity: props.render ? 1 : 0 },
        from: { transform: `rotate(90deg) translateX(-100%)`, opacity: 0 },
        delay: 200,
    })

    let enterSpringText = useSpring({
        to: { transform: props.render ? `translateY(0%)` : `translateY(100%)`, opacity: props.render ? 1 : 0 },
        from: { transform: `translateY(100%)`, opacity: 0 },
        delay: 600,
    })

    let enterSpring1 = useSpring({
        to: { transform: props.render ? `rotate(90deg) translateX(0%)` : `rotate(90deg) translateX(-100%)`, opacity: props.render ? 1 : 0 },
        from: { transform: `rotate(90deg) translateX(-100%)`, opacity: 0 },
        delay: 600,
    })

    let enterSpringText1 = useSpring({
        to: { transform: props.render ? `translateY(0%)` : `translateY(100%)`, opacity: props.render ? 1 : 0 },
        from: { transform: `translateY(100%)`, opacity: 0 },
        delay: 1000,
    })

    let enterSpring2 = useSpring({
        to: { transform: props.render ? `rotate(90deg) translateX(0%)` : `rotate(90deg) translateX(-100%)`, opacity: props.render ? 1 : 0 },
        from: { transform: `rotate(90deg) translateX(-100%)`, opacity: 0 },
        delay: 1000,
    })

    let enterSpringText2 = useSpring({
        to: { transform: props.render ? `translateY(0%)` : `translateY(100%)`, opacity: props.render ? 1 : 0 },
        from: { transform: `translateY(100%)`, opacity: 0 },
        delay: 1400,
    })

    let enterSpringText3 = useSpring({
        to: { transform: props.render ? `translateY(0%)` : `translateY(100%)`, opacity: props.render ? 1 : 0 },
        from: { transform: `translateY(100%)`, opacity: 0, height: "100px" },
        delay: 1500,
    })

    const Trail0 = ({ open, textIndex, children, ...props }) => {
        const items = React.Children.toArray(children)
        const trail = useTrail(items.length, {
            config: { mass: 5, tension: 2000, friction: 200 },
            opacity: open ? 1 : 0,
            x: open ? 0 : 20,
            from: { opacity: 0, x: 20 },
        })

        return (
            <div {...props}>
                <div style={{ display: "flex" }}>
                    {trail.map(({ x, height, ...rest }, index) => (
                        <animated.div
                            key={items[index].key}
                            style={{ ...rest, transform: x.interpolate((x) => `translate3d(${x}px,0,0)`) }}>
                            <Typography style={{
                                fontSize: matches ? "calc(85px + (110 - 85) * ((100vw - 300px) / (1600 - 300)))" :
                                "calc(50px + (50 - 45) * ((100vw - 300px) / (1600 - 300)))",
                                textAlign: "left", fontWeight: "bold", fontStyle: "normal",
                                fontFamily: "'Rajdhani', sans-serif", color: "white", textShadow: "0 1px 0 rgba(255, 255, 255, 0.4)"
                            }}>{items[index]}</Typography>
                        </animated.div>
                    ))}
                </div>
            </div>
        )
    }

    const Trail = ({ open, textIndex, children, ...props }) => {
        const items = React.Children.toArray(children)
        const trail = useTrail(items.length, {
            config: { mass: 5, tension: 2000, friction: 200 },
            opacity: open ? 1 : 0,
            x: open ? 0 : 20,
            from: { opacity: 0, x: 20 },
            delay: 400
        })

        return (
            <div {...props}>
                <div style={{ display: "flex" }}>
                    {trail.map(({ x, height, ...rest }, index) => (
                        <animated.div
                            key={items[index].key}
                            style={{ ...rest, transform: x.interpolate((x) => `translate3d(${x}px,0,0)`) }}>
                            <Typography style={{
                                fontSize: matches ? "calc(24px + (28 - 24) * ((100vw - 300px) / (1600 - 300)))"
                                    : "calc(20px + (24 - 20) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "normal", fontStyle: "normal",
                                fontFamily: "DINNextLTPro-Medium", color: "#D34848"
                            }}>{items[index]}</Typography>
                        </animated.div>
                    ))}
                </div>
            </div>
        )
    }

    const Trail1 = ({ open, textIndex, children, ...props }) => {
        const items = React.Children.toArray(children)
        const trail = useTrail(items.length, {
            config: { mass: 5, tension: 2000, friction: 200 },
            opacity: open ? 1 : 0,
            x: open ? 0 : 20,
            from: { opacity: 0, x: 20 },
            delay: 800
        })

        return (
            <div {...props}>
                <div style={{ display: "flex" }}>
                    {trail.map(({ x, height, ...rest }, index) => (
                        <animated.div
                            key={items[index].key}
                            style={{ ...rest, transform: x.interpolate((x) => `translate3d(${x}px,0,0)`) }}>
                            <Typography style={{
                                fontSize: matches ? "calc(24px + (28 - 24) * ((100vw - 300px) / (1600 - 300)))"
                                    : "calc(20px + (24 - 20) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "normal", fontStyle: "normal",
                                fontFamily: "DINNextLTPro-Medium", color: "#1FE1E9"
                            }}>{items[index]}</Typography>
                        </animated.div>
                    ))}
                </div>
            </div>
        )
    }

    const Trail2 = ({ open, textIndex, children, ...props }) => {
        const items = React.Children.toArray(children)
        const trail = useTrail(items.length, {
            config: { mass: 5, tension: 2000, friction: 200 },
            opacity: open ? 1 : 0,
            x: open ? 0 : 20,
            from: { opacity: 0, x: 20 },
            delay: 1200
        })

        return (
            <div {...props}>
                <div style={{ display: "flex" }}>
                    {trail.map(({ x, height, ...rest }, index) => (
                        <animated.div
                            key={items[index].key}
                            style={{ ...rest, transform: x.interpolate((x) => `translate3d(${x}px,0,0)`) }}>
                            <Typography style={{
                                fontSize: matches ? "calc(24px + (28 - 24) * ((100vw - 300px) / (1600 - 300)))"
                                    : "calc(20px + (24 - 20) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "normal", fontStyle: "normal",
                                fontFamily: "DINNextLTPro-Medium", color: "#FFB33F"
                            }}>{items[index]}</Typography>
                        </animated.div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        matches ?
            <div style={{ height: "120vh", position: "absolute", width: "100vw" }}>
                <div style={{
                    height: "140vh", background: "#191919 0% 0% no-repeat padding-box", width: "50%",
                    display: "flex", flexDirection: "column", top: "14%", position: "absolute", justifyContent: "center",
                    boxShadow: " rgba(0, 0, 0, 0.56) 0px 22px 70px 4px", zIndex: 5
                }}>
                    <div style={{
                        display: "flex",
                        paddingLeft: "21.6%", flexDirection: "column"
                    }}>
                        <Trail0 open={props.render} textIndex={0}>
                            <span>P</span>
                            <span>E</span>
                            <span>R</span>
                            <span>K</span>
                            <span>S</span>
                        </Trail0>
                        <div style={{ display: "flex", flexDirection: "column", overflow: "hidden", justifyContent: "space-around", height: "70vh" }}>
                            <div style={{ display: "flex", marginLeft: "8%" }}>
                                <animated.div style={{ ...enterSpring, width: "95px", background: `#D34848`, height: "3px", transformOrigin: "left", position: "absolute" }} />
                                <div style={{ marginLeft: "5%" }}>
                                    <Trail open={props.render} textIndex={0}>
                                        <span>Subscription</span>
                                        <span> {'\u00A0'}</span>
                                        <span>Payment</span>
                                        <span> {'\u00A0'}</span>
                                        <span>Model</span>
                                    </Trail>
                                    <animated.div style={enterSpringText}>
                                        <Typography style={{
                                            fontSize: "calc(14px + (17 - 14) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "normal", fontStyle: "normal",
                                            fontFamily: "DINNextLTPro-Medium", color: "white", width: `${500 / 1920 * props.size[0]}px`,
                                        }}>
                                            No commitment, cancel anytime. Never worry about forgetting a payment again!
                            </Typography>
                                    </animated.div>
                                </div>
                            </div>
                            <div style={{ display: "flex", marginLeft: "8%" }}>
                                <animated.div style={{ ...enterSpring1, width: "95px", background: `#1FE1E9`, height: "3px", transformOrigin: "left", position: "absolute" }} />
                                <div style={{ marginLeft: "5%" }}>
                                    <Trail1 open={props.render} textIndex={0}>
                                        <span>No</span>
                                        <span> {'\u00A0'}</span>
                                        <span>Fee</span>
                                        <span> {'\u00A0'}</span>
                                        <span>Cancelation</span>
                                        <span> {'\u00A0'}</span>
                                        <span>Policy</span>
                                    </Trail1>
                                    <animated.div style={enterSpringText1}>
                                        <Typography style={{
                                            fontSize: "calc(14px + (17 - 14) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "normal", fontStyle: "normal",
                                            fontFamily: "DINNextLTPro-Medium", color: "white", width: `${500 / 1920 * props.size[0]}px`,
                                        }}>
                                            No commitment, cancel anytime. Never worry about forgetting a payment again!
                        </Typography>
                                    </animated.div>
                                </div>
                            </div>
                            <div style={{ display: "flex", marginLeft: "8%" }}>
                                <animated.div style={{ ...enterSpring2, width: "95px", background: `#FFB33F`, height: "3px", transformOrigin: "left", position: "absolute" }} />
                                <div style={{ marginLeft: "5%" }}>
                                    <Trail2 open={props.render} textIndex={0}>
                                        <span>Subscription</span>
                                        <span> {'\u00A0'}</span>
                                        <span>Payment</span>
                                        <span> {'\u00A0'}</span>
                                        <span>Model</span>
                                    </Trail2>
                                    <animated.div style={enterSpringText2}>
                                        <Typography style={{
                                            fontSize: "calc(14px + (17 - 14) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "normal", fontStyle: "normal",
                                            fontFamily: "DINNextLTPro-Medium", color: "white", width: `${500 / 1920 * props.size[0]}px`,
                                        }}>
                                            No commitment, cancel anytime. Never worry about forgetting a payment again!
                        </Typography>
                                    </animated.div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ overflow: "hidden" }}>
                        <animated.div style={{ ...enterSpringText3, display: "flex", alignItems: "flex-end", paddingLeft: "30.6%" }}>
                            <Link to="/pricing" style={{ textDecoration: "none" }}>
                                <div style={{ display: "flex" }}>
                                    <a style={{
                                        width: "248px", height: "62px",
                                    }} className="btntry-try-noborder" data-text="TRY IT NOW" />
                                </div>
                            </Link>
                        </animated.div>
                    </div>
                </div>
                <div style={{
                    height: "140vh", backgroundImage: `url(${concert_purple})`, backgroundSize: "cover", top: "14%", position: "absolute", width: "50%", right: "0",
                    boxShadow: " rgba(0, 0, 0, 0.56) 0px 22px 70px 4px", zIndex: 4
                }} />
            </div>
            :
            <div style={{ height: "100vh", position: "absolute", width: "100vw" }}>
                <div style={{
                    height: "100vh", background: "#191919 0% 0% no-repeat padding-box", width: "100%",
                    display: "flex", flexDirection: "column", position: "absolute", justifyContent: "center",
                    boxShadow: " rgba(0, 0, 0, 0.56) 0px 22px 70px 4px", zIndex: 5
                }}>
                    <div style={{
                        display: "flex", flexDirection: "column", alignItems: "center"
                    }}>
                        <Trail0 open={props.render} textIndex={0}>
                            <span>P</span>
                            <span>E</span>
                            <span>R</span>
                            <span>K</span>
                            <span>S</span>
                        </Trail0>
                        <div style={{ display: "flex", flexDirection: "column", overflow: "hidden", justifyContent: "space-around", height: "50vh" }}>
                            <div style={{ display: "flex", marginLeft: "8%" }}>
                                <animated.div style={{ ...enterSpring, width: "95px", background: `#D34848`, height: "3px", transformOrigin: "left", position: "absolute" }} />
                                <div style={{ marginLeft: "5%" }}>
                                    <Trail open={props.render} textIndex={0}>
                                        <span>Subscription</span>
                                        <span> {'\u00A0'}</span>
                                        <span>Payment</span>
                                        <span> {'\u00A0'}</span>
                                        <span>Model</span>
                                    </Trail>
                                    <animated.div style={enterSpringText}>
                                        <Typography style={{
                                            fontSize: "calc(14px + (17 - 14) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "normal", fontStyle: "normal",
                                            fontFamily: "DINNextLTPro-Medium", color: "white",
                                        }}>
                                            No commitment, cancel anytime. Never worry about forgetting a payment again!
                        </Typography>
                                    </animated.div>
                                </div>
                            </div>
                            <div style={{ display: "flex", marginLeft: "8%" }}>
                                <animated.div style={{ ...enterSpring1, width: "95px", background: `#1FE1E9`, height: "3px", transformOrigin: "left", position: "absolute" }} />
                                <div style={{ marginLeft: "5%" }}>
                                    <Trail1 open={props.render} textIndex={0}>
                                        <span>No</span>
                                        <span> {'\u00A0'}</span>
                                        <span>Fee</span>
                                        <span> {'\u00A0'}</span>
                                        <span>Cancelation</span>
                                        <span> {'\u00A0'}</span>
                                        <span>Policy</span>
                                    </Trail1>
                                    <animated.div style={enterSpringText1}>
                                        <Typography style={{
                                            fontSize: "calc(14px + (17 - 14) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "normal", fontStyle: "normal",
                                            fontFamily: "DINNextLTPro-Medium", color: "white",
                                        }}>
                                            No commitment, cancel anytime. Never worry about forgetting a payment again!
                    </Typography>
                                    </animated.div>
                                </div>
                            </div>
                            <div style={{ display: "flex", marginLeft: "8%" }}>
                                <animated.div style={{ ...enterSpring2, width: "95px", background: `#FFB33F`, height: "3px", transformOrigin: "left", position: "absolute" }} />
                                <div style={{ marginLeft: "5%" }}>
                                    <Trail2 open={props.render} textIndex={0}>
                                        <span>Subscription</span>
                                        <span> {'\u00A0'}</span>
                                        <span>Payment</span>
                                        <span> {'\u00A0'}</span>
                                        <span>Model</span>
                                    </Trail2>
                                    <animated.div style={enterSpringText2}>
                                        <Typography style={{
                                            fontSize: "calc(14px + (17 - 14) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "normal", fontStyle: "normal",
                                            fontFamily: "DINNextLTPro-Medium", color: "white",
                                        }}>
                                            No commitment, cancel anytime. Never worry about forgetting a payment again!
                    </Typography>
                                    </animated.div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ overflow: "hidden" }}>
                        <animated.div style={{ ...enterSpringText3, display: "flex", alignItems: "flex-end", justifyContent: "center", transform: 'scale(0.7)' }}>
                            <Link to="/pricing" style={{ textDecoration: "none" }}>
                                <div style={{ display: "flex" }}>
                                    <a style={{
                                        width: "248px", height: "62px",
                                    }} className="btntry-try-noborder" data-text="TRY IT NOW" />
                                </div>
                            </Link>
                        </animated.div>
                    </div>
                </div>
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

export default connect(mapStateToProps)(Perks)