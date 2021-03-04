import React from 'react';

import { Typography } from '@material-ui/core';

import { animated, useTrail } from 'react-spring';

import bob_pic from '../../Assets/pictures/Footer/bob_pic.jpg';

import useMediaQuery from '@material-ui/core/useMediaQuery';
 
const Trail = ({ open, textIndex, children, ...props }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        from: { opacity: 0, x: 20 },
        delay: 300
    })

    return (
        <div {...props}>
            <div style={{ display: "flex" }}>
                {trail.map(({ x, height, ...rest }, index) => (
                    <animated.div
                        key={items[index].key}
                        style={{ ...rest, transform: x.interpolate((x) => `translate3d(${x}px,0,0)`) }}>
                        <Typography style={{
                            textAlign: "left", fontSize: "calc(85px + (110 - 85) * ((100vw - 300px) / (1600 - 300)))", lineHeight: `calc(75px + (85 - 75) * ((100vw - 300px) / (1600 - 300)))`, fontWeight: "bold", fontStyle: "normal",
                            fontFamily: "'Rajdhani', sans-serif", color: "white", textShadow: "0 1px 0 rgba(255, 255, 255, 0.4)"
                        }}>{items[index]}</Typography>
                    </animated.div>
                ))}
            </div>
        </div>
    )
}

const PricingPerks = (props) => {

    const smUp = useMediaQuery('(max-width:1300px)', { noSsr: true });

    const marginTopRatio = 234 / 1229;

    return (
        <div style={{
            background: "#D34848 0% 0% no-repeat padding-box", backgroundImage: `url(${bob_pic})`,
            backgroundSize: "cover", minHeight: `${967 / 1920 * window.innerWidth}px`, boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px", backgroundBlendMode: "darken"
        }}>
            <div style={{ maxWidth: `1024px`, display: "flex", flexDirection: "column", paddingTop: `${marginTopRatio * props.size[1]}px`, marginLeft: "auto", marginRight: "auto" }}>
                <Trail open={true} textIndex={0}>
                    <span>P</span>
                    <span>E</span>
                    <span>R</span>
                    <span>K</span>
                    <span>S</span>
                </Trail>
                <div style={{ display: "flex", paddingLeft: "2%", marginTop: `8%`, justifyContent: "space-evenly",  width: "100%"}}>
                    <div>
                        <div style={{ width: `${104.49 / 1920 * props.size[0]}px`, background: `#FFFFFF`, height: `${3 / 1920 * props.size[0]}px` }} />
                        <Typography style={{
                            textAlign: "left", fontSize: "calc(33px + (45 - 33) * ((100vw - 1024px) / (1600 - 1024)))", lineHeight: `calc(50px + (55 - 50) * ((100vw - 300px) / (1600 - 300)))`,
                            fontWeight: "bold", fontStyle: "normal", fontFamily: "'Rajdhani', sans-serif", color: "white", marginTop: `8%`,
                            maxWidth: `${383 / 1920 * window.innerWidth}px`
                        }}>
                            Subscription Payment Model
                        </Typography>
                        <Typography style={{
                            textAlign: "left", fontSize: "calc(14px + (18 - 14) * ((100vw - 300px) / (1600 - 300)))", lineHeight: `calc(22px + (26 - 22) * ((100vw - 300px) / (1600 - 300)))`,
                            fontWeight: "bold", fontStyle: "normal", fontFamily: "DINNextLTPro-Medium", color: "white", marginTop: `${5.5 / 1920 * props.size[0]}px`,
                            maxWidth: `${383 / 1920 * window.innerWidth}px`
                        }}>
                            No commitment, cancel anytime. Never worry about forgetting a payment again!
                        </Typography>
                    </div>
                    <div>
                        <div style={{ width: `${104.49 / 1920 * props.size[0]}px`, background: `#FFFFFF`, height: `${3 / 1920 * props.size[0]}px` }} />
                        <Typography style={{
                            textAlign: "left", fontSize: "calc(33px + (45 - 33) * ((100vw - 1024px) / (1600 - 1024)))", lineHeight: `calc(50px + (55 - 50) * ((100vw - 300px) / (1600 - 300)))`,
                            fontWeight: "bold", fontStyle: "normal", fontFamily: "'Rajdhani', sans-serif", color: "white",  marginTop: `8%`, maxWidth: `${383 / 1920 * props.size[0]}px`
                        }}>
                            No Fee Cancelation Policy
                        </Typography>
                        <Typography style={{
                            textAlign: "left", fontSize: "calc(14px + (18 - 14) * ((100vw - 300px) / (1600 - 300)))", lineHeight: `calc(22px + (26 - 22) * ((100vw - 300px) / (1600 - 300)))`,
                            fontWeight: "bold", fontStyle: "normal", fontFamily: "DINNextLTPro-Medium", color: "white", marginTop: `${5.5 / 1920 * props.size[0]}px`,
                            maxWidth: `${383 / 1920 * window.innerWidth}px`
                        }}>
                            No commitment, cancel anytime. Never worry about forgetting a payment again!
                        </Typography>
                    </div>
                    <div>
                        <div style={{ width: `${104.49 / 1920 * props.size[0]}px`, background: `#FFFFFF`, height: `${3 / 1920 * props.size[0]}px` }} />
                        <Typography style={{
                            textAlign: "left", fontSize: "calc(33px + (45 - 33) * ((100vw - 1024px) / (1600 - 1024)))", lineHeight: `calc(50px + (55 - 50) * ((100vw - 300px) / (1600 - 300)))`,
                            fontWeight: "bold", fontStyle: "normal", fontFamily: "'Rajdhani', sans-serif", color: "white",  marginTop: `8%`, maxWidth: `${383 / 1920 * props.size[0]}px`
                        }}>
                            Subscription Payment Model
                        </Typography>
                        <Typography style={{
                            textAlign: "left", fontSize: "calc(14px + (18 - 14) * ((100vw - 300px) / (1600 - 300)))", lineHeight: `calc(22px + (26 - 22) * ((100vw - 300px) / (1600 - 300)))`,
                            fontWeight: "bold", fontStyle: "normal", fontFamily: "DINNextLTPro-Medium", color: "white", marginTop: `${5.5 / 1920 * props.size[0]}px`,
                            maxWidth: `${383 / 1920 * window.innerWidth}px`
                        }}>
                            No commitment, cancel anytime. Never worry about forgetting a payment again!
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(PricingPerks)