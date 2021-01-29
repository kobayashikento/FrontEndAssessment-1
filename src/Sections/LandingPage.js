import React from 'react';

import { Curtains } from 'react-curtains';

import Header from '../Components/Header';
import CurtainContent from '../Sections/CurtainContent';
import SectionRed from '../Sections/SectionRed';
import SectionYellow from '../Sections/SectionYellow';
import Perks from '../Sections/Perks';
import Review from '../Sections/SectionReview';

import { useTrail, animated } from 'react-spring';

import '../Assets/styles/landingPage.css';

const LandingPage = () => {

    const [index, setIndex] = React.useState(0);
    const [size, setSize] = React.useState([window.innerWidth, window.innerHeight]);
    const [playing, setPlaying] = React.useState(false);
    const [text, setText] = React.useState("");
    const [circle, setCircle] = React.useState(false);

    //refs
    const cursorRef = React.useRef();

    const handlePlay = () => {
        setPlaying(!playing)
    }

    const handleScroll = () => {
        if (size[1] * 0.51 < window.scrollY && window.scrollY < size[1] * 1.5 && index !== 1) {
            setIndex(1);
        } else if (size[1] * 1.5 < window.scrollY && window.scrollY < size[1] * 2.5 && index !== 2) {
            setIndex(2);
        } else if (size[1] * 2.5 < window.scrollY && window.scrollY < size[1] * 3.5 && index !== 3) {
            setIndex(3);
        } else if (size[1] * 3.5 < window.scrollY && window.scrollY < size[1] * 4.5 && index !== 4) {
            setIndex(4);
        } else {
            setIndex(0);
        }
    }

    React.useLayoutEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        window.addEventListener('scroll', handleScroll);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    React.useEffect(() => {
        if (cursorRef) {
            document.addEventListener('mousemove', e => {
                if (size[1] < e.pageY && e.pageY < size[1] * 2) {
                    setText("CLICK");
                    setCircle(true);
                } else if (size[1] * 2 < e.pageY && e.pageY < size[1] * 3) {
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

    return (
        <div onMouseMove={e => set({ xy: [e.pageX, e.pageY] })} style={{ cursor: circle ? "move" : "auto" }}>
            <Header
                index={index}
                size={size}
            />
            {trail.map((props, index) => (
                <animated.div key={index} ref={cursorRef} style={{
                    transform: props.xy.interpolate(trans), position: "absolute", height: `${142 / 1920 * size[0]}px`, width: `${142 / 1920 * size[0]}px`,
                    font: `normal normal bold ${27 / 1920 * size[0]}px/${33 / 1920 * size[0]}px Helvetica Neue`, letterSpacing: `${2.7 / 1920 * size[0]}`, zIndex: 2023,
                    color: text === "REVEAL" ? "#000000" : "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%",
                    pointerEvents: "none", border: !circle ? "" : text === "REVEAL" ? "3px solid #000000" : "3px solid #ffffff" 
                }} >
                    {text}
                </animated.div>
            ))}
            <div className="node-master" style={{ background: "0% 0% no-repeat padding-box padding-box rgb(211, 72, 72)" }} >
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
                />
                <SectionYellow
                    size={size}
                />
                <Perks
                    size={size}
                />
                <Review
                    size={size}
                />
            </div>
        </div>

    )
}

export default React.memo(LandingPage);