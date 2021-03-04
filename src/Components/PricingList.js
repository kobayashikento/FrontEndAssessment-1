import React from 'react';

import PricingButton from './Buttons/PricingCTA';

import Typography from '@material-ui/core/Typography';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

import { PRICING_CTA_WIDTH, PRICING_CTA_HEIGHT } from '../Assets/styles/masterStyle';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { setPlanPayment } from '../Redux/actions/propertyAction';

const PricingList = (props) => {
    // props 
    // array of words : words 
    // icon that will be used : icon
    // price : price
    // section name : plan
    // time i.e montly, yearly : time
    // color of text : txtColor
    // color of bar : barColor
    // type of button : "red", "yellow", ...

    // ref
    let buttonRef = React.useRef();

    const [pos, setPos] = React.useState([0, 0]);

    // listen for responsive button size
    React.useEffect(() => {
        let pos = [(PRICING_CTA_WIDTH - buttonRef.current.getBoundingClientRect().width) / 2, (PRICING_CTA_HEIGHT - buttonRef.current.getBoundingClientRect().height) / 2];
        setPos(pos);
    }, [props.size]);

    // listen for CTA animation 
    React.useEffect(() => {
        if (buttonRef.current) {
            buttonRef.current.onmousemove = function (e) {
                e.target.style.setProperty('--x', e.offsetX + 'px');
                e.target.style.setProperty('--y', e.offsetY + 'px');
            }
        }
    }, [buttonRef]);

    //handle price click
    const handlePricing = () => {
        props.setPlanPayment(props.plan);
    }

    return (
        <div style={{  }}>
            <Typography style={{
                textAlign: "left", fontSize: "calc(40px + (45 - 40) * ((100vw - 300px) / (1600 - 300)))", lineHeight: `calc(50px + (55 - 50) * ((100vw - 300px) / (1600 - 300)))`,
                fontWeight: "bold", fontStyle: "normal", fontFamily: "'Rajdhani', sans-serif", color: props.txtColor,
            }}>
                {props.plan}
            </Typography>
            <div style={{
                width: `${141.49 / 1920 * props.size[0]}px`, background: props.barColor, height: `${3 / 1920 * props.size[0]}px`,
                marginTop: `${4.4 / 1920 * props.size[0]}px`, marginLeft: `${4.29 / 1920 * props.size[0]}px`
            }} />
            <Typography style={{
                textAlign: "left", fontSize: "calc(45px + (50 - 45) * ((100vw - 300px) / (1600 - 300)))", lineHeight: `calc(50px + (55 - 50) * ((100vw - 300px) / (1600 - 300)))`,
                fontWeight: "bold", fontStyle: "normal", fontFamily: "'Rajdhani', sans-serif", color: props.txtColor, marginTop: `${5.5 / 1920 * props.size[0]}px`
            }}>
                {props.time}
            </Typography>
            <Typography style={{
                textAlign: "left", fontSize: "calc(110px + (110 - 104) * ((100vw - 300px) / (1600 - 300)))", lineHeight: `calc(50px + (55 - 50) * ((100vw - 300px) / (1600 - 300)))`,
                fontWeight: "normal", fontStyle: "normal", fontFamily: "DINNextLTPro-Medium", color: props.txtColor, marginTop: `${50.5 / 1920 * props.size[0]}px`
            }}>
                {props.price}
            </Typography>
            <div style={{ marginTop: "10%" }}>
                {props.words.map((word, index) => {
                    return (
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <MusicNoteIcon fontSize="large" style={{ marginRight: `${18.69 / 1920 * props.size[0]}px`, color: "white", position: "inherit" }} />
                            <Typography style={{
                                textAlign: "left", fontSize: "calc(26px + (30 - 26) * ((100vw - 300px) / (1600 - 300)))", lineHeight: `calc(40px + (45 - 40) * ((100vw - 300px) / (1600 - 300)))`,
                                fontWeight: "normal", fontStyle: "normal", fontFamily: "DINNextLTPro-Medium", color: "white", marginTop: `${10 / 1920 * props.size[0]}px`
                            }}>
                                {word}
                            </Typography>
                        </div>
                    )
                })}
            </div>
            <Link to="/payment" style={{ textDecoration: "none" }}>
                <PricingButton ref={buttonRef} size={props.size} type={props.type} pos={pos} onClick={() => handlePricing()}>
                    <span>SELECT</span>
                </PricingButton>
            </Link>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPlanPayment: (plan) => dispatch(setPlanPayment(plan)),
    }
}

export default connect(null, mapDispatchToProps)(PricingList);