import React from 'react';

import { Curtains } from 'react-curtains';

import Header from '../Components/Header';
import CurtainContent from '../Sections/CurtainContent';
import SectionRed from '../Sections/SectionRed';
import SectionYellow from '../Sections/SectionYellow';
import Perks from '../Sections/Perks';

import { useWheel } from 'react-use-gesture';

import '../Assets/styles/landingPage.css';

const LandingPage = () => {

    const [index, setIndex] = React.useState(0);
    const [size, setSize] = React.useState([window.innerWidth, window.innerHeight]);

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

    React.useLayoutEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return (
        <div {...bind()} >
            <Header
                index={index}
                size={size}
            />
            <div className="node-master" style={{ background: "0% 0% no-repeat padding-box padding-box rgb(211, 72, 72)" }}>
                <Curtains
                    pixelRatio={Math.min(1.5, window.devicePixelRatio)}
                    autoRender={false}
                >
                    <CurtainContent
                        size={size}
                    />
                </Curtains>
                <SectionRed
                    size={size}
                />
                <SectionYellow
                    size={size}
                />
                <Perks
                    size={size}
                />
            </div>
        </div>

    )
}

export default React.memo(LandingPage);