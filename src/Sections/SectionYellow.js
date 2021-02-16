import React from 'react'

import gambino from '../Assets/pictures/Yellow/gambino_s.png';

import Typography from '@material-ui/core/Typography';

import TryButton from '../Components/TryButton';
import DemoButton from '../Components/DemoButton';

import { connect } from 'react-redux';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import { animated, useSpring, useTrail } from 'react-spring';

const SectionYellow = (props) => {

    //refs
    const buttonYellowRef = React.useRef();

    const matches = useMediaQuery('(min-width:1200px)', { noSsr: true });

    const items1 = [
        {
            key: 0,
            content: <Typography style={{
                fontSize: "calc(85px + (110 - 85) * ((100vw - 300px) / (1600 - 300)))",
                textAlign: "left", lineHeight: `calc(75px + (85 - 75) * ((100vw - 300px) / (1600 - 300)))`, fontWeight: "bold", fontStyle: "normal",
                fontFamily: "'Rajdhani', sans-serif", color: "white", textShadow: "0 1px 0 rgba(255, 255, 255, 0.4)"
            }}>
                FRONT
    </Typography>
        },
        {
            key: 1,
            content: <Typography style={{
                textAlign: "left", fontSize: "calc(85px + (110 - 85) * ((100vw - 300px) / (1600 - 300)))", lineHeight: `calc(75px + (85 - 75) * ((100vw - 300px) / (1600 - 300)))`, fontWeight: "bold", fontStyle: "normal",
                fontFamily: "'Rajdhani', sans-serif", color: "white", textShadow: "0 1px 0 rgba(255, 255, 255, 0.4)"
            }}>
                ROW
    </Typography>
        },
        {
            key: 2,
            content: <Typography style={{
                textAlign: "left", fontSize: "calc(85px + (110 - 85) * ((100vw - 300px) / (1600 - 300)))", lineHeight: `calc(75px + (85 - 75) * ((100vw - 300px) / (1600 - 300)))`, fontWeight: "bold", fontStyle: "normal",
                fontFamily: "'Rajdhani', sans-serif", color: "white", textShadow: "0 1px 0 rgba(255, 255, 255, 0.4)"
            }}>
                SEATS
    </Typography>
        },
        {
            key: 3,
            content: <Typography style={{
                fontSize: "calc(18px + (24 - 18) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "normal", fontStyle: "normal",
                fontFamily: "DINNextLTPro-Medium", color: matches ? "white" : "rgba(182, 188, 206, 0.7)", width: matches ? `${450 / 1920 * props.size[0]}px` : `${700 / 1200 * props.size[0]}px`,
                marginTop: "5%", lineHeight: "1"
            }}>
                Experience concerts up close and personal.
    </Typography>
        },
    ]

    const springThird = useSpring({
        to: { transform: props.render ? `translateY(0%)` : `translateY(100%)` },
        from: { transform: `translateY(100%)` },
        config: {
            mass: 1, tension: 280, friction: 60
        },
        delay: 500
    })

    const Trail = ({ open, textIndex, children, ...props }) => {
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
                                textAlign: "left", fontSize: matches ? "calc(85px + (110 - 85) * ((100vw - 300px) / (1600 - 300)))"
                                : "calc(50px + (50 - 45) * ((100vw - 300px) / (1600 - 300)))", 
                                lineHeight: matches ? `calc(75px + (85 - 75) * ((100vw - 300px) / (1600 - 300)))`: 
                                `calc(50px + (55 - 50) * ((100vw - 300px) / (1600 - 300)))`, fontWeight: "bold", fontStyle: "normal",
                                fontFamily: "'Rajdhani', sans-serif", color: "white", textShadow: "0 1px 0 rgba(255, 255, 255, 0.4)"
                            }}>{items[index]}</Typography>
                        </animated.div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
            <div style={{ position: "absolute", pointerEvents: "none", right: "25%" }}>
                <Trail open={props.render} textIndex={0}>
                    <span>F</span>
                    <span>R</span>
                    <span>O</span>
                    <span>N</span>
                    <span>T</span>
                </Trail>
                <Trail open={props.render} textIndex={1}>
                    <span>R</span>
                    <span>O</span>
                    <span>W</span>
                </Trail>
                <Trail open={props.render} textIndex={2}>
                    <span>S</span>
                    <span>E</span>
                    <span>A</span>
                    <span>T</span>
                    <span>S</span>
                </Trail>
                <div style={{ overflow: "hidden" }}>
                    <animated.div style={{ ...springThird }}>
                        {items1[3].content}
                    </animated.div>
                </div>
                <DemoButton style={{ display: "none" }} ref={buttonYellowRef} size={props.size} pos={props.demoPos} type="yellow">
                    <span >SEE DEMO</span>
                </DemoButton>
            </div>
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        size: state.propertyReducer.size,
        tryPos: state.propertyReducer.tryPos,
        demoPos: state.propertyReducer.demoPos,
    }
}

export default connect(mapStateToProps)(SectionYellow);