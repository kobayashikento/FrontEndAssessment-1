import React from 'react';

import redConcert from '../../Assets/pictures/Red/red_concert.jpeg';
import '../../Assets/styles/red.scss';

// Spring
import { useSpring, animated } from 'react-spring';

// Redux
import { connect } from 'react-redux';

// Material UI
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Typography } from '@material-ui/core';

const SectionRed = (props) => {

    const lgUp = useMediaQuery('(max-width:1440px)', { noSsr: true });
    const mdUp = useMediaQuery('(max-width:1280px)', { noSsr: true });
    const xsUp = useMediaQuery('(max-width:1024px)', { noSsr: true });

    const widthSpring = useSpring({
        to: { width: props.heroLeave ? "100vw" : "0vw" },
        from: {
            width: "0vw", height: "100vh", width: "62vw", position: "relative", display: "flex", alignItems: "flex-end",
            transform: xsUp ? "scale(0.7)" : mdUp ? "scale(0.8)" : lgUp ? "scale(0.9)" : "scale(1)", marginTop: xsUp ? "9%" : mdUp ? "4%" : lgUp ? "4%": ""
        }
    })

    const handleMouseEvent = (event) => {
        if (event === 'enter') {
            props.handleExpandCircle(true);
        } else {
            props.handleExpandCircle(false);
        }
    }

    return (
        <animated.div style={{ ...widthSpring }}>
            <div className="red-preview" style={{ backgroundImage: `url(${redConcert})` }} onMouseEnter={() => handleMouseEvent("enter")} onMouseLeave={() => handleMouseEvent("leave")}  >
                <div className="red-preview-cursor" style={{ backgroundImage: `url(${redConcert})` }} />
                    SUPERIOR SOUND
                    <Typography style={{ WebkitTextFillColor: "white", fontSize: "2rem" }}>
                    Experience live versions of your favourite songs.
            </Typography>
            </div>
        </animated.div>
    )
};

const mapStateToProps = (state) => {
    return {
        heroLeave: state.propertyReducer.heroLeave
    }
}

export default connect(mapStateToProps)(SectionRed)