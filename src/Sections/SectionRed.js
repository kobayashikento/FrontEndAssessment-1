import React from 'react';

import { Typography } from '@material-ui/core';

import left_speakers from '../Assets/pictures/Red/left_speakers.png';
import right_speakers from '../Assets/pictures/Red/right_speakers.png';

import ReactPlayer from 'react-player/lazy';
import TryButton from '../Components/TryButton';
import DemoButton from '../Components/DemoButton';

import { Link } from "react-router-dom";

import { TRY_CTA_WIDTH, TRY_CTA_HEIGHT, DEMO_CTA_HEIGHT, DEMO_CTA_WIDTH } from '../Assets/styles/masterStyle';

// Redux
import { connect } from 'react-redux';
import { setDemoPos, setTryPos } from '../Redux/actions/propertyAction';

const SectionRed = (props) => {
    const [playing, setPlaying] = React.useState(false);

    //refs
    const buttonRef = React.useRef();
    const buttonTryRef = React.useRef();
    const speaker1 = React.useRef();
    const speaker2 = React.useRef();

    // handlers for speakers
    const handlePlay = () => {
        setPlaying(!playing)
    }

    // listen to button events
    React.useEffect(() => {
        if (buttonRef.current) {
            buttonRef.current.onmousemove = function (e) {
                e.target.style.setProperty('--x', e.offsetX + 'px');
                e.target.style.setProperty('--y', e.offsetY + 'px');
            }
        }
    }, [buttonRef]);
    React.useEffect(() => {
        if (buttonTryRef.current) {
            buttonTryRef.current.onmousemove = function (e) {
                e.target.style.setProperty('--x', e.offsetX + 'px');
                e.target.style.setProperty('--y', e.offsetY + 'px');
            }
        }
    }, [buttonTryRef]);

    // reponsive width and height change
    React.useEffect(() => {
        let tryPos = [(TRY_CTA_WIDTH - buttonTryRef.current.getBoundingClientRect().width) / 2, (TRY_CTA_HEIGHT - buttonTryRef.current.getBoundingClientRect().height) / 2];
        let demoPos = [(DEMO_CTA_WIDTH - buttonRef.current.getBoundingClientRect().width) / 2, (DEMO_CTA_HEIGHT - buttonRef.current.getBoundingClientRect().height) / 2];
        props.setDemoPos(demoPos);
        props.setTryPos(tryPos);
    }, [props.size]);

    React.useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        const handleClickOutside = (event) => {
            if (speaker1.current && !speaker1.current.contains(event.target)) {
            } else {
                handlePlay();
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [speaker1, playing, handlePlay]);

    React.useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        const handleClickOutside = (event) => {
            if (speaker2.current && !speaker2.current.contains(event.target)) {
            } else {
                handlePlay();
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [speaker2, playing, handlePlay]);

    return (
        <div style={{  height: "100vh", background: "#D34848 0% 0% no-repeat padding-box" }}>
            <ReactPlayer
                style={{ position: "absolute", display: "none" }}
                url='https://soundcloud.com/childish-gambino/3005-1#t=1:33'
                width="1"
                height="1"
                playing={playing}
                loop={true}
            />
            <Link to="/pricing" style={{ textDecoration: "none" }}>
                <TryButton ref={buttonTryRef} size={props.size} pos={props.tryPos} type="red" >
                    <span>TRY IT NOW</span>
                </TryButton>
            </Link>
            <div style={{ marginLeft: `${184 / 1920 * props.size[0]}px`, marginTop: `${431 / 1080 * props.size[1]}px`, position: "absolute" }}>
                <Typography style={{
                    font: `normal normal bold ${(74 / 1920) * props.size[0]}px/${(90 / 1920) * props.size[0]}px Helvetica Neue`,
                    letterSpacing: `${(7.4 / 1920) * props.size[0]}px`, color: "#FFFFFF", height: `${88 / 1920 * props.size[0]}px`
                }}>
                    SUPERIOR SOUND
                    </Typography>
                <Typography style={{
                    width: `${898 / 1920 * props.size[0]}px`, font: `normal normal normal ${(51 / 1920) * props.size[0]}px/${(61 / 1920) * props.size[0]}px Helvetica Neue`,
                    letterSpacing: `${(5.1 / 1920) * props.size[0]}px`, color: "#0B0B0B",
                    marginTop: `${(27 / 1920) * props.size[0]}px`,
                }}>
                    Experience live versions of your favourite songs.
                    </Typography>
                <DemoButton ref={buttonRef} size={props.size} pos={props.demoPos} type="red">
                    <span >SEE DEMO</span>
                </DemoButton>
            </div>
            <div style={{ display: "flex", marginRight: `${157 / 1920 * props.size[0]}px`, marginTop: `${(239 / 1080) * props.size[1]}px`, float: "right" }}>
                <img onMouseEnter={() => props.handleSpeakerHover(true)} onMouseLeave={() => props.handleSpeakerHover(false)} ref={speaker1} alt="right_speakers" style={{ width: `${300 / 1920 * props.size[0]}px`, height: "100%", background: `transparent 0% 0 % no - repeat padding- box` }} src={left_speakers} />
                <img onMouseEnter={() => props.handleSpeakerHover(true)} onMouseLeave={() => props.handleSpeakerHover(false)} ref={speaker2} alt="left_speakers" style={{ paddingTop: "32%", width: `${300 / 1920 * props.size[0]}px`, height: "100%", background: `transparent 0% 0 % no - repeat padding- box` }} src={right_speakers} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        size: state.propertyReducer.size,
        tryPos: state.propertyReducer.tryPos,
        demoPos: state.propertyReducer.demoPos,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTryPos: (tryPos) => dispatch(setTryPos(tryPos)),
        setDemoPos: (demoPos) => dispatch(setDemoPos(demoPos)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionRed)