import React from 'react';

import { Typography } from '@material-ui/core';

import speakers_top from '../Assets/pictures/Review/small_speakers_top.png';
import speakers_bot from '../Assets/pictures/Review/small_speakers_bot.png';

import Rating from '@material-ui/lab/Rating';

import TryButton from '../Components/TryButton';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

const SectionReview = (props) => {
    //refs
    const buttonTryRef = React.useRef();

    // listening to button events
    React.useEffect(() => {
        if (buttonTryRef.current) {
            buttonTryRef.current.onmousemove = function (e) {
                e.target.style.setProperty('--x', e.offsetX + 'px');
                e.target.style.setProperty('--y', e.offsetY + 'px');
            }
        }
    }, [buttonTryRef])

    return (
        <div style={{ height: "100vh", background: "#1FE1E9 0% 0% no-repeat padding-box" }}>
            <Link to="/pricing" style={{ textDecoration: "none" }}>
                <TryButton ref={buttonTryRef} size={props.size} pos={props.tryPos} type="blue" >
                    <span>TRY IT NOW</span>
                </TryButton>
            </Link>
            <div style={{ display: "flex", flexDirection: "column", position: "absolute", left: `${1 / 1080 * props.size[1]}px`, paddingTop: `${200.4 / 1920 * props.size[0]}px` }}>
                <img alt="right_small_speakers" style={{
                    position: "absolute", width: `${550 / 1920 * props.size[0]}px`,
                    height: `auto`, background: `transparent 0% 0 % no - repeat padding- box`
                }} src={speakers_top} />
                <img alt="left_small_speakers" style={{
                    paddingTop: `${260 / 1920 * props.size[0]}px`,
                    marginLeft: `${(150.7 - 54.85) / 1920 * props.size[0]}px`, width: `${570 / 1920 * props.size[0]}px`,
                    height: `auto`, background: `transparent 0% 0 % no - repeat padding- box`
                }} src={speakers_bot} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", paddingTop: `${357 / 1080 * props.size[1]}px`, marginLeft: `${659 / 1920 * props.size[0]}px` }}>
                <Typography style={{
                    textAlign: "left", font: `normal normal bold ${74 / 1920 * props.size[0]}px/${90 / 1920 * props.size[0]}px Helvetica Neue`,
                    letterSpacing: `${7.4 / 1920 * props.size[0]}px`, color: "#FFFFFF", height: `${88 / 1920 * props.size[0]}px`
                }}>
                    Reviews
                </Typography>
                <div style={{ display: "flex", maxWidth: `${1144 / 1920 * props.size[0]}px`, justifyContent: "space-between" }}>
                    <div style={{ display: "flex", flexDirection: "column", paddingTop: `${66 / 1920 * props.size[0]}px` }}>
                        <Rating name="read-only" size="large" value={5} readOnly style={{ color: "#0B0B0B" }} />
                        <Typography style={{
                            font: `normal normal bold ${35 / 1920 * props.size[0]}px / ${43 / 1920 * props.size[0]}px Helvetica Neue`,
                            color: "#FFFFFF", letterSpacing: `${3.5 / 1920 * props.size[0]}px`, paddingTop: `${25.91 / 1920 * props.size[0]}px`
                        }}>
                            ARTIST
                        </Typography>
                        <Typography style={{
                            font: `normal normal normal ${35 / 1920 * props.size[0]}px / ${41 / 1920 * props.size[0]}px Helvetica Neue`,
                            color: "#191919", letterSpacing: `${3.5 / 1920 * props.size[0]}px`, paddingTop: `${24 / 1920 * props.size[0]}px`, width: `${308 / 1920 * props.size[0]}px`
                        }}>
                            “Love it, it’s the Best.I can’t live without it!”
                        </Typography>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", paddingTop: `${66 / 1920 * props.size[0]}px`, }}>
                        <Rating name="read-only" size="large" value={5} readOnly style={{ color: "#0B0B0B" }} />
                        <Typography style={{
                            font: `normal normal bold ${35 / 1920 * props.size[0]}px / ${43 / 1920 * props.size[0]}px Helvetica Neue`,
                            color: "#FFFFFF", letterSpacing: `${3.5 / 1920 * props.size[0]}px`, paddingTop: `${25.91 / 1920 * props.size[0]}px`
                        }}>
                            PRODUCER
                        </Typography>
                        <Typography style={{
                            font: `normal normal normal ${35 / 1920 * props.size[0]}px / ${41 / 1920 * props.size[0]}px Helvetica Neue`,
                            color: "#191919", letterSpacing: `${3.5 / 1920 * props.size[0]}px`, paddingTop: `${24 / 1920 * props.size[0]}px`, width: `${308 / 1920 * props.size[0]}px`
                        }}>
                            “Love it, it’s the Best.I can’t live without it!”
                        </Typography>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", paddingTop: `${66 / 1920 * props.size[0]}px`, }}>
                        <Rating name="read-only" size="large" value={5} readOnly style={{ color: "#0B0B0B" }} />
                        <Typography style={{
                            font: `normal normal bold ${35 / 1920 * props.size[0]}px / ${43 / 1920 * props.size[0]}px Helvetica Neue`,
                            color: "#FFFFFF", letterSpacing: `${3.5 / 1920 * props.size[0]}px`, paddingTop: `${25.91 / 1920 * props.size[0]}px`
                        }}>
                            MUSIC FAN
                        </Typography>
                        <Typography style={{
                            font: `normal normal normal ${35 / 1920 * props.size[0]}px / ${41 / 1920 * props.size[0]}px Helvetica Neue`,
                            color: "#191919", letterSpacing: `${3.5 / 1920 * props.size[0]}px`, paddingTop: `${24 / 1920 * props.size[0]}px`, width: `${308 / 1920 * props.size[0]}px`
                        }}>
                            “Love it, it’s the Best.I can’t live without it!”
                        </Typography>
                    </div>
                </div>
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

export default connect(mapStateToProps)(SectionReview)