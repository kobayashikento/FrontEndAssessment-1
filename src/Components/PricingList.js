import React from 'react';

import PricingButton from '../Components/PricingCTA';

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

    React.useEffect(() => {
        let pos = [(PRICING_CTA_WIDTH - buttonRef.current.getBoundingClientRect().width) / 2, (PRICING_CTA_HEIGHT - buttonRef.current.getBoundingClientRect().height) / 2];
        setPos(pos);
    }, [props.size]);

    React.useEffect(() => {
        if (buttonRef.current) {
            buttonRef.current.onmousemove = function (e) {
                e.target.style.setProperty('--x', e.offsetX + 'px');
                e.target.style.setProperty('--y', e.offsetY + 'px');
            }
        }
    }, [buttonRef]);

    const handlePricing = () => {
        props.setPlanPayment(props.plan);
    }

    return (
        <div>
            <Typography style={{
                color: props.txtColor, maxHeight: "185px",
                font: `normal normal bold ${42 / 1920 * props.size[0]}px/${51 / 1920 * props.size[0]}px Helvetica Neue`,
                letterSpacing: `${4.2 / 1920 * props.size[0]}px`, marginLeft: `${5 / 1920 * props.size[0]}px`
            }}>
                {props.plan}
            </Typography>
            <div style={{
                width: `${141.49 / 1920 * props.size[0]}px`, background: props.barColor, height: `${3 / 1920 * props.size[0]}px`,
                marginTop: `${19.5 / 1920 * props.size[0]}px`, marginLeft: `${10.29 / 1920 * props.size[0]}px`
            }} />
            <Typography style={{
                color: props.txtColor, maxHeight: "185px", font: `normal normal bold ${47 / 1920 * props.size[0]}px/${57 / 1920 * props.size[0]}px Helvetica Neue`,
                letterSpacing: `${4.7 / 1920 * props.size[0]}px`, marginTop: `${20.5 / 1229 * props.size[1]}px`, marginLeft: `${11 / 1920 * props.size[0]}px`
            }}>
                {props.time}
            </Typography>
            <Typography style={{
                color: props.txtColor, maxHeight: "185px", font: `normal normal bold ${134 / 1920 * props.size[0]}px/${164 / 1920 * props.size[0]}px Helvetica Neue`,
                letterSpacing: `${13.4 / 1920 * props.size[0]}px`, marginTop: `${11 / 1229 * props.size[1]}px`, marginLeft: `${16 / 1920 * props.size[0]}px`
            }}>
                {props.price}
            </Typography>
            {props.words.map((word, index) => {
                return (
                    <Typography key={`${props.plan + index}`} style={{
                        color: "#FFFFFF",
                        font: `normal normal normal ${47 / 1920 * props.size[0]}px/${64 / 1920 * props.size[0]}px Helvetica Neue`,
                        letterSpacing: `${4.7 / 1920 * props.size[0]}px`, marginTop: index === 0 ? `${42 / 1229 * props.size[1]}px` : `${5 / 1229 * props.size[1]}px`,
                        marginLeft: `${16 / 1920 * props.size[0]}px`,
                    }}>
                        <MusicNoteIcon style={{ marginRight: `${18.69 / 1920 * props.size[0]}px` }} />
                        {word}
                    </Typography>
                )
            })}
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