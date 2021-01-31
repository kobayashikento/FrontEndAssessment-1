import React from 'react';

import { Curtains } from 'react-curtains';

import Header from '../Components/Header';
import CurtainContent from '../Sections/CurtainContent';
import SectionRed from '../Sections/SectionRed';
import SectionYellow from '../Sections/SectionYellow';
import Perks from '../Sections/Perks';
import Review from '../Sections/SectionReview';
import SectionGet from '../Sections/SectionGet';
import SectionFooter from '../Sections/SectionFooter';

import { Scrollbars } from 'react-custom-scrollbars';

import { useTrail, animated, useSpring } from 'react-spring';

import '../Assets/styles/landingPage.css';

const LandingPage = () => {

    const [index, setIndex] = React.useState(0);
    const [size, setSize] = React.useState([window.innerWidth, window.innerHeight]);
    const [playing, setPlaying] = React.useState(false);
    const [text, setText] = React.useState("");
    const [circle, setCircle] = React.useState(false);
    const [speakerHover, setSpeakerHover] = React.useState(false);
    const [tryMargin, setTryMargin] = React.useState([0, 0]);
    const [demoPos, setDemoPos] = React.useState([0, 0]);

    //refs
    const cursorRef = React.useRef();
    const scrollRef = React.useRef();

    const handleTryMarginChange = (pos) => {
        setTryMargin(pos);
    }

    const handleDemoPosChange = (pos) => {
        setDemoPos(pos);
    }

    const handlePlay = () => {
        setPlaying(!playing)
    }

    const handleScroll = (e) => {
        if (size[1] * 0.51 < e.scrollTop && e.scrollTop < size[1] * 1.5 && index !== 1) {
            setIndex(1);
        } else if (size[1] * 1.5 < e.scrollTop && e.scrollTop < size[1] * 2.5 && index !== 2) {
            setIndex(2);
        } else if (size[1] * 2.5 < e.scrollTop && e.scrollTop < size[1] * 3.5 && index !== 3) {
            setIndex(3);
        } else if (size[1] * 3.5 < e.scrollTop && e.scrollTop < size[1] * 4.5 && index !== 4) {
            setIndex(4);
        } else if (size[1] * 4.5 < e.scrollTop && e.scrollTop < size[1] * 6.5) {
            setIndex(0);
        } else if (e.scrollTop < size[1] * 0.51) {
            setIndex(0);
        }
    }

    React.useLayoutEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const handleSpeakerHover = (state) => {
        if (state) {
            setSpeakerHover(true);
        } else {
            setSpeakerHover(false);
        }
    }

    React.useEffect(() => {
        if (cursorRef && scrollRef) {
            document.addEventListener('mousemove', e => {
                if (size[1] < e.pageY + scrollRef.current.getScrollTop() && e.pageY + scrollRef.current.getScrollTop() < size[1] * 2) {
                    setText("CLICK");
                    setCircle(true);
                } else if (size[1] * 2 < e.pageY + scrollRef.current.getScrollTop() && e.pageY + scrollRef.current.getScrollTop() < size[1] * 3) {
                    setText("REVEAL");
                    setCircle(true);
                } else {
                    setText("");
                    setCircle(false);
                }
            })
        }
    }, [cursorRef]);

    const stiff = { mass: 1, tension: 170, friction: 26 }
    const slow = { mass: 5, tension: 200, friction: 50 }
    const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;
    const [trail, set] = useTrail(1, () => ({ xy: [0, 0], config: i => (i === 0 ? stiff : slow) }))

    const cursorSpring = useSpring({
        to: {
            height: text === "REVEAL" ? `${142 / 1920 * size[0]}px` : speakerHover ? `${142 / 1920 * size[0]}px` : "0px",
            width: text === "REVEAL" ? `${142 / 1920 * size[0]}px` : speakerHover ? `${142 / 1920 * size[0]}px` : "0px",
            opacity: text === "REVEAL" ? 1 : speakerHover ? 1 : 0
        },
        from: { height: `0px`, width: `0px`, opacity: 0 }
    });

    const handleNavItemClick = (navIndex) => {
        if (scrollRef) {
            console.log(scrollRef)
            if (navIndex === 0) {
                if (index === 1) {
                    scrollRef.current.view.scroll({ top: size[1] * 2, behavior: 'smooth' });
                    setIndex(2);
                } else if (index === 2) {
                    scrollRef.current.view.scroll({ top: size[1] * 4.1, behavior: 'smooth' });
                    setIndex(4);
                } else {
                    scrollRef.current.view.scroll({ top: size[1], behavior: 'smooth' });
                    setIndex(1);
                }
            }
        }
    }

    return (
        <div onMouseMove={e => set({ xy: [e.pageX, e.pageY] })} style={{ cursor: text === "REVEAL" ? "move" : speakerHover ? "move" : "auto" }}>
            <Header
                index={index}
                size={size}
                handleNavItemClick={(index) => handleNavItemClick(index)}
            />
            {trail.map((props, index) => (
                <animated.div key={index} ref={cursorRef} style={{
                    ...cursorSpring, transform: props.xy.interpolate(trans), position: "absolute",
                    font: `normal normal bold ${27 / 1920 * size[0]}px/${33 / 1920 * size[0]}px Helvetica Neue`, letterSpacing: `${2.7 / 1920 * size[0]}`, zIndex: 1020,
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
                style={{ height: `${size[1]}px` }}
                thumbSize={50}
                onScrollFrame={handleScroll}
            >
                <div style={{ background: "black" }}>
                    <Curtains
                        pixelRatio={Math.min(1.5, window.devicePixelRatio)}
                        autoRender={false}
                    >
                        <CurtainContent
                            size={size}
                        />
                    </Curtains>
                    <SectionRed
                        size={size}
                        playing={playing}
                        handlePlay={() => handlePlay()}
                        handleSpeakerHover={(state) => handleSpeakerHover(state)}
                        handleTryMarginChange={(pos) => handleTryMarginChange(pos)}
                        handleDemoPosChange={(pos) => handleDemoPosChange(pos)}
                        tryPos={tryMargin}
                        demoPos={demoPos}
                    />
                    <SectionYellow
                        size={size}
                        tryPos={tryMargin}
                        demoPos={demoPos}
                    />
                    <Perks
                        size={size}
                        tryPos={tryMargin}
                        demoPos={demoPos}
                    />
                    <Review
                        size={size}
                        tryPos={tryMargin}
                        demoPos={demoPos}
                    />
                    <SectionGet
                        size={size}
                        tryPos={tryMargin}
                        demoPos={demoPos}
                    />
                    <SectionFooter
                        size={size}
                        tryPos={tryMargin}
                        demoPos={demoPos}
                    />
                </div>
            </Scrollbars>
        </div>
    )
}

export default React.memo(LandingPage);