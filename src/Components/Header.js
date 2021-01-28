import React from 'react';

import DehazeIcon from '@material-ui/icons/Dehaze';
import { IconButton, Button, Typography } from '@material-ui/core';

import { Trail } from 'react-spring/renderprops'

import { useSpring, animated, useTrail } from 'react-spring'

const Header = (props) => {
    const wrapperRef = React.useRef(null);
    const headLeftRatio = 83 / 1920;
    const headMarginRatio = 37.87 / 1920;
    const headTopRatio = 86.32 / 1080;

    const [navOpen, setNavOpen] = React.useState(false);
    const [itemsOpen, setItemsOpen] = React.useState(false);
    const [firstColor, setFirstColor] = React.useState("#FFFFFF");
    const [secondColor, setSecondColor] = React.useState("#FFFFFF");
    const [thirdColor, setThirdColor] = React.useState("#FFFFFF");
    const [headIconsColor, setHeadIconsColor] = React.useState("#FFFFFF");

    const items = [
        <Button style={{ padding: "0px", }}>
            <Typography style={{
                textAlign: "left", font: `normal normal bold ${47 / 1920 * props.size[0]}px/${57 / 1920 * props.size[0]}px Helvetica Neue`, color: firstColor,
                letterSpacing: `${4.7 / 1920 * props.size[0]}px`,
            }}>
                WHAT IS IT
                        </Typography>
        </Button>,
        <Button style={{ padding: "0px", marginTop: `${12 / 1920 * props.size[0]}px` }}>
            <Typography style={{ textAlign: "left", font: `normal normal bold ${47 / 1920 * props.size[0]}px/${57 / 1920 * props.size[0]}px Helvetica Neue`, color: secondColor, letterSpacing: `${4.7 / 1920 * props.size[0]}px`, }}>
                PERKS
                        </Typography>
        </Button>,
        <Button style={{ padding: "0px", marginTop: `${12 / 1920 * props.size[0]}px` }}>
            <Typography style={{ textAlign: "left", font: `normal normal bold ${47 / 1920 * props.size[0]}px/${57 / 1920 * props.size[0]}px Helvetica Neue`, color: thirdColor, letterSpacing: `${4.7 / 1920 * props.size[0]}px`, }}>
                PRICING
                        </Typography>
        </Button>
    ]

    React.useEffect(() => {
        switch (props.index) {
            case 0:
                setFirstColor("#FFFFFF");
                setSecondColor("#FFFFFF");
                setThirdColor("#FFFFFF");
                setHeadIconsColor("#FFFFFF");
                break;
            case 1:
                setFirstColor("#D34848");
                setSecondColor("#FFFFFF");
                setThirdColor("#FFFFFF");
                setHeadIconsColor("#D34848");
                break;
            case 1:
                setFirstColor("#FFFFFF");
                setSecondColor("#FFB33F");
                setThirdColor("#FFFFFF");
                setHeadIconsColor("#FFB33F");
                break;
        }
    }, [props.index]);

    const handleNavClick = () => {
        if (!navOpen) {
            setNavOpen(true);
        } else if (navOpen) {
            setItemsOpen(false);
            setNavOpen(false);
        }
    }

    const springCallback = () => {
        if (navOpen) {
            setItemsOpen(true);
        }
    }
    
   
    let expandCircle = useSpring({
        to: { transform: navOpen ? "scale(1) " : "scale(0) ", left: navOpen ? "-84px" : "-235px", top: navOpen ? "-142px" : "-235px" },
        from: { width: ` calc(240px + (592 - 240) * ((100vw - 300px) / (1600 - 300)))`, height: ` calc(240px + (592 - 240) * ((100vw - 300px) / (1600 - 300)))`, transform: "scale(0)", left: "-235px", top: "-235px", },
        onRest: () => springCallback()
    });

    // React.useEffect(() => {
    //     /**
    //      * Alert if clicked on outside of element
    //      */
    //     function handleClickOutside(event) {
    //         if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
    //             alert("You clicked outside of me!");
    //         }
    //     }

    //     // Bind the event listener
    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //         // Unbind the event listener on clean up
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, [wrapperRef]);

    return (
        <div style={{ position: "fixed", zIndex: 2020 }}>
            <animated.div ref={wrapperRef} style={{ ...expandCircle, background: "#0B0B0B", borderRadius: "50% 55% 48%", position: "absolute", boxShadow: "0px 3px 6px #00000029" }} />
            <div style={{ display: "flex", display: "flex", flexDirection: "column", position: "fixed", left: `${props.size[0] * headLeftRatio}px`, top: `${headTopRatio * props.size[1]}px`, }}>
                <div style={{ display: "flex" }}>
                    <IconButton style={{ padding: "0px", borderRadius: "4px" }} onClick={() => handleNavClick()} >
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
                        {item => props => <span style={props}>{item}</span>}
                    </Trail> : null}
                </div>
            </div>
        </div>
    )
}

export default React.memo(Header);