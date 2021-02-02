import React from 'react';

import gsap from 'gsap';
import { useCurtains } from 'react-curtains';

import Slideshow from './CurtainComponents/Slideshow';

import '../Assets/styles/curtainStyle.css';
import { useSpring, animated } from 'react-spring';

const CurtainContent = (props) => {

  const [curtainReady, setCurtainReady] = React.useState(false);

  useCurtains((curtains) => {
    // use gsap ticker to render our curtains scene
    gsap.ticker.add(curtains.render.bind(curtains));
  });

  const handleCurtainReady = () => {
    setCurtainReady(true);
  }

  const backgroundSpring = useSpring({
    to: { background: curtainReady ? "rgba(0,0,0, 0)" : "rgba(0,0,0, 1)" },
    from: { background: "rgba(0,0,0, 1)" }
  })

  return (
    <animated.div style={{ ...backgroundSpring, height: "100vh", width: "100vw" }}>
      <Slideshow
        size={props.size}
        handleCurtainReady={() => handleCurtainReady()}
        curtainReady={curtainReady}
      />
    </animated.div>
  );
}

export default React.memo(CurtainContent);
