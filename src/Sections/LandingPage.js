import React from 'react';

import { Curtains } from 'react-curtains';

import Cursor from '../Sections/Cursor';
import Header from '../Components/Header';
import CurtainContent from '../Sections/CurtainContent';
import SectionRed from '../Sections/SectionRed';
import SectionYellow from '../Sections/SectionYellow';
import Perks from '../Sections/Perks';
import Review from '../Sections/SectionReview';

import '../Assets/styles/landingPage.css';

const LandingPage = () => {

    const [index, setIndex] = React.useState(0);
    const [size, setSize] = React.useState([window.innerWidth, window.innerHeight]);
    const [playing, setPlaying] = React.useState(false);
    //refs

    const handlePlay = () => {
        setPlaying(!playing)
    }

    const handleScroll = () => {
        if (size[1] * 0.51 < window.scrollY && window.scrollY < size[1] * 1.5 && index !== 1) {
            setIndex(1);
        } else if (size[1] * 1.5 < window.scrollY && window.scrollY < size[1] * 2.5 && index !== 2) {
            setIndex(2);
        } else if (size[1] * 2.5 < window.scrollY && window.scrollY < size[1] * 3.5 && index !== 3) {
            setIndex(3);
        } else if (size[1] * 3.5 < window.scrollY && window.scrollY < size[1] * 4.5 && index !== 4) {
            setIndex(4);
        } else {
            setIndex(0);
        }
    }

    React.useLayoutEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        window.addEventListener('scroll', handleScroll);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return (
        <div>
            {/* <Cursor
                size={size}
            /> */}
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
                    playing={playing}
                    handlePlay={() => handlePlay()}
                />
                <SectionYellow
                    size={size}
                />
                <Perks
                    size={size}
                />
                <Review
                    size={size}
                />
            </div>
        </div>

    )
}

export default React.memo(LandingPage);