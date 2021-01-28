import React from 'react';

import Typography from '@material-ui/core/Typography';

import '../Assets/styles/sectionYellow.css';

import gambino from '../Assets/pictures/Yellow/gambino_s.png';

const SectionYellow = () => {

    const canvasRef = React.useRef();
    const marginTopRatio = 357 / 1080;
    const marginLeftRatio = 900 / 1920;
    const tryBtnTop = 95 / 1080;
    const tryBtnRight = 79 / 1920;
    const buttonYellowRef = React.useRef();
    const buttonTryRef = React.useRef();

    React.useEffect(() => {
        if (buttonYellowRef.current) {
            buttonYellowRef.current.onmousemove = function (e) {

                var x = e.pageX - e.target.offsetLeft;
                var y = e.pageY - e.target.offsetTop;

                e.target.style.setProperty('--x', x + 'px');
                e.target.style.setProperty('--y', y + 'px');
            }
        }
    }, [buttonYellowRef])

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
        if (canvasRef) {
            let ctx = canvasRef.current;
            let ctxCanvas = ctx.getContext('2d');
            ctxCanvas.fillStyle = "#FFB33F";
            ctxCanvas.fillRect(0, 0, ctx.width, ctx.height);
            let brushRadius = 8;

            const getBrushPos = (xRef, yRef) => {
                var ctxRect = ctx.getBoundingClientRect();
                return {
                    x: Math.floor((xRef - ctxRect.left) / (ctxRect.right - ctxRect.left) * ctx.width),
                    y: Math.floor((yRef - ctxRect.top) / (ctxRect.bottom - ctxRect.top) * ctx.height)
                };
            }

            const drawDot = (mouseX, mouseY) => {
                ctxCanvas.beginPath();
                ctxCanvas.arc(mouseX, mouseY, brushRadius, 0, 2 * Math.PI, true);
                ctxCanvas.fillStyle = '#000';
                ctxCanvas.globalCompositeOperation = "destination-out";
                ctxCanvas.fill();
            }

            ctx.addEventListener("mousemove", function (e) {
                var brushPos = getBrushPos(e.clientX, e.clientY);
                drawDot(brushPos.x, brushPos.y);
            }, false);

        }
    }, [canvasRef])


    return (
        <div style={{ height: "100vh", background: "#FFB33F", display: "flex" }}>
            <button class="button-yellow-try" ref={buttonTryRef} style={{ marginTop: `${tryBtnTop * window.innerHeight}px`, right: `${tryBtnRight * window.innerWidth}px`, zIndex: 1 }}>
                <span className="btn-txt-yellow-try">TRY IT NOW</span>
            </button>
            <canvas ref={canvasRef} style={{
                backgroundImage: `url(${gambino})`, height: "100%", width: "100%", backgroundSize: "cover", position: "absolute",
                cursor: `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/circular-cursor.png) 53 53, crosshair`
            }} />
            <div style={{ display: "flex", marginLeft: `${marginLeftRatio * window.innerWidth}px`, flexDirection: "column", justifyContent: "center", }}>
                <span className="button-txt">
                    <span className="txt-h1">FRONT ROW SEATS</span>
                </span>
                <span className="button-txt" style={{ marginTop: "23px" }}>
                    <span className="txt-h2">Experience concerts up close and personal.</span>
                </span>
                <button className="button-yellow" ref={buttonYellowRef}>
                    <span className="btn-txt-yellow">SEE DEMO</span>
                </button>
            </div>
        </div>
    )
}

export default React.memo(SectionYellow);