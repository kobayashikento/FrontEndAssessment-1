import React from 'react';

import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import Input from '@material-ui/core/Input';

import { connect } from 'react-redux';
import SectionFooter from './SectionFooter';

import { Scrollbars } from 'react-custom-scrollbars';

const Payment = (props) => {
    const [selectedValue, setSelectedValue] = React.useState(props.plan);


    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div style={{ background: "#FFFFFF 0% 0% no-repeat padding-box" }}>
            <Scrollbars
                // This will activate auto hide
                autoHide
                style={{ height: `${props.size[1]}px` }}
                thumbSize={50}
            >
                <Typography style={{
                    textAlign: "left", font: `normal normal bold ${74 / 1920 * props.size[0]}px/${90 / 1920 * props.size[0]}px Helvetica Neue`,
                    letterSpacing: `${7.4 / 1920 * props.size[0]}px`, color: " #000000", marginLeft: `${183 / 1920 * props.size[0]}px`, paddingTop: `${308 / 1947 * props.size[1]}px`
                }}>
                    PAYMENT
                </Typography>
                <div style={{ display: "flex", flexDirection: "column", marginLeft: `${185 / 1920 * props.size[0]}px`, }}>
                    <Typography style={{
                        textAlign: "left", font: `normal normal normal ${45 / 1920 * props.size[0]}px/${71 / 1920 * props.size[0]}px Helvetica Neue`,
                        letterSpacing: `${4.5 / 1920 * props.size[0]}px`, color: " #000000", marginTop: `${121 / 1920 * props.size[0]}px`
                    }}>
                        1. Select your plan
                </Typography>
                    <div style={{ display: "flex", marginTop: `${32 / 1920 * props.size[0]}px`, maxWidth: `${745 / 1920 * props.size[0]}px`, justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Radio
                                checked={selectedValue === 'basic'}
                                onChange={handleChange}
                                value="basic"
                                style={{ color: "#D24848", padding: "0px" }}
                            />
                            <Typography style={{
                                marginLeft: `${13 / 1920 * props.size[0]}px`,
                                textAlign: "left", font: `normal normal bold ${37 / 1920 * props.size[0]}px/${45 / 1920 * props.size[0]}px Helvetica Neue`,
                                letterSpacing: `${3.7 / 1920 * props.size[0]}px`, color: "#D24848"
                            }}>
                                BASIC
                </Typography>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Radio
                                checked={selectedValue === 'advanced'}
                                onChange={handleChange}
                                value="advanced"
                                style={{ color: "#FFB33F", padding: "0px" }}
                            />
                            <Typography style={{
                                marginLeft: `${13 / 1920 * props.size[0]}px`,
                                textAlign: "left", font: `normal normal bold ${37 / 1920 * props.size[0]}px/${45 / 1920 * props.size[0]}px Helvetica Neue`,
                                letterSpacing: `${3.7 / 1920 * props.size[0]}px`, color: "#FFB33F"
                            }}>
                                ADVANCED
                </Typography>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Radio
                                checked={selectedValue === 'pro'}
                                onChange={handleChange}
                                value="pro"
                                style={{ color: "#1FE1E9", padding: "0px" }}
                            />
                            <Typography style={{
                                marginLeft: `${13 / 1920 * props.size[0]}px`,
                                textAlign: "left", font: `normal normal bold ${37 / 1920 * props.size[0]}px/${45 / 1920 * props.size[0]}px Helvetica Neue`,
                                letterSpacing: `${3.7 / 1920 * props.size[0]}px`, color: "#1FE1E9"
                            }}>
                                PRO
                </Typography>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", marginLeft: `${189 / 1920 * props.size[0]}px`, marginTop: `${148 / 1947 * props.size[1]}px` }}>
                    <div>
                        <Typography style={{
                            textAlign: "left", font: `normal normal normal ${45 / 1920 * props.size[0]}px/${71 / 1920 * props.size[0]}px Helvetica Neue`,
                            letterSpacing: `${4.5 / 1920 * props.size[0]}px`, color: " #000000",
                        }}>
                            2. Billing Information
                        </Typography>
                        <div style={{ marginTop: `${49 / 1920 * props.size[0]}px`, marginLeft: `${65 / 1920 * props.size[0]}px` }}>
                            <Typography style={{
                                textAlign: "left", font: `normal normal bold ${22 / 1920 * props.size[0]}px/${34 / 1920 * props.size[0]}px Helvetica Neue`,
                                letterSpacing: `${2.2 / 1920 * props.size[0]}px`, color: " #000000",
                            }}>
                                FULL NAME
                        </Typography>
                            <Input defaultValue="" style={{
                                width: `${681 / 1920 * props.size[0]}px`, marginTop: `${12 / 1920 * props.size[0]}px`, color: "#000000",
                                border: `${2 / 1920 * props.size[0]}px solid #000000`, height: `${74 / 1920 * props.size[0]}px`,
                                font: `normal normal normal ${28 / 1920 * props.size[0]}px/${44 / 1920 * props.size[0]}px Helvetica Neue`, letterSpacing: `${2.8 / 1920 * props.size[0]}px`
                            }} />
                            <Typography style={{
                                textAlign: "left", font: `normal normal bold ${22 / 1920 * props.size[0]}px/${34 / 1920 * props.size[0]}px Helvetica Neue`,
                                letterSpacing: `${2.2 / 1920 * props.size[0]}px`, color: " #000000", marginTop: `${31 / 1920 * props.size[0]}px`,
                            }}>
                                BILLING ADDRESS
                        </Typography>
                            <Input defaultValue="" style={{
                                width: `${681 / 1920 * props.size[0]}px`, marginTop: `${12 / 1920 * props.size[0]}px`, color: "#000000",
                                border: `${2 / 1920 * props.size[0]}px solid #000000`, height: `${74 / 1920 * props.size[0]}px`,
                                font: `normal normal normal ${28 / 1920 * props.size[0]}px/${44 / 1920 * props.size[0]}px Helvetica Neue`, letterSpacing: `${2.8 / 1920 * props.size[0]}px`
                            }} />
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <div>
                                    <Typography style={{
                                        textAlign: "left", font: `normal normal bold ${22 / 1920 * props.size[0]}px/${34 / 1920 * props.size[0]}px Helvetica Neue`,
                                        letterSpacing: `${2.2 / 1920 * props.size[0]}px`, color: " #000000", marginTop: `${31 / 1920 * props.size[0]}px`,
                                    }}>
                                        CITY
                        </Typography>
                                    <Input defaultValue="" style={{
                                        width: `${321 / 1920 * props.size[0]}px`, marginTop: `${12 / 1920 * props.size[0]}px`, color: "#000000",
                                        border: `${2 / 1920 * props.size[0]}px solid #000000`, height: `${74 / 1920 * props.size[0]}px`,
                                        font: `normal normal normal ${28 / 1920 * props.size[0]}px/${44 / 1920 * props.size[0]}px Helvetica Neue`, letterSpacing: `${2.8 / 1920 * props.size[0]}px`
                                    }} />
                                </div>
                                <div>
                                    <Typography style={{
                                        textAlign: "left", font: `normal normal bold ${22 / 1920 * props.size[0]}px/${34 / 1920 * props.size[0]}px Helvetica Neue`,
                                        letterSpacing: `${2.2 / 1920 * props.size[0]}px`, color: " #000000", marginTop: `${31 / 1920 * props.size[0]}px`,
                                    }}>
                                        POSTAL CODE
                        </Typography>
                                    <Input defaultValue="" style={{
                                        width: `${323 / 1920 * props.size[0]}px`, marginTop: `${12 / 1920 * props.size[0]}px`, color: "#000000",
                                        border: `${2 / 1920 * props.size[0]}px solid #000000`, height: `${74 / 1920 * props.size[0]}px`,
                                        font: `normal normal normal ${28 / 1920 * props.size[0]}px/${44 / 1920 * props.size[0]}px Helvetica Neue`, letterSpacing: `${2.8 / 1920 * props.size[0]}px`
                                    }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SectionFooter />
            </Scrollbars>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        size: state.propertyReducer.size,
        plan: state.propertyReducer.plan
    }
}

export default connect(mapStateToProps)(Payment)
