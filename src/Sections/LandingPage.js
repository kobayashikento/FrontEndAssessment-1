import React from 'react';

import SectionRed from '../Sections/SectionRed';
import SectionYellow from '../Sections/SectionYellow';
import Perks from '../Sections/Perks';
import SectionGet from '../Sections/SectionGet';
import SectionFooter from '../Sections/SectionFooter';
import CurtainVideo from '../Components/CurtainVideo';
import SectionReview from '../Sections/SectionReview';

import Scrollbar from 'smooth-scrollbar';

import { animated, useTrail, useSpring } from 'react-spring';

import { Typography, Dialog } from '@material-ui/core';

import useMediaQuery from '@material-ui/core/useMediaQuery';

// Redux
import { connect } from 'react-redux';
import { setClickIndex, setHeroLeave, setMenuIndex, setNavIndex, setShowNavText } from '../Redux/actions/propertyAction';

import { useWheel } from 'react-use-gesture';

import '../Assets/styles/landingPage.css';
import '../Assets/styles/yellow.css';
import gambino from '../Assets/pictures/Yellow/gambino_s.png';

import gsap from 'gsap';

import { ScrollTrigger } from "gsap/ScrollTrigger";

const Trail = ({ open, children, ...props }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        opacity: open ? 1 : 0,
        x: open ? 0 : 35,
        from: { opacity: 0, x: 35 },
    })

    return (
        <div {...props}>
            <div style={{ display: "flex", marginLeft: "4rem" }}>
                {trail.map(({ x, height, ...rest }, index) => (
                    <animated.div
                        key={items[index].key}
                        style={{ ...rest, transform: x.interpolate((x) => `translate3d(${x}px,0,0)`) }}>
                        <Typography className="text" style={{
                            textAlign: "left", fontSize: "calc(28px + (32 - 28) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "normal", fontStyle: "normal",
                            fontFamily: "DINNextLTPro-Medium"
                        }} >{items[index]}</Typography>
                    </animated.div>
                ))}
            </div>
        </div>
    )
}

const Trail1 = ({ open, children, ...props }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        opacity: open ? 1 : 0,
        x: open ? 0 : 35,
        from: { opacity: 0, x: 35 },
        delay: 200
    })

    return (
        <div {...props}>
            <div style={{ display: "flex", marginLeft: "4rem" }}>
                {trail.map(({ x, height, ...rest }, index) => (
                    <animated.div
                        key={items[index].key}
                        style={{ ...rest, transform: x.interpolate((x) => `translate3d(${x}px,0,0)`) }}>
                        <Typography className="text" style={{
                            textAlign: "left", fontSize: "calc(28px + (32 - 28) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "normal", fontStyle: "normal",
                            fontFamily: "DINNextLTPro-Medium"
                        }} >{items[index]}</Typography>
                    </animated.div>
                ))}
            </div>
        </div>
    )
}

const Trail2 = ({ open, children, ...props }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        opacity: open ? 1 : 0,
        x: open ? 0 : 35,
        from: { opacity: 0, x: 35 },
        delay: 400
    })

    return (
        <div {...props}>
            <div style={{ display: "flex", marginLeft: "4rem" }}>
                {trail.map(({ x, height, ...rest }, index) => (
                    <animated.div
                        key={items[index].key}
                        style={{ ...rest, transform: x.interpolate((x) => `translate3d(${x}px,0,0)`) }}>
                        <Typography className="text" style={{
                            textAlign: "left", fontSize: "calc(28px + (32 - 28) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "normal", fontStyle: "normal",
                            fontFamily: "DINNextLTPro-Medium"
                        }} >{items[index]}</Typography>
                    </animated.div>
                ))}
            </div>
        </div>
    )
}

const Trail3 = ({ open, children, ...props }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        opacity: open ? 1 : 0,
        x: open ? 0 : 35,
        from: { opacity: 0, x: 35, },
        delay: 600
    })

    return (
        <div {...props}>
            <div style={{ display: "flex", marginLeft: "4rem" }}>
                {trail.map(({ x, height, ...rest }, index) => (
                    <animated.div
                        key={items[index].key}
                        style={{ ...rest, transform: x.interpolate((x) => `translate3d(${x}px,0,0)`) }}>
                        <Typography className="text" style={{
                            textAlign: "left", fontSize: "calc(28px + (32 - 28) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "normal", fontStyle: "normal",
                            fontFamily: "DINNextLTPro-Medium"
                        }} >{items[index]}</Typography>
                    </animated.div>
                ))}
            </div>
        </div>
    )
}

const Trail4 = ({ open, children, ...props }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        opacity: open ? 1 : 0,
        x: open ? 0 : 35,
        from: { opacity: 0, x: 35 },
        delay: 800
    })

    return (
        <div {...props}>
            <div style={{ display: "flex", marginLeft: "4rem" }}>
                {trail.map(({ x, height, ...rest }, index) => (
                    <animated.div
                        key={items[index].key}
                        style={{ ...rest, transform: x.interpolate((x) => `translate3d(${x}px,0,0)`) }}>
                        <Typography className="text" style={{
                            textAlign: "left", fontSize: "calc(28px + (32 - 28) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "normal", fontStyle: "normal",
                            fontFamily: "DINNextLTPro-Medium"
                        }} >{items[index]}</Typography>
                    </animated.div>
                ))}
            </div>
        </div>
    )
}

const LandingPage = (props) => {
    const [initScroller, setInitScroller] = React.useState(false);
    const [renderYellow, setRenderYellow] = React.useState(false);
    const [renderPerks, setRenderPerks] = React.useState(false);
    const [renderGet, setRenderGet] = React.useState(false);
    const [renderReview, setRenderReview] = React.useState(false);
    const [hover, setHover] = React.useState(0);

    const matches = useMediaQuery('(min-width:1200px)', { noSsr: true });

    //refs
    const scrollRef = React.useRef();
    const [scrollBar, setScrollBar] = React.useState(null);

    React.useEffect(() => {
        if (matches) {
            props.setShowNavText(true);
            gsap.registerPlugin(ScrollTrigger);
        } else {
            let bodyScrollBar = Scrollbar.init(scrollRef.current, { damping: 1 });
        }
    }, [])

    React.useEffect(() => {
        if (initScroller && scrollRef) {
            props.setClickIndex(true);
            let bodyScrollBar = Scrollbar.init(scrollRef.current, { damping: 1.0 });
            setScrollBar(bodyScrollBar);
            ScrollTrigger.scrollerProxy(scrollRef.current, {
                scrollTop(value) {
                    if (arguments.length) {
                        bodyScrollBar.scrollTop = value;
                    }
                    return bodyScrollBar.scrollTop;
                }
            });

            bodyScrollBar.addListener(ScrollTrigger.update);

            ScrollTrigger.defaults({ scroller: scrollRef.current });

            gsap.to(".pSection", {
                yPercent: -20,
                ease: "Power1.easeOut",
                scrollTrigger: {
                    trigger: ".sec1",
                    start: "top bottoom", // the default values
                    scrub: true,
                },
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    pin: true
                }
            });

            gsap.utils.toArray(".parallax").forEach(layer => {
                const depth = layer.dataset.depth;
                const movement = -(layer.offsetHeight * depth)
                tl.to(layer, { y: movement, ease: "none" }, 0)
            });

            const panels = gsap.utils.toArray(".panel");

            panels.forEach((panel, i) => {
                ScrollTrigger.create({
                    start: i === 0 ? window.innerHeight * 0.8 : panel.offsetTop * 0.8,
                    end: i === 0 ? panels[2].offsetTop * 0.9 : panel.offsetTop + window.innerHeight,
                    onEnter: () => {
                        switch (i) {
                            case 0:
                                setRenderYellow(true);
                                props.setMenuIndex(2);
                                break;
                            case 2:
                                setRenderPerks(true);
                                props.setMenuIndex(3);
                                break;
                            case 3:
                                setRenderReview(true);
                                props.setMenuIndex(4);
                                break;
                            case 4:
                                setRenderGet(true);
                                props.setMenuIndex(5);
                                break;
                            default:
                        }
                    },
                    onEnterBack: () => {
                        switch (i) {
                            case 0:
                                props.setMenuIndex(2);
                                break;
                            case 1:
                                props.setMenuIndex(1);
                                break;
                            case 2:
                                props.setMenuIndex(3);
                                break;
                            case 3:
                                props.setMenuIndex(4);
                                break;
                            case 4:
                                props.setMenuIndex(5);
                                break;
                            default:
                        }
                    },
                })
            })
        }
    }, [initScroller])

    const bind = useWheel(({ wheeling, direction }) => {
        if (wheeling && direction[1] === 1) {
            if (!props.heroLeave) {
                props.setHeroLeave(true);
            }
            props.setShowNavText(false);
        } else if (wheeling && direction[1] === -1) {
            props.setShowNavText(true);
        }
    })

    const handleInitScroller = (state) => {
        setInitScroller(state);
    }

    let modalSpring = useSpring({
        to: { opacity: props.navIndex ? 1 : 0 },
        from: { opacity: 0 }
    })

    const handleNavClick = (index) => {
        const panels = gsap.utils.toArray(".panel");
        switch (index) {
            case 1:
                scrollBar.scrollTo(0, 0, 600);
                props.setNavIndex(false);
                break;
            case 2:
                scrollBar.scrollTo(0, window.innerHeight * 1.1, 600);
                props.setNavIndex(false);
                break;
            case 3:
                scrollBar.scrollTo(0, panels[2].offsetTop * 1.1, 600);
                props.setNavIndex(false);
                break;
            case 4:
                scrollBar.scrollTo(0, panels[3].offsetTop, 600);
                props.setNavIndex(false);
                break;
            case 5:
                scrollBar.scrollTo(0, panels[4].offsetTop, 600);
                props.setNavIndex(false);
                break;
            default:
        }
    }

    return (
        matches ?
            <div className="body" ref={scrollRef} {...bind()} style={{ width: "100vw", height: "100vh", overflow: "auto" }}>
                <div className="sec1" style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "absolute", zIndex: 50 }}>
                    <CurtainVideo
                        handleInitScroller={(state) => handleInitScroller(state)}
                    />
                </div>
                <div className="panel yellow" id="hero" style={{ position: "absolute", top: "100vh", width: "100vw", height: "100vh" }}>
                    <div class='layer-bg layer parallax' data-depth='0.10'></div>
                    <div class='layer-2 layer parallax' data-depth='0.20'></div>
                    <div class='layer-1 layer parallax' data-depth='0.40'></div>
                    <div class='layer-3 layer parallax' data-depth='0.60'></div>
                    <div class='layer-4 layer parallax' data-depth='0.70'></div>
                    <div class='layer parallax' data-depth='0.75' ><SectionYellow render={renderYellow} /></div>
                    <div class='layer-5 layer parallax' data-depth='0.80'></div>
                </div>
                <div className="pSection" style={{
                    position: "absolute", top: "0vh", width: "100vw", height: "130vh", backgroundColor: "rgb(25,25,25)",
                    boxShadow: "0px 10px 44px 0px rgb(0 0 0 / 50%)"
                }} />
                <div className="panel red" style={{ height: "100vh" }}>
                    <SectionRed />
                </div>
                <div className="panel perks" style={{ position: "absolute", top: "210vh", width: "100vw" }}>
                    <Perks render={renderPerks} />
                </div>
                <div className="panel review" style={{ position: "absolute", top: "365vh", width: "100vw", zIndex: 3 }}>
                    <SectionReview render={renderReview} />
                </div>
                <div className="panel get" style={{ position: "absolute", top: "455vh", width: "100vw" }}>
                    <SectionGet render={renderGet} />
                    <SectionFooter />
                </div>
                <Dialog fullScreen open={props.navIndex} PaperProps={{ style: { backgroundColor: 'transparent' } }}>
                    <animated.div style={{ ...modalSpring, height: "100vh", backgroundColor: "rgba(25,25,25, 0.9)", width: "100vw" }}>
                        <div style={{ height: "60vh", paddingTop: "20vh", display: "flex", flexDirection: "column", paddingLeft: "30%", justifyContent: "space-between" }}>
                            <div className="nav" style={{ display: "flex", cursor: "pointer" }} onMouseEnter={() => setHover(1)} onMouseLeave={() => setHover(0)} onClick={() => handleNavClick(1)}>
                                <Typography style={{
                                    textAlign: "left", fontSize: "calc(16px + (18 - 16) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "normal", fontStyle: "normal",
                                    fontFamily: "DINNextLTPro-Medium", color: props.menuIndex === 1 ? "white" : hover === 1 ? "white" : "#5F5E66"
                                }} >.01</Typography>
                                <Trail open={props.navIndex} >
                                    <span style={{ color: props.menuIndex === 1 ? "white" : hover === 1 ? "white" : "#5F5E66" }}>EXP</span>
                                    <span style={{ color: props.menuIndex === 1 ? "white" : hover === 1 ? "white" : "#5F5E66" }}>|</span>
                                    <span style={{ color: props.menuIndex === 1 ? "white" : hover === 1 ? "white" : "#5F5E66" }}>CON</span>
                                </Trail>
                            </div>
                            <div className="nav" style={{ display: "flex", cursor: "pointer" }} onMouseEnter={() => setHover(2)} onMouseLeave={() => setHover(0)} onClick={() => handleNavClick(2)}>
                                <Typography style={{
                                    textAlign: "left", fontSize: "calc(16px + (18 - 16) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "normal", fontStyle: "normal",
                                    fontFamily: "DINNextLTPro-Medium", color: props.menuIndex === 2 ? "white" : hover === 2 ? "white" : "#5F5E66"
                                }} >.02</Typography>
                                <Trail1 open={props.navIndex} >
                                    <span style={{ color: props.menuIndex === 2 ? "white" : hover === 2 ? "white" : "#5F5E66" }}>FRONT</span>
                                    <span>{'\u00A0'}</span>
                                    <span style={{ color: props.menuIndex === 2 ? "white" : hover === 2 ? "white" : "#5F5E66" }}>ROW</span>
                                    <span>{'\u00A0'}</span>
                                    <span style={{ color: props.menuIndex === 2 ? "white" : hover === 2 ? "white" : "#5F5E66" }}>SEATS</span>
                                </Trail1>
                            </div>
                            <div className="nav" style={{ display: "flex", cursor: "pointer" }} onMouseEnter={() => setHover(3)} onMouseLeave={() => setHover(0)} onClick={() => handleNavClick(3)}>
                                <Typography style={{
                                    textAlign: "left", fontSize: "calc(16px + (18 - 16) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "normal", fontStyle: "normal",
                                    fontFamily: "DINNextLTPro-Medium", color: props.menuIndex === 3 ? "white" : hover === 3 ? "white" : "#5F5E66"
                                }} >.03</Typography>
                                <Trail2 open={props.navIndex} >
                                    <span style={{ color: props.menuIndex === 3 ? "white" : hover === 3 ? "white" : "#5F5E66" }}>PERKS</span>
                                </Trail2>
                            </div>
                            <div className="nav" style={{ display: "flex", cursor: "pointer" }} onMouseEnter={() => setHover(4)} onMouseLeave={() => setHover(0)} onClick={() => handleNavClick(4)}>
                                <Typography style={{
                                    textAlign: "left", fontSize: "calc(16px + (18 - 16) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "normal", fontStyle: "normal",
                                    fontFamily: "DINNextLTPro-Medium", color: props.menuIndex === 4 ? "white" : hover === 4 ? "white" : "#5F5E66"
                                }} >.04</Typography>
                                <Trail3 open={props.navIndex} >
                                    <span style={{ color: props.menuIndex === 4 ? "white" : hover === 4 ? "white" : "#5F5E66" }}>REVIEWS</span>
                                </Trail3>
                            </div>
                            <div className="nav" style={{ display: "flex", cursor: "pointer" }} onMouseEnter={() => setHover(5)} onMouseLeave={() => setHover(0)} onClick={() => handleNavClick(5)}>
                                <Typography style={{
                                    textAlign: "left", fontSize: "calc(16px + (18 - 16) * ((100vw - 300px) / (1600 - 300)))", fontWeight: "normal", fontStyle: "normal",
                                    fontFamily: "DINNextLTPro-Medium", color: props.menuIndex === 5 ? "white" : hover === 5 ? "white" : "#5F5E66"
                                }} >.05</Typography>
                                <Trail4 open={props.navIndex} >
                                    <span style={{ color: props.menuIndex === 5 ? "white" : hover === 5 ? "white" : "#5F5E66" }}>GET</span>
                                    <span>{'\u00A0'}</span>
                                    <span style={{ color: props.menuIndex === 5 ? "white" : hover === 5 ? "white" : "#5F5E66" }}>EXP|CON</span>
                                </Trail4>
                            </div>
                        </div>
                    </animated.div>
                </Dialog>
            </div >
            :
            <div ref={scrollRef} style={{ width: "100vw", height: "100vh", overflow: "auto" }}>
                <CurtainVideo
                    handleInitScroller={(state) => handleInitScroller(state)}
                    matches={matches}
                />
                <div className="panel red" style={{ height: "50vh", top: "90vh", position: "absolute", width: "100vw", overflow: "hidden" }}>
                    <SectionRed />
                </div>
                <div style={{
                    backgroundImage: `url(${gambino})`, backgroundSize: "cover", height: "100vh", position: "absolute", top: "140vh", width: "100vw"
                }} />
                <div className="panel yellow" style={{ position: "absolute", top: "140vh", width: "100vw", height: "100vh" }}>
                    <SectionYellow render={true} />
                </div>
                <div className="panel perks" style={{ position: "absolute", top: "240vh", width: "100vw" }}>
                    <Perks render={true} />
                </div>
                <div className="panel review" style={{ position: "absolute", top: "340vh", width: "100vw" }}>
                    <SectionReview render={true} />
                </div>
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
        menuIndex: state.propertyReducer.menuIndex,
        size: state.propertyReducer.size,
        navIndex: state.propertyReducer.navIndex,
        clickIndex: state.propertyReducer.clickIndex,
        heroLeave: state.propertyReducer.heroLeave
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMenuIndex: (index) => dispatch(setMenuIndex(index)),
        setNavIndex: (index) => dispatch(setNavIndex(index)),
        setShowNavText: (boolean) => dispatch(setShowNavText(boolean)),
        setHeroLeave: (boolean) => dispatch(setHeroLeave(boolean)),
        setClickIndex: (boolean) => dispatch(setClickIndex(boolean))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);