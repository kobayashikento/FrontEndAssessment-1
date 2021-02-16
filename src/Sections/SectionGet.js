import React from 'react';

import { Typography } from '@material-ui/core';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import stage from '../Assets/pictures/Yellow/layer-bg.png'

import { animated, useTrail, useSpring } from 'react-spring';

const Trail = ({ textIndex, open, children, ...props }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        from: { opacity: 0, x: 20 },
        config: { duration: 350 }
    })

    return (
        <div {...props}>
            <div style={{ display: "flex" }}>
                {trail.map(({ x, height, ...rest }, index) => (
                    <animated.div
                        key={items[index].key}
                        style={{ ...rest, transform: x.interpolate((x) => `translate3d(${x}px,0,0)`) }}>
                        <Typography style={{
                            textAlign: "left", fontSize: "calc(70px + (85 - 70) * ((100vw - 300px) / (1600 - 300)))",
                            lineHeight: "calc(50px + (65 - 50) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "bold", fontStyle: "normal",
                            fontFamily: "'Rajdhani', sans-serif", color: "white"
                        }} >{items[index]}</Typography>
                    </animated.div>
                ))}
            </div>
        </div>
    )
}

const SectionGet = (props) => {

    let enterSpringText = useSpring({
        to: { transform: props.render ? `translateY(0%)` : `translateY(100%)`, opacity: props.render ? 1 : 0 },
        from: { transform: `translateY(100%)`, opacity: 0 },
        delay: 450,
    })

    let buttonSpring = useSpring({
        to: { transform: props.render ? `translateY(0%)` : `translateY(100%)`, opacity: props.render ? 1 : 0 },
        from: { transform: `translateY(100%)`, opacity: 0 },
        delay: 650,
    })

    return (
        <div style={{
            backgroundColor: "rgb(25,25,25)", height: `100vh`, display: "flex", justifyContent: "center",
            boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
        }}>
            <div style={{ position: "absolute", top: "27%" }}>
                <Trail open={props.render} textIndex={0}>
                    <span>G</span>
                    <span>E</span>
                    <span>T</span>
                    <span>{'\u00A0'}</span>
                    <span>E</span>
                    <span>X</span>
                    <span>P</span>
                    <span>|</span>
                    <span>C</span>
                    <span>O</span>
                    <span>N</span>
                    <span>{'\u00A0'}</span>
                    <span>N</span>
                    <span>O</span>
                    <span>W</span>
                </Trail>
                <animated.div style={{ ...enterSpringText, display: "flex", justifyContent: "center" }}>
                    <Typography style={{
                        textAlign: "left", fontSize: `calc(16px + (19 - 16) * ((100vw - 300px) / (1600 - 300)))`, lineHeight: `${25 / 1920 * props.size[0]}px`, fontWeight: "normal", fontStyle: "normal",
                        fontFamily: "DINNextLTPro-Medium", color: 'white', marginTop: "24px"
                    }}>
                        Purchase and download the app.
                    </Typography>
                </animated.div>
            </div>
            <div style={{ overflow: "hidden", display: "flex", alignItems: "center", }}>
                <animated.div style={{ ...buttonSpring, marginTop: "65%" }}>
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
    )
}

const mapStateToProps = (state) => {
    return {
        size: state.propertyReducer.size,
        tryPos: state.propertyReducer.tryPos,
        demoPos: state.propertyReducer.demoPos,
    }
}

export default connect(mapStateToProps)(SectionGet)