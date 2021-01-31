import React from 'react';

// import dependencies
import DehazeIcon from '@material-ui/icons/Dehaze';
import { IconButton, Button, Typography } from '@material-ui/core';

import { Trail } from 'react-spring/renderprops'

import { useSpring, animated } from 'react-spring'

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
    const wrapperRef = React.useRef(null);
    const headLeftRatio = 83 / 1920;
    const headMarginRatio = 37.87 / 1920;
    const headTopRatio = 86.32 / 1080;

    // states
    const [navOpen, setNavOpen] = React.useState(false);
    const [itemsOpen, setItemsOpen] = React.useState(false);
    const [firstColor, setFirstColor] = React.useState("#FFFFFF");
    const [secondColor, setSecondColor] = React.useState("#FFFFFF");
    const [thirdColor, setThirdColor] = React.useState("#FFFFFF");
    const [headIconsColor, setHeadIconsColor] = React.useState("#FFFFFF");
    const [highlight, setHighlight] = React.useState("#FFFFFF");
    const [showWhat, setShowWhat] = React.useState(false);
    const [showPerks, setShowPerks] = React.useState(false);
    const [showPricing, setShowPricing] = React.useState(false);

    const handler = React.useCallback(() => handleNavClose(), []);
    //useOnClickOutside(wrapperRef, handler);

    const handleNavClose = () => {
        setNavOpen(false);
    }
    // react components for menu list
    const items = [
        {
            key: 1, content: <Button style={{ padding: "0px", backgroundColor: "transparent" }} onClick={() => handleNavItemClick(0)}>
                <Typography onMouseEnter={() => setShowWhat(true)} onMouseLeave={() => setShowWhat(false)} style={{
                    textAlign: "left", font: `normal normal bold ${47 / 1920 * props.size[0]}px/${57 / 1920 * props.size[0]}px Helvetica Neue`, color: showWhat ? highlight : firstColor,
                    letterSpacing: `${4.7 / 1920 * props.size[0]}px`,
                }}>
                    WHAT IS IT
                    </Typography>
            </Button>
        },
        {
            key: 2,
            content: <Button style={{ padding: "0px", marginTop: `${12 / 1920 * props.size[0]}px`, backgroundColor: "transparent" }} onClick={() => handlePerkClick()}>
                <Typography onMouseEnter={() => setShowPerks(true)} onMouseLeave={() => setShowPerks(false)} style={{
                    textAlign: "left",
                    font: `normal normal bold ${47 / 1920 * props.size[0]}px/${57 / 1920 * props.size[0]}px Helvetica Neue`, color: showPerks ? highlight : secondColor, letterSpacing: `${4.7 / 1920 * props.size[0]}px`,
                }}>
                    PERKS
                        </Typography>
            </Button>
        },
        {
            key: 3,
            content: <Button style={{ padding: "0px", marginTop: `${12 / 1920 * props.size[0]}px`, backgroundColor: "transparent" }}>
                <Typography onMouseEnter={() => setShowPricing(true)} onMouseLeave={() => setShowPricing(false)} style={{
                    textAlign: "left",
                    font: `normal normal bold ${47 / 1920 * props.size[0]}px/${57 / 1920 * props.size[0]}px Helvetica Neue`, color: showPricing ? highlight : thirdColor, letterSpacing: `${4.7 / 1920 * props.size[0]}px`,
                }}>
                    PRICING
                    </Typography>
            </Button>
        }]

    // handle click event for menu item clicks
    const handleNavItemClick = (index) => {
       props.handleNavItemClick(index);
       handleNavClick();
    }

    const handlePerkClick = () => {
        window.scrollTo({
            top: props.size[1] * 3,
            left: 0,
            behavior: 'smooth'
        });
        handleNavClick();
    }

    // handle color change from scroll offset change 
    React.useEffect(() => {
        switch (props.index) {
            case 0:
                setFirstColor("#FFFFFF");
                setSecondColor("#FFFFFF");
                setThirdColor("#FFFFFF");
                setHeadIconsColor("#FFFFFF");
                setHighlight("#FFFFFF");
                break;
            case 1:
                setFirstColor("#D34848");
                setSecondColor("#FFFFFF");
                setThirdColor("#FFFFFF");
                setHeadIconsColor("#D34848");
                setHighlight("#D34848");
                break;
            case 2:
                setFirstColor("#FFB33F");
                setSecondColor("#FFFFFF");
                setThirdColor("#FFFFFF");
                setHeadIconsColor("#FFB33F");
                setHighlight("#FFB33F");
                break;
            case 3:
                setFirstColor("#FFFFFF");
                setSecondColor("#000000");
                setThirdColor("#FFFFFF");
                setHeadIconsColor("#FFFFFF");
                setHighlight("#000000");
                break;
            case 4:
                setFirstColor("#1FE1E9");
                setSecondColor("#FFFFFF");
                setThirdColor("#FFFFFF");
                setHeadIconsColor("#1FE1E9");
                setHighlight("#1FE1E9");
                break;
            case 5:
                setFirstColor("#1FE1E9");
                setSecondColor("#FFFFFF");
                setThirdColor("#FFFFFF");
                setHeadIconsColor("#1FE1E9");
                setHighlight("#1FE1E9");
            default:
        }
    }, [props.index]);

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
        if (navOpen) {
            setItemsOpen(true);
        }
    }

    // animation the circle expansion
    let expandCircle = useSpring({
        to: { transform: navOpen ? "scale(1) " : "scale(0) ", left: navOpen ? "-84px" : "-235px", top: navOpen ? "-142px" : "-235px" },
        from: { width: ` calc(240px + (592 - 240) * ((100vw - 300px) / (1600 - 300)))`, height: ` calc(240px + (592 - 240) * ((100vw - 300px) / (1600 - 300)))`, transform: "scale(0)", left: "-235px", top: "-235px", },
        onRest: () => springCallback()
    });

    return (
        <div style={{ position: "fixed", zIndex: 2020 }}>
            <animated.div ref={wrapperRef} style={{ ...expandCircle, background: props.index === 3 ? "#1FE1E9" : "#0B0B0B", borderRadius: "50% 55% 48%", position: "absolute", boxShadow: "0px 3px 6px #00000029" }} />
            <div style={{ display: "flex", display: "flex", flexDirection: "column", position: "fixed", left: `${props.size[0] * headLeftRatio}px`, top: `${headTopRatio * props.size[1]}px`, }}>
                <div style={{ display: "flex" }}>
                    <IconButton style={{ padding: "0px", borderRadius: "4px", backgroundColor: "transparent" }} onClick={() => handleNavClick()} >
                        <DehazeIcon style={{ color: navOpen ? headIconsColor : "#FFFFFF", fontSize: `${56 / 1920 * props.size[0]}px` }} />
                    </IconButton>
                    <Typography style={{
                        textAlign: "left", font: `normal normal normal ${48 / 1920 * props.size[0]}px/${57 / 1920 * props.size[0]}px Helvetica Neue`, color: navOpen ? headIconsColor : "#FFFFFF",
                        letterSpacing: `${4.8 / 1920 * props.size[0]}px`, marginLeft: `${headMarginRatio * props.size[0]}px`
                    }}>
                        EXP|CON
                    </Typography>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: `${26 / 1920 * props.size[0]}px` }}>
                    {itemsOpen ? <Trail items={items} from={{ transform: `translate3d(0,${56 / 1920 * props.size[0]}px,0)`, opacity: 0 }} to={{ transform: 'translate3d(0,0px,0)', opacity: 1, }}>
                        {item => prop => <span key={item.key} style={prop}>{item.content}</span>}
                    </Trail> : null}
                </div>
            </div>
        </div>
    )
}

export default React.memo(Header);