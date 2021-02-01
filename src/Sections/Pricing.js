import React from 'react';

import { Typography } from '@material-ui/core';

import PricingList from '../Components/PricingList';
import PricingPerks from './PricingPerks';
import SectionFooter from './SectionFooter';

import { Scrollbars } from 'react-custom-scrollbars';

import { connect } from 'react-redux';

import { setMenuIndex, setNavIndex } from '../Redux/actions/propertyAction';

const Pricing = (props) => {

    React.useEffect(() => {
        props.setNavIndex(3);
        props.setMenuIndex(5);
    }, [])

    return (
        <div style={{ background: "#191919 0% 0% no-repeat padding-box" }}>
            <Scrollbars
                // This will activate auto hide
                autoHide
                style={{ height: `${props.size[1]}px` }}
                thumbSize={50}
            >
                <div style={{ display: "flex", flexDirection: "column", paddingTop: `${308 / 1920 * props.size[0]}px`, marginLeft: `${183 / 1920 * props.size[0]}px` }}>
                    <Typography style={{
                        textAlign: "left", font: `normal normal bold ${74 / 1920 * props.size[0]}px/${90 / 1920 * props.size[0]}px Helvetica Neue`,
                        letterSpacing: `${7.4 / 1920 * props.size[0]}px`, color: " #FFFFFF", height: `${88 / 1080 * props.size[1]}px`
                    }}>
                        PRICING
                </Typography>
                    <Typography style={{
                        textAlign: "left", font: `normal normal normal ${51 / 1920 * props.size[0]}px/${80 / 1920 * props.size[0]}px Helvetica Neue`,
                        marginRight: `${38 / 1920 * props.size[0]}px`, letterSpacing: `${5.1 / 1920 * props.size[0]}px`, color: " #FFFFFF",
                        marginTop: `${38 / 1920 * props.size[0]}px`
                    }}>
                        Test out our app today! Choose from three subscription Based payment models.
                </Typography>
                    <div style={{
                        maxWidth: `${1605 / 1920 * props.size[0]}px`, display: "flex", justifyContent: "space-between",
                        marginTop: `${204 / 1920 * props.size[0]}px`, paddingBottom: `${256 / 1920 * props.size[0]}px`
                    }}>
                        <PricingList
                            words={["Very good", "Amazing", "Perfect job", "Love this", "It's so good", "Features"]}
                            price="$9"
                            plan="BASIC"
                            time="MONTHLY"
                            txtColor="#D24848"
                            barColor="#D14747"
                            type="red"
                            size={props.size}
                        />
                        <PricingList
                            words={["Very very good", "Even Amazing", "Perfect job", "Love this more", "It's so good", "More Features"]}
                            price="$99"
                            plan="ADVANCED"
                            time="YEARLY"
                            txtColor="#FFB33F"
                            barColor="#FFB33F"
                            type="yellow"
                            size={props.size}
                        />
                        <PricingList
                            words={["Very very good", "Even more", "Perfect job", "Love this more", "It's so so good", "More Features"]}
                            price="$120"
                            plan="PRO"
                            time="YEARLY"
                            txtColor="#1FE1E9"
                            barColor="#1FE1E9"
                            type="blue"
                            size={props.size}
                        />
                    </div>
                </div>
                <PricingPerks
                    size={props.size}
                />
                <SectionFooter
                    size={props.size}
                />
            </Scrollbars>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        size: state.propertyReducer.size,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMenuIndex: (index) => dispatch(setMenuIndex(index)),
        setNavIndex: (index) => dispatch(setNavIndex(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pricing)