import React from 'react'
import { Curtains, Plane } from 'curtainsjs';

import { useSpring, animated } from 'react-spring';

import Preloading from '../../Components/Preloading';

import '../../Assets/styles/curtainStyle.css';

import LandingPageContent from '../../Components/LandingPage/LandingPageContent';

import gambinoVid from '../../Assets/pictures/LandingPage/gambino_video_1.mp4';
import migosVid from '../../Assets/pictures/LandingPage/alan_video_1.mp4';

import { connect } from 'react-redux';

import * as easings from 'd3-ease';

const Hero = (props) => {
    const [curtainReady, setCurtainReady] = React.useState(false);

    let multiTexturesRef = React.useRef();
    let canvasRef = React.useRef();

    const [radialIndex, setRadialIndex] = React.useState(0);

    let activeTexture = 0;
    let transitionTimer = 0;

    const vs = `
    precision mediump float;
    // default mandatory variables
    attribute vec3 aVertexPosition;
    attribute vec2 aTextureCoord;
    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;
    // our texture matrices
    // displacement texture does not need to use them
    uniform mat4 firstTextureMatrix;
    uniform mat4 secondTextureMatrix;
    uniform mat4 thirdTextureMatrix;
    // custom variables
    varying vec3 vVertexPosition;
    varying vec2 vTextureCoord;
    varying vec2 vFirstTextureCoord;
    varying vec2 vSecondTextureCoord;
    varying vec2 vThirdTextureCoord;
    // custom uniforms
    uniform float uTransitionTimer;
    void main() {
        gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
        // varyings
        // use original texture coords for our displacement
        vTextureCoord = aTextureCoord;
        // use texture matrices for our videos
        vFirstTextureCoord = (firstTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
        vSecondTextureCoord = (secondTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
        vVertexPosition = aVertexPosition;
    }
`;

    const fs = `
        precision mediump float;
        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;
        varying vec2 vFirstTextureCoord;
        varying vec2 vSecondTextureCoord;
        // custom uniforms
        uniform float uTransitionTimer;
        // our textures samplers
        // notice how it matches our data-sampler attributes
        uniform sampler2D firstTexture;
        uniform sampler2D secondTexture;
        uniform sampler2D displacement;
        void main() {
            // our displacement texture
            // i'll be using the fragment shader seen here : https://tympanus.net/codrops/2018/04/10/webgl-distortion-hover-effects/
            vec4 displacementTexture = texture2D(displacement, vTextureCoord);
            float displacementFactor = (cos(uTransitionTimer / (60.0 / 3.141592)) + 1.0) / 2.0;
            float effectFactor = 1.0;
            
            vec2 firstDisplacementCoords = vec2(vFirstTextureCoord.x - (1.0 - displacementFactor) * (displacementTexture.r * effectFactor), vFirstTextureCoord.y);
            vec2 secondDisplacementCoords = vec2(vSecondTextureCoord.x + displacementFactor * (displacementTexture.r * effectFactor), vSecondTextureCoord.y);
            vec4 firstDistortedColor = texture2D(firstTexture, firstDisplacementCoords);
            vec4 secondDistortedColor = texture2D(secondTexture, secondDisplacementCoords);
            vec4 finalColor = mix(secondDistortedColor, firstDistortedColor, displacementFactor);
            // handling premultiplied alpha
            finalColor = vec4(finalColor.rgb * finalColor.a, finalColor.a);
            gl_FragColor = finalColor;
        }
    `;

    const params = {
        vertexShader: vs,
        fragmentShader: fs,
        uniforms: {
            transitionTimer: {
                name: "uTransitionTimer",
                type: "1f",
                value: 0,
            },
        }
    };

    React.useEffect(() => {
        if (multiTexturesRef.current !== undefined) {

            // set up our WebGL context and append the canvas to our wrapper
            const curtains = new Curtains({
                container: canvasRef.current,
                alpha: true,
                watchScroll: false, // no need to listen for the scroll in this example
                pixelRatio: Math.min(1.5, window.devicePixelRatio) // limit pixel ratio for performance
            });

            const planeElements = multiTexturesRef.current;

            const duration = 2;

            const multiTexturesPlane = new Plane(curtains, planeElements, params);
            multiTexturesPlane.onReady(() => {
                // when our plane is ready we add a click event listener that will switch the active texture value
                multiTexturesPlane.playVideos();
                setTimeout(() => {
                    setCurtainReady(true);
                }, 300);
            }).onRender(() => {
                if (activeTexture === 1) {
                    // lerp values to smoothen animation
                    transitionTimer = (1 - 0.03) * transitionTimer + 0.025 * 100;

                    // transition is over, pause previous video
                    if (transitionTimer >= 59 && transitionTimer !== 60) {
                        transitionTimer = 60;
                        multiTexturesPlane.videos[0].pause();
                    }
                } else {
                    // lerp values to smoothen animation
                    transitionTimer = (1 - 0.035) * transitionTimer;

                    // transition is over, pause previous video
                    if (transitionTimer <= 1 && transitionTimer !== 0) {
                        transitionTimer = 0;
                        multiTexturesPlane.videos[1].pause();
                    }
                }
                // update our transition timer uniform
                multiTexturesPlane.uniforms.transitionTimer.value = transitionTimer;
            })
        }
    }, [])

    React.useEffect(() => {
        const timer = window.setInterval(() => {
            if (radialIndex == 1) {
                activeTexture = 0;
                setRadialIndex(0);
            }
            activeTexture = 1;
            setRadialIndex(1);
        }, 11000);
        return () => {
            window.clearInterval(timer);
        };
    }, [radialIndex, setRadialIndex])

    const backgroundSpring = useSpring({
        to: { transform: curtainReady ? "translateY(100%)" : "translateY(0%)" },
        from: { transform: "translateY(0%)", opacity: 1 },
        config: { duration: 1200, easing: easings.easeCubicOut },
    })

    const handleLeave = useSpring({
        to: { transform: props.heroLeave ? "translateX(61.8%)" : "translateX(0%)" },
        from: { transform: "translateX(0%)" },
        config: { durration: 500 },
        onRest: () => handleRest()
    })

    const handleRest = () => {
        if (props.heroLeave) {
            props.handleInitScroller(true);
        }
    }

    //props.matches !== true -> desktop
    return (
        props.matches ?
            <animated.div style={{
                ...handleLeave, height: "100vh", width: "100vw", zIndex: 50,
                position: "absolute", display: "flex", justifyContent: 'center', boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
            }} id="page-wrap">
                <animated.div style={{ ...backgroundSpring, height: "100vh", width: "100vw", position: "absolute", zIndex: 1000 }}>
                    <Preloading />
                </animated.div>
                <LandingPageContent curtainReady={curtainReady} matches={props.matches} handleExpandCircle={(state) => props.handleExpandCircle(state)}/>
                <div ref={canvasRef} id="canvas"></div>
                <div className="multi-textures-wrapper">
                    <div ref={multiTexturesRef} className="flex-wrapper multi-textures">
                        <img
                            src="https://www.curtainsjs.com/examples/medias/displacement.jpg"
                            data-sampler="displacement"
                        />
                        <video src={migosVid} data-sampler="firstTexture" crossOrigin="anonymous"></video>
                        <video src={gambinoVid} data-sampler="secondTexture" crossOrigin="anonymous"></video>
                    </div>
                </div>
            </animated.div>
            :
            <animated.div style={{
                ...handleLeave, height: "100vh", width: "100vw", zIndex: 50,
                position: "fixed", display: "flex", justifyContent: 'center', boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
            }} id="page-wrap">
                <animated.div style={{ ...backgroundSpring, height: "100vh", width: "100vw", position: "absolute", zIndex: 1000 }}>
                    <Preloading />
                </animated.div>
                <LandingPageContent curtainReady={curtainReady} handleExpandCircle={(state) => props.handleExpandCircle(state)} />
                <div ref={canvasRef} id="canvas"></div>
                <div className="multi-textures-wrapper">
                    <div ref={multiTexturesRef} className="flex-wrapper multi-textures">
                        <img
                            src="https://www.curtainsjs.com/examples/medias/displacement.jpg"
                            data-sampler="displacement"
                        />
                        <video src={migosVid} data-sampler="firstTexture" crossOrigin="anonymous"></video>
                        <video src={gambinoVid} data-sampler="secondTexture" crossOrigin="anonymous"></video>
                    </div>
                </div>
            </animated.div>
    )
}

const mapStateToProps = (state) => {
    return {
        heroLeave: state.propertyReducer.heroLeave
    }
}

export default connect(mapStateToProps)(Hero);