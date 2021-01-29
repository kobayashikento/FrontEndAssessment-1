import React from 'react';

import '../Assets/styles/sectionYellow.css';

import gambino from '../Assets/pictures/Yellow/gambino_s.png';

const SectionYellow = (props) => {

    const marginLeftRatio = 900 / 1920;
    const tryBtnTop = 95 / 1080;
    const tryBtnRight = 79 / 1920;

    //refs
    const buttonYellowRef = React.useRef();
    const buttonTryRef = React.useRef();
    const canvasRef = React.useRef();
    const textRef = React.useRef();

    // states
    const [btn1, setBtn1] = React.useState([0, 0]);
    const [btn2, setBtn2] = React.useState([0, 0]);

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
        if (textRef.current) {
            textRef.current.onmousemove = function (e) {

                var x = e.pageX - e.target.offsetLeft;
                var y = e.pageY - e.target.offsetTop;

                e.target.style.setProperty('--x', x + 'px');
                e.target.style.setProperty('--y', y + 'px');
            }
        }
    }, [textRef])

    // painting interaction
    React.useEffect(() => {
        if (canvasRef) {
            let ctx = canvasRef.current;
            let ctxCanvas = ctx.getContext('2d');
            ctxCanvas.fillStyle = "#FFB33F"
            ctxCanvas.fillRect(0, 0, 1920, 1080);
            let brushRadius = 100;
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

    React.useEffect(() => {
        setBtn1([338 - buttonYellowRef.current.getBoundingClientRect().width, 81 - buttonYellowRef.current.getBoundingClientRect().height]);
        setBtn2([248 - buttonTryRef.current.getBoundingClientRect().width, 62 - buttonTryRef.current.getBoundingClientRect().height]);
    }, [props.size])

    return (
        <div style={{ height: "100vh", background: "#FFB33F 0% 0% no-repeat padding-box", display: "flex" }}>
            <button className="button-yellow-try" ref={buttonTryRef} style={{ cursor: "none", transform: `scale(${props.size[0] / 1920}) translate(${btn2[0]}px, -${btn2[1]}px)`, marginTop: `${tryBtnTop * props.size[1]}px`, right: `${tryBtnRight * props.size[0]}px`, zIndex: 1 }}>
                <span className="button-txt-yellow-try">TRY IT NOW</span>
            </button>
            <canvas ref={canvasRef} width={props.size[0]} height={props.size[1]} style={{
                backgroundImage: `url(${gambino})`, height: "100%", width: "100%", backgroundSize: "cover", position: "absolute",
            }} />
            <div style={{ display: "flex", marginLeft: `${marginLeftRatio * props.size[0]}px`, flexDirection: "column", justifyContent: "center", }}>
                <span className="button-txt">
                    <span ref={textRef} style={{ font: `normal normal bold ${74 / 1920 * props.size[0]}px/${90 / 1920 * props.size[0]}px Helvetica Neue`, letterSpacing: `${7.4 / 1920 * props.size[0]}px` }}
                        className="txt-h1">FRONT ROW SEATS</span>
                </span>
                <span className="button-txt" style={{ maxWidth: "831px", marginTop: `${23 / 1080 * props.size[1]}px`, font: `normal normal normal ${51 / 1920 * props.size[0]}px/${61 / 1920 * props.size[0]}px Helvetica Neue`, letterSpacing: `${5.1 / 1920 * props.size[0]}px` }}>
                    <span className="txt-h2">Experience concerts up close and personal.</span>
                </span>
                <button className="button-yellow" ref={buttonYellowRef} style={{ cursor: "none", marginTop: `${46 / 1080 * props.size[1]}px`, transform: `scale(${props.size[0] / 1920}) translate(-${btn2[0]}px,-${btn1[1]}px)` }}>
                    <span className="button-txt-yellow">SEE DEMO</span>
                </button>
            </div>
        </div>
    )
}

export default React.memo(SectionYellow);