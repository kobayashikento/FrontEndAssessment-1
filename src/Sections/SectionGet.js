import React from 'react';

import { Typography } from '@material-ui/core';

const SectionGet = (props) => {

    return (
        <div style={{ background: "#191919 0% 0% no-repeat padding-box", height: `${814 / 1080 * props.size[1]}px` }}>
            <div style={{ display: "flex", position: "absolute", right: `${189 / 1920 * props.size[0]}px` }}>
                <a style={{
                    marginTop: `${379 / 1080 * props.size[1]}px`,
                    transform: `scale(${props.size[0] / 1920}) translate(${props.tryPos[0]}px, ${-props.tryPos[1]}px)`,
                }} className="btntryget-try-noborder" data-text="TRY IT NOW" />
            </div>
            <div style={{ position: "absolute", marginLeft: `${172 / 1920 * props.size[0]}px`, marginTop: `${349 / 1080 * props.size[1]}px`,}}>
                <Typography style={{
                    color: "#D34848", font: `normal normal bold ${74 / 1920 * props.size[0]}px/${90 / 1920 * props.size[0]}px Helvetica Neue`,
                    letterSpacing: `${7.4 / 1920 * props.size[0]}px`,
                    height: `${88 / 1080 * props.size[1]}px`, display: "flex", alignItems: "center"
                }}>GET EXP|CON NOW</Typography>
                <Typography style={{
                   color: "#FFFFFF", maxWidth: `${941 / 1920 * props.size[0]}px`, font: `normal normal normal ${51 / 1920 * props.size[0]}px/${61 / 1920 * props.size[0]}px Helvetica Neue`,
                    letterSpacing: `${5.1 / 1920 * props.size[0]}px`, marginTop: `${21 / 1080 * props.size[1]}px`, 
                    height: `${60 / 1080 * props.size[1]}px`, 
                }}>
                    Purchase and download the app.
                    </Typography>
            </div>
        </div>
    )
}

export default React.memo(SectionGet)