import React from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import '../../Assets/styles/landingPage.scss';

import { animated, useSpring, useTrail } from 'react-spring';

import { connect } from 'react-redux';
import { setHeroLeave } from '../../Redux/actions/propertyAction';

import useMediaQuery from '@material-ui/core/useMediaQuery';

const Trail = ({ matches, textIndex, open, children, ...props }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        from: { opacity: 0, x: 20 },
        delay: textIndex == 0 ? 500 : textIndex == 1 ? 600 : 700
    })

    return (
        <div {...props}>
            <div style={{ display: "flex" }}>
                {trail.map(({ x, height, ...rest }, index) => (
                    <animated.div
                        key={items[index].key}
                        style={{ ...rest, transform: x.interpolate((x) => `translate3d(${x}px,0,0)`) }}>
                        <Typography style={{
                            textAlign: "left", fontSize: matches ? "calc(70px + (85 - 70) * ((100vw - 300px) / (1600 - 300)))" :
                                "calc(46px + (46 - 42) * ((100vw - 300px) / (1600 - 300)))",
                            lineHeight: "calc(50px + (65 - 50) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "bold", fontStyle: "normal",
                            fontFamily: "'Rajdhani', sans-serif",
                        }} >{items[index]}</Typography>
                    </animated.div>
                ))}
            </div>
        </div>
    )
}

const Trail1 = ({ textIndex, open, children, ...props }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        from: { opacity: 0, x: 20 },
        delay: 900
    })

    return (
        <div {...props}>
            <div style={{ display: "flex", marginTop: "14px" }}>
                {trail.map(({ x, height, ...rest }, index) => (
                    <animated.div
                        key={items[index].key}
                        style={{ ...rest, transform: x.interpolate((x) => `translate3d(${x}px,0,0)`) }}>
                        <Typography style={{
                            textAlign: "left", fontSize: "calc(20px + (24 - 20) * ((100vw - 300px) / (1600 - 300)))",
                            lineHeight: "calc(28px + (32 - 28) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "600", fontStyle: "normal",
                            fontFamily: "'Rajdhani', sans-serif", color: "white"
                        }} >{items[index]}</Typography>
                    </animated.div>
                ))}
            </div>
        </div>
    )
}

const LandingPageContent = (props) => {

    const [hover, onHover] = React.useState(false);
    const matches = useMediaQuery('(min-width:1200px)', { noSsr: true });

    const items1 = [
        {
            key: 0,
            content: <Typography style={{
                textAlign: "left", fontSize: "calc(70px + (85 - 70) * ((100vw - 300px) / (1600 - 300)))", lineHeight: "calc(50px + (65 - 50) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "bold", fontStyle: "normal",
                fontFamily: "'Rajdhani', sans-serif", letterSpacing: `${5.5 / 1920 * props.size[0]}px`
            }}>
                INTERACTIVE
    </Typography>
        },
        {
            key: 1,
            content: <Typography style={{
                textAlign: "left", fontSize: "calc(70px + (85 - 70) * ((100vw - 300px) / (1600 - 300)))", lineHeight: "calc(50px + (65 - 50) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "bold", fontStyle: "normal",
                fontFamily: "'Rajdhani', sans-serif", letterSpacing: `${5.5 / 1920 * props.size[0]}px`
            }}>
                CONCERT
    </Typography>
        },
        {
            key: 2,
            content: <Typography style={{
                textAlign: "left", fontSize: "calc(70px + (85 - 70) * ((100vw - 300px) / (1600 - 300)))", lineHeight: "calc(50px + (65 - 50) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "bold", fontStyle: "normal",
                fontFamily: "'Rajdhani', sans-serif", letterSpacing: `${5.5 / 1920 * props.size[0]}px`
            }}>
                EXPERIENCE
    </Typography>
        },
        {
            key: 3,
            content: <Typography style={{
                textAlign: "left", fontSize: matches ? `${20 / 1920 * props.size[0]}px` : "calc(16px + (20 - 16) * ((100vw - 300px) / (1600 - 300)))",
                lineHeight: matches ? `${25 / 1920 * props.size[0]}px` : `20px`, fontWeight: "normal", fontStyle: "normal",
                fontFamily: "DINNextLTPro-Medium", color: 'rgba(182, 188, 206, 0.7)', maxWidth: matches ? `${450 / 1920 * props.size[0]}px` : `300px`, marginTop: "8px"
            }}>
                Experience your favourite artists like never before and from the comfort of your own home.
    </Typography>
        },
    ]

    const springForth = useSpring({
        to: { transform: props.curtainReady ? `translateY(0%)` : `translateY(100%)` },
        from: { transform: `translateY(100%)` },
        config: {
            duration: 600, mass: 1, tension: 280, friction: 60
        },
        delay: 650
    })

    const springSixth = useSpring({
        to: { transform: props.curtainReady ? ` translateY(0px)` : ` translateY(150px)`, opacity: props.curtainReady ? 1 : 0 },
        from: { transform: ` translateY(150px)`, opacity: 0 },
        config: {
            duration: 600, mass: 1, tension: 280, friction: 60
        },
        delay: 650
    })

    const springThird = useSpring({
        to: { transform: props.curtainReady ? ` translateY(0px)` : ` translateY(150px)`, opacity: props.curtainReady ? 1 : 0 },
        from: { transform: ` translateY(150px)`, opacity: 0 },
        config: {
            duration: 600, mass: 1, tension: 280, friction: 60
        },
        delay: 950
    })

    const textSpring = useSpring({
        to: { bottom: props.heroLeave ? "5.6%" : "19.6%", left: props.heroLeave ? "2.6%" : "11.6%", transform: props.heroLeave ? 'scale(0.9)' : 'scale(1)' },
        from: { bottom: "19.6%", left: "16.6%", transform: 'scale(1)' }
    })

    const barSpring = useSpring({
        to: { transform: hover ? "scaleY(2)" : "scaleY(1)" },
        from: { transform: "scaleY(1)" }
    })

    const aniSpring = useSpring({
        to: { transform: hover ? "rotate(-90deg) translate(22px, -3px)" : "rotate(-90deg) translate(-12px, -3px)" },
        from: { transform: "rotate(-90deg) translate(-12px, -3px)", position: "absolute" }
    })

    return (
        matches ?
            <React.Fragment>
                <animated.div style={{
                    height: `fit-content`, display: "flex", flexDirection: "column",
                    alignItems: "flex-start", justifyContent: "center", position: "absolute",
                    color: "white", zIndex: 60, ...textSpring
                }}>
                    <Trail open={props.curtainReady} textIndex={0}>
                        <span>I</span>
                        <span>N</span>
                        <span>T</span>
                        <span>E</span>
                        <span>R</span>
                        <span>A</span>
                        <span>C</span>
                        <span>T</span>
                        <span>I</span>
                        <span>V</span>
                        <span>E</span>
                    </Trail>
                    <Trail open={props.curtainReady} textIndex={1}>
                        <span>C</span>
                        <span>O</span>
                        <span>N</span>
                        <span>C</span>
                        <span>E</span>
                        <span>R</span>
                        <span>T</span>
                    </Trail>
                    <Trail open={props.curtainReady} textIndex={1}>
                        <span>E</span>
                        <span>X</span>
                        <span>P</span>
                        <span>E</span>
                        <span>R</span>
                        <span>I</span>
                        <span>E</span>
                        <span>N</span>
                        <span>C</span>
                        <span>E</span>
                    </Trail>
                    <div style={{ overflow: "hidden" }}>
                        <animated.div style={{ ...springForth }}>
                            {items1[3].content}
                        </animated.div>
                    </div>
                </animated.div >
                <animated.div style={{ ...springSixth, right: "16.667%", bottom: "20.667%", position: "absolute", zIndex: 30 }}>
                    <Button style={{ border: "2px solid white", borderRadius: "2px" }} onClick={() => props.setHeroLeave(true)}>
                        <Typography style={{
                            textAlign: "left", fontSize: "calc(20px + (24 - 20) * ((100vw - 300px) / (1600 - 300)))",
                            lineHeight: "calc(28px + (32 - 28) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "600", fontStyle: "normal",
                            fontFamily: "'Rajdhani', sans-serif", color: "white"
                        }} >EXPLORE</Typography>
                    </Button>
                    <Trail1 open={props.curtainReady} textIndex={0}>
                        <span>I</span>
                        <span>m</span>
                        <span>m</span>
                        <span>e</span>
                        <span>r</span>
                        <span>s</span>
                        <span>e</span>
                        <span>{'\u00A0'}</span>
                        <span>Y</span>
                        <span>o</span>
                        <span>u</span>
                        <span>r</span>
                        <span>s</span>
                        <span>e</span>
                        <span>l</span>
                        <span>f</span>
                    </Trail1>
                </animated.div>
                <animated.div onMouseEnter={() => onHover(true)} onMouseLeave={() => onHover(false)} onClick={() => props.setHeroLeave(true)}
                    style={{ position: 'absolute', bottom: "0px", left: "50%", zIndex: 60, ...springThird, cursor: "pointer" }}>
                    <animated.div style={aniSpring}>
                        <Typography style={{
                            textAlign: "left", fontSize: `20px`, fontWeight: "600", fontStyle: "normal",
                            fontFamily: "'Rajdhani', sans-serif", color: "white", transformOrigin: "bottom",
                        }}>
                            scroll
        </Typography>
                    </animated.div>
                    <animated.div style={barSpring}>
                        <div className="loading_line_wrapper" >
                            <div className="loading_line">
                                <div className="loading_line_inner loading_line_inner--1"></div>
                                <div className="loading_line_inner loading_line_inner--2"></div>
                            </div>
                        </div>
                        <div style={{ height: "65px", background: "#333", width: "2px" }} />
                    </animated.div>
                </animated.div>
            </React.Fragment>
            :
            <React.Fragment>
                <animated.div style={{
                    height: `fit-content`, display: "flex", flexDirection: "column",
                    alignItems: "flex-start", justifyContent: "center", position: "absolute",
                    color: "white", zIndex: 60, top: "22.6%", left: "16.6%",
                }}>
                    <Trail open={props.curtainReady} matches={matches} textIndex={0}>
                        <span>I</span>
                        <span>N</span>
                        <span>T</span>
                        <span>E</span>
                        <span>R</span>
                        <span>A</span>
                        <span>C</span>
                        <span>T</span>
                        <span>I</span>
                        <span>V</span>
                        <span>E</span>
                    </Trail>
                    <Trail open={props.curtainReady} matches={matches} textIndex={1}>
                        <span>C</span>
                        <span>O</span>
                        <span>N</span>
                        <span>C</span>
                        <span>E</span>
                        <span>R</span>
                        <span>T</span>
                    </Trail>
                    <Trail open={props.curtainReady} matches={matches} textIndex={1}>
                        <span>E</span>
                        <span>X</span>
                        <span>P</span>
                        <span>E</span>
                        <span>R</span>
                        <span>I</span>
                        <span>E</span>
                        <span>N</span>
                        <span>C</span>
                        <span>E</span>
                    </Trail>
                    <div style={{ overflow: "hidden" }}>
                        <animated.div style={{ ...springForth }}>
                            {items1[3].content}
                        </animated.div>
                    </div>
                </animated.div >
                <animated.div style={{ ...springSixth, left: "16.6%", bottom: "20.667%", position: "absolute", zIndex: 30 }}>
                    <Button style={{ border: "2px solid white", borderRadius: "2px" }} onClick={() => props.setHeroLeave(true)}>
                        <Typography style={{
                            textAlign: "left", fontSize: "calc(20px + (24 - 20) * ((100vw - 300px) / (1600 - 300)))",
                            lineHeight: "calc(28px + (32 - 28) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "600", fontStyle: "normal",
                            fontFamily: "'Rajdhani', sans-serif", color: "white"
                        }} >EXPLORE</Typography>
                    </Button>
                    <Trail1 open={props.curtainReady} textIndex={0}>
                        <span>I</span>
                        <span>m</span>
                        <span>m</span>
                        <span>e</span>
                        <span>r</span>
                        <span>s</span>
                        <span>e</span>
                        <span>{'\u00A0'}</span>
                        <span>Y</span>
                        <span>o</span>
                        <span>u</span>
                        <span>r</span>
                        <span>s</span>
                        <span>e</span>
                        <span>l</span>
                        <span>f</span>
                    </Trail1>
                </animated.div>
                <animated.div onMouseEnter={() => onHover(true)} onMouseLeave={() => onHover(false)} onClick={() => props.setHeroLeave(true)}
                    style={{ position: 'absolute', bottom: "0px", left: "50%", zIndex: 60, ...springThird, cursor: "pointer" }}>
                    <animated.div style={aniSpring}>
                        <Typography style={{
                            textAlign: "left", fontSize: `20px`, fontWeight: "600", fontStyle: "normal",
                            fontFamily: "'Rajdhani', sans-serif", color: "white", transformOrigin: "bottom",
                        }}>
                            scroll
</Typography>
                    </animated.div>
                    <animated.div style={barSpring}>
                        <div className="loading_line_wrapper" >
                            <div className="loading_line">
                                <div className="loading_line_inner loading_line_inner--1"></div>
                                <div className="loading_line_inner loading_line_inner--2"></div>
                            </div>
                        </div>
                        <div style={{ height: "65px", background: "#333", width: "2px" }} />
                    </animated.div>
                </animated.div>
            </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        size: state.propertyReducer.size,
        heroLeave: state.propertyReducer.heroLeave
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setHeroLeave: (boolean) => dispatch(setHeroLeave(boolean))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPageContent);