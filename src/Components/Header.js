import React from 'react';

import DehazeIcon from '@material-ui/icons/Dehaze';
import { IconButton, Typography } from '@material-ui/core';

const Header = () => {

    const headLeftRatio = 83 / 1920;
    const headMarginRatio = 37.87 / 1920;
    const headTopRatio = 86.32 / 1080;

    return (
        <div style={{ display: "flex", position: "fixed", left: `${window.innerWidth * headLeftRatio}px`, top: `${headTopRatio * window.innerHeight}px`, zIndex: 2020, alignItems: "center" }}>
            <IconButton style={{ padding: "0px" }}>
                <DehazeIcon style={{ color: "white", fontSize: "56px" }} />
            </IconButton>
            <Typography style={{ textAlign: "left", font: "normal normal normal 48px/57px Helvetica Neue", color: "#FFFFFF", letterSpacing: "4.8px", marginLeft: `${headMarginRatio * window.innerWidth}px` }}>
                EXP|CON
            </Typography>
        </div>
    )
}

export default React.memo(Header);