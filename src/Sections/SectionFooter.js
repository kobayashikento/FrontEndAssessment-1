import React from 'react';

import { Typography } from '@material-ui/core';

import MailIcon from '@material-ui/icons/Mail';

const SectionFooter = (props) => {

    return (
        <div style={{ background: "#5E33D1 0% 0% no-repeat padding-box", height: `${538 / 1080 * props.size[1]}px` }}>
            <div style={{
                position: "absolute", paddingTop: `${189 / 1080 * props.size[1]}px`, marginLeft: `${139 / 1920 * props.size[0]}px`,
                display: "flex", alignItems: "center", justifyContent: 'center'
            }}>
                <MailIcon style={{ color: "#FFFFFF", marginTop: "2px" }} />
                <Typography style={{
                    color: "#FFFFFF", maxWidth: `${604 / 1920 * props.size[0]}px`,
                    font: `normal normal normal ${35 / 1920 * props.size[0]}px/${41 / 1920 * props.size[0]}px Helvetica Neue`,
                    letterSpacing: `${3.5 / 1920 * props.size[0]}px`, marginLeft: `${26.34 / 1920 * props.size[0]}px`,
                    pointerEvents: "none", display: "flex",
                }}>
                    support@experienceconcerts.co
                    </Typography>
            </div>
            <div style={{
                position: "absolute", display: "flex", flexDirection: "column", paddingTop: `${320 / 1080 * props.size[1]}px`, width: "100vw"
            }}>
                <Typography style={{
                    color: "#FFFFFF", maxWidth: `${235 / 1920 * props.size[0]}px`,
                    font: `normal normal normal ${48 / 1920 * props.size[0]}px/${57 / 1920 * props.size[0]}px Helvetica Neue`,
                    letterSpacing: `${4.8 / 1920 * props.size[0]}px`, marginLeft: `${824 / 1920 * props.size[0]}px`,
                    height: `${56 / 1080 * props.size[1]}px`, pointerEvents: "none",
                }}>
                    EXP|CON
                    </Typography>
                <Typography style={{
                    color: "#FFFFFF", maxWidth: `${941 / 1920 * props.size[0]}px`,
                    font: `normal normal normal ${24 / 1920 * props.size[0]}px/${29 / 1920 * props.size[0]}px Helvetica Neue`,
                    letterSpacing: `${2.4 / 1920 * props.size[0]}px`, marginLeft: `${560 / 1920 * props.size[0]}px`,
                    height: `${60 / 1080 * props.size[1]}px`, pointerEvents: "none", marginTop: `${45 / 1080 * props.size[1]}px`
                }}>
                    2019 © All Rights Reserved | Speer Technologies Incorporated
                    </Typography>
            </div>
        </div>
    )
}

export default React.memo(SectionFooter)