import React from 'react';

// import dependencies
import DehazeIcon from '@material-ui/icons/Dehaze';
import { IconButton, Button, Typography } from '@material-ui/core';

import { Trail } from 'react-spring/renderprops'

import { useSpring, animated } from 'react-spring'

import { Link, useHistory } from "react-router-dom";

// Redux
import { connect } from 'react-redux';
import { setMenuIndex, setSize, setNavIndex } from '../Redux/actions/propertyAction';

function useOnClickOutside(ref, handler) {
    React.useEffect(() => {
        const listener = event => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }

            handler(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
}

const Header = (props) => {
    const history = useHistory();

    const wrapperRef = React.useRef(null);

    // states
    const [navOpen, setNavOpen] = React.useState(false);
    const [itemsOpen, setItemsOpen] = React.useState(false);
    const [firstColor, setFirstColor] = React.useState("#FFFFFF");
    const [secondColor, setSecondColor] = React.useState("#FFFFFF");
    const [thirdColor, setThirdColor] = React.useState("#FFFFFF");
    const [headIconsColor, setHeadIconsColor] = React.useState("#FFFFFF");
    const [highlight, setHighlight] = React.useState("#FFFFFF");
    const [defaultColor, setDefaultColor] = React.useState("#FFFFFF");
    const [showWhat, setShowWhat] = React.useState(false);
    const [showPerks, setShowPerks] = React.useState(false);
    const [showPricing, setShowPricing] = React.useState(false);
    const [pricingOpen, setPricingOpen] = React.useState(false);

    const handler = React.useCallback(() => handleNavClose(), []);
    //useOnClickOutside(wrapperRef, handler);

    //listen to size change 
    React.useLayoutEffect(() => {
        const updateSize = () => {
            props.setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const handleNavClose = () => {
        setNavOpen(false);
    }
    // react components for menu list
    const items = [
        {
            key: 1, content: <Button style={{ padding: "0px", backgroundColor: "transparent" }} onClick={() => handleNavItemClick(0)}>
                <Typography onMouseEnter={() => setShowWhat(true)} onMouseLeave={() => setShowWhat(false)} style={{
                    textAlign: "left", font: `normal normal bold ${47 / 1920 * props.size[0]}px/${57 / 1920 * props.size[0]}px Helvetica Neue`,
                    color: showWhat ? highlight : props.navIndex === 1 ? highlight : defaultColor,
                    letterSpacing: `${4.7 / 1920 * props.size[0]}px`,
                }}>
                    WHAT IS IT
                    </Typography>
            </Button>
        },
        {
            key: 2,
            content: <Button style={{ padding: "0px", marginTop: `${12 / 1920 * props.size[0]}px`, backgroundColor: "transparent" }} onClick={() => handleNavItemClick(1)}>
                <Typography onMouseEnter={() => setShowPerks(true)} onMouseLeave={() => setShowPerks(false)} style={{
                    textAlign: "left",
                    font: `normal normal bold ${47 / 1920 * props.size[0]}px/${57 / 1920 * props.size[0]}px Helvetica Neue`,
                    color: showPerks ? highlight : props.navIndex === 2 ? highlight : defaultColor, letterSpacing: `${4.7 / 1920 * props.size[0]}px`,
                }}>
                    PERKS
                        </Typography>
            </Button>
        },
        {
            key: 3,
            content: <Button style={{ padding: "0px", marginTop: `${12 / 1920 * props.size[0]}px`, backgroundColor: "transparent" }} onClick={() => handlePricingClick()}>
                <Link to="/pricing" style={{ textDecoration: "none" }}>
                    <Typography onMouseEnter={() => setShowPricing(true)} onMouseLeave={() => setShowPricing(false)} style={{
                        textAlign: "left",
                        font: `normal normal bold ${47 / 1920 * props.size[0]}px/${57 / 1920 * props.size[0]}px Helvetica Neue`,
                        color: showPricing ? highlight : props.navIndex === 3 ? highlight : defaultColor, letterSpacing: `${4.7 / 1920 * props.size[0]}px`,
                    }}>
                        PRICING
                    </Typography>
                </Link>
            </Button>
        }]

    // handle click event for menu item clicks
    const handleNavItemClick = (index) => {
        if (props.navIndex === 3) {
            if (index === 0) {
                props.setMenuIndex(0);
                props.setNavIndex(0);
                history.push("/");
            } else if (index === 1) {
                props.setMenuIndex(3);
                props.setNavIndex(2);
                history.push("/");
            }
        } else {
            if (index === 0) {
                if (props.menuIndex === 1) {
                    props.setMenuIndex(2);
                    props.setNavIndex(1);
                } else if (props.menuIndex === 2) {
                    props.setMenuIndex(4);
                    props.setNavIndex(1);
                } else {
                    props.setMenuIndex(1);
                    props.setNavIndex(1);
                }
            } else if (index === 1) {
                props.setMenuIndex(3);
                props.setNavIndex(2);
            }
        }
        handleNavClick();
    }

    // handle color change from scroll offset change 
    React.useEffect(() => {
        switch (props.menuIndex) {
            // 0 - default, 1 - red, 2 - yellow, 3 - perk, 4 - blue, 5 - pricing, 6 - payments
            case 0:
                setFirstColor("#FFFFFF");
                setSecondColor("#FFFFFF");
                setThirdColor("#FFFFFF");
                setHeadIconsColor("#FFFFFF");
                setHighlight("#D34848");
                setDefaultColor("#FFFFFF");
                break;
            case 1:
                setFirstColor("#D34848");
                setSecondColor("#FFFFFF");
                setThirdColor("#FFFFFF");
                setHeadIconsColor("#D34848");
                setHighlight("#D34848");
                setDefaultColor("#FFFFFF");
                break;
            case 2:
                setFirstColor("#FFB33F");
                setSecondColor("#FFFFFF");
                setThirdColor("#FFFFFF");
                setHeadIconsColor("#FFB33F");
                setHighlight("#FFB33F");
                setDefaultColor("#FFFFFF");
                break;
            case 3:
                setFirstColor("#FFFFFF");
                setSecondColor("#000000");
                setThirdColor("#FFFFFF");
                setHeadIconsColor("#FFFFFF");
                setHighlight("#000000");
                setDefaultColor("#FFFFFF");
                break;
            case 4:
                setFirstColor("#1FE1E9");
                setSecondColor("#FFFFFF");
                setThirdColor("#FFFFFF");
                setHeadIconsColor("#1FE1E9");
                setHighlight("#1FE1E9");
                setDefaultColor("#FFFFFF");
                break;
            case 5:
                setFirstColor("#FFFFFF");
                setSecondColor("#FFFFFF");
                setThirdColor("#D34848");
                setHeadIconsColor("#D34848");
                setHighlight("#D34848");
                setDefaultColor("#FFFFFF");
                break;
            case 6:
                setFirstColor("#FFFFFF");
                setSecondColor("#FFFFFF");
                setThirdColor("#FFFFFF");
                setHeadIconsColor("#FFFFFF");
                setHighlight("#D34848");
                setDefaultColor("#000000");
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
        } else if (pricingOpen) {
            setPricingOpen(false);
            setNavOpen(false);
        }
    }

    // animation the circle expansion
    let expandCircle = useSpring({
        to: {
            transform: pricingOpen ? "scale(5.5)" : navOpen ? "scale(1) " : "scale(0) ", left: navOpen ? `${-84 / 1920 * props.size[0]}px` : `${-682 / 1920 * props.size[0]}px`,
            top: navOpen ? `${-142 / 1920 * props.size[0]}` : `${-682 / 1920 * props.size[0]}`
        },
        from: { width: `${682 / 1920 * props.size[0]}px`, height: `${682 / 1920 * props.size[0]}px`, transform: "scale(0)", left: "-235px", top: "-235px", },
        onRest: () => springCallback()
    });

    // handle pricing click 
    const handlePricingClick = () => {
        setShowPerks(false);
        setItemsOpen(false);
        setPricingOpen(true);
    }

    return (
        <div style={{ position: "fixed", zIndex: 2020 }}>
            <animated.div ref={wrapperRef} style={{ ...expandCircle, background: props.navIndex === 2 ? "#1FE1E9" : "#0B0B0B", borderRadius: "50% 55% 48%", position: "absolute", boxShadow: "0px 3px 6px #00000029" }} />
            <div style={{ display: "flex", display: "flex", flexDirection: "column", position: "fixed", left: `${83 / 1920 * props.size[0]}px`, top: `${86.32 / 1080 * props.size[1]}px`, }}>
                <div style={{ display: "flex" }}>
                    <IconButton style={{ padding: "0px", borderRadius: "4px", backgroundColor: "transparent" }} onClick={() => handleNavClick()} >
                        <DehazeIcon style={{ color: navOpen ? headIconsColor : defaultColor, fontSize: `${56 / 1920 * props.size[0]}px` }} />
                    </IconButton>
                    <Typography style={{
                        textAlign: "left", font: `normal normal normal ${48 / 1920 * props.size[0]}px/${57 / 1920 * props.size[0]}px Helvetica Neue`, 
                        color: navOpen ? headIconsColor : defaultColor, letterSpacing: `${4.8 / 1920 * props.size[0]}px`, marginLeft: `${37.87 / 1920 * props.size[0]}px`
                    }}>
                        EXP|CON
                    </Typography>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: `${29 / 1920 * props.size[0]}px` }}>
                    {itemsOpen ? <Trail items={items} from={{ transform: `translate3d(0,${56 / 1920 * props.size[0]}px,0)`, opacity: 0 }} to={{ transform: 'translate3d(0,0px,0)', opacity: 1, }}>
                        {item => prop => <span key={item.key} style={prop}>{item.content}</span>}
                    </Trail> : null}
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMenuIndex: (index) => dispatch(setMenuIndex(index)),
        setNavIndex: (index) => dispatch(setNavIndex(index)),
        setSize: (size) => dispatch(setSize(size))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);