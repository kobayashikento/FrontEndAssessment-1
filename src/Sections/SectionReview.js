import React from 'react';

import { Typography } from '@material-ui/core';

import '../Assets/styles/sectionReview.css';

import speakers_top from '../Assets/pictures/Review/small_speakers_top.png';
import speakers_bot from '../Assets/pictures/Review/small_speakers_bot.png';

import Rating from '@material-ui/lab/Rating';

const SectionReview = (props) => {
    //refs
    const buttonTryRef = React.useRef();

    // listening to button events
    React.useEffect(() => {
        if (buttonTryRef.current) {
            buttonTryRef.current.onmousemove = function (e) {

                var x = e.pageX - e.target.offsetLeft;
                var y = e.pageY - e.target.offsetTop;

                e.target.style.setProperty('--x', x + 'px');
                e.target.style.setProperty('--y', y + 'px');
            }
        }
    }, [buttonTryRef])

    return (
        <div style={{ height: "100vh", background: "#1FE1E9 0% 0% no-repeat padding-box" }}>
            <button className="button-review-try" ref={buttonTryRef} style={{
                transform: `scale(${props.size[0] / 1920}) translate(${props.tryMargin[0]}px, -${props.tryMargin[1]}px)`,
                marginTop: `${79 / 1080 * props.size[1]}px`, right: `${62 / 1920 * props.size[0]}px`, zIndex: 1
            }}>
                <span className="button-txt-review-try">TRY IT NOW</span>
            </button>
            <div style={{ display: "flex", flexDirection: "column", position: "absolute", left: `${54.85 / 1920 * props.size[0]}px`, paddingTop: `${284.4 / 1080 * props.size[1]}px` }}>
                <img alt="right_small_speakers" style={{ position: "absolute", width: `${493 / 1920 * props.size[0]}px`, height: `${408 / 1080 * props.size[1]}px`, background: `transparent 0% 0 % no - repeat padding- box` }} src={speakers_top} />
                <img alt="left_small_speakers" style={{ paddingTop: `${260 / 1080 * props.size[1]}px`, marginLeft: `${(150.7 - 54.85) / 1920 * props.size[0]}px`, width: `${495 / 1920 * props.size[0]}px`, height: `${408 / 1080 * props.size[1]}px`, background: `transparent 0% 0 % no - repeat padding- box` }} src={speakers_bot} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", paddingTop: `${384 / 1080 * props.size[1]}px`, marginLeft: `${659 / 1920 * props.size[0]}px` }}>
                <Typography style={{
                    textAlign: "left", font: `normal normal bold ${74 / 1920 * props.size[0]}px/${90 / 1920 * props.size[0]}px Helvetica Neue`,
                    letterSpacing: `${7.4 / 1920 * props.size[0]}px`, color: "#FFFFFF", height: `${88 / 1080 * props.size[1]}px`
                }}>
                    Reviews
                </Typography>
                <div style={{ display: "flex" }}>
                    <div style={{ display: "flex", flexDirection: "column", paddingTop: `${66 / 1080 * props.size[1]}px` }}>
                        <Rating name="read-only" size="large" value={5} readOnly style={{ color: "#0B0B0B" }} />
                        <Typography style={{
                            font: `normal normal bold ${35 / 1920 * props.size[0]}px / ${43 / 1920 * props.size[0]}px Helvetica Neue`,
                            color: "#FFFFFF", letterSpacing: `${3.5 / 1920 * props.size[0]}px`, paddingTop: `${25.91 / 1080 * props.size[1]}px`
                        }}>
                            ARTIST
                        </Typography>
                        <Typography style={{
                            font: `normal normal normal ${35 / 1920 * props.size[0]}px / ${41 / 1920 * props.size[0]}px Helvetica Neue`,
                            color: "#191919", letterSpacing: `${3.5 / 1920 * props.size[0]}px`, paddingTop: `${24 / 1080 * props.size[1]}px`, width: `${308 / 1920 * props.size[0]}px`
                        }}>
                            “Love it, it’s the Best.I can’t live without it!”
                        </Typography>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", paddingTop: `${66 / 1080 * props.size[1]}px`, paddingLeft: `${117 / 1920 * props.size[0]}px` }}>
                        <Rating name="read-only" size="large" value={5} readOnly style={{ color: "#0B0B0B" }} />
                        <Typography style={{
                            font: `normal normal bold ${35 / 1920 * props.size[0]}px / ${43 / 1920 * props.size[0]}px Helvetica Neue`,
                            color: "#FFFFFF", letterSpacing: `${3.5 / 1920 * props.size[0]}px`, paddingTop: `${25.91 / 1080 * props.size[1]}px`
                        }}>
                            PRODUCER
                        </Typography>
                        <Typography style={{
                            font: `normal normal normal ${35 / 1920 * props.size[0]}px / ${41 / 1920 * props.size[0]}px Helvetica Neue`,
                            color: "#191919", letterSpacing: `${3.5 / 1920 * props.size[0]}px`, paddingTop: `${24 / 1080 * props.size[1]}px`, width: `${308 / 1920 * props.size[0]}px`
                        }}>
                            “Love it, it’s the Best.I can’t live without it!”
                        </Typography>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", paddingTop: `${66 / 1080 * props.size[1]}px`, paddingLeft: `${117 / 1920 * props.size[0]}px` }}>
                        <Rating name="read-only" size="large" value={5} readOnly style={{ color: "#0B0B0B" }} />
                        <Typography style={{
                            font: `normal normal bold ${35 / 1920 * props.size[0]}px / ${43 / 1920 * props.size[0]}px Helvetica Neue`,
                            color: "#FFFFFF", letterSpacing: `${3.5 / 1920 * props.size[0]}px`, paddingTop: `${25.91 / 1080 * props.size[1]}px`
                        }}>
                            MUSIC FAN
                        </Typography>
                        <Typography style={{
                            font: `normal normal normal ${35 / 1920 * props.size[0]}px / ${41 / 1920 * props.size[0]}px Helvetica Neue`,
                            color: "#191919", letterSpacing: `${3.5 / 1920 * props.size[0]}px`, paddingTop: `${24 / 1080 * props.size[1]}px`, width: `${308 / 1920 * props.size[0]}px`
                        }}>
                            “Love it, it’s the Best.I can’t live without it!”
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(SectionReview)