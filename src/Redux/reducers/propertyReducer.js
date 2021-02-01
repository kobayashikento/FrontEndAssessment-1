import { act } from 'react-dom/test-utils';
import {
    SET_SIZE, SET_TRY_POS, SET_DEMO_POS, SET_MENU_INDEX, SET_NAV_INDEX, SET_PLAN_PAYMENT
} from '../actions/propertyAction';

export function propertyReducer(state = { size: [window.innerWidth, window.innerHeight], tryPos: [0, 0], demoPos: [0, 0], menuIndex: 0, navIndex: 0, plan: "basic" }, action) {
    switch (action.type) {
        case SET_SIZE:
            return { ...state, size: action.payload }
        case SET_DEMO_POS:
            return { ...state, demoPos: action.payload }
        case SET_TRY_POS:
            return { ...state, tryPos: action.payload }
        case SET_MENU_INDEX:
            return { ...state, menuIndex: action.payload }
        case SET_NAV_INDEX:
            return { ...state, navIndex: action.payload }
        case SET_PLAN_PAYMENT:
            return { ...state, plan: action.payload }
        default:
            return { ...state }
    }
}