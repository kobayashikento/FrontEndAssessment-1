import React from 'react';

import redConcert from '../Assets/pictures/Red/red_concert.jpeg';

import { useSpring, animated } from 'react-spring';

import '../Assets/styles/red.scss';

// Redux
import { connect } from 'react-redux';
import { setDemoPos, setTryPos } from '../Redux/actions/propertyAction';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Typography } from '@material-ui/core';

const SectionRed = (props) => {

    const matches = useMediaQuery('(min-width:1600px)', { noSsr: true });
    const mdUp = useMediaQuery('(max-width:1280px)', { noSsr: true });
    const xsUp = useMediaQuery('(max-width:1024px)', { noSsr: true });

    const widthSpring = useSpring({
        to: { width: props.heroLeave ? "100vw" : "0vw" },
        from: { width: "0vw" }
    })

    const handleMouseEvent = (event) => {
        if (event === 'enter') {
            props.handleExpandCircle(true);
        } else {
            props.handleExpandCircle(false);
        }
    }

    return (
        <animated.div style={{ ...widthSpring, height: "100vh", width: "62vw", position: "relative", display: "flex", alignItems: "flex-end", transform: xsUp ? "scale(0.7)" : mdUp ? "scale(0.9)" : "scale(1)", marginTop: xsUp ? "9%" : mdUp ? "4%" : "" }}>
            <div onMouseEnter={() => handleMouseEvent("enter")} onMouseLeave={() => handleMouseEvent("leave")} className="red-preview" style={{ backgroundImage: `url(${redConcert})` }}>
                <div className="red-preview-cursor" style={{ backgroundImage: `url(${redConcert})` }} />
                    SUPERIOR SOUND
                    <Typography style={{WebkitTextFillColor: "white", fontSize: "2rem"}}>
                    Experience live versions of your favourite songs.
            </Typography>
            </div>
        </animated.div>
    )
};

const mapStateToProps = (state) => {
    return {
        size: state.propertyReducer.size,
        tryPos: state.propertyReducer.tryPos,
        demoPos: state.propertyReducer.demoPos,
        heroLeave: state.propertyReducer.heroLeave
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTryPos: (tryPos) => dispatch(setTryPos(tryPos)),
        setDemoPos: (demoPos) => dispatch(setDemoPos(demoPos)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionRed)