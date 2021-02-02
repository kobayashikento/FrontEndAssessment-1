import React from 'react';

// import slideshow
import { Plane, useCurtains } from 'react-curtains';
import gsap from 'gsap';
import { vertexShader, fragmentShader } from './Shader';

// import component
import LandingPageContent from '../LandingPage/LandingPageContent';

// import styles
import '../../Assets/styles/curtainStyle.css';

// import spring
import { useSpring, animated } from 'react-spring'

import landing_image_1 from '../../Assets/pictures/LandingPage/landing_image_1.png';
import landing_image_2 from '../../Assets/pictures/LandingPage/landing_image_2.png';
import landing_image_3 from '../../Assets/pictures/LandingPage/landing_image_3.png';

const Slideshow = (props) => {
    // slideshow states
    const [plane, setPlane] = React.useState(null);
    const slideshowInner = React.useRef(null);
    const [activeTexture, setActiveTexture] = React.useState(1);
    const [activeRadio, setActiveRadio] = React.useState(1);
    const [cycleIndex, setCycleIndex] = React.useState(2);
    const [maxTextures, setMaxTextures] = React.useState(0);

    // refs
    const isChanging = React.useRef(false);
    const tween = React.useRef(null);
    const activeTex = React.useRef(null);
    const nextTex = React.useRef(null);

    // handle initial load
    React.useEffect(() => {
        if (slideshowInner.current) {
            console.log(slideshowInner.current)
            setMaxTextures(slideshowInner.current.childElementCount);
        }
        let currentTween = tween.current;
        return () => {
            if (currentTween) {
                currentTween.kill();
            }
        };
    }, []);

    // confid transition timer 
    const uniforms = {
        transitionTimer: {
            name: "uTransitionTimer",
            type: "1f",
            value: 0
        }
    };

    // onload callback for the slideshow
    const onLoading = (plane, texture) => {
        // improve texture rendering on small screens with LINEAR_MIPMAP_NEAREST minFilter
        texture.setMinFilter(texture.gl.LINEAR_MIPMAP_NEAREST);
    };

    // callback when slideshow is ready
    const onReady = (plane) => {
        setPlane(plane);
    };

    // event triggered when radio buttons are clicked
    const handleRadioClick = React.useCallback((index) => {
        if (!isChanging.current && plane && index !== activeTexture) {
            isChanging.current = true;
            // check what will be next image
            let nextTextureIndex;
            if (index < maxTextures) {
                nextTextureIndex = index;
                setActiveRadio(nextTextureIndex);
            } else {
                nextTextureIndex = 1;
                setActiveRadio(nextTextureIndex)
            }
            // apply it to our next texture
            nextTex.current.setSource(plane.images[nextTextureIndex]);
            tween.current = gsap.to(plane.uniforms.transitionTimer, {
                duration: 1.25,
                value: 90,
                ease: "power2.inOut",
                onComplete: () => {
                    isChanging.current = false;
                    tween.current = null;

                    plane.uniforms.transitionTimer.value = 0;

                    const activeTextureIndex = nextTextureIndex;
                    // our next texture becomes our active texture
                    activeTex.current.setSource(plane.images[activeTextureIndex]);
                    setActiveTexture(activeTextureIndex);
                }
            });
        }
    }, [activeTexture, maxTextures, plane])

    // set the time interval to 10secs for automatic shuffle of the slideshows
    React.useEffect(() => {
        const timer = window.setInterval(() => {
            handleRadioClick(cycleIndex);
            switch (cycleIndex) {
                case 1: {
                    setCycleIndex(2);
                    break;
                }
                case 2: {
                    setCycleIndex(3);
                    break;
                }
                case 3: {
                    setCycleIndex(1);
                    break;
                }
                default:
            }

        }, 10000);
        return () => {
            window.clearInterval(timer);
        };
    }, [isChanging, plane, cycleIndex, handleRadioClick])

    // initialize slideshow objects after plane is built 
    useCurtains(
        (curtains) => {
            if (plane) {
                // first we set our very first image as the active texture
                activeTex.current = plane.createTexture({
                    sampler: "activeTex",
                    fromTexture: plane.textures[activeTexture]
                });
                // next we set the second image as next texture but this is not mandatory
                // as we will reset the next texture on slide change
                nextTex.current = plane.createTexture({
                    sampler: "nextTex",
                    fromTexture: plane.textures[activeTexture + 1]
                });
            }
        },
        [plane]
    );

    // React-Spring for smooth radio animations 
    const springFirst = useSpring({
        to: { transform: activeRadio === 1 ? `scale(1.1)` : `scale(0)` },
        from: { transform: `scale(0)`, background: "#FFF", margin: "0px", border: "1px", boxShadow: "none" },
    })

    const springSecond = useSpring({
        to: { transform: activeRadio === 2 ? `scale(1.1)` : `scale(0)` },
        from: { transform: `scale(0)`, background: "#FFF", margin: "0px", border: "1px", boxShadow: "none" },
    })

    const springThird = useSpring({
        to: { transform: activeRadio === 3 ? `scale(1.1)` : `scale(0)` },
        from: { transform: `scale(0)`, background: "#FFF", margin: "0px", border: "1px", boxShadow: "none" },
    })

    return (
        <Plane
            className="Slideshow"
            // plane init parameters
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={uniforms}
            // plane events
            onLoading={onLoading}
            onReady={onReady}
        >
            <LandingPageContent
                size={props.size}
            />
            <div style={{ position: "absolute", bottom: `${37 / 1080 * props.size[1]}px`, height: "17px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="radio-btn" style={{ width: `${17 / 1920 * props.size[0]}px`, height: `${17 / 1920 * props.size[0]}px` }} onClick={() => handleRadioClick(1)}>
                    <animated.div style={{ ...springFirst, width: `${17 / 1920 * props.size[0]}px`, height: `${17 / 1920 * props.size[0]}px` }} className="radio-btn" />
                </div>
                <div className="radio-btn" style={{ width: `${17 / 1920 * props.size[0]}px`, height: `${17 / 1920 * props.size[0]}px` }} onClick={() => handleRadioClick(2)}>
                    <animated.div style={{ ...springSecond, width: `${17 / 1920 * props.size[0]}px`, height: `${17 / 1920 * props.size[0]}px` }} className="radio-btn" />
                </div>
                <div className="radio-btn" style={{ width: `${17 / 1920 * props.size[0]}px`, height: `${17 / 1920 * props.size[0]}px` }} onClick={() => handleRadioClick(3)}>
                    <animated.div style={{ ...springThird, width: `${17 / 1920 * props.size[0]}px`, height: `${17 / 1920 * props.size[0]}px` }} className="radio-btn" />
                </div>
            </div>
            <div ref={slideshowInner}>
                <img
                    src="https://www.curtainsjs.com/examples/medias/displacement.jpg"
                    data-sampler="displacement"
                />
                <img src={landing_image_1} alt="rock_pic" />
                <img src={landing_image_2} alt="taylor_pic" />
                <img src={landing_image_3} alt="singer_pic" />
            </div>
        </Plane>
    );
}

export default React.memo(Slideshow);
