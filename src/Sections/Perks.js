import React from 'react';

import '../Assets/styles/landingPage.scss';
import { Typography } from '@material-ui/core';

const Perks = (props) => {

    const buttonTryRef = React.useRef();
    const marginTopRatio = 327 / 1229;
    const marginLeftRatio = 172 / 1920;

    return (
        <div style={{ background: "#191919 0% 0% no-repeat padding-box", minHeight: `${1229 / 1080 * props.size[1]}px` }}>
            <div ref={buttonTryRef} style={{ display: "flex", position: "absolute", right: `${77/1920 * props.size[0]}px` }}>
                <a style={{
                    width: "248px", height: "62px", marginTop: `${69/1080 * props.size[1]}px`,
                    transform: `scale(${props.size[0] / 1920}) translate(${props.tryMargin[0]}px, -${props.tryMargin[1]}px)`, 
                }} className="btntry-try-noborder" data-text="TRY IT NOW" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", paddingTop: `${marginTopRatio * props.size[1]}px`, marginLeft: `${marginLeftRatio * props.size[0]}px` }}>
                <Typography style={{
                    textAlign: "left", font: `normal normal bold ${74 / 1920 * props.size[0]}px/${90 / 1920 * props.size[0]}px Helvetica Neue`,
                    letterSpacing: `${7.4 / 1920 * props.size[0]}px`, color: " #FFFFFF", height: `${88 / 1080 * props.size[1]}px`
                }}>
                    PERKS
                </Typography>
                <div style={{ display: "flex", paddingLeft: "1rem", marginTop: `${83.5 / 1229 * props.size[1]}px` }}>
                    <div>
                        <div style={{ width: `${104.49 / 1920 * props.size[0]}px`, border: "3px solid #D34848" }} />
                        <Typography style={{
                            color: "#D34848", maxWidth: `${383 / 1920 * props.size[0]}px`, maxHeight: "185px", font: `normal normal bold ${51 / 1920 * props.size[0]}px/${62 / 1920 * props.size[0]}px Helvetica Neue`,
                            letterSpacing: `${5.1 / 1920 * props.size[0]}px`, marginTop: `${27.5 / 1229 * props.size[1]}px`
                        }}>
                            Subscription Payment Model
                        </Typography>
                        <Typography style={{
                            color: "#FFFFFF", maxWidth: `${433 / 1920 * props.size[0]}px`, maxHeight: "163px", font: `normal normal normal ${35 / 1920 * props.size[0]}px/${41 / 1920 * props.size[0]}px Helvetica Neue`,
                            letterSpacing: `${3.5 / 1920 * props.size[0]}px`, marginTop: `${28 / 1229 * props.size[1]}px`
                        }}>
                            No commitment, cancel anytime. Never worry about forgetting a payment again!
                        </Typography>
                    </div>
                    <div style={{ marginLeft: `${176 / 1920 * props.size[0]}px` }}>
                        <div style={{ width: `${104.49 / 1920 * props.size[0]}px`, border: "3px solid #1FE1E9" }} />
                        <Typography style={{
                            color: "#1FE1E9", maxWidth: `${383 / 1920 * props.size[0]}px`, maxHeight: "185px", font: `normal normal bold ${51 / 1920 * props.size[0]}px/${62 / 1920 * props.size[0]}px Helvetica Neue`,
                            letterSpacing: `${5.1 / 1920 * props.size[0]}px`, marginTop: `${27.5 / 1229 * props.size[1]}px`
                        }}>
                            No Fee Cancelation Policy
                        </Typography>
                        <Typography style={{
                            color: "#FFFFFF", maxWidth: `${433 / 1920 * props.size[0]}px`, maxHeight: "163px", font: `normal normal normal ${35 / 1920 * props.size[0]}px/${41 / 1920 * props.size[0]}px Helvetica Neue`,
                            letterSpacing: `${3.5 / 1920 * props.size[0]}px`, marginTop: `${28 / 1229 * props.size[1]}px`
                        }}>
                            No commitment, cancel anytime. Never worry about forgetting a payment again!
                        </Typography>
                    </div>
                    <div style={{ marginLeft: `${176 / 1920 * props.size[0]}px` }}>
                        <div style={{ width: `${104.49 / 1920 * props.size[0]}px`, border: "3px solid #FFB33F" }} />
                        <Typography style={{
                            color: "#FFB33F", maxWidth: `${383 / 1920 * props.size[0]}px`, maxHeight: "185px", font: `normal normal bold ${51 / 1920 * props.size[0]}px/${62 / 1920 * props.size[0]}px Helvetica Neue`,
                            letterSpacing: `${5.1 / 1920 * props.size[0]}px`, marginTop: `${27.5 / 1229 * props.size[1]}px`
                        }}>
                            Subscription Payment Model
                        </Typography>
                        <Typography style={{
                            color: "#FFFFFF", maxWidth: `${433 / 1920 * props.size[0]}px`, maxHeight: "163px", font: `normal normal normal ${35 / 1920 * props.size[0]}px/${41 / 1920 * props.size[0]}px Helvetica Neue`,
                            letterSpacing: `${3.5 / 1920 * props.size[0]}px`, marginTop: `${28 / 1229 * props.size[1]}px`
                        }}>
                            No commitment, cancel anytime. Never worry about forgetting a payment again!
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Perks)