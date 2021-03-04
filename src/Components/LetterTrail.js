import React from 'react';

import Typography from '@material-ui/core/Typography';
import { animated, useTrail } from 'react-spring';

const LetterTrail = ({ fontFamily, fontSize, render, delay, children, ...props }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        opacity: render ? 1 : 0,
        x: render ? 0 : 35,
        from: { opacity: 0, x: 35 },
        delay: delay
    })

    return (
        <div {...props}>
            <div style={{ display: "flex" }}>
                {trail.map(({ x, height, ...rest }, index) => (
                    <animated.div
                        key={items[index].key}
                        style={{ ...rest, transform: x.interpolate((x) => `translate3d(${x}px,0,0)`) }}>
                        <Typography style={{
                            textAlign: "left", fontSize: fontSize, fontWeight: "normal", fontStyle: "normal",
                            fontFamily: fontFamily
                        }} >{items[index]}</Typography>
                    </animated.div>
                ))}
            </div>
        </div>
    )
}

export default LetterTrail;