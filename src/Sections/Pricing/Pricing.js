import React from 'react';

import { Typography } from '@material-ui/core';

import PricingList from '../../Components/PricingList';
import PricingPerks from './PricingPerks';
import SectionFooter from '../SectionFooter';
import CanvasTemplate from '../../Components/CanvasTemplate';

import { connect } from 'react-redux';

import { useWheel } from 'react-use-gesture';

import { animated, useTrail, useSpring } from 'react-spring';

import { setMenuIndex, setNavIndex, setShowNavText, setClickIndex } from '../../Redux/actions/propertyAction';

import Scrollbar from 'smooth-scrollbar';

const Trail = ({ open, textIndex, children, ...props }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        from: { opacity: 0, x: 20 },
        delay: 300
    })

    return (
        <div {...props}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                {trail.map(({ x, height, ...rest }, index) => (
                    <animated.div
                        key={items[index].key}
                        style={{ ...rest, transform: x.interpolate((x) => `translate3d(${x}px,0,0)`) }}>
                        <Typography style={{
                            textAlign: "left", fontSize: "calc(60px + (78 - 60) * ((100vw - 300px) / (1600 - 300)))", lineHeight: `calc(75px + (85 - 75) * ((100vw - 300px) / (1600 - 300)))`, fontWeight: "bold", fontStyle: "normal",
                            fontFamily: "'Rajdhani', sans-serif", color: "white", textShadow: "0 1px 0 rgba(255, 255, 255, 0.4)"
                        }}>{items[index]}</Typography>
                    </animated.div>
                ))}
            </div>
        </div>
    )
}

const Pricing = (props) => {

    const scrollRef = React.useRef();

    React.useEffect(() => {
        const bodyScrollBar = Scrollbar.init(scrollRef.current, { damping: 0.30 });
        props.setNavIndex(false);
        props.setClickIndex(false);
    }, [])

    const bind = useWheel(({ wheeling, direction }) => {
        if (wheeling && direction[1] === 1) {
            props.setShowNavText(false);
        } else if (wheeling && direction[1] === -1) {
            props.setShowNavText(true);
        }
    })

    const headSpring = useSpring({
        to: { transform: true ? `translateY(0%)` : `translateY(100%)` },
        from: { transform: `translateY(100%)` },
        config: {
            mass: 1, tension: 280, friction: 60
        },
        delay: 500
    })

    return (
        <div {...bind()} ref={scrollRef} style={{ background: "#191919 0% 0% no-repeat padding-box", width: "100vw", height: "100vh", overflow: "auto" }}>
            <div style={{ display: "flex", flexDirection: "column", paddingTop: `12%`, overflow: "hidden", justifyContent: "center", alignItems: "center" }}>
                <Trail open={true} textIndex={0}>
                    <span>Pick the plan that's right for you</span>
                </Trail>
                <animated.div style={headSpring}>
                    <Typography style={{
                        fontSize: "calc(18px + (24 - 18) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "normal", fontStyle: "normal",
                        fontFamily: "DINNextLTPro-Medium", color: "white", marginTop: "4%", lineHeight: "1"
                    }}>
                        Test out our app today! Choose from three subscription Based payment models.
                </Typography>
                </animated.div>
                <div style={{
                    display: "flex", justifyContent: "space-around", marginTop: `${96 / 1920 * props.size[0]}px`, width: "70vw", paddingBottom: `${150 / 1920 * props.size[0]}px`
                }}>
                    <PricingList
                        words={["Very good", "Amazing", "Perfect job", "Love this", "It's so good", "Features"]}
                        price="$9"
                        plan="BASIC"
                        time="MONTHLY"
                        txtColor="#D24848"
                        barColor="#D14747"
                        type="red"
                        size={props.size}
                    />
                    <PricingList
                        words={["Very very good", "Even Amazing", "Perfect job", "Love this more", "It's so good", "More Features"]}
                        price="$99"
                        plan="ADVANCED"
                        time="YEARLY"
                        txtColor="#FFB33F"
                        barColor="#FFB33F"
                        type="yellow"
                        size={props.size}
                    />
                    <PricingList
                        words={["Very very good", "Even more", "Perfect job", "Love this more", "It's so so good", "More Features"]}
                        price="$120"
                        plan="PRO"
                        time="YEARLY"
                        txtColor="#1FE1E9"
                        barColor="#1FE1E9"
                        type="blue"
                        size={props.size}
                    />
                </div>
            </div>
            <PricingPerks
                size={props.size}
            />
            <SectionFooter
                size={props.size}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        size: state.propertyReducer.size,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMenuIndex: (index) => dispatch(setMenuIndex(index)),
        setNavIndex: (index) => dispatch(setNavIndex(index)),
        setShowNavText: (boolean) => dispatch(setShowNavText(boolean)),
        setClickIndex: (boolean) => dispatch(setClickIndex(boolean)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pricing)