import styled from 'styled-components';
import { TRY_CTA_WIDTH, TRY_CTA_HEIGHT, TRY_CTA_FONT } from '../Assets/styles/masterStyle';

export default styled.button`
    position: absolute;
    z-index: 5;
    width: 248px; 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: none;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    border-radius: 79px;
    width: ${TRY_CTA_WIDTH}px;
    height: ${TRY_CTA_HEIGHT}px;
    margin-top: ${(props) => (95 / 1080 * props.size[1] + 'px')};
    right: ${(props) => (79 / 1920 * props.size[0] + `px`)};
    transform: ${(props) => (`translate(${props.pos[0]}px, ${-props.pos[1]}px) scale(${props.size[0] / 1920})`)};

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
        --size: 350px;
    }

    span {
        position: relative;
        pointer-events: none;
        text-align: left;
        font: ${TRY_CTA_FONT};
        letter-spacing: 1.8px;
        color: ${(props) => (props.type === "red" ? "#D1346E" : props.type === "yellow" ? "#FFB33F" : "#1FE1E9")};
        opacity: 1;
    }

    &:hover > span {
        color: #FFFFFF;
        transition: all 500ms ease-in-out;
    }
`;