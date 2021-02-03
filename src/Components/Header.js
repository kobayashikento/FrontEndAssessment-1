import React from 'react';

// import dependencies
import DehazeIcon from '@material-ui/icons/Dehaze';
import { IconButton, Button, Typography } from '@material-ui/core';

import { Trail } from 'react-spring/renderprops'

import { useSpring, animated, useTransition } from 'react-spring'

import { Link, useHistory } from "react-router-dom";

// Redux
import { connect } from 'react-redux';
import { setMenuIndex, setSize, setNavIndex, setClickIndex } from '../Redux/actions/propertyAction';

const Header = (props) => {
    const history = useHistory();
    const wrapperRef = React.useRef(null);
    const innerWrapperRef = React.useRef(null);

    // states
    const [navOpen, setNavOpen] = React.useState(false);
    const [itemsOpen, setItemsOpen] = React.useState(false);
    const [headIconsColor, setHeadIconsColor] = React.useState("#FFFFFF");
    const [highlight, setHighlight] = React.useState("#FFFFFF");
    const [defaultColor, setDefaultColor] = React.useState("#FFFFFF");
    const [showWhat, setShowWhat] = React.useState(false);
    const [showPerks, setShowPerks] = React.useState(false);
    const [showPricing, setShowPricing] = React.useState(false);
    const [pricingOpen, setPricingOpen] = React.useState(false);
    const [expandCircle, setExpandCircle] = React.useState(false);

    //listen to size change 
    React.useLayoutEffect(() => {
        const updateSize = () => {
            props.setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => {
            window.removeEventListener('resize', updateSize);
        }
    }, []);

    React.useEffect(() => {
        const listener = event => {
            if (!wrapperRef.current || wrapperRef.current.contains(event.target)) {
            } else {
                if (!innerWrapperRef.current || innerWrapperRef.current.contains(event.target)) {
                } else {
                    if (navOpen) {
                        setItemsOpen(false);
                        setNavOpen(false);
                    }
                }
            }
        };
        window.addEventListener("mousedown", listener);
        window.addEventListener("touchstart", listener);
        return () => {
            window.removeEventListener("mousedown", listener);
            window.removeEventListener("touchstart", listener);
        }
    }, [navOpen])

    // react components for menu list
    const items = [
        {
            key: 0, content: <Button style={{ padding: "0px", backgroundColor: "transparent" }} onClick={() => handleNavItemClick(0)}>
                <Typography onMouseEnter={() => setShowWhat(true)} onMouseLeave={() => setShowWhat(false)} style={{
                    textAlign: "left", font: `normal normal bold ${47 / 1920 * props.size[0]}px/${57 / 1920 * props.size[0]}px Helvetica Neue`,
                    color: props.navIndex === 1 ? highlight : showWhat ? highlight : defaultColor, letterSpacing: `${4.7 / 1920 * props.size[0]}px`,
                }}>
                    WHAT IS IT
                    </Typography>
            </Button>
        },
        {
            key: 1,
            content: <Button style={{ padding: "0px", marginTop: `${12 / 1920 * props.size[0]}px`, backgroundColor: "transparent" }}
                onClick={() => handleNavItemClick(1)}>
                <Typography onMouseEnter={() => setShowPerks(true)} onMouseLeave={() => setShowPerks(false)} style={{
                    textAlign: "left",
                    font: `normal normal bold ${47 / 1920 * props.size[0]}px/${57 / 1920 * props.size[0]}px Helvetica Neue`,
                    color: props.navIndex === 2 ? highlight : showPerks ? highlight : defaultColor, letterSpacing: `${4.7 / 1920 * props.size[0]}px`,
                }}>
                    PERKS
                        </Typography>
            </Button>
        },
        {
            key: 2,
            content: <Button style={{ padding: "0px", marginTop: `${12 / 1920 * props.size[0]}px`, backgroundColor: "transparent" }} onClick={() => handlePricingClick()}>
                <Link to="/pricing" style={{ textDecoration: "none" }}>
                    <Typography onMouseEnter={() => setShowPricing(true)} onMouseLeave={() => setShowPricing(false)} style={{
                        textAlign: "left",
                        font: `normal normal bold ${47 / 1920 * props.size[0]}px/${57 / 1920 * props.size[0]}px Helvetica Neue`,
                        color: props.navIndex === 3 ? highlight : showPricing ? highlight : defaultColor, letterSpacing: `${4.7 / 1920 * props.size[0]}px`,
                    }}>
                        PRICING
                    </Typography>
                </Link>
            </Button>
        }]

    const handleNavTextClick = () => {
        history.push("/");
        history.go(0);
    }

    // handle click event for menu item clicks
    const handleNavItemClick = (index) => {
        if (props.navIndex === 3 || props.menuIndex === 6) {
            if (index === 0) {
                history.push("/");
                setPricingOpen(false);
                props.setMenuIndex(1);
                props.setNavIndex(1);
                props.setClickIndex(1);
            } else if (index === 1) {
                setPricingOpen(false);
                props.setMenuIndex(3);
                props.setNavIndex(2);
                props.setClickIndex(3);
                history.push("/");
            }
        } else {
            if (index === 0) {
                if (props.menuIndex === 1) {
                    props.setMenuIndex(2);
                    props.setNavIndex(1);
                    props.setClickIndex(2);
                } else if (props.menuIndex === 2) {
                    props.setMenuIndex(4);
                    props.setNavIndex(1);
                    props.setClickIndex(4);
                } else {
                    props.setMenuIndex(1);
                    props.setNavIndex(1);
                    props.setClickIndex(1);
                }
            } else if (index === 1) {
                props.setMenuIndex(3);
                props.setNavIndex(2);
                props.setClickIndex(3);
                setShowPerks(false);
            }
        }
        handleNavClick();
    }

    // handle color change from scroll offset change 
    React.useEffect(() => {
        switch (props.menuIndex) {
            // 0 - default, 1 - red, 2 - yellow, 3 - perk, 4 - blue, 5 - pricing, 6 - payments
            case 0:
                setHeadIconsColor("#FFFFFF");
                setHighlight("#D34848");
                setDefaultColor("#FFFFFF");
                break;
            case 1:
                setHeadIconsColor("#D34848");
                setHighlight("#D34848");
                setDefaultColor("#FFFFFF");
                break;
            case 2:
                setHeadIconsColor("#FFB33F");
                setHighlight("#FFB33F");
                setDefaultColor("#FFFFFF");
                break;
            case 3:
                setHeadIconsColor("#FFFFFF");
                setHighlight("#000000");
                setDefaultColor("#FFFFFF");
                break;
            case 4:
                setHeadIconsColor("#1FE1E9");
                setHighlight("#1FE1E9");
                setDefaultColor("#FFFFFF");
                break;
            case 5:
                setHeadIconsColor("#D34848");
                setHighlight("#D34848");
                setDefaultColor("#FFFFFF");
                break;
            case 6:
                setHeadIconsColor("#D34848");
                setHighlight("#D34848");
                setDefaultColor("#FFFFFF");
                break;
            default:
        }
    }, [props.menuIndex]);

    // handle nav button click
    const handleNavClick = () => {
        if (!navOpen) {
            setNavOpen(true);
        } else if (navOpen) {
            setItemsOpen(false);
            setNavOpen(false);
        }
    }

    // call back to delay showing the list items
    const springCallback = () => {
        if (navOpen && !pricingOpen) {
            setItemsOpen(true);
        } else if (expandCircle) {
            setExpandCircle(false);
            setPricingOpen(false);
            setNavOpen(false);
        }
    }

    // animation the circle expansion
    let expandCircleSpring = useSpring({
        to: {
            transform: expandCircle ? "scale(5.5)" : navOpen ? "scale(1) " : "scale(0) ", left: navOpen ? `${-84 / 1920 * props.size[0]}px` : `${-682 / 1920 * props.size[0]}px`,
            top: navOpen ? `${-142 / 1920 * props.size[0]}` : `${-682 / 1920 * props.size[0]}`
        },
        from: { width: `${682 / 1920 * props.size[0]}px`, height: `${682 / 1920 * props.size[0]}px`, transform: "scale(0)", left: "-235px", top: "-235px", },
        onRest: () => springCallback()
    });

    // handle pricing click 
    const handlePricingClick = () => {
        setShowPerks(false);
        setItemsOpen(false);
        setExpandCircle(true);
        setPricingOpen(true);
    }

    const headerTextSpring = useSpring({
        to: { opacity: navOpen ? 1 : props.showNavText ? 1 : 0, zIndex: navOpen ? 2020 : props.showNavText ? 2020 : -1 },
        from: { opacity: 0 }
    })

    return (
        <div style={{ position: "fixed", zIndex: 2020 }}>
            <animated.div ref={wrapperRef} style={{ ...expandCircleSpring, background: props.navIndex === 2 ? "#1FE1E9" : "#0B0B0B", borderRadius: "50% 55% 48%", position: "absolute", boxShadow: "0px 3px 6px #00000029" }} />
            <div ref={innerWrapperRef} style={{ display: "flex", display: "flex", flexDirection: "column", position: "fixed", left: `${83 / 1920 * props.size[0]}px`, top: `${86.32 / 1080 * props.size[1]}px`, }}>
                <div style={{ display: "flex" }}>
                    <IconButton style={{ padding: "0px", borderRadius: "4px", backgroundColor: "transparent" }} onClick={() => handleNavClick()} >
                        <DehazeIcon style={{ color: navOpen ? headIconsColor : props.menuIndex === 6 ? "#0B0B0B" : defaultColor, fontSize: `${56 / 1920 * props.size[0]}px` }} />
                    </IconButton>
                    <animated.div style={headerTextSpring} onClick={() => handleNavTextClick()}>
                        <Typography style={{
                            textAlign: "left", font: `normal normal normal ${48 / 1920 * props.size[0]}px/${57 / 1920 * props.size[0]}px Helvetica Neue`, cursor: "pointer",
                            color: navOpen ? headIconsColor : props.menuIndex === 6 ? "#0B0B0B" : defaultColor, letterSpacing: `${4.8 / 1920 * props.size[0]}px`, marginLeft: `${37.87 / 1920 * props.size[0]}px`
                        }}>
                            EXP|CON
                    </Typography>
                    </animated.div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: `${29 / 1920 * props.size[0]}px` }}>
                    {itemsOpen ?
                        <Trail items={items} keys={item => item.key}
                            from={{ transform: `translate3d(0,${56 / 1920 * props.size[0]}px,0)`, opacity: 0 }}
                            to={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}>
                            {item => props => <span style={props}>{item.content}</span>}
                        </Trail>
                        : null}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        menuIndex: state.propertyReducer.menuIndex,
        size: state.propertyReducer.size,
        navIndex: state.propertyReducer.navIndex,
        showNavText: state.propertyReducer.showNavText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMenuIndex: (index) => dispatch(setMenuIndex(index)),
        setNavIndex: (index) => dispatch(setNavIndex(index)),
        setSize: (size) => dispatch(setSize(size)),
        setClickIndex: (index) => dispatch(setClickIndex(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);