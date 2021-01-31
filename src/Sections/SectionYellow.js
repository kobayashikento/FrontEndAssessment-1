import React from 'react'

import gambino from '../Assets/pictures/Yellow/gambino_s.png';

import Typography from '@material-ui/core/Typography';

import TryButton from '../Components/TryButton';
import DemoButton from '../Components/DemoButton';

const SectionYellow = (props) => {

    //refs
    const buttonYellowRef = React.useRef();
    const buttonTryRef = React.useRef();
    const canvasRef = React.useRef();
    const innerTextRef = React.useRef();
    const innerTextRef1 = React.useRef();

    // handle hover radial-gradient change event
    React.useEffect(() => {
        if (buttonYellowRef.current) {
            buttonYellowRef.current.onmousemove = function (e) {
                e.target.style.setProperty('--x', e.offsetX + 'px');
                e.target.style.setProperty('--y', e.offsetY + 'px');
            }
        }
    }, [buttonYellowRef])

    React.useEffect(() => {
        if (buttonTryRef.current) {
            buttonTryRef.current.onmousemove = function (e) {
                e.target.style.setProperty('--x', e.offsetX + 'px');
                e.target.style.setProperty('--y', e.offsetY + 'px');
            }
        }
    }, [buttonTryRef])

    // painting interaction
    React.useEffect(() => {
        if (canvasRef) {
            let ctx = canvasRef.current;
            let ctxCanvas = ctx.getContext('2d');
            ctxCanvas.fillStyle = "#FFB33F"
            ctxCanvas.fillRect(0, 0, props.size[0], props.size[1]);
            let brushRadius = 90;

            ctxCanvas.globalCompositeOperation = 'destination-out';

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
                ctxCanvas.fill();
            }

            ctx.addEventListener("mousemove", function (e) {
                var brushPos = getBrushPos(e.clientX, e.clientY);
                drawDot(brushPos.x, brushPos.y);
            }, false);

            const initialDraw1 = () => {
                ctxCanvas.beginPath();
                ctxCanvas.arc(props.size[0] - ((200 / 1920 * props.size[0]) / 2), props.size[1] - ((200 / 1920 * props.size[0]) / 2.6), (250 / 1920 * props.size[0]), 0, 2 * Math.PI, true);
                ctxCanvas.globalCompositeOperation = "destination-out";
                ctxCanvas.fill();
            }

            const initialDraw2 = () => {
                ctxCanvas.beginPath();
                ctxCanvas.arc(655 / 1920 * props.size[0], 360 / 1080 * props.size[1], (150 / 1920 * props.size[0]), 0, 2 * Math.PI, true);
                ctxCanvas.globalCompositeOperation = "destination-out";
                ctxCanvas.fill();
            }

            const initialDraw3 = () => {
                ctxCanvas.beginPath();
                ctxCanvas.arc(472 / 1920 * props.size[0], 636 / 1080 * props.size[1], (200 / 1920 * props.size[0]), 0, 2 * Math.PI, true);
                ctxCanvas.globalCompositeOperation = "destination-out";
                ctxCanvas.fill();
            }

            initialDraw1();
            initialDraw2();
            initialDraw3();
        }
    }, [canvasRef])

    return (
        <div style={{ height: "100vh", backgroundImage: `url(${gambino})`, display: "flex", backgroundSize: "cover", }}>
            <TryButton ref={buttonTryRef} size={props.size} pos={props.tryPos} type="yellow" >
                <span>TRY IT NOW</span>
            </TryButton>
            <DemoButton ref={buttonYellowRef} size={props.size} pos={props.demoPos} type="yellow">
                <span >SEE DEMO</span>
            </DemoButton>
            <canvas ref={canvasRef} width={props.size[0]} height={props.size[1]} style={{ position: "absolute" }} />
            <div style={{
                position: "absolute", pointerEvents: "none", marginTop: `${357 / 1080 * props.size[1]}px`,
                marginLeft: `${900 / 1920 * props.size[0]}px`,
            }}>
                <Typography style={{
                    color: "white", font: `normal normal bold ${74 / 1920 * props.size[0]}px/${90 / 1920 * props.size[0]}px Helvetica Neue`,
                    letterSpacing: `${7.4 / 1920 * props.size[0]}px`, height: `${88 / 1080 * props.size[1]}px`, display: "flex", alignItems: "center"
                }}>FRONT ROW SEATS</Typography>
                <Typography style={{
                    color: "#191919", maxWidth: `${831 / 1920 * props.size[0]}px`, font: `normal normal normal ${51 / 1920 * props.size[0]}px/${61 / 1920 * props.size[0]}px Helvetica Neue`,
                    letterSpacing: `${5.1 / 1920 * props.size[0]}px`, marginTop: `${23 / 1920 * props.size[0]}px`,
                    height: `${121 / 1080 * props.size[1]}px`,
                }}>
                    Experience concerts up close and personal.
                    </Typography>
            </div>
        </div >
    )
}

export default React.memo(SectionYellow);