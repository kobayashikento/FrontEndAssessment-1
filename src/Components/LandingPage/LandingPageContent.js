import React from 'react';

import Typography from '@material-ui/core/Typography';

import '../../Assets/styles/landingPage.scss';

import { Link } from "react-router-dom";

import { Trail } from 'react-spring/renderprops'

const LandingPageContent = (props) => {
    //ref
    const btnRef = React.useRef();

    //states
    const [btn1, setBtn1] = React.useState([0, 0]);

    const items = [
        {
            key: 0,
            content: <Typography style={{ font: `normal normal bold ${65 / 1920 * props.size[0]}px/${79 / 1920 * props.size[0]}px Helvetica Neue`, textAlign: "left", letterSpacing: `${6.5 / 1920 * props.size[0]}px`, }}>
                INTERACTIVE CONCERT EXPERIENCE
    </Typography>
        },
        {
            key: 1,
            content: <Typography style={{
                font: `normal normal normal ${32 / 1920 * props.size[0]}px/${44 / 1920 * props.size[0]}px Helvetica Neue`,
                textAlign: "center", letterSpacing: `${3.2 / 1920 * props.size[0]}px`, marginTop: `${30 / 1920 * props.size[0]}px`
            }}>
                Experience your favourite artists like never
                        </Typography>
        },
        {
            key: 2,
            content: <Typography style={{
                font: `normal normal normal ${32 / 1920 * props.size[0]}px/${44 / 1920 * props.size[0]}px Helvetica Neue`, textAlign: "center", letterSpacing: `${3.2 / 1920 * props.size[0]}px`,
            }}>
                before and from the comfort of your own home.
                        </Typography>
        },
        {
            key: 3,
            content: <Link to="/pricing" style={{ textDecoration: "none", display: "flex", justifyContent: "center" }}>
                <a ref={btnRef}
                    style={{ marginTop: `${20 / 1080 * props.size[1]}px`, transform: `scale(${props.size[0] / 1920}) translateY(-${btn1[1]}px)` }} className="btn-mix-noborder" data-text="TRY IT NOW" />
            </Link>
        }
    ]

    return (
        <div style={{
            height: `fit-content`, width: "100vw", display: "flex", flexDirection: "column", height: "100vh",
            alignItems: "center", justifyContent: "center", marginTop: `${175 / 1080 * props.size[1]}px`
        }}>
            {props.curtainReady ?
                <Trail items={items} keys={item => item.key + "hero-item"}
                    from={{ transform: `translate3d(0,${56 / 1920 * props.size[0]}px,0)`, opacity: 0 }}
                    to={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}>
                    {item => prop => <span style={{ ...prop }}>{item.content}</span>}
                </Trail>
                : null}
        </div>
    )
}

export default React.memo(LandingPageContent);