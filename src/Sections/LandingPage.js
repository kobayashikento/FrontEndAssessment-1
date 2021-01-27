import React from 'react';

import { Curtains } from 'react-curtains';

import CurtainContent from '../Sections/CurtainContent';
import SectionRed from '../Sections/SectionRed';
import SectionYellow from '../Sections/SectionYellow';

import '../Assets/styles/landingPage.css';

const LandingPage = () => {
    return (
        <div className="node-master">
            <Curtains
                pixelRatio={Math.min(1.5, window.devicePixelRatio)}
                autoRender={false}
            >
                <CurtainContent />
            </Curtains>
            <SectionRed />
            <SectionYellow />
        </div>
    )
}

export default React.memo(LandingPage);