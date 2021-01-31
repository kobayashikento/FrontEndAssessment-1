import React from 'react';

import { Typography } from '@material-ui/core';

import Header from '../Components/Header';

const Pricing = (props) => {

    const [size, setSize] = React.useState([window.innerWidth, window.innerHeight]);

    React.useLayoutEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return (
        <div style={{ background: "#191919 0% 0% no-repeat padding-box", minHeight: `${1229 / 1080 * size[1]}px` }}>
            <Header
                index={4}
                size={size}
            />
            <div style={{ display: "flex", flexDirection: "column", paddingTop: `${308 / 1890 * size[1]}px`, marginLeft: `${183 / 1920 * size[0]}px` }}>
                <Typography style={{
                    textAlign: "left", font: `normal normal bold ${74 / 1920 * size[0]}px/${90 / 1920 * size[0]}px Helvetica Neue`,
                    letterSpacing: `${7.4 / 1920 * size[0]}px`, color: " #FFFFFF", height: `${88 / 1080 * size[1]}px`
                }}>
                    PRICING
                </Typography>
                <Typography style={{
                    textAlign: "left", font: `normal normal normal ${51 / 1920 * size[0]}px/${80 / 1920 * size[0]}px Helvetica Neue`,
                    width: `${1150/1920 *size[0]}px`, letterSpacing: `${5.1 / 1920 * size[0]}px`, color: " #FFFFFF", marginTop: `${38/ 1890 * size[1]}px`
                }}>
                    Test out our app today! Choose from three subscription Based payment models.
                </Typography>
                <div style={{ display: "flex", paddingLeft: "1rem", marginTop: `${83.5 / 1229 * size[1]}px` }}>
                    <div>
                        <div style={{ width: `${104.49 / 1920 * size[0]}px`, border: "3px solid #D34848" }} />
                        <Typography style={{
                            color: "#D34848", maxWidth: `${383 / 1920 * size[0]}px`, maxHeight: "185px", font: `normal normal bold ${51 / 1920 * size[0]}px/${62 / 1920 * size[0]}px Helvetica Neue`,
                            letterSpacing: `${5.1 / 1920 * size[0]}px`, marginTop: `${27.5 / 1229 * size[1]}px`
                        }}>
                            Subscription Payment Model
                        </Typography>
                        <Typography style={{
                            color: "#FFFFFF", maxWidth: `${433 / 1920 * size[0]}px`, maxHeight: "163px", font: `normal normal normal ${35 / 1920 * size[0]}px/${41 / 1920 * size[0]}px Helvetica Neue`,
                            letterSpacing: `${3.5 / 1920 * size[0]}px`, marginTop: `${28 / 1229 * size[1]}px`
                        }}>
                            No commitment, cancel anytime. Never worry about forgetting a payment again!
                        </Typography>
                    </div>
                    <div style={{ marginLeft: `${176 / 1920 * size[0]}px` }}>
                        <div style={{ width: `${104.49 / 1920 * size[0]}px`, border: "3px solid #1FE1E9" }} />
                        <Typography style={{
                            color: "#1FE1E9", maxWidth: `${383 / 1920 * size[0]}px`, maxHeight: "185px", font: `normal normal bold ${51 / 1920 * size[0]}px/${62 / 1920 * size[0]}px Helvetica Neue`,
                            letterSpacing: `${5.1 / 1920 * size[0]}px`, marginTop: `${27.5 / 1229 * size[1]}px`
                        }}>
                            No Fee Cancelation Policy
                        </Typography>
                        <Typography style={{
                            color: "#FFFFFF", maxWidth: `${433 / 1920 * size[0]}px`, maxHeight: "163px", font: `normal normal normal ${35 / 1920 * size[0]}px/${41 / 1920 * size[0]}px Helvetica Neue`,
                            letterSpacing: `${3.5 / 1920 * size[0]}px`, marginTop: `${28 / 1229 * size[1]}px`
                        }}>
                            No commitment, cancel anytime. Never worry about forgetting a payment again!
                        </Typography>
                    </div>
                    <div style={{ marginLeft: `${176 / 1920 * size[0]}px` }}>
                        <div style={{ width: `${104.49 / 1920 * size[0]}px`, border: "3px solid #FFB33F" }} />
                        <Typography style={{
                            color: "#FFB33F", maxWidth: `${383 / 1920 * size[0]}px`, maxHeight: "185px", font: `normal normal bold ${51 / 1920 * size[0]}px/${62 / 1920 * size[0]}px Helvetica Neue`,
                            letterSpacing: `${5.1 / 1920 * size[0]}px`, marginTop: `${27.5 / 1229 * size[1]}px`
                        }}>
                            Subscription Payment Model
                        </Typography>
                        <Typography style={{
                            color: "#FFFFFF", maxWidth: `${433 / 1920 * size[0]}px`, maxHeight: "163px", font: `normal normal normal ${35 / 1920 * size[0]}px/${41 / 1920 * size[0]}px Helvetica Neue`,
                            letterSpacing: `${3.5 / 1920 * size[0]}px`, marginTop: `${28 / 1229 * size[1]}px`
                        }}>
                            No commitment, cancel anytime. Never worry about forgetting a payment again!
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Pricing)