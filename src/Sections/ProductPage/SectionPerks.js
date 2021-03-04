import React from 'react';

import { Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Link } from "react-router-dom";

import concert_purple from '../../Assets/pictures/Review/concert_purple.jpg';

import { useSpring, animated, useTrail } from 'react-spring';

const ItemsTrail = ({ open, textIndex, matches, color, children, ...props }) => {
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
                            fontFamily: "DINNextLTPro-Medium", color: color
                        }}>{items[index]}</Typography>
                    </animated.div>
                ))}
            </div>
        </div>
    )
}

const HeaderTrail = ({ open, textIndex, matches, children, ...props }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        from: { opacity: 0, x: 20 },
    })

    return (
        <div {...props}>
            <div style={{ display: "flex", paddingLeft: "5%", paddingTop: "4%" }}>
                {trail.map(({ x, height, ...rest }, index) => (
                    <animated.div
                        key={items[index].key}
                        style={{ ...rest, transform: x.interpolate((x) => `translate3d(${x}px,0,0)`) }}>
                        <Typography style={{
                            fontSize: matches ? "calc(96px + (110 - 96) * ((100vw - 1024px) / (1600 - 1024)))" :
                                "calc(50px + (50 - 45) * ((100vw - 300px) / (1600 - 300)))",
                            textAlign: "left", fontWeight: "bold", fontStyle: "normal",
                            fontFamily: "'Rajdhani', sans-serif", color: "white", textShadow: "0px 11px 10px rgba(81,67,21,0.4)"
                        }}>{items[index]}</Typography>
                    </animated.div>
                ))}
            </div>
        </div>
    )
}

const Perks = (props) => {

    const matches = useMediaQuery('(min-width:1024px)', { noSsr: true });

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

    return (
        matches ?
            <animated.div style={{ height: "100%", width: "100%" }} >
                <div style={{
                    height: "70%", width: "40%", right: "13%", top: "70%", position: "absolute", boxShadow: " rgba(0, 0, 0, 0.56) 0px 22px 70px 4px", zIndex: 4, overflow: "hidden"
                }} >
                    <animated.div style={{ backgroundImage: `url(${concert_purple})`, backgroundSize: "cover", bottom: 0, height: "100%", width: "100%", position: "absolute" }} />
                </div>
                <div style={{
                    display: "flex", flexDirection: "column", background: "rgba(0,0,0,0.6)", position: "absolute", top: "75%", left: "18vmax", zIndex: 5
                }}>
                    <HeaderTrail open={props.render} textIndex={0} matches={matches}>
                        <span>P</span>
                        <span>E</span>
                        <span>R</span>
                        <span>K</span>
                        <span>S</span>
                    </HeaderTrail>
                    <div style={{ display: "flex", flexDirection: "column", overflow: "hidden", height: "fit-content", width: "fit-content", padding: "4rem", paddingTop: "1rem" }}>
                        <div style={{ display: "flex", }}>
                            <animated.div style={{ ...enterSpring, width: "95px", background: `#D34848`, height: "3px", transformOrigin: "left", position: "absolute" }} />
                            <div style={{ marginLeft: "5%" }}>
                                <ItemsTrail open={props.render} textIndex={0} matches={matches} color={"#D34848"}>
                                    <span>Subscription</span>
                                    <span> {'\u00A0'}</span>
                                    <span>Payment</span>
                                    <span> {'\u00A0'}</span>
                                    <span>Model</span>
                                </ItemsTrail>
                                <animated.div style={enterSpringText}>
                                    <Typography style={{
                                        fontSize: "calc(14px + (17 - 14) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "normal", fontStyle: "normal",
                                        fontFamily: "DINNextLTPro-Medium", color: "white", width: `${500 / 1920 * window.innerWidth}px`,
                                    }}>
                                        No commitment, cancel anytime. Never worry about forgetting a payment again!
                            </Typography>
                                </animated.div>
                            </div>
                        </div>
                        <div style={{ display: "flex", marginTop: "2.2vmax" }}>
                            <animated.div style={{ ...enterSpring1, width: "95px", background: `#1FE1E9`, height: "3px", transformOrigin: "left", position: "absolute" }} />
                            <div style={{ marginLeft: "5%" }}>
                                <ItemsTrail open={props.render} textIndex={0} matches={matches} color={"#1FE1E9"}>
                                    <span>No</span>
                                    <span> {'\u00A0'}</span>
                                    <span>Fee</span>
                                    <span> {'\u00A0'}</span>
                                    <span>Cancelation</span>
                                    <span> {'\u00A0'}</span>
                                    <span>Policy</span>
                                </ItemsTrail>
                                <animated.div style={enterSpringText1}>
                                    <Typography style={{
                                        fontSize: "calc(14px + (17 - 14) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "normal", fontStyle: "normal",
                                        fontFamily: "DINNextLTPro-Medium", color: "white", width: `${500 / 1920 * window.innerWidth}px`,
                                    }}>
                                        No commitment, cancel anytime. Never worry about forgetting a payment again!
                        </Typography>
                                </animated.div>
                            </div>
                        </div>
                        <div style={{ display: "flex", marginTop: "2.2vmax" }}>
                            <animated.div style={{ ...enterSpring2, width: "95px", background: `#FFB33F`, height: "3px", transformOrigin: "left", position: "absolute" }} />
                            <div style={{ marginLeft: "5%" }}>
                                <ItemsTrail open={props.render} textIndex={0} matches={matches} color={"#FFB33F"}>
                                    <span>Subscription</span>
                                    <span> {'\u00A0'}</span>
                                    <span>Payment</span>
                                    <span> {'\u00A0'}</span>
                                    <span>Model</span>
                                </ItemsTrail>
                                <animated.div style={enterSpringText2}>
                                    <Typography style={{
                                        fontSize: "calc(14px + (17 - 14) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "normal", fontStyle: "normal",
                                        fontFamily: "DINNextLTPro-Medium", color: "white", width: `${500 / 1920 * window.innerWidth}px`,
                                    }}>
                                        No commitment, cancel anytime. Never worry about forgetting a payment again!
                        </Typography>
                                </animated.div>
                            </div>
                        </div>
                        <animated.div style={{ ...enterSpringText3, display: "flex", alignItems: "flex-end", marginLeft: "8%" }}>
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
            </animated.div>
            :
            <div></div>
    )
}

export default Perks;