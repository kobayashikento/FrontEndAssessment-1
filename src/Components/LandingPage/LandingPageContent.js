import React from 'react';

import Typography from '@material-ui/core/Typography';

import '../../Assets/styles/landingPage.scss';

const LandingPageContent = (props) => {

    //ref
    const btnRef = React.useRef();

    //states
    const [btn1, setBtn1] = React.useState([0, 0]);

    React.useEffect(() => {
        setBtn1([284 - btnRef.current.getBoundingClientRect().width, 79 - btnRef.current.getBoundingClientRect().height]);
    }, [props.size])

    return (
        <div style={{ height: `fit-content`, width: "100vw", display: "flex", flexDirection: "column", alignItems: "center", }}>
            <Typography style={{ font: `normal normal bold ${65 / 1920 * props.size[0]}px/${79 / 1920 * props.size[0]}px Helvetica Neue`, textAlign: "left", letterSpacing: `${6.5 / 1920 * props.size[0]}px`, }}>
                INTERACTIVE CONCERT EXPERIENCE
            </Typography>
            <div style={{ display: "flex", flexDirection: "column", marginTop: `${30 / 1080 * props.size[1]}px` }}>
                <Typography style={{
                    font: `normal normal normal ${32 / 1920 * props.size[0]}px/${44 / 1920 * props.size[0]}px Helvetica Neue`, textAlign: "center", letterSpacing: `${3.2 / 1920 * props.size[0]}px`,
                }}>
                    Experience your favourite artists like never
                            </Typography>
                <Typography style={{
                    font: `normal normal normal ${32 / 1920 * props.size[0]}px/${44 / 1920 * props.size[0]}px Helvetica Neue`, textAlign: "center", letterSpacing: `${3.2 / 1920 * props.size[0]}px`,
                }}>
                    before and from the comfort of your own home.
                            </Typography>
            </div>
            <a ref={btnRef} style={{ marginTop: `${43 / 1080 * props.size[1]}px`, transform: `scale(${props.size[0] / 1920}) translateY(-${btn1[1]}px)` }} className="btn-mix-noborder" data-text="TRY IT NOW" />
        </div>
    )
}

export default React.memo(LandingPageContent);