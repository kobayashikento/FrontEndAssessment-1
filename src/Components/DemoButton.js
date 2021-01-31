import styled from 'styled-components';
import { DEMO_CTA_WIDTH, DEMO_CTA_HEIGHT, DEMO_CTA_FONT } from '../Assets/styles/masterStyle';

export default styled.button`
    z-index: 5;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: none;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    border-radius: 79px;
    width: ${DEMO_CTA_WIDTH}px;
    height: ${DEMO_CTA_HEIGHT}px;
    margin-top: ${(props) => props.type === "red" ? `${41 / 1920 * props.size[0]}px` : `${636 / 1080 * props.size[1] + 10}px`};
    transform: ${(props) => (`translate(${-props.pos[0]}px, ${-props.pos[1]}px) scale(${props.size[0] / 1920}) `)};
    margin-left: ${(props) => props.type === "yellow" ? `${900 / 1920 * props.size[0]}px` : ""};
    &::before {
        --size: 0;
        content: "";
        position: absolute;
        left: var(--x);
        top: var(--y);
        width: var(--size);
        height: var(--size);
        background: ${(props) => (
        props.type === "blue" ? `radial-gradient(circle closest-side, #5e33d1 -3%, #d34848 62%, transparent)`
            : `radial-gradient(circle closest-side, #5e33d1 0%, #1fe1e9 70%, transparent)`
    )};
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        transition: width 0.5s ease, height 0.5s ease;
    }

    &:hover::before {
        --size: 400px;
    }

    span {
        position: relative;
        pointer-events: none;
        text-align: left;
        font: ${DEMO_CTA_FONT};
        letter-spacing: 1.8px;
        color: ${(props) => (props.type === "red" ? "#D1346E" : props.type === "yellow" ? "#FFB33F" : "#1FE1E9")};
        opacity: 1;
    }

    &:hover > span {
        color: #FFFFFF;
        transition: all 500ms ease-in-out;
    }
`;