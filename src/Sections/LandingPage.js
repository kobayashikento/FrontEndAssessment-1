import React from 'react';

import { Curtains } from 'react-curtains';

import CurtainContent from '../Components/CurtainContent';
import SectionRed from '../Sections/SectionRed';
import SectionYellow from '../Sections/SectionYellow';
import Perks from '../Sections/Perks';
import Review from '../Sections/SectionReview';
import SectionGet from '../Sections/SectionGet';
import SectionFooter from '../Sections/SectionFooter';

import { Scrollbars } from 'react-custom-scrollbars';

import { useTrail, animated, useSpring } from 'react-spring';

//import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

// Redux
import { connect } from 'react-redux';
import { setMenuIndex, setNavIndex, setShowNavText } from '../Redux/actions/propertyAction';

import { useWheel } from 'react-use-gesture';

import '../Assets/styles/landingPage.css';
import { useHistory } from 'react-router-dom';

const LandingPage = (props) => {
    const history = useHistory();
    const [speakerHover, setSpeakerHover] = React.useState(false);
    const [text, setText] = React.useState("");

    //refs
    const cursorRef = React.useRef();
    const scrollRef = React.useRef();

    React.useEffect(() => {
        props.setShowNavText(true);
        // const unlisten = history.listen((location, action) => {
        //     console.log(location, action)
        // })
        // return () => { unlisten() }
    }, [])

    const handleSpeakerHover = (state) => {
        if (state) {
            setSpeakerHover(true);
        } else {
            setSpeakerHover(false);
        }
    }

    const bind = useWheel(({ wheeling, direction }) => {
        if (wheeling && direction[1] === 1) {
            props.setShowNavText(false);
        } else if (wheeling && direction[1] === -1) {
            props.setShowNavText(true);
        }
    })

    const handleScroll = (e) => {
        if (props.size[1] * 0.51 < e.scrollTop && e.scrollTop < props.size[1] * 1.5 && props.setMenuIndex !== 1) {
            props.setMenuIndex(1);
            props.setNavIndex(1);
        } else if (props.size[1] * 1.5 < e.scrollTop && e.scrollTop < props.size[1] * 2.5 && props.setMenuIndex !== 2) {
            props.setMenuIndex(2);
            props.setNavIndex(1);
        } else if (props.size[1] * 2.5 < e.scrollTop && e.scrollTop < props.size[1] * 3.5 && props.setMenuIndex !== 3) {
            props.setMenuIndex(3);
            props.setNavIndex(2);
        } else if (props.size[1] * 3.5 < e.scrollTop && e.scrollTop < props.size[1] * 5 && props.setMenuIndex !== 4) {
            props.setMenuIndex(4);
            props.setNavIndex(1);
        } else if (props.size[1] * 5 < e.scrollTop && e.scrollTop < props.size[1] * 6.5) {
            props.setMenuIndex(0);
            props.setNavIndex(0);
        } else if (e.scrollTop < props.size[1] * 0.51) {
            props.setMenuIndex(0);
            props.setNavIndex(0);
        }
    }

    const mouseMove = (e) => {
        if (scrollRef.current !== null) {
            if (props.size[1] < e.pageY + scrollRef.current.getScrollTop() && e.pageY + scrollRef.current.getScrollTop() < props.size[1] * 2) {
                setText("CLICK");
            } else if (props.size[1] * 2 < e.pageY + scrollRef.current.getScrollTop() && e.pageY + scrollRef.current.getScrollTop() < props.size[1] * 3) {
                setText("REVEAL");
            } else {
                setText("");
            }
        }
    }

    React.useEffect(() => {
        if (cursorRef && scrollRef) {
            window.addEventListener('mousemove', mouseMove);
        }
        return () => window.removeEventListener('mousemove', mouseMove);
    }, [cursorRef, mouseMove]);

    // cursor config
    const stiff = { mass: 1, tension: 170, friction: 26 }
    const slow = { mass: 5, tension: 200, friction: 50 }
    const trans = (x, y) => `translate3d(${x}px,${y - (142 / 1920 * props.size[0]) / 2.75}px,0) translate3d(-50%,-50%,0)`;
    const [trail, set] = useTrail(1, () => ({ xy: [0, 0], config: i => (i === 0 ? stiff : slow) }))

    const cursorSpring = useSpring({
        to: {
            height: text === "REVEAL" ? `${142 / 1920 * props.size[0]}px` : speakerHover ? `${142 / 1920 * props.size[0]}px` : "0px",
            width: text === "REVEAL" ? `${142 / 1920 * props.size[0]}px` : speakerHover ? `${142 / 1920 * props.size[0]}px` : "0px",
            opacity: text === "REVEAL" ? 1 : speakerHover ? 1 : 0
        },
        from: { height: `0px`, width: `0px`, opacity: 0 }
    });

    React.useEffect(() => {
        if (props.clickIndex === 1) {
            scrollRef.current.view.scroll({ top: props.size[1], behavior: 'smooth' });
        } else if (props.clickIndex === 2) {
            scrollRef.current.view.scroll({ top: props.size[1] * 2, behavior: 'smooth' });
        } else if (props.clickIndex === 3) {
            scrollRef.current.view.scroll({ top: props.size[1] * 3, behavior: 'smooth' });
        } else if (props.clickIndex === 4) {
            scrollRef.current.view.scroll({ top: props.size[1] * 4.15, behavior: 'smooth' });
        }
    }, [props.clickIndex])

    return (
        <div {...bind()} onMouseMove={e => set({ xy: [e.pageX, e.pageY] })} style={{ cursor: text === "REVEAL" ? "move" : speakerHover ? "move" : "auto" }}>
            {trail.map((prop, index) => (
                <animated.div key={index} ref={cursorRef} style={{
                    ...cursorSpring, transform: prop.xy.interpolate(trans), position: "absolute",
                    font: `normal normal bold ${27 / 1920 * props.size[0]}px/${33 / 1920 * props.size[0]}px Helvetica Neue`, letterSpacing: `${2.7 / 1920 * props.size[0]}`, zIndex: 1020,
                    color: text === "REVEAL" ? "#000000" : speakerHover ? "#FFFFFF" : "white", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%",
                    pointerEvents: "none", border: text === "REVEAL" ? `3px solid #000000` : speakerHover ? `3px solid #ffffff` : `3px solid #ffffff`,
                }} >
                    {text}
                </animated.div>
            ))}
            <Scrollbars
                // This will activate auto hide
                ref={scrollRef}
                autoHide
                style={{ height: `${props.size[1]}px` }}
                thumbSize={50}
                onScrollFrame={handleScroll}
            >
                <div style={{height: "100vh", width: "100vw"}}>
                    <Curtains
                        pixelRatio={Math.min(1.5, window.devicePixelRatio)}
                        autoRender={false}
                    >
                        <CurtainContent
                            size={[window.innerWidth, window.innerHeight]}
                        />
                    </Curtains>
                </div>
                <SectionRed
                    handleSpeakerHover={(state) => handleSpeakerHover(state)}
                />
                <SectionYellow />
                <Perks />
                <Review />
                <SectionGet />
                <SectionFooter />
            </Scrollbars>
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        menuIndex: state.propertyReducer.menuIndex,
        size: state.propertyReducer.size,
        navIndex: state.propertyReducer.navIndex,
        clickIndex: state.propertyReducer.clickIndex,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMenuIndex: (index) => dispatch(setMenuIndex(index)),
        setNavIndex: (index) => dispatch(setNavIndex(index)),
        setShowNavText: (boolean) => dispatch(setShowNavText(boolean)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);