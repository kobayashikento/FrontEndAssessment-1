import React from 'react';

import SectionRed from '../Sections/SectionRed';
import SectionYellow from '../Sections/SectionYellow';
import Perks from '../Sections/Perks';
import SectionGet from '../Sections/SectionGet';
import SectionFooter from '../Sections/SectionFooter';
import CurtainVideo from '../Components/CurtainVideo';
import SectionReview from '../Sections/SectionReview';

import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar';

import { animated, useTrail, useSpring } from 'react-spring';

import { Typography, Dialog } from '@material-ui/core';

import useMediaQuery from '@material-ui/core/useMediaQuery';

// Redux
import { connect } from 'react-redux';
import { setClickIndex, setHeroLeave, setMenuIndex, setNavIndex, setShowNavText } from '../Redux/actions/propertyAction';

import { useGesture } from 'react-use-gesture';

import '../Assets/styles/landingPage.css';
import '../Assets/styles/yellow.css';

import gambino from '../Assets/pictures/Yellow/gambino_s.png';
import empty_set from '../Assets/pictures/Footer/blue_stage.jpeg';

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

class DisableScrollPlugin extends ScrollbarPlugin {
    static pluginName = 'disableScroll';

    static defaultOptions = {
        direction: null,
    };

    transformDelta(delta) {
        if (this.options.direction) {
            delta[this.options.direction] = 0;
        }

        return { ...delta };
    }
}

const LandingPage = (props) => {
    const [initScroller, setInitScroller] = React.useState(false);
    const [renderYellow, setRenderYellow] = React.useState(false);
    const [renderPerks, setRenderPerks] = React.useState(false);
    const [renderGet, setRenderGet] = React.useState(false);
    const [renderReview, setRenderReview] = React.useState(false);
    const [hover, setHover] = React.useState(0);

    const matches = useMediaQuery('(min-width:1024px)', { noSsr: true });

    //refs
    const scrollRef = React.useRef();
    const [scrollBar, setScrollBar] = React.useState(null);

    const [expandCircle, setExpandCircle] = React.useState(false);

    const [cursor, setCursor] = React.useState(null);

    const mouseRef = React.useCallback((cursorNode) => {
        setCursor(cursorNode);
    }, []);

    React.useEffect(() => {
        if (matches) {
            props.setShowNavText(true);
            gsap.registerPlugin(ScrollTrigger);
        }
    }, [])

    React.useEffect(() => {
        if (initScroller && scrollRef) {
            props.setClickIndex(true);
            Scrollbar.use(DisableScrollPlugin)
            let bodyScrollBar = Scrollbar.init(scrollRef.current, { damping: 0.2, plugins: { disableScroll: { direction: 'x' } } });
            setScrollBar(bodyScrollBar);
            bodyScrollBar.track.xAxis.element.remove();
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

            for (let i = 0; i < 4; i++) {
                ScrollTrigger.create({
                    start: i === 0 ? window.innerHeight : i === 1 ? window.innerHeight * 1.5
                        : i === 2 ? panels[2].offsetTop : panels[3].offsetTop * 0.9,
                    end: i === 0 ? window.innerHeight * 1.9 : i === 1 ? window.innerHeight * 2.5
                        : i === 2 ? panels[3].offsetTop : panels[3].offsetTop * 1.8,
                    onEnter: () => {
                        switch (i) {
                            case 0:
                                setRenderYellow(true);
                                props.setMenuIndex(2);
                                break;
                            case 1:
                                setRenderPerks(true);
                                props.setMenuIndex(3);
                                break;
                            case 2:
                                setRenderReview(true);
                                props.setMenuIndex(4);
                                break;
                            case 3:
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
                                props.setMenuIndex(3);
                                break;
                            case 2:
                                props.setMenuIndex(4);
                                break;
                            default:
                        }
                    },
                })
            }

            ScrollTrigger.create({
                end: window.innerHeight,
                onEnterBack: () => {
                    props.setMenuIndex(1);
                },
            })
        }
    }, [initScroller])

    const bind = useGesture({
        onMove: ({ xy }) => {
            if (scrollBar === null) {
                cursor.setAttribute('style', 'transform:translate(' + xy[0] + 'px,' + xy[1] + 'px)');
            } else {
                cursor.setAttribute('style', 'transform:translate(' + xy[0] + 'px,' + (xy[1] + scrollBar.scrollTop) + 'px)');
            }
        },
        onWheel: ({ wheeling, direction }) => {
            if (wheeling && direction[1] === 1) {
                if (!props.heroLeave) {
                    props.setHeroLeave(true);
                }
                props.setShowNavText(false);
            } else if (wheeling && direction[1] === -1) {
                props.setShowNavText(true);
            }
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
                scrollBar.scrollTo(0, window.innerHeight * 1.65, 600);
                props.setNavIndex(false);
                break;
            case 4:
                scrollBar.scrollTo(0, panels[2].offsetTop, 600);
                props.setNavIndex(false);
                break;
            case 5:
                scrollBar.scrollTo(0, panels[3].offsetTop, 600);
                props.setNavIndex(false);
                break;
            default:
        }
    }

    const handleExpandCircle = (state) => {
        setExpandCircle(state);
    }

    const circleSize = useSpring({
        to: { transform: expandCircle ? "scale(3)" : "scale(1)", backgroundColor: props.menuIndex === 2 ? "rgba(46, 255, 246, 0.8)" : "white" },
        from: { transform: "scale(1)" }
    });

    return (
        matches ?
            <div className="body" ref={scrollRef} {...bind()} style={{ overflow: "auto", background: "black" }}>
                {/* Initial Video LandingPage */}
                <div ref={mouseRef} style={circleSize} className="theBall-outer"><animated.div style={circleSize} className="theBall"  ></animated.div></div>
                <section className="sec1" style={{ height: "100vh", width: "100vw", overflow: "hidden", zIndex: 50 }}>
                    <CurtainVideo
                        handleInitScroller={(state) => handleInitScroller(state)}
                        handleExpandCircle={(state) => handleExpandCircle(state)}
                    />
                </section>
                <section className="pSection" style={{
                    position: "absolute", top: "0", right: "0", width: "100vw", height: "130vh", backgroundColor: "rgb(25,25,25)",
                    boxShadow: "0px 10px 44px 0px rgb(0 0 0 / 50%)", zIndex: 5
                }} >
                    <SectionRed
                        cursor={cursor}
                        handleExpandCircle={(state) => handleExpandCircle(state)}
                    />
                </section>
                <section className="panel yellow" id="hero" style={{ position: "absolute", top: "90vh", width: "100vw", height: "200vh", zIndex: 1 }}>
                    <div className='layer-bg layer parallax' data-depth='0.10'></div>
                    <div className='layer-2 layer parallax' data-depth='0.20'></div>
                    <div className='layer-1 layer parallax' data-depth='0.40'></div>
                    <div className='layer-3 layer parallax' data-depth='0.60'></div>
                    <div className='layer-4 layer parallax' data-depth='0.70'></div>
                    <div className='layer-5 layer parallax' data-depth='0.80' onMouseEnter={() => handleExpandCircle(true)} onMouseLeave={() => handleExpandCircle(false)}></div>
                    <div className='layer parallax' data-depth='3.0' style={{ marginTop: "10%" }} ><SectionYellow render={renderYellow} handleExpandCircle={() => handleExpandCircle()} /></div>
                    <section className="panel perks layer parallax" data-depth='2.7' style={{ marginTop: "30%" }}>
                        <Perks render={renderPerks} />
                    </section>
                </section>
                <section className="panel review" style={{ position: "absolute", top: "290vh", width: "100vw", zIndex: 3 }}>
                    <SectionReview render={renderReview} handleExpandCircle={(state) => handleExpandCircle(state)}/>
                </section>
                <div className="panel get" style={{
                    backgroundImage: `url(${empty_set})`, backgroundSize: "cover", backgroundColor: "#847c7c", backgroundPosition: "center bottom", backgroundBlendMode: "multiply",
                    position: "absolute", top: "390vh", width: "100%", height: "110vh", zIndex: 10
                }}>
                    <section>
                        <SectionGet render={renderGet} handleExpandCircle={(state) => handleExpandCircle(state)}/>
                    </section>
                    <section style={{ position: "absolute", width: "100vw", backgroundColor: "black" }}>
                        <SectionFooter />
                    </section>
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
            </div>
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