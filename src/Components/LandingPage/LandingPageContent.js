import React from 'react';

import Typography from '@material-ui/core/Typography';

import '../../Assets/styles/landingPage.scss';

const LandingPageContent = () => {
    return (
        <div style={{ height: "100vh", width: "100vw", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Typography style={{ font: "normal normal bold 65px/79px Helvetica Neue", textAlign: "left", letterSpacing: "6.5px", textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)" }}>
                INTERACTIVE CONCERT EXPERIENCE
            </Typography>
            <div style={{ display: "flex", flexDirection: "column", marginTop: "30px", height: "81px" }}>
                <Typography style={{
                    font: "normal normal normal 32px/44px Helvetica Neue", textAlign: "center", letterSpacing: "3.2px", textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)"
                }}>
                    Experience your favourite artists like never
                            </Typography>
                <Typography style={{
                    font: "normal normal normal 32px/44px Helvetica Neue", textAlign: "center", letterSpacing: "3.2px", textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)"
                }}>
                    before and from the comfort of your own home.
                            </Typography>
            </div>
            <a class="btn-mix-noborder" data-text="TRY IT NOW" />
        </div>
    )
}

export default React.memo(LandingPageContent);