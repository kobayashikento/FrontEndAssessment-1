import React from 'react';

import { Typography } from '@material-ui/core';

const PricingPerks = (props) => {

    const marginTopRatio = 234 / 1229;
    const marginLeftRatio = 215 / 1920;

    return (
        <div style={{ background: "#D34848 0% 0% no-repeat padding-box", minHeight: `${967 / 1920 * props.size[0]}px` }}>
            <div style={{ maxWidth: `${1580 / 1920 * props.size[0]}px`, display: "flex", flexDirection: "column", paddingTop: `${marginTopRatio * props.size[1]}px`, marginLeft: `${marginLeftRatio * props.size[0]}px` }}>
                <Typography style={{
                    textAlign: "left", font: `normal normal bold ${74 / 1920 * props.size[0]}px/${90 / 1920 * props.size[0]}px Helvetica Neue`,
                    letterSpacing: `${7.4 / 1920 * props.size[0]}px`, color: " #FFFFFF", height: `${88 / 1080 * props.size[1]}px`
                }}>
                    PERKS
                </Typography>
                <div style={{ display: "flex", paddingLeft: "1rem", marginTop: `${83.5 / 1229 * props.size[1]}px`, justifyContent: "space-between" }}>
                    <div>
                        <div style={{ width: `${104.49 / 1920 * props.size[0]}px`, background: `#FFFFFF`, height: `${3/1920*props.size[0]}px` }} />
                        <Typography style={{
                            color: "#FFFFFF", maxWidth: `${383 / 1920 * props.size[0]}px`, maxHeight: "185px", font: `normal normal bold ${51 / 1920 * props.size[0]}px/${62 / 1920 * props.size[0]}px Helvetica Neue`,
                            letterSpacing: `${5.1 / 1920 * props.size[0]}px`, marginTop: `${27.5 / 1229 * props.size[1]}px`
                        }}>
                            Subscription Payment Model
                        </Typography>
                        <Typography style={{
                            color: "#0B0B0B", maxWidth: `${433 / 1920 * props.size[0]}px`, maxHeight: "163px", font: `normal normal normal ${35 / 1920 * props.size[0]}px/${41 / 1920 * props.size[0]}px Helvetica Neue`,
                            letterSpacing: `${3.5 / 1920 * props.size[0]}px`, marginTop: `${28 / 1229 * props.size[1]}px`
                        }}>
                            No commitment, cancel anytime. Never worry about forgetting a payment again!
                        </Typography>
                    </div>
                    <div >
                        <div style={{ width: `${104.49 / 1920 * props.size[0]}px`,  background: `#FFFFFF`, height: `${3/1920*props.size[0]}px` }} />
                        <Typography style={{
                            color: "#FFFFFF", maxWidth: `${383 / 1920 * props.size[0]}px`, maxHeight: "185px", font: `normal normal bold ${51 / 1920 * props.size[0]}px/${62 / 1920 * props.size[0]}px Helvetica Neue`,
                            letterSpacing: `${5.1 / 1920 * props.size[0]}px`, marginTop: `${27.5 / 1229 * props.size[1]}px`
                        }}>
                            No Fee Cancelation Policy
                        </Typography>
                        <Typography style={{
                            color: "#0B0B0B", maxWidth: `${433 / 1920 * props.size[0]}px`, maxHeight: "163px", font: `normal normal normal ${35 / 1920 * props.size[0]}px/${41 / 1920 * props.size[0]}px Helvetica Neue`,
                            letterSpacing: `${3.5 / 1920 * props.size[0]}px`, marginTop: `${28 / 1229 * props.size[1]}px`
                        }}>
                            No commitment, cancel anytime. Never worry about forgetting a payment again!
                        </Typography>
                    </div>
                    <div>
                        <div style={{ width: `${104.49 / 1920 * props.size[0]}px`,  background: `#FFFFFF`, height: `${3/1920*props.size[0]}px` }} />
                        <Typography style={{
                            color: "#FFFFFF", maxWidth: `${383 / 1920 * props.size[0]}px`, maxHeight: "185px", font: `normal normal bold ${51 / 1920 * props.size[0]}px/${62 / 1920 * props.size[0]}px Helvetica Neue`,
                            letterSpacing: `${5.1 / 1920 * props.size[0]}px`, marginTop: `${27.5 / 1229 * props.size[1]}px`
                        }}>
                            Subscription Payment Model
                        </Typography>
                        <Typography style={{
                            color: "#0B0B0B", maxWidth: `${433 / 1920 * props.size[0]}px`, maxHeight: "163px", font: `normal normal normal ${35 / 1920 * props.size[0]}px/${41 / 1920 * props.size[0]}px Helvetica Neue`,
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

export default React.memo(PricingPerks)