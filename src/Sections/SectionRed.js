import React from 'react';

import { Typography } from '@material-ui/core';

import '../Assets/styles/sectionRed.css';

import left_speakers from '../Assets/pictures/Red/left_speakers.png';
import right_speakers from '../Assets/pictures/Red/right_speakers.png';

const SectionRed = () => {

    const contentLeftRatio = 184 / 1920;
    const tryBtnTop = 95 / 1080;
    const tryBtnRight = 79 / 1920;
    const buttonRef = React.useRef();
    const buttonTryRef = React.useRef();

    React.useEffect(() => {
        if (buttonRef.current) {
            buttonRef.current.onmousemove = function (e) {

                var x = e.pageX - e.target.offsetLeft;
                var y = e.pageY - e.target.offsetTop;

                e.target.style.setProperty('--x', x + 'px');
                e.target.style.setProperty('--y', y + 'px');
            }
        }
    }, [buttonRef])

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
        <div style={{ height: "100vh", backgroundColor: "#D34848" }}>
            <button class="button-red-try" ref={buttonTryRef} style={{ marginTop: `${tryBtnTop * window.innerHeight}px`, right: `${tryBtnRight * window.innerWidth}px` }}>
                <span className="btn-txt-red-try">TRY IT NOW</span>
            </button>
            <div style={{ display: "flex", alignItems: "center", height: "100vh" }}>
                <div style={{ marginLeft: `${contentLeftRatio * window.innerWidth}px`, display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "7%" }}>
                    <Typography style={{ font: "normal normal bold 74px/90px Helvetica Neue", letterSpacing: "7.4px", color: "#FFFFFF" }}>
                        SUPERIOR SOUND
                </Typography>
                    <Typography style={{ marginTop: "27px", width: "879px", font: "normal normal normal 51px/61px Helvetica Neue", letterSpacing: "5.1px", color: "#0B0B0B" }}>
                        Experience live versions of your favourite songs.
                </Typography>
                    <button class="button" ref={buttonRef}>
                        <span className="btn-txt-red">SEE DEMO</span>
                    </button>
                </div>
                <div style={{ display: "flex", marginTop: "5%", position: "absolute", right: "157px" }}>
                    <img style={{ width: "300px", height: "440px", background: `transparent 0% 0 % no - repeat padding- box` }} src={left_speakers} />
                    <img style={{ width: "300px", height: "440px", marginTop: "200px", background: `transparent 0% 0 % no - repeat padding- box` }} src={right_speakers} />
                </div>
            </div>
        </div>
    )
}

export default React.memo(SectionRed)