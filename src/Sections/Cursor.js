import React from 'react';

import { useTrail, animated } from 'react-spring';

import '../Assets/styles/cursor.css';

const fast = { tension: 280, friction: 60 }
const slow = { mass: 10, tension: 200, friction: 50 }
const stiff = { tension: 400, friction: 20 }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

const Cursor = (props) => {
    const [trail, set] = useTrail(1, () => ({ xy: [0, 0], config: i => (i === 0 ? stiff : stiff) }))
    const prop = props;

    return (
        <div className="hooks-main" onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}>
            {trail.map((props, index) => (
                <animated.div key={index} style={{
                    transform: props.xy.interpolate(trans),
                    font: `normal normal bold ${27 / 1920 * prop.size[0]}px/${33 / 1920 * prop.size[0]}px Helvetica Neue`, letterSpacing: `${2.7 / 1920 * prop.size[0]}`, zIndex: 2023,
                    color: "#FFFFFF", height: `${145 / 1920 * prop.size[0]}px`, width: `${145 / 1920 * prop.size[0]}px`, display: "flex", alignItems: "center", justifyContent: "center"
                }} >
                    CLICK
                </animated.div>
            ))}
        </div>
    )
}

export default React.memo(Cursor);