import React from 'react';

import { Curtains } from 'react-curtains';

import Header from '../Components/Header';
import CurtainContent from '../Sections/CurtainContent';
import SectionRed from '../Sections/SectionRed';
import SectionYellow from '../Sections/SectionYellow';

import { useWheel } from 'react-use-gesture';

import '../Assets/styles/landingPage.css';

const LandingPage = () => {

    const [index, setIndex] = React.useState(0);

    const bind = useWheel(({ wheeling, xy, direction }) => {
        if (wheeling) {
            if (window.innerHeight * 0.8 < xy[1]) {
                setIndex(1);
            }
            if (window.innerHeight * 1.8 < xy[1]) {
                setIndex(2);
            }
        }
    })

    return (
        <div {...bind()} >
            <Header
                index={index}
            />
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
        </div>

    )
}

export default React.memo(LandingPage);