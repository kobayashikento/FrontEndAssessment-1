import React from 'react';

import { Typography } from '@material-ui/core';

import '../Assets/styles/sectionRed.css';

import left_speakers from '../Assets/pictures/Red/left_speakers.png';
import right_speakers from '../Assets/pictures/Red/right_speakers.png';

const SectionRed = (props) => {
    //refs
    const buttonRef = React.useRef();
    const buttonTryRef = React.useRef();
    const [btn1, setBt1] = React.useState([0, 0])
    const [btn2, setBt2] = React.useState([0, 0])

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

    React.useEffect(() => {
        setBt1([338 - buttonRef.current.getBoundingClientRect().width, 81 - buttonRef.current.getBoundingClientRect().height]);
        setBt2([248 - buttonTryRef.current.getBoundingClientRect().width, 62 - buttonTryRef.current.getBoundingClientRect().height]);
    }, [props.size])

    return (
        <div style={{ height: "100vh", background: "#D34848 0% 0% no-repeat padding-box" }}>
            <button class="button-red-try" ref={buttonTryRef} style={{ transform: `scale(${props.size[0] / 1920}) translate(${btn2[0]}px, -${btn2[1]}px)`, marginTop: `${95 / 1080 * props.size[1]}px`, right: `${79 / 1920 * props.size[0]}px` }}>
                <span className="btn-txt-red-try">TRY IT NOW</span>
            </button>
            <div style={{ display: "flex", alignItems: "center", height: "100vh" }}>
                <div style={{ marginLeft: `${184 / 1920 * props.size[0]}px`, display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "7%" }}>
                    <Typography style={{ font: `normal normal bold ${(74 / 1920) * props.size[0]}px/${(90 / 1920) * props.size[0]}px Helvetica Neue`, letterSpacing: `${(7.4 / 1920) * props.size[0]}px`, color: "#FFFFFF" }}>
                        SUPERIOR SOUND
                </Typography>
                    <Typography style={{ marginTop: `${(27 / 1080) * props.size[1]}px`, width: `${898 / 1920 * props.size[0]}px`, font: `normal normal normal ${(51 / 1920) * props.size[0]}px/${(61 / 1920) * props.size[0]}px Helvetica Neue`, letterSpacing: `${(5.1 / 1920) * props.size[0]}px`, color: "#0B0B0B" }}>
                        Experience live versions of your favourite songs.
                </Typography>
                    <button class="button" ref={buttonRef} style={{ transform: `scale(${props.size[0] / 1920}) translate(-${btn1[0]}px, -${btn1[1]}px)`, marginTop: `${41 / 1080 * props.size[1]}px` }}>
                        <span className="btn-txt-red">SEE DEMO</span>
                    </button>
                </div>
                <div style={{ display: "flex", position: "absolute", right: `${157 / 1920 * props.size[0]}px`, paddingTop: "6.5%" }}>
                    <img style={{ width: `${300 / 1920 * props.size[0]}px`, height: `${440 / 1080 * props.size[1]}px`, background: `transparent 0% 0 % no - repeat padding- box` }} src={left_speakers} />
                    <img style={{ paddingTop: "32%", width: `${300 / 1920 * props.size[0]}px`, height: `${440 / 1080 * props.size[1]}px`, background: `transparent 0% 0 % no - repeat padding- box` }} src={right_speakers} />
                </div>
            </div>
        </div>
    )
}

export default React.memo(SectionRed)