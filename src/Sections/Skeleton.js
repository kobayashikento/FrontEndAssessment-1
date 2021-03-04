import React from 'react';

// Sections
import Hero from './ProductPage/Hero';
import SectionRed from './ProductPage/SectionRed';
import SectionYellow from './ProductPage/SectionYellow';
import SectionPerks from './ProductPage/SectionPerks';
import SectionReview from './ProductPage/SectionReview';
import SectionGet from './ProductPage/SectionGet';
import SectionFooter from './SectionFooter';


import Drawer from '../Components/Drawer';

// Scrollbar
import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar';

// React-Spring
import { animated, useTrail, useSpring } from 'react-spring';

// Material UI
import { Typography, Dialog } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// Redux
import { connect } from 'react-redux';
import { setClickIndex, setHeroLeave, setMenuIndex, setNavIndex, setShowNavText } from '../Redux/actions/propertyAction';

// Use-Gesture
import { useGesture } from 'react-use-gesture';

import '../Assets/styles/skeleton.css';
import '../Assets/styles/yellow.css';
import empty_set from '../Assets/pictures/Footer/blue_stage.jpeg';

// gsap
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

const Skeleton = (props) => {
    const [initScroller, setInitScroller] = React.useState(false);
    const [renderYellow, setRenderYellow] = React.useState(false);
    const [renderPerks, setRenderPerks] = React.useState(false);
    const [renderGet, setRenderGet] = React.useState(false);
    const [renderReview, setRenderReview] = React.useState(false);

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

            gsap.to(".red", {
                yPercent: -20,
                ease: "Power1.easeOut",
                scrollTrigger: {
                    trigger: ".hero",
                    start: "top bottoom", // the default values
                    scrub: true,
                },
            });
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#yellow",
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
                    start: i === 0 ? window.innerHeight * 0.8 : i === 1 ? window.innerHeight * 1.5
                        : i === 2 ? panels[2].offsetTop * 0.8 : panels[3].offsetTop * 0.8,
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
                <div ref={mouseRef} className="theBall-outer" style={circleSize}><animated.div style={circleSize} className="theBall"  ></animated.div></div>
                <section className="hero">
                    <Hero
                        handleInitScroller={(state) => handleInitScroller(state)}
                        handleExpandCircle={(state) => handleExpandCircle(state)}
                    />
                </section>
                <section className="red">
                    <SectionRed
                        cursor={cursor}
                        handleExpandCircle={(state) => handleExpandCircle(state)}
                    />
                </section>
                <section className="panel yellow" id="yellow">
                    <div className='layer-bg layer parallax' data-depth='0.10' />
                    <div className='layer-2 layer parallax' data-depth='0.20' />
                    <div className='layer-1 layer parallax' data-depth='0.40' />
                    <div className='layer-3 layer parallax' data-depth='0.60' />
                    <div className='layer-4 layer parallax' data-depth='0.70' />
                    <div className='layer-5 layer parallax' data-depth='0.80' onMouseEnter={() => handleExpandCircle(true)} onMouseLeave={() => handleExpandCircle(false)}></div>
                    <div className='layer parallax' data-depth='3.0' style={{ marginTop: "10%", zIndex: 10 }} >
                        <SectionYellow render={renderYellow} handleExpandCircle={(state) => handleExpandCircle(state)} />
                    </div>
                    <section className="panel perks layer parallax" data-depth='2.7' style={{ marginTop: "30%" }}>
                        <SectionPerks render={renderPerks} />
                    </section>
                </section>
                <section className="panel review" style={{ position: "absolute", top: "290vh", width: "100vw", zIndex: 3 }}>
                    <SectionReview render={renderReview} handleExpandCircle={(state) => handleExpandCircle(state)} />
                </section>
                <div className="panel get" style={{
                    backgroundImage: `url(${empty_set})`, backgroundSize: "cover", backgroundColor: "#847c7c", backgroundPosition: "center bottom", backgroundBlendMode: "multiply",
                    position: "absolute", top: "390vh", width: "100%", height: "110vh", zIndex: 10
                }}>
                    <section>
                        <SectionGet render={renderGet} handleExpandCircle={(state) => handleExpandCircle(state)} />
                    </section>
                    <section style={{ position: "absolute", width: "100vw", backgroundColor: "black" }}>
                        <SectionFooter />
                    </section>
                </div>
                <Drawer handleNavClick={(index) => handleNavClick(index)} />
            </div>
            :
            <div ref={scrollRef} style={{ width: "100vw", height: "100vh", overflow: "auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Typography align="center" variant="h6" style={{ color: "white", width: "60%" }}>
                    Currently Working on the mobile version, come back later!
                    </Typography>
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

export default connect(mapStateToProps, mapDispatchToProps)(Skeleton);