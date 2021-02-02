import React from 'react';

import Typography from '@material-ui/core/Typography';

import '../../Assets/styles/landingPage.scss';

import { Link } from "react-router-dom";

import { useTrail, animated } from 'react-spring'

const LandingPageContent = (props) => {
    //ref
    const btnRef = React.useRef();

    //states
    const [btn1, setBtn1] = React.useState([0, 0]);

    const Trail = ({ open, children, ...props }) => {
        const items = React.Children.toArray(children)

        const trail = useTrail(items.length,
            {
                config: { mass: 5, tension: 2000, friction: 200, duration: 400 },
                opacity: open ? 1 : 0,
                x: open ? 0 : 100,
                from: { opacity: 0, x: 100 / 1920 * window.innerHeight },
            })

        return (
            <div style={{ marginTop: `${126 / 1080 * window.innerHeight}px` }}>
                {trail.map(({ x, height, ...rest }, index) => (
                    <animated.div
                        key={items[index]}
                        className="trails-content"
                        style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
                        <animated.div style={{ height }}>{items[index]}</animated.div>
                    </animated.div>
                ))}
            </div>
        )
    }

    // React.useEffect(() => {
    //     setBtn1([284 - btnRef.current.getBoundingClientRect().width, 79 - btnRef.current.getBoundingClientRect().height]);
    // }, [props.size])

    return (
        <div style={{ height: `fit-content`, width: "100vw", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Trail open={props.curtainReady}>
                <Typography style={{ font: `normal normal bold ${65 / 1920 * props.size[0]}px/${79 / 1920 * props.size[0]}px Helvetica Neue`, textAlign: "left", letterSpacing: `${6.5 / 1920 * props.size[0]}px`, }}>
                    INTERACTIVE CONCERT EXPERIENCE
            </Typography>
                <Typography style={{
                    font: `normal normal normal ${32 / 1920 * props.size[0]}px/${44 / 1920 * props.size[0]}px Helvetica Neue`,
                    textAlign: "center", letterSpacing: `${3.2 / 1920 * props.size[0]}px`, marginTop: `${30 / 1920 * props.size[0]}px`
                }}>
                    Experience your favourite artists like never
                            </Typography>
                <Typography style={{
                    font: `normal normal normal ${32 / 1920 * props.size[0]}px/${44 / 1920 * props.size[0]}px Helvetica Neue`, textAlign: "center", letterSpacing: `${3.2 / 1920 * props.size[0]}px`,
                }}>
                    before and from the comfort of your own home.
                            </Typography>
                <Link to="/pricing" style={{ textDecoration: "none", display: "flex", justifyContent: "center" }}>
                    <a ref={btnRef}
                        style={{ marginTop: `${43 / 1080 * props.size[1]}px`, transform: `scale(${props.size[0] / 1920}) translateY(-${btn1[1]}px)` }} className="btn-mix-noborder" data-text="TRY IT NOW" />
                </Link>
            </Trail>
        </div>
    )
}

export default React.memo(LandingPageContent);