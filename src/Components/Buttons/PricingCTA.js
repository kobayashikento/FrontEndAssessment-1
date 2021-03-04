import styled from 'styled-components';
import { PRICING_CTA_WIDTH, PRICING_CTA_HEIGHT, PRICING_CTA_FONT } from '../../Assets/styles/masterStyle';

export default styled.button`
    z-index: 5;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: ${(props) => props.type === "red" ? "#D24848 0% 0% no-repeat padding-box" :
        props.type === "yellow" ? "#FFB33F 0% 0% no-repeat padding-box" : "#1FE1E9 0% 0% no-repeat padding-box"};
    border: none;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    border-radius: 4px;
    width: ${PRICING_CTA_WIDTH}px;
    height: ${PRICING_CTA_HEIGHT}px;
    margin-top: ${(props) => (38 / 1920 * props.size[0] + 'px')};
    margin-left: ${(props) => (16 / 1920 * props.size[0] + `px`)};
    transform: ${(props) => (`translate(${-props.pos[0]}px, ${-props.pos[1]}px) scale(${props.size[0] / 1920})`)};

    &::before {
        --size: 0;
        content: "";
        position: absolute;
        left: var(--x);
        top: var(--y);
        width: var(--size);
        height: var(--size);
        background: ${(props) => (
        props.type === "blue" ?
            `radial-gradient(circle closest-side, #d34848 0%, #5e33d1 70%,  transparent)`
            : `radial-gradient(circle closest-side, #5e33d1 0%, #1fe1e9 70%, transparent)`
    )};
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        transition: width 0.2s ease, height 0.2s ease;
    }

    &:hover::before {
        --size: 400px;
    }

    span {
        position: relative;
        pointer-events: none;
        text-align: left;
        font: ${PRICING_CTA_FONT};
        letter-spacing: 2.4px;
        color: #FFFFFF;
        opacity: 1;
    }

    &:hover > span {
        color: ${(props) => props.type === "red" ? "#D24848" :
        props.type === "yellow" ? "#FFB33F" : "#1FE1E9"};
        transition: all 500ms ease-in-out;
    }
`;